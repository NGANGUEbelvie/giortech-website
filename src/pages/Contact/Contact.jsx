import styles from './Contact.module.css';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
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
              <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>{t('labelFullName')}</label>
                    <input type="text" placeholder="Jean Dupont" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>{t('labelCompanyName')}</label>
                    <input type="text" placeholder="Tech Solution Ltd" />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>{t('labelEmail')}</label>
                    <input type="email" placeholder="contact@exemple.com" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>{t('labelPhone')}</label>
                    <input type="tel" placeholder="+237 6XX XXX XXX" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>{t('labelProjectType')}</label>
                  <div className={styles.selectWrapper}>
                    <select>
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
                  <textarea placeholder={t('placeholderMessage')} rows="5"></textarea>
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
                    <a href="mailto:career@giortech.com" className={styles.emailLink}>career@giortech.com</a>
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