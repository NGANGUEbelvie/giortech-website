from fastapi import FastAPI, HTTPException, Depends, Header, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import mysql.connector
import bcrypt
import jwt
import datetime
from typing import Optional
import os       #  pour la gestion des dossiers et extensions de fichiers
import shutil   #  pour copier le fichier physique sur le disque
from fastapi.staticfiles import StaticFiles

#Permet d'accéder aux fichiers du dossier 'uploads' via HTTP

app = FastAPI(title="GIORTECH API Backend")
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Configuration du CORS pour autoriser le frontend React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SECRET_KEY = "GIORTECH_SUPER_SECRET_KEY_2026"
DB_CONFIG = {
    "host": "localhost",
    "user": "root",
    "password": "",  
    "database": "giortech_db"
}



# Emplacement où seront stockés les fichiers CV sur le serveur
UPLOAD_DIR = "uploads/cv"
os.makedirs(UPLOAD_DIR, exist_ok=True) # Crée automatiquement le dossier s'il n'existe pas

@app.get("/")
def root():
    return {"message": "GIORTECH API Backend en service"}


# --- MODÈLES DE DONNÉES ---
class LoginModel(BaseModel):
    email: EmailStr
    password: str

class JobOfferModel(BaseModel):
    title: str
    department: str
    location: str
    type: str
    description: str

# --- CONNEXION BDD ---
def get_db():
    try:
        conn = mysql.connector.connect(**DB_CONFIG)
        cursor = conn.cursor(dictionary=True)
        return conn, cursor
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail=f"Erreur BDD: {err}")

# --- VÉRIFICATION DU TOKEN JWT ---
def verify_token(authorization: Optional[str] = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Accès refusé. Token manquant.")
    
    token = authorization.split(" ")[1]
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Session expirée. Reconnectez-vous.")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Token invalide.")

# --- ROUTES API ---

# Connexion de la secrétaire
@app.post("/api/login")
def login(data: LoginModel):
    conn, cursor = get_db()
    cursor.execute("SELECT * FROM users WHERE email = %s", (data.email,))
    user = cursor.fetchone()
    
    if not user:
        cursor.close()
        conn.close()
        raise HTTPException(status_code=400, detail="Identifiants incorrects.")

    password_match = False
    if user['password'] == data.password:
        password_match = True
    else:
        try:
            password_match = bcrypt.checkpw(data.password.encode('utf-8'), user['password'].encode('utf-8'))
        except Exception:
            password_match = False

    if not password_match:
        cursor.close()
        conn.close()
        raise HTTPException(status_code=400, detail="Identifiants incorrects.")

    token = jwt.encode({
        "user_id": user["id"],
        "email": user["email"],
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24)
    }, SECRET_KEY, algorithm="HS256")

    cursor.close()
    conn.close()
    return {"token": token, "message": "Connexion réussie !"}

# Récupérer toutes les offres (Public)
@app.get("/api/jobs")
def get_jobs():
    conn, cursor = get_db()
    cursor.execute("SELECT * FROM job_offers ORDER BY id DESC")
    jobs = cursor.fetchall()
    cursor.close()
    conn.close()
    return jobs

# Ajouter une offre (Sécurisé)
@app.post("/api/jobs", status_code=201)
def add_job(job: JobOfferModel, user=Depends(verify_token)):
    conn, cursor = get_db()
    query = "INSERT INTO job_offers (title, department, location, type, description) VALUES (%s, %s, %s, %s, %s)"
    cursor.execute(query, (job.title, job.department, job.location, job.type, job.description))
    conn.commit()
    cursor.close()
    conn.close()
    return {"message": "Offre publiée avec succès !"}

# Supprimer une offre (Sécurisé)
@app.delete("/api/jobs/{job_id}")
def delete_job(job_id: int, user=Depends(verify_token)):
    conn, cursor = get_db()
    cursor.execute("DELETE FROM job_offers WHERE id = %s", (job_id,))
    conn.commit()
    cursor.close()
    conn.close()
    return {"message": "Offre supprimée avec succès !"}

