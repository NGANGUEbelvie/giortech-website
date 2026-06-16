import React, { useEffect } from 'react';
import styles from './Services.module.css';
import UI_UX from "../../assets/UI_UX.png";
import Developpement from "../../assets/Developpement.png";
import IT from "../../assets/IT.png";
import Cyber from "../../assets/Cyber.png";
import img_services from "../../assets/img_services.png";
import { Link } from 'react-router-dom';

export default function Services() {
  
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
            <div className={styles.gridTwoCols}>
              
              {/* Colonne Gauche : Ton bloc de texte d'origine encapsulé */}
              <div className={`${styles.heroContent} ${styles.scrollFadeIn}`} style={{ '--index': 0 }}>
                <h1>Nos Prestations & Solutions IT</h1>
                <p>
                  GIORTECH accompagne les entreprises dans leur transformation digitale avec une expertise pointue et des solutions technologiques sur mesure, conçues pour allier performance, sécurité et innovation.
                </p>
              </div>

              {/* Colonne Droite : Le nouveau bloc d'image utilisant les classes de ton CSS */}
              <div className={styles.imageGroup}>
              <div className={`${styles.imageShadowDecorator} ${styles.decoratorRight}`}></div>
              <img 
                alt="GIORTECH IT Services Overview" 
                className={`${styles.serviceCardImage} ${styles.scrollFadeIn}`} 
                style={{ '--index': 0 }}
                src={img_services} 
              />
            </div>

            </div>
        </section>

        {/* SERVICE 1: UI/UX & BRANDING */}
        <section className={`${styles.serviceSectionWhite} ${styles.scrollFadeIn}`}>
          <div className={styles.gridTwoCols}>
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
              <h2>Design UI/UX & Branding Digital</h2>
              <p className={styles.serviceHighlight}>L'expérience utilisateur est au cœur de notre démarche créative pour garantir l'adoption et le succès de vos outils.</p>
              <ul className={styles.bulletList}>
                <li className={styles.customBullet}>UX Research approfondie & Maquettage d'interfaces (Figma)</li>
                <li className={styles.customBullet}>Création d'identités visuelles et logos distinctifs</li>
                <li className={styles.customBullet}>Définition de chartes graphiques complètes et cohérentes</li>
                <li className={styles.customBullet}>Motion design premium pour vos supports digitaux</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICE 2: WEB & MOBILE DEVELOPMENT */}
        <section className={`${styles.serviceSectionGrey} ${styles.scrollFadeIn}`}>
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
              <h2>Développement Web & Mobile</h2>
              <p className={styles.serviceHighlight}>Nous développons des solutions robustes et évolutives pour répondre aux besoins spécifiques de votre métier.</p>
              <ul className={styles.bulletList}>
                <li className={styles.customBullet}>Applications Web métiers (SaaS, ERP, CRM)</li>
                <li className={styles.customBullet}>Applications Mobiles natives (iOS & Android)</li>
                <li className={styles.customBullet}>Plateformes E-commerce performantes</li>
                <li className={styles.customBullet}>Maintenance et évolutions applicatives</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICE 3: INFRASTRUCTURE CLOUD & DEVOPS */}
        <section className={`${styles.serviceSectionWhite} ${styles.scrollFadeIn}`}>
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
              <h2>Infrastructure Cloud & DevOps</h2>
              <p className={styles.serviceHighlight}>Propulsez votre entreprise vers la flexibilité et la haute disponibilité grâce à des architectures Cloud sécurisées et évolutives.</p>
              <ul className={styles.bulletList}>
                <li className={styles.customBullet}>Migration de vos serveurs et applications vers le Cloud (AWS, Azure, GCP)</li>
                <li className={styles.customBullet}>Conteneurisation de vos applications pour un déploiement agile (Docker, Kubernetes)</li>
                <li className={styles.customBullet}>Automatisation des déploiements et intégration continue (Pipelines CI/CD)</li>
                <li className={styles.customBullet}>Supervision 24/7, optimisation des coûts Cloud et infogérance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICE 4: CYBERSECURITY */}
        <section className={`${styles.serviceSectionGrey} ${styles.scrollFadeIn}`}>
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
              <h2>Cybersécurité & Audit IT</h2>
              <p className={styles.serviceHighlight}>Protégez vos actifs les plus précieux grâce à une approche proactive de la sécurité informatique.</p>
              <ul className={styles.bulletList}>
                <li className={styles.customBullet}>Audit de sécurité complet des systèmes d'information</li>
                <li className={styles.customBullet}>Tests d'intrusion et de vulnérabilité (Pentest)</li>
                <li className={styles.customBullet}>Mise en conformité et protection globale des données</li>
                <li className={styles.customBullet}>Formation et sensibilisation des équipes aux risques cyber</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className={`${styles.ctaSection} ${styles.scrollFadeIn}`}>
          <div className={`${styles.ctaContent} ${styles.scrollFadeIn}`} style={{ '--index': 9 }}>
            <h2>Un projet technologique en tête ?</h2>
            <p>Nos experts sont prêts à évaluer vos besoins et à vous proposer une solution technique optimale adaptée à votre budget.</p>
            <Link to="/contact" className={styles.ctaButton}>
              Demander un devis
            </Link>
          </div>
        </section>
      </main>

    </div>
  );
}