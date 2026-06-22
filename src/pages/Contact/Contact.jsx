import styles from './Contact.module.css';
import { useTranslation } from 'react-i18next';
import {useState, useEffect} from 'react';

export default function Contact() {
  const { t } = useTranslation();

  // Variables de configuration Kaefra communes
  const KAEFRA_URL = "https://kaefra.com";
  const SITE = "giortech";
  const STORAGE_KEY = "kaefra_lead_" + SITE;

  // 1. SUIVI DE VISITE AUTOMATIQUE AU CHARGEMENT
  useEffect(() => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    
    // Paramètres de base sans nom ni email (visite anonyme)
    const params = "site=" + encodeURIComponent(SITE)
      + "&url=" + encodeURIComponent(window.location.href)
      + "&ref=" + encodeURIComponent(document.referrer || "")
      + "&ua=" + encodeURIComponent(navigator.userAgent);

    iframe.src = KAEFRA_URL + "/lead-capture?" + params;
    document.body.appendChild(iframe);

    // Nettoyage après 3 secondes
    const timer = setTimeout(() => {
      iframe.remove();
    }, 3000);

    return () => {
      clearTimeout(timer);
      if (document.body.contains(iframe)) iframe.remove();
    };
  }, []); // Le tableau vide [] fait en sorte que ça ne s'exécute QU'UNE SEULE FOIS au chargement

  // 2. Gestion des états du formulaire
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: 'web',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. ENVOI DU FORMULAIRE COMPLET
  const handleSubmit = (e) => {
    e.preventDefault(); 

    const iframe = document.createElement("iframe");
    iframe.style.display = "none";

    // Regroupement des détails pour les agents commerciaux
    const fullMessageDetails = `[Tel: ${formData.phone}] [Entreprise: ${formData.companyName}] [Projet: ${formData.projectType}] - ${formData.message}`;

    const params = "site=" + encodeURIComponent(SITE)
      + "&url=" + encodeURIComponent(window.location.href)
      + "&ref=" + encodeURIComponent(document.referrer || "")
      + "&ua=" + encodeURIComponent(navigator.userAgent)
      + "&name=" + encodeURIComponent(formData.fullName)
      + "&email=" + encodeURIComponent(formData.email)
      + "&message=" + encodeURIComponent(fullMessageDetails); 

    iframe.src = KAEFRA_URL + "/lead-capture?" + params;
    document.body.appendChild(iframe);

    localStorage.setItem(STORAGE_KEY, "1");

    setTimeout(() => {
      iframe.remove();
    }, 3000);

    alert("Merci ! Votre message a bien été envoyé.");
    
    // Réinitialisation des champs
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      projectType: 'web',
      message: ''
    });
  };
  


  return (
    <div className={styles.contactContainer}>
      
      {/* 1. EN-TÊTE DE LA PAGE */}
      <section className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1>{t('contactHeroTitle')}</h1>
          <p>
            {t('contactHeroDesc')}
          </p>
        </div>
      </section>

      {/* 2. ZONE PRINCIPALE (FORMULAIRE & INFOS) */}
      <section className={styles.mainContentSection}>
        <div className={styles.sectionInner}>
          <div className={styles.gridContainer}>
            
            {/* COLONNE GAUCHE : FORMULAIRE */}
            <div className={styles.formCard}>
              <h2>{t('contactFormTitle')}</h2>

              {/* Fix 2 : Connexion de handleSubmit au formulaire */}
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>{t('labelFullName')}</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Jean Dupont" 
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>{t('labelCompanyName')}</label>
                    <input 
                      type="text" 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Tech Solution Ltd" 
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>{t('labelEmail')}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contact@exemple.com" 
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>{t('labelPhone')}</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+237 6XX XXX XXX" 
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>{t('labelProjectType')}</label>
                  <div className={styles.selectWrapper}>
                    <select
                      name="projectType"            
                      value={formData.projectType}   
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                        paddingRight: '45px',
                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666666' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'calc(100% - 15px) center',
                        backgroundSize: '24px 24px'
                      }}
                    >
                      <option value="web">{t('optWeb')}</option>
                      <option value="mobile">{t('optMobile')}</option>
                      <option value="uiux">{t('optUIUX')}</option>
                      <option value="cloud">{t('optCloud')}</option>
                      <option value="other">{t('optOther')}</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>{t('labelMessage')}</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('placeholderMessage')} 
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  {t('SubmitContact')}
                </button>
              </form>
            </div>

            {/* COLONNE DROITE : CARTES D'INFO & MAP */}
            <div className={styles.infoColumn}>
              
              {/* CARTES D'INFORMATION */}
              <div className={styles.infoCardsGrid}>
                
                <div className={styles.infoCard}>
                  <div className={styles.iconWrapper}>
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div className={styles.cardText}>
                    <h3>{t('infoLocationTitle')}</h3>
                    <p>{t('infoLocationCountry')}</p>
                    <span className={styles.subText}>{t('infoLocationAddress')}</span>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.iconWrapper}>
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div className={styles.cardText}>
                    <h3>{t('infoEmailTitle')}</h3>
                    <a href="mailto:info@giortech.com" className={styles.emailLink}>info@giortech.com</a>
                    <span className={styles.subText}>{t('infoEmailSub')}</span>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.iconWrapper}>
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div className={styles.cardText}>
                    <h3>{t('infoHoursTitle')}</h3>
                    <p>{t('infoHoursDays')}</p>
                    <p className={styles.highlightText}>{t('infoHoursTime')}</p>
                  </div>
                </div>

              </div>

              {/* CARTE DE LOCALISATION */}
              <div className={styles.mapPlaceholder}>
                <iframe
                  width="100%"
                  height="350"
                  frameBorder="0"
                  style={{ borderRadius: '12px' }}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=9.7079,3.9511,9.8279,4.1511&layer=mapnik&marker=4.0511,9.768"
                  title="GIORTECH Douala HQ"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      

    </div>
  );
}