import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import UI_UX from "../../assets/UI_UX.png";
import Developpement from "../../assets/Developpement.png";
import IT from "../../assets/IT.png";
import cybersec from "../../assets/cybersec.jpg";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "GIORTECH - Votre Partenaire en Transformation Digitale",
      desc: "Expertise technologique au service de votre croissance. Nous concevons des solutions numériques sécurisées, innovantes et sur mesure pour les leaders de demain.",
      img: Developpement 
    },
    {
      title: "Solutions Cloud & Infrastructure",
      desc: "Optimisez vos performances avec nos architectures cloud sécurisées. Une agilité sans précédent pour vos opérations critiques.",
      img: IT
    },
    {
      title: "Cybersécurité Avancée",
      desc: "Protégez vos actifs numériques avec nos audits et solutions de défense. La sérénité face aux menaces cybernétiques modernes.",
      img: cybersec
    },

    {
    title: "Design UI/UX & Branding Digital",
    desc: "L'expérience utilisateur est au cœur de notre démarche. Nous créons des interfaces intuitives, esthétiques et percutantes pour garantir le succès de vos plateformes.",
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
            style={{ backgroundImage: `linear-gradient(90deg, rgba(26, 58, 92, 0.95) 0%, rgba(26, 58, 92, 0.7) 50%, rgba(26, 58, 92, 0.3) 100%), url(${slide.img})` }}
          >
            <div className={styles.slideContent}>
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <div className={styles.btnGroup}>
                <Link to="/services" className={styles.btnPrimary}>
                  Découvrir nos services
                </Link>
                <Link to="/contact" className={styles.btnSecondary}>
                  Nous contacter
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
          <h2>Nos Domaines d'Expertise</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.gridExpertises}>
          <div className={styles.serviceCard} style={{ '--card-index': 1 }}>
            <div className={styles.iconContainer}>🌐</div>
            <h3>Développement Web & Mobile</h3>
            <p>Applications robustes et évolutives développées avec les dernières technologies de pointe.</p>
          </div>

          <div className={styles.serviceCard} style={{ '--card-index': 2 }}>
            <div className={styles.iconContainer}>🎨</div>
            <h3>Design UI/UX & Branding</h3>
            <p>Expériences utilisateurs immersives et identités visuelles fortes pour marquer les esprits.</p>
          </div>

          <div className={styles.serviceCard} style={{ '--card-index': 3 }}>
            <div className={styles.iconContainer}>☁️</div>
            <h3>Infrastructure Cloud</h3>
            <p>Gestion et optimisation de vos serveurs pour une disponibilité et une performance maximale.</p>
          </div>

          <div className={styles.serviceCard} style={{ '--card-index': 4 }}>
            <div className={styles.iconContainer}>🛡️</div>
            <h3>Cybersécurité & Audit IT</h3>
            <p>Protection de vos actifs numériques et conformité aux standards de sécurité mondiaux.</p>
          </div>
        </div>
      </section>

      {/* 3. SECTION CHIFFRES CLÉS */}
      <section className={`${styles.statsSection} ${styles.scrollFadeIn}`}>
        <div className={styles.gridStats}>
            <div className={styles.statBox} style={{ '--stat-index': 0 }}>
            <span className={styles.statCounter}>5+</span>
            <span className={styles.statLabel}>ans d'expertise IT</span>
          </div>
          <div className={styles.statBox} style={{ '--stat-index': 1 }}>
            <span className={styles.statCounter}>50+</span>
            <span className={styles.statLabel}>projets livrés</span>
          </div>
          <div className={styles.statBox} style={{ '--stat-index': 2 }}>
            <span className={styles.statCounter}>30+</span>
            <span className={styles.statLabel}>entreprises accompagnées</span>
          </div>
          <div className={styles.statBox} style={{ '--stat-index': 3 }}>
            <span className={styles.statCounter}>15+</span>
            <span className={styles.statLabel}>technologies maîtrisées</span>
          </div>
        </div>
      </section>

    </div>
  );
}