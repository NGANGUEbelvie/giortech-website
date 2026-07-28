import styles from './Contact.module.css';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function Contact() {
  const { t } = useTranslation();

  // Variables de configuration Kaefra communes
  const KAEFRA_URL = "https://kaefra.com";
  const SITE = "giortech";
  const STORAGE_KEY = "kaefra_lead_" + SITE;

  // Fonction centrale de capture des leads (adaptée du nouveau script Kaefra)
  const trackLead = (name, email, message) => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    
    const params = "site=" + encodeURIComponent(SITE)
      + "&url=" + encodeURIComponent(window.location.href)
      + "&ref=" + encodeURIComponent(document.referrer || "")
      + "&ua=" + encodeURIComponent(navigator.userAgent)
      + (name ? "&name=" + encodeURIComponent(name) : "")
      + (email ? "&email=" + encodeURIComponent(email) : "")
      + (message ? "&message=" + encodeURIComponent(message) : "");

    iframe.src = KAEFRA_URL + "/lead-capture?" + params;
    document.body.appendChild(iframe);

    // Nettoyage après 3 secondes
    setTimeout(() => {
      iframe.remove();
    }, 3000);
  };

  // 1. SUIVI AUTOMATIQUE & GESTION DE LA POPUP DE 5 SECONDES
  useEffect(() => {
    // A. Passive visit track on load (Suivi automatique de la visite au chargement)
    trackLead();

    // B. Logique de la Popup après 5 secondes
    let popupTimer;
    let box;

    if (!localStorage.getItem(STORAGE_KEY)) {
      popupTimer = setTimeout(() => {
        box = document.createElement("div");
        box.setAttribute("data-kaefra", "1");
        box.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:99999;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;";
        
        box.innerHTML = 
          '<div style="background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.18);padding:24px 24px 20px;width:300px;border:1px solid #e2e8f0;position:relative;">' +
            '<button id="kf_close" style="position:absolute;top:10px;right:14px;background:none;border:none;cursor:pointer;font-size:20px;color:#94a3b8;line-height:1;">&times;</button>' +
            '<div style="font-weight:700;font-size:15px;color:#1e293b;margin-bottom:4px;">Stay in the loop 👋</div>' +
            '<div style="color:#64748b;font-size:13px;margin-bottom:14px;">Get updates and exclusive offers.</div>' +
            '<input id="kf_name" placeholder="Your name" style="width:100%;box-sizing:border-box;padding:9px 12px;border:1px solid #e2e8f0;border-radius:8px;font-size:13px;margin-bottom:8px;outline:none;color:#1e293b;" />' +
            '<input id="kf_email" type="email" placeholder="Your email address" style="width:100%;box-sizing:border-box;padding:9px 12px;border:1px solid #e2e8f0;border-radius:8px;font-size:13px;margin-bottom:8px;outline:none;color:#1e293b;" />' +
            '<textarea id="kf_message" placeholder="Your message" rows="3" style="width:100%;box-sizing:border-box;padding:9px 12px;border:1px solid #e2e8f0;border-radius:8px;font-size:13px;margin-bottom:12px;outline:none;color:#1e293b;resize:none;font-family:inherit;"></textarea>' +
            '<button id="kf_submit" style="width:100%;padding:10px;background:#2563eb;color:#fff;border:none;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer;">Get Updates</button>' +
          '</div>';

        document.body.appendChild(box);

        // Événement pour fermer la popup via la petite croix
        document.getElementById("kf_close").addEventListener("click", () => {
          box.remove();
        });

        // Événement lors du clic sur le bouton de la popup Kaefra
        document.getElementById("kf_submit").addEventListener("click", () => {
          const n = document.getElementById("kf_name").value.trim();
          const e = document.getElementById("kf_email").value.trim();
          const m = document.getElementById("kf_message").value.trim();

          if (!e) {
            document.getElementById("kf_email").style.border = "1px solid #ef4444";
            return;
          }

          localStorage.setItem(STORAGE_KEY, "1");
          trackLead(n, e, m);
          box.remove();
          alert("Merci ! Vous êtes inscrit aux mises à jour.");
        });

      }, 5000); // 5 secondes
    }

    // Nettoyage au démontage du composant pour éviter les fuites de mémoire
    return () => {
      clearTimeout(popupTimer);
      if (box && document.body.contains(box)) {
        box.remove();
      }
    };
  }, []);

  // 2. Gestion des états du formulaire principal Giortech
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

  // 3. ENVOI DU FORMULAIRE DE PAGE COMPLET GIORTECH
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Regroupement des détails pour les agents commerciaux (comme avant)
    const fullMessageDetails = `[Tel: ${formData.phone}] [Entreprise: ${formData.companyName}] [Projet: ${formData.projectType}] - ${formData.message}`;

    // Utilisation de la nouvelle fonction globale trackLead pour envoyer les données
    trackLead(formData.fullName, formData.email, fullMessageDetails);

    localStorage.setItem(STORAGE_KEY, "1");

    alert("Merci ! Votre message a bien été envoyé.");
    
    // Réinitialisation des champs du formulaire de la page
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
          <p>{t('contactHeroDesc')}</p>
        </div>
      </section>

      {/* 2. ZONE PRINCIPALE (FORMULAIRE & INFOS) */}
      <section className={styles.mainContentSection}>
        <div className={styles.sectionInner}>
          <div className={styles.gridContainer}>
            
            {/* COLONNE GAUCHE : FORMULAIRE PRINCIPAL */}
            <div className={styles.formCard}>
              <h2>{t('contactFormTitle')}</h2>

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