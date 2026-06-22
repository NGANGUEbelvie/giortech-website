import { useEffect } from 'react';
import styles from './About.module.css';
import img_services from '../../assets/img_services.png';
import { useTranslation } from 'react-i18next';
import Histoire from '../../assets/Histoire.png';

export default function About() {
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animateVisible);
        } else {
          entry.target.classList.remove(styles.animateVisible);
        }
      });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll(`.${styles.scrollFadeIn}`);
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className={styles.aboutContainer}>
      
      {/* 1. HERO SECTION */}
      <section
        className={`${styles.heroSection} ${styles.scrollFadeIn}`}
        style={{
          backgroundImage: `linear-gradient(rgb(132, 217, 253, 0.0), rgba(108, 196, 234, 0.0)), url(${img_services})`
        }}
      >
        <div className={styles.heroText}>
          <h1>{t('aboutHeroTitle')}</h1>
          <p>{t('aboutHeroDesc')}</p>
        </div>
      </section>

      {/* 2. HISTOIRE & MISSION */}
      <section className={`${styles.historyMissionSection} ${styles.scrollFadeIn}`}>
        <div className={styles.gridTwoCols}>
          
          {/* Colonne Gauche : Histoire */}
          <div className={styles.column}>
            <span className={styles.subTitle}>{t('aboutHistorySub')}</span>
            <h2>{t('aboutHistoryTitle')}</h2>
            <p className={styles.description}>
              {t('aboutHistoryDesc')}
            </p>
            <div className={styles.imageWrapper}>
              <img 
                src={Histoire} 
                alt="Bureaux de GIORTECH" 
              />
            </div>
          </div>

          {/* Colonne Droite : Mission */}
          <div className={`${styles.column} ${styles.columnRight}`}>
            <span className={styles.subTitle}>{t('aboutMissionSub')}</span>
            <h2>{t('aboutMissionTitle')}</h2>
            <p className={styles.description}>
              {t('aboutMissionDesc')}
            </p>
            
            <div className={styles.cardsStack}>
              <div className={styles.missionCard}>
                <h3>{t('aboutMissionCard1Title')}</h3>
                <p>{t('aboutMissionCard1Desc')}</p>
              </div>
              <div className={styles.missionCard}>
                <h3>{t('aboutMissionCard2Title')}</h3>
                <p>{t('aboutMissionCard2Desc')}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. VALEURS FONDAMENTALES */}
      <section className={`${styles.valuesSection} ${styles.scrollFadeIn}`}>
        <div className={styles.sectionHeader}>
          <h2>{t('aboutValuesHeader')}</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.gridFourCols}>
          <div className={styles.valueCard}>
            <div className={styles.icon}>🛡️</div>
            <h3>{t('aboutValue1Title')}</h3>
            <p>{t('aboutValue1Desc')}</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.icon}>⚡</div>
            <h3>{t('aboutValue2Title')}</h3>
            <p>{t('aboutValue2Desc')}</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.icon}>🤝</div>
            <h3>{t('aboutValue3Title')}</h3>
            <p>{t('aboutValue3Desc')}</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.icon}>💡</div>
            <h3>{t('aboutValue4Title')}</h3>
            <p>{t('aboutValue4Desc')}</p>
          </div>
        </div>
      </section>

      {/* 4. NOTRE ÉCOSYSTÈME TECHNIQUE */}
      <section className={`${styles.techSection} ${styles.scrollFadeIn}`}>
        <div className={styles.sectionHeaderCentered}>
          <h2>{t('aboutTechHeader')}</h2>
          <p>{t('aboutTechDesc')}</p>
        </div>

        <div className={styles.techCategoriesGrid}>
          
          {/* Pôle Développement */}
          <div className={styles.techCategoryCard}>
            <h3>Frontend & Mobile</h3>
            <div className={styles.techBadgesList}>
              <span className={styles.techItem}>React.js</span>
              <span className={styles.techItem}>Next.js</span>
              <span className={styles.techItem}>React Native</span>
              <span className={styles.techItem}>TypeScript</span>
            </div>
          </div>

          {/* Pôle Backend & Data */}
          <div className={styles.techCategoryCard}>
            <h3>Backend & Architecture</h3>
            <div className={styles.techBadgesList}>
              <span className={styles.techItem}>Node.js</span>
              <span className={styles.techItem}>Spring Boot</span>
              <span className={styles.techItem}>Python</span>
              <span className={styles.techItem}>PostgreSQL</span>
            </div>
          </div>

          {/* Pôle Cloud & DevOps */}
          <div className={styles.techCategoryCard}>
            <h3>Cloud & Infrastructure</h3>
            <div className={styles.techBadgesList}>
              <span className={styles.techItem}>AWS</span>
              <span className={styles.techItem}>Azure</span>
              <span className={styles.techItem}>Docker</span>
              <span className={styles.techItem}>Kubernetes</span>
            </div>
          </div>

          {/* Pôle Sécurité */}
          <div className={styles.techCategoryCard}>
            <h3>Cybersécurité & SecOps</h3>
            <div className={styles.techBadgesList}>
              <span className={styles.techItem}>SIEM</span>
              <span className={styles.techItem}>Firewalling</span>
              <span className={styles.techItem}>Pentesting</span>
              <span className={styles.techItem}>Terraform</span>
            </div>
          </div>

        </div>
      </section>
      

      {/* 5. STATISTIQUES */}
      <section className={`${styles.statsSection} ${styles.scrollFadeIn}`}>
        <div className={styles.gridStats}>
          <div className={styles.statBox}>
            <span className={styles.statNumber}>12+</span>
            <span className={styles.statLabel}>{t('aboutStatYears')}</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNumber}>150+</span>
            <span className={styles.statLabel}>{t('aboutStatProjects')}</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNumber}>40+</span>
            <span className={styles.statLabel}>{t('aboutStatExperts')}</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>{t('aboutStatSatisfaction')}</span>
          </div>
        </div>
      </section>

    </div>
  );
}