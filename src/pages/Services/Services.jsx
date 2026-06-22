import React, { useEffect } from 'react';
import styles from './Services.module.css';
import UI_UX from "../../assets/UI_UX.jpeg";
import Developpement from "../../assets/Developpement.png";
import IT from "../../assets/IT.png";
import Cyber from "../../assets/Cyber.png";
import img_services from "../../assets/img_services.png";
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function Services() {
  const { t } = useTranslation();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        // Un léger délai permet d'attendre que le rendu ou les animations se lancent
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);


  // Fonction pour basculer d'une langue à l'autre
 
  
  // Scroll reveal: observe any element with the `scrollFadeIn` class so
  // sections, text and images animate when entering the viewport and replay
  // on each re-entry.
  useEffect(() => {
    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // restart animation reliably: remove, force reflow, add
          entry.target.classList.remove(styles.animateVisible);
          // force reflow
          // eslint-disable-next-line no-unused-expressions
          entry.target.offsetWidth;
          entry.target.classList.add(styles.animateVisible);
        } else {
          entry.target.classList.remove(styles.animateVisible);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(`.${styles.scrollFadeIn}`);
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.servicesPageContainer}>

      
      
      {/* Chargement sécurisé des polices et icônes Google */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <main>
        {/* HERO SECTION */}
        <section className={`${styles.heroSection} ${styles.scrollFadeIn}`}>
            {/* On réutilise la grille à deux colonnes existante */}
            
              
              {/* Colonne Gauche : Ton bloc de texte d'origine encapsulé */}
              <div className={`${styles.heroContent} ${styles.scrollFadeIn}`} style={{ '--index': 0 }}>
                <h1>{t('servicesHeroTitle')}</h1>
                <p>
                  {t('servicesHeroDesc')}
                </p>
              </div>

              </section>

        {/* SERVICE 1: UI/UX & BRANDING */}
        <section id="uiux" className={`${styles.serviceSectionWhite} ${styles.scrollFadeIn}`}>
          <div  className={styles.gridTwoCols}>
            <div className={styles.imageGroup}>
              <div className={`${styles.imageShadowDecorator} ${styles.decoratorLeft}`}></div>
              <img 
                alt="UI/UX design workspace" 
                className={`${styles.serviceCardImage} ${styles.scrollFadeIn}`} 
                style={{ '--index': 1 }}
                src={UI_UX} 
              />
            </div>
            <div className={`${styles.textContent} ${styles.scrollFadeIn}`} style={{ '--index': 2 }}>
              <span className="material-symbols-outlined text-action-blue" style={{ fontSize: '48px', color: '#0356f0' }}>palette</span>
              <h2>{t('services1Title')}</h2>
              <p className={styles.serviceHighlight}>L'expérience utilisateur est au cœur de notre démarche créative pour garantir l'adoption et le succès de vos outils.</p>
              <ul className={styles.bulletList}>
                <li className={styles.customBullet}>{t('services1Bullet1')}</li>
                <li className={styles.customBullet}>{t('services1Bullet2')}</li>
                <li className={styles.customBullet}>{t('services1Bullet3')}</li>
                <li className={styles.customBullet}>{t('services1Bullet4')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICE 2: WEB & MOBILE DEVELOPMENT */}
        <section id="frontend" className={`${styles.serviceSectionGrey} ${styles.scrollFadeIn}`}>
          <div className={styles.gridTwoCols}>
            <div className={styles.imageGroup}>
              <div className={`${styles.imageShadowDecorator} ${styles.decoratorRight}`}></div>
              <img 
                alt="App development" 
                className={`${styles.serviceCardImage} ${styles.scrollFadeIn}`} 
                style={{ '--index': 3 }}
                src={Developpement} 
              />
            </div>
            <div className={`${styles.textContent} ${styles.scrollFadeIn}`} style={{ '--index': 4 }}>
              <span className="material-symbols-outlined text-action-blue" style={{ fontSize: '48px', color: '#0356f0' }}>devices</span>
              <h2>{t('services2Title')}</h2>
              <p className={styles.serviceHighlight}>{t('services2Highlight')}</p>
              <ul className={styles.bulletList}>
                <li className={styles.customBullet}>{t('services2Bullet1')}</li>
                <li className={styles.customBullet}>{t('services2Bullet2')}</li>
                <li className={styles.customBullet}>{t('services2Bullet3')}</li>
                <li className={styles.customBullet}>{t('services2Bullet4')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICE 3: INFRASTRUCTURE CLOUD & DEVOPS */}
        <section id="cloud" className={`${styles.serviceSectionWhite} ${styles.scrollFadeIn}`}>
          <div className={styles.gridTwoCols}>
            <div className={styles.imageGroup}>
              <div className={`${styles.imageShadowDecorator} ${styles.decoratorLeft}`}></div>
              <img 
                alt="Cloud infrastructure and datacenter servers" 
                className={`${styles.serviceCardImage} ${styles.scrollFadeIn}`} 
                style={{ '--index': 5 }}
                src={IT} 
              />
            </div>
            <div className={`${styles.textContent} ${styles.scrollFadeIn}`} style={{ '--index': 6 }}>
              <span className="material-symbols-outlined text-action-blue" style={{ fontSize: '48px', color: '#0356f0' }}>cloud</span>
              <h2>{t('services3Title')}</h2>
              <p className={styles.serviceHighlight}>{t('services3Highlight')}</p>
              <ul className={styles.bulletList}>
                <li className={styles.customBullet}>{t('services3Bullet1')}</li>
                <li className={styles.customBullet}>{t('services3Bullet2')}</li>
                <li className={styles.customBullet}>{t('services3Bullet3')}</li>
                <li className={styles.customBullet}>{t('services3Bullet4')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICE 4: CYBERSECURITY */}
        <section id="cyber" className={`${styles.serviceSectionGrey} ${styles.scrollFadeIn}`}>
          <div className={styles.gridTwoCols}>
            <div className={styles.imageGroup}>
              <div className={`${styles.imageShadowDecorator} ${styles.decoratorRight}`}></div>
              <img 
                alt="Cybersecurity operations center" 
                className={`${styles.serviceCardImage} ${styles.scrollFadeIn}`} 
                style={{ '--index': 7 }}
                src={Cyber} 
              />
            </div>
            <div className={`${styles.textContent} ${styles.scrollFadeIn}`} style={{ '--index': 8 }}>
              <span className="material-symbols-outlined text-action-blue" style={{ fontSize: '48px', color: '#0356f0' }}>security</span>
              <h2>{t('services4Title')}</h2>
              <p className={styles.serviceHighlight}>{t('services4Highlight')}</p>
              <ul className={styles.bulletList}>
                <li className={styles.customBullet}>{t('services4Bullet1')}</li>
                <li className={styles.customBullet}>{t('services4Bullet2')}</li>
                <li className={styles.customBullet}>{t('services4Bullet3')}</li>
                <li className={styles.customBullet}>{t('services4Bullet4')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className={`${styles.ctaSection} ${styles.scrollFadeIn}`}>
          <div className={`${styles.ctaContent} ${styles.scrollFadeIn}`} style={{ '--index': 9 }}>
            <h2>{t('servicesCtaTitle')}</h2>
            <p>{t('servicesCtaDesc')}</p>
            <Link to="/contact" className={styles.ctaButton}>
              {t('servicesCtaButton')}
            </Link>
          </div>
        </section>
      </main>

    </div>
  );
}