import React from 'react';
import styles from './Career.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import IT from '../../assets/IT.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Career() {
  const { t } = useTranslation();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // États pour gérer le formulaire de candidature sous l'offre sélectionnée
  const [activeJobId, setActiveJobId] = useState(null); // ID de l'offre pour laquelle le candidat veut postuler
  const [fullname, setFullname] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/jobs')
      .then(response => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur BDD:", error);
        setLoading(false);
      });
  }, []);

  // Gestion du fichier de CV sélectionné
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };
  // Soumission de la candidature via FormData
  const handleApplySubmit = async (e, jobId) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Veuillez sélectionner votre fichier de CV avant d'envoyer.");
      return;
    }

    setIsSubmitting(true);

    // Construction de l'objet FormData requis pour l'envoi de fichier physique
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("cv_file", selectedFile); // Le nom 'cv_file' correspond exactement à l'argument dans FastAPI

    // 2. Préparation du Lead pour synchronisation BDD
    const leadData = new FormData();
    leadData.append("fullname", fullname);
    leadData.append("email", email);
    leadData.append("message", `[Candidature Offre #${jobId}] ${message}`);

    try {
      // Exécution parallèle des deux requêtes vers FastAPI
      const [applyResponse] = await Promise.all([
        fetch(`http://127.0.0.1:8000/api/jobs/${jobId}/apply`, {
          method: "POST",
          body: formData,
        }),
        fetch(`http://127.0.0.1:8000/api/leads`, {
          method: "POST",
          body: leadData,
        }).catch(err => console.warn("Erreur sauvegarde du lead :", err))
      ]);

      const result = await applyResponse.json();

      if (applyResponse.ok) {
        alert(result.message);

        
       // ENVOI AUTOMATIQUE DES INFOS CANDIDAT AUX OUTILS DE TRACKING (Si la fonction est définie dans le script global)
        if (typeof window.KaefraTrackLead === 'function') {
          
          window.KaefraTrackLead(
            fullname, 
            email, 
            `[Candidature Offre #${jobId}] ${message}`,
            targetAgent
          );
        }
        // Réinitialisation des champs après succès
        setFullname('');
        setEmail('');
        setMessage('');
        setSelectedFile(null);
        setActiveJobId(null);
      } else {
        const detail = result.detail;
        let errorMessage = "Une erreur est survenue lors de l'envoi.";

        if (typeof detail === 'string') {
          errorMessage = detail;
        } else if (Array.isArray(detail)) {
          errorMessage = detail.map(item => item.msg || JSON.stringify(item)).join(' - ');
        } else if (typeof detail === 'object' && detail !== null) {
          errorMessage = JSON.stringify(detail);
        }

        alert(`Erreur : ${errorMessage}`);
      }
    } catch (error) {
      console.error("Erreur de connexion avec l'API backend :", error);
      alert("Impossible de joindre le serveur backend.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className={styles.careerContainer}>
      
      {/* 1. HERO SECTION */}
      <section
        className={styles.heroSection}
        style={{
          backgroundImage: `linear-gradient(rgba(9, 134, 237, 0.26), rgba(14, 42, 71, 0.1)), url(${IT})`
        }}
      >
        <div className={styles.heroContent}>
          <h1>{t('careerHeroTitle', 'Construisons l\'avenir ensemble')}</h1>
          <p>{t('careerHeroDesc', 'Rejoignez une équipe passionnée d\'ingénieurs et d\'experts qui façonnent la transformation digitale et l\'infrastructure cloud de demain.')}</p>
        </div>
      </section>

      {/* 2. WHY JOIN US / PERKS */}
      <section className={styles.perksSection}>
        <div className={styles.sectionHeader}>
          <h2>{t('whyJoinUsTitle', 'Pourquoi nous rejoindre ?')}</h2>
          <p>{t('whyJoinUsDesc', 'Nous offrons un environnement propice à l\'innovation et à l\'épanouissement professionnel.')}</p>
        </div>

        <div className={styles.gridThreeCols}>
          <div className={styles.perkCard}>
            <div className={styles.perkIcon}>🚀</div>
            <h3>{t('perkTechTitle', 'Technologies de Pointe')}</h3>
            <p>{t('perkTechDesc', 'Travaillez sur des architectures Cloud modernes, Kubernetes, DevOps et des projets applicatifs de grande envergure.')}</p>
          </div>

          <div className={styles.perkCard}>
            <div className={styles.perkIcon}>📈</div>
            <h3>{t('perkEvolutionTitle', 'Évolution Continue')}</h3>
            <p>{t('perkEvolutionDesc', 'Des formations régulières, des certifications prises en charge et un plan de carrière adapté à vos ambitions.')}</p>
          </div>

          <div className={styles.perkCard}>
            <div className={styles.perkIcon}>🏠</div>
            <h3>{t('perkFlexibilityTitle', 'Flexibilité de Travail')}</h3>
            <p>{t('perkFlexibilityDesc', 'Un équilibre vie pro / vie privée respecté grâce à des options de travail hybride ou entièrement à distance.')}</p>
          </div>
        </div>
      </section>

      {/* 3. RECRUITMENT PROCESS */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <div className={styles.sectionHeader}>
            <h2>{t('processTitle', 'Notre processus de recrutement')}</h2>
            <p>{t('processDesc', 'Un parcours simple, transparent et rapide axé sur l\'humain et vos compétences.')}</p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <span className={styles.processStep}>01</span>
              <h4>{t('step1Title', 'Candidature')}</h4>
              <p>{t('step1Desc', 'Soumettez votre CV et portfolio via notre formulaire de contact.')}</p>
            </div>
            <div className={styles.processCard}>
              <span className={styles.processStep}>02</span>
              <h4>{t('step2Title', 'Entretien RH')}</h4>
              <p>{t('step2Desc', 'Un premier échange de 30 minutes pour faire connaissance et comprendre vos attentes.')}</p>
            </div>
            <div className={styles.processCard}>
              <span className={styles.processStep}>03</span>
              <h4>{t('step3Title', 'Évaluation Technique')}</h4>
              <p>{t('step3Desc', 'Une discussion approfondie ou une mise en situation pratique selon votre profil.')}</p>
            </div>
            <div className={styles.processCard}>
              <span className={styles.processStep}>04</span>
              <h4>{t('step4Title', 'Offre')}</h4>
              <p>{t('step4Desc', 'Bienvenue dans l\'équipe ! Nous formalisons votre proposition d\'embauche.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OPEN POSITIONS LIST */}
      <section className={styles.jobsSection}>
        <div className={styles.sectionHeader}>
          <h2>{t('openPositionsTitle', 'Postes disponibles')}</h2>
          <p>{t('openPositionsDesc', 'Explorez nos opportunités actuelles et trouvez le défi qui vous correspond.')}</p>
        </div>

        <div className={styles.jobsList}>
          {loading ? (
            <p style={{ textAlign: 'center', padding: '20px', color: '#64748b' }}>Chargement des offres en cours...</p>
          ) : jobs.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '20px', color: '#64748b' }}>Aucun poste n'est ouvert pour le moment.</p>
          ) : (
            jobs.map((job) => (
              <div key={job.id} className={styles.jobCard} style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }}>
                <div className={styles.jobInfo} style={{ width: '100%' }}>
                  <h3>{job.title}</h3>
                  <div className={styles.jobMeta}>
                    <span> {job.department}</span>
                    <span> {job.location}</span>
                    <span> {job.type}</span>
                  </div>
                  
                  {/* Intégration de la description du poste sous les métadonnées */}
                  <p className={styles.jobDescription} style={{ color: '#475569', lineHeight: '1.6', fontSize: '0.95rem', marginTop: '12px', whiteSpace: 'pre-line' }}>
                    {job.description}
                  </p>
                </div>
                
                {/* Bouton pour déplier/replier le formulaire de postulation pour cette offre précise */}
                {activeJobId !== job.id ? (
                  <button 
                    onClick={() => { setActiveJobId(job.id); setSelectedFile(null); }} 
                    className={styles.btnApply} 
                    style={{ alignSelf: 'flex-start', marginTop: '10px', cursor: 'pointer' }}
                  >
                    {t('applyNow', 'Postuler à l\'offre')}
                  </button>
                ) : (
                  <button 
                    onClick={() => setActiveJobId(null)} 
                    className={styles.btnApply} 
                    style={{ alignSelf: 'flex-start', marginTop: '10px', cursor: 'pointer', background: '#64748b' }}
                  >
                    {t('cancelApply', 'Annuler')}
                  </button>
                )}

                {/* FORMULAIRE DÉPLIABLE DE CANDIDATURE AVEC UPLOAD DE CV */}
                {activeJobId === job.id && (
                  <form 
                    onSubmit={(e) => handleApplySubmit(e, job.id)} 
                    style={{ width: '100%', background: '#f8fafc', padding: '20px', borderRadius: '8px', marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '12px', border: '1px solid #cbd5e1' }}
                  >
                    <h4 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>Formulaire de candidature</h4>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Nom complet</label>
                      <input 
                        type="text" 
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        placeholder="Ex: Jean Dupont"
                        required 
                        style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Adresse Email</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: jean.dupont@example.com"
                        required 
                        style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Pourquoi postulez-vous ? (Description / Message)</label>
                      <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Présentez-vous brièvement ou ajoutez un message à votre candidature..."
                        required 
                        style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', minHeight: '100px', fontFamily: 'inherit', resize: 'vertical' }}
                      />
                    </div>

                    {/* CHAMP D'UPLOAD DU CV (STYLE PERSONNALISÉ) */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '5px' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Votre CV (PDF, DOC, DOCX)</label>
                      
                      <label 
                        htmlFor={`cv-file-${job.id}`} 
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '12px', background: '#ffffff', border: '2px dashed #0986ed', borderRadius: '6px', cursor: 'pointer', textAlign: 'center', color: '#0986ed', fontWeight: '500', transition: 'all 0.2s' }}
                      >
                        📁 {selectedFile ? selectedFile.name : "Cliquez pour choisir un fichier"}
                      </label>
                      
                      <input 
                        id={`cv-file-${job.id}`}
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                        style={{ display: 'none' }} // Masque l'input générique moche
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      style={{ padding: '10px 16px', background: '#0986ed', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: isSubmitting ? 'not-allowed' : 'pointer', alignSelf: 'flex-start', marginTop: '10px', opacity: isSubmitting ? 0.7 : 1 }}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma candidature'}
                    </button>
                  </form>
                )}

              </div>
            ))
          )}
        </div>
      </section>

    </div>
  );
}