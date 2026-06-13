import { useState, useEffect } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "GIORTECH - Votre Partenaire en Transformation Digitale",
      desc: "Expertise technologique au service de votre croissance. Nous concevons des solutions numériques sécurisées, innovantes et sur mesure pour les leaders de demain.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200" // Image pro générique temporaire
    },
    {
      title: "Solutions Cloud & Infrastructure",
      desc: "Optimisez vos performances avec nos architectures cloud sécurisées. Une agilité sans précédent pour vos opérations critiques.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200"
    },
    {
      title: "Cybersécurité Avancée",
      desc: "Protégez vos actifs numériques avec nos audits et solutions de défense. La sérénité face aux menaces cybernétiques modernes.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200"
    }
  ];

  // Gestion du défilement automatique du carrousel (toutes les 6 secondes)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

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
                <button className={styles.btnPrimary}>Découvrir nos services</button>
                <button className={styles.btnSecondary}>Nous contacter</button>
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
      <section className={styles.expertisesSection}>
        <div className={styles.sectionHeader}>
          <h2>Nos Domaines d'Expertise</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.gridExpertises}>
          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>🌐</div>
            <h3>Développement Web & Mobile</h3>
            <p>Applications robustes et évolutives développées avec les dernières technologies de pointe.</p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>🎨</div>
            <h3>Design UI/UX & Branding</h3>
            <p>Expériences utilisateurs immersives et identités visuelles fortes pour marquer les esprits.</p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>☁️</div>
            <h3>Infrastructure Cloud</h3>
            <p>Gestion et optimisation de vos serveurs pour une disponibilité et une performance maximale.</p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>🛡️</div>
            <h3>Cybersécurité & Audit IT</h3>
            <p>Protection de vos actifs numériques et conformité aux standards de sécurité mondiaux.</p>
          </div>
        </div>
      </section>

      {/* 3. SECTION CHIFFRES CLÉS */}
      <section className={styles.statsSection}>
        <div className={styles.gridStats}>
          <div className={styles.statBox}>
            <span className={styles.statCounter}>5+</span>
            <span className={styles.statLabel}>ans d'expertise IT</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statCounter}>50+</span>
            <span className={styles.statLabel}>projets livrés</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statCounter}>30+</span>
            <span className={styles.statLabel}>entreprises accompagnées</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statCounter}>15+</span>
            <span className={styles.statLabel}>technologies maîtrisées</span>
          </div>
        </div>
      </section>

    </div>
  );
}