# POSTULER A UNE OFFRE (Nouvelle route publique avec upload de fichier)
@app.post("/api/jobs/{job_id}/apply")
def apply_to_job(
    job_id: int,
    fullname: str = Form(...),
    email: EmailStr = Form(...),
    message: str = Form(...),
    cv_file: UploadFile = File(...)
):
    # 1. Sécurité : Vérification du type de fichier
    extensions_autorisees = [".pdf", ".doc", ".docx"]
    file_ext = os.path.splitext(cv_file.filename)[1].lower()
    
    if file_ext not in extensions_autorisees:
        raise HTTPException(status_code=400, detail="Seuls les fichiers PDF, DOC et DOCX sont autorisés.")

    # 2. Formatage du nom de fichier pour éviter les conflits (ex: cv_5_jean_dupont.pdf)
    clean_name = fullname.replace(" ", "_").lower()
    new_filename = f"cv_{job_id}_{clean_name}{file_ext}"
    file_path = os.path.join(UPLOAD_DIR, new_filename)

    try:
        # 3. Enregistrement physique du fichier sur le disque dur
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(cv_file.file, buffer)
        conn, cursor = get_db()
        query = """
            INSERT INTO applications (job_id, fullname, email, description, cv_path) 
            VALUES (%s, %s, %s, %s, %s)
        """
        # On enregistre le chemin d'accès (file_path) pour pouvoir retrouver le fichier plus tard
        cursor.execute(query, (job_id, fullname, email, message, file_path))
        conn.commit()
        cursor.close()
        conn.close()
            
        return {
            "message": "Votre candidature et votre CV ont été transmis avec succès !",
            "filename": new_filename
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors de la sauvegarde du fichier : {e}")

#RÉCUPÉRER ET FILTRER LE VIVIER DE CV (Sécurisé pour la secrétaire) ---
@app.get("/api/applications")
def get_applications(search: Optional[str] = None, user=Depends(verify_token)):
    """
    Cette route permet à la secrétaire de voir toutes les candidatures.
    Si le paramètre 'search' est fourni, elle filtre par nom, email, titre du poste ou département.
    """
    conn, cursor = get_db()
    
    # Jointure SQL pour lier la candidature au titre du poste correspondant
    query = """
        SELECT a.*, j.title as job_title, j.department 
        FROM applications a
        JOIN job_offers j ON a.job_id = j.id
    """
    
    # Gestion du filtre de recherche textuel dynamique
    if search:
        query += """ 
            WHERE a.fullname LIKE %s 
            OR a.email LIKE %s 
            OR j.title LIKE %s 
            OR j.department LIKE %s
        """
        search_param = f"%{search}%"
        cursor.execute(query, (search_param, search_param, search_param, search_param))
    else:
        query += " ORDER BY a.submitted_at DESC"
        cursor.execute(query)
        
    applications = cursor.fetchall()
    cursor.close()
    conn.close()
    return applications

# AJOUT DE LA ROUTE POUR ENREGISTRER LES LEADS DE CONTACT
@app.post("/api/leads")
def save_lead(
    fullname: Optional[str] = Form(None),
    email: EmailStr = Form(...),
    message: Optional[str] = Form(None)
):
    try:
        conn, cursor = get_db()
        query = "INSERT INTO contacts (fullname, email, message) VALUES (%s, %s, %s)"
        cursor.execute(query, (fullname, email, message))
        conn.commit()
        cursor.close()
        conn.close()
        return {"message": "Lead de contact enregistré avec succès !"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors de la sauvegarde du lead : {e}")


# ROUTE POUR CONSULTER LES LEADS DANS LE DASHBOARD (SÉCURISÉE) 
@app.get("/api/leads")
def get_leads(user=Depends(verify_token)):
    conn, cursor = get_db()
    cursor.execute("SELECT * FROM contacts ORDER BY created_at DESC")
    leads = cursor.fetchall()
    cursor.close()
    conn.close()
    return leads