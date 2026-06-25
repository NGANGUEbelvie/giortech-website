import styles from './Projects.module.css';
import IT from '../../assets/IT.png';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import Img_Banque from '../../assets/Img_Banque.jpeg'
import Img_Banque2 from '../../assets/Img_Banque2.jpeg'
import Insurance from '../../assets/Insurance.jpeg'
import Assurance from '../../assets/Assurance.png'

export default function Projects() {
  const { t } = useTranslation();
  const categories = [
    { name: t('catAll'), hash: '' },
    { name: t('catDev'), hash: '#frontend' },    // Redirige vers id="frontend"
    { name: t('catUIUX'), hash: '#uiux' },       // Redirige vers id="uiux"
    { name: t('catCloud'), hash: '#cloud' },     // Redirige vers id="cloud"
    { name: t('catCyber'), hash: '#cyber' }
  ];

  const projectList = [
    {
      title: "Deutch Banque",
      client: t('clientBanking'),
      tags: ["cloud migration", "devops", "GKE"],
      img: Img_Banque
    },
    
    {
      title: " United Healthcare",
      client: t('clientInsurance'),
      tags: ["Aws to GCP", "Devops", "Python"],
      img: Assurance
    },
    {
      title: "Charles schwabs",
      client: t('clientBanking'),
      tags: ["cloud run", "google cloud ", "Kubernetes"],
      img: Img_Banque2
    },
    {
      title: "Caris healthcare",
      client: t('clientInsurance'),
      tags: ["Go", "React.js", "Infrastructure"],
      img: Insurance
    },
    
  ];

  return (
    <div className={styles.projectsContainer}>
      
      {/* 1. HERO SECTION */}
      <section
        className={styles.heroSection}
        style={{
          backgroundImage: `linear-gradient(rgba(74, 185, 250, 0.1), rgb(58, 191, 248, 0.1)), url(${IT})`
        }}
      >
        <div className={styles.heroContent}>
          <h1>{t('projectsHeroTitle')}</h1>
          <p>{t('projectsHeroDesc')}</p>
        </div>
      </section>

      {/* 2. BARRE DE FILTRES */}
      <div className={styles.filterBar}>
        <div className={styles.filterWrapper}>
          <div className={styles.filterTrack}>
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={`/services${category.hash}`} // Génère /services#frontend, etc.
                className={`${styles.filterBtn} ${index === 0 ? styles.activeFilter : ''}`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 3. GRILLE DES PROJETS */}
      <section className={styles.gridSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2>{t('projectsGridTitle')}</h2>
          </div>

          <div className={styles.projectsGrid}>
            {projectList.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.imageWrapper}>
                  <img src={project.img} alt={project.title} />
                  <div className={styles.glassOverlay}>
                    <span className={styles.arrowIcon}>↗</span>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.clientTag}>{project.client}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.techTags}>
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className={styles.techBadge}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}