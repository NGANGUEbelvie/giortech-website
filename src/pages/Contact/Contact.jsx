import styles from './Contact.module.css';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className={styles.contactContainer}>
      
      {/* 1. EN-TÊTE DE LA PAGE */}
      <section className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1>Contactez-nous</h1>
          <p>
            Discutons de vos projets techniques ou demandez un devis personnalisé. 
            Notre équipe d'experts est prête à transformer vos défis en solutions innovantes.
          </p>
        </div>
      </section>

      {/* 2. ZONE PRINCIPALE (FORMULAIRE & INFOS) */}
      <section className={styles.mainContentSection}>
        <div className={styles.sectionInner}>
          <div className={styles.gridContainer}>
            
            {/* COLONNE GAUCHE : FORMULAIRE */}
            <div className={styles.formCard}>
              <h2>Envoyez-nous un message</h2>
              <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Nom complet</label>
                    <input type="text" placeholder="Jean Dupont" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Nom de l'entreprise</label>
                    <input type="text" placeholder="Tech Solution Ltd" />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Adresse e-mail</label>
                    <input type="email" placeholder="contact@exemple.com" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Numéro de téléphone</label>
                    <input type="tel" placeholder="+237 6XX XXX XXX" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Type de projet</label>
                  <div className={styles.selectWrapper}>
                    <select>
                      <option value="web">Développement Web</option>
                      <option value="mobile">Application Mobile</option>
                      <option value="uiux">Design UI/UX</option>
                      <option value="cloud">Cloud &amp; Cybersécurité</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Message</label>
                  <textarea placeholder="Décrivez votre projet ou votre demande..." rows="5"></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Envoyer ma demande
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
                    <h3>Localisation</h3>
                    <p>Douala, Cameroun</p>
                    <span className={styles.subText}>Makepe Bonamoussadi, face hotel Forprolux</span>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.iconWrapper}>
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div className={styles.cardText}>
                    <h3>Email</h3>
                    <a href="mailto:career@giortech.com" className={styles.emailLink}>career@giortech.com</a>
                    <span className={styles.subText}>Support technique 24/7</span>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.iconWrapper}>
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div className={styles.cardText}>
                    <h3>Horaires</h3>
                    <p>Lundi - Vendredi</p>
                    <p className={styles.highlightText}>8h00 - 18h00</p>
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

      {/* Section 'trust' supprimée */}

    </div>
  );
}