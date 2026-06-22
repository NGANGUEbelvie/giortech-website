import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import UI_UX from "../../assets/UI_UX.jpeg";
import Developpement from "../../assets/Developpement.png";
import IT from "../../assets/IT.png";
import cybersec from "../../assets/cybersec.jpg";
import { useTranslation } from 'react-i18next';
import cybersecurity_image from '../../assets/cybersecurity_image.png';

export default function Home() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: t('homeSlide1Title'),
      desc: t('homeSlide1Desc'),
      img: Developpement 
    },
    {
      title: t('homeSlide2Title'),
      desc: t('homeSlide2Desc'),
      img: IT
    },
    {
      title: t('homeSlide3Title'),
      desc: t('homeSlide3Desc'),
      img: cybersecurity_image
    },
    {
      title: t('homeSlide4Title'),
      desc: t('homeSlide4Desc'),
      img: UI_UX
    }
    
  ];

  // Gestion du défilement automatique du carrousel (toutes les 6 secondes)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const observerOptions = {
      // trigger when ~15% of the element is visible; rootMargin brings the
      // trigger a bit earlier/later if needed
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // ensure animation restarts reliably: remove, force reflow, add
          entry.target.classList.remove(styles.animateVisible);
          // force reflow
          // eslint-disable-next-line no-unused-expressions
          entry.target.offsetWidth;
          entry.target.classList.add(styles.animateVisible);
        } else {
          // remove class so animation can replay next time element enters
          entry.target.classList.remove(styles.animateVisible);
        }
      });
    }, observerOptions);

    // On cible la section Expertises et la section Stats
    const elementsToAnimate = document.querySelectorAll(`.${styles.scrollFadeIn}`);
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.homeContainer}>

      

      
      {/* 1. HERO CAROUSEL */}
      <section className={styles.carouselContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.carouselSlide} ${index === currentSlide ? styles.activeSlide : ''}`}
            style={{ backgroundImage: `linear-gradient(90deg, rgb(150, 201, 255, 0.0) 0%, rgba(128, 189, 254, 0.0) 50%, rgba(26, 58, 92, 0.0) 50%), url(${slide.img})` }}
          >
            <div className={styles.slideContent}>
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <div className={styles.btnGroup}>
                <Link to="/services" className={styles.btnPrimary}>
                  {t('discoverServices')}
                </Link>
                <Link to="/contact" className={styles.btnSecondary}>
                  {t('contactUs')}
                </Link>
              </div>
              </div>
            </div>
          
        ))}
        
        {/* Puces de navigation du carrousel */}
        <div className={styles.carouselPagination}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </section>

      {/* 2. SECTION EXPERTISES */}
      <section className={`${styles.expertisesSection} ${styles.scrollFadeIn}`}>
        <div className={styles.sectionHeader}>
          <h2>{t('expertisesTitle')}</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.gridExpertises}>
          <div 
            className={styles.serviceCard} 
            style={{ '--card-index': 1, cursor: 'pointer' }}
            onClick={() => navigate('/services#frontend')}
          >
            <div className={styles.iconContainer}>🌐</div>
            <h3>{t('expertise1Title')}</h3>
            <p>{t('expertise1Desc')}</p>
          </div>

          {/* Carte 2 -> Envoie à l'ID #uiux de Services */}
          <div 
            className={styles.serviceCard} 
            style={{ '--card-index': 2, cursor: 'pointer' }}
            onClick={() => navigate('/services#uiux')}
          >
            <div className={styles.iconContainer}>🎨</div>
            <h3>{t('expertise2Title')}</h3>
            <p>{t('expertise2Desc')}</p>
          </div>

          {/* Carte 3 -> Envoie à l'ID #cloud de Services */}
          <div 
            className={styles.serviceCard} 
            style={{ '--card-index': 3, cursor: 'pointer' }}
            onClick={() => navigate('/services#cloud')}
          >
            <div className={styles.iconContainer}>☁️</div>
            <h3>{t('expertise3Title')}</h3>
            <p>{t('expertise3Desc')}</p>
          </div>

          {/* Carte 4 -> Envoie à l'ID #cyber de Services */}
          <div 
            className={styles.serviceCard} 
            style={{ '--card-index': 4, cursor: 'pointer' }}
            onClick={() => navigate('/services#cyber')}
          >
            <div className={styles.iconContainer}>🛡️</div>
            <h3>{t('expertise4Title')}</h3>
            <p>{t('expertise4Desc')}</p>
          </div>
        </div>
      </section>

      {/* 3. SECTION CHIFFRES CLÉS */}
      <section className={`${styles.statsSection} ${styles.scrollFadeIn}`}>
        <div className={styles.gridStats}>
            <div className={styles.statBox} style={{ '--stat-index': 0 }}>
            <span className={styles.statCounter}>5+</span>
            <span className={styles.statLabel}>{t('statYears')}</span>
          </div>
          <div className={styles.statBox} style={{ '--stat-index': 1 }}>
            <span className={styles.statCounter}>50+</span>
            <span className={styles.statLabel}>{t('statProjects')}</span>
          </div>
          <div className={styles.statBox} style={{ '--stat-index': 2 }}>
            <span className={styles.statCounter}>30+</span>
            <span className={styles.statLabel}>{t('statCompanies')}</span>
          </div>
          <div className={styles.statBox} style={{ '--stat-index': 3 }}>
            <span className={styles.statCounter}>15+</span>
            <span className={styles.statLabel}>{t('statTech')}</span>
          </div>
        </div>
      </section>

    </div>
  );
}