import bcrypt

# Saisis ici le mot de passe que tu veux donner à la secrétaire
nouveau_mot_de_passe = "MonNouveauMdp2026"

# Génération du hash crypté
hashed = bcrypt.hashpw(nouveau_mot_de_passe.encode('utf-8'), bcrypt.gensalt())

print("Voici ton mot de passe crypté à copier :")
print(hashed.decode('utf-8'))

#python hash_pass.py executer cette commande pour pou