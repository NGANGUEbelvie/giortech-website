import styles from './Projects.module.css';

export default function Projects() {
  const categories = ["Tous", "Développement", "Design UI/UX", "Cloud & Hébergement", "Cybersécurité"];

  const projectList = [
    {
      title: "NeoBank Mobile App",
      client: "BANQUE",
      tags: ["React Native", "Node.js", "AWS"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwXfBpJo1e6hlslA9icN70XtFA7_WgQyho5MaaZUpj7TKu6EXdi7iE-WPsHW7i46fCeIqaFD2U8y6evkTpqlPTQtMTcYRRnEOU0ut1CvhmPSTRc984Fn2bj5A7-MGkS7ySSBoVucp39yW3YRy5XSY_kLiKJjP48EP0RjATV2K6yxlOU-tqLRMfwMNBVMp18yF7X4BFHW0zOPw8i-plKNC4lYXOyouFhVAnvZPEZSGPPZILO5o1AzW10HQL9WJyw5Ut6qfPay5DyJ4s"
    },
    {
      title: "Cloud Migration Scalable",
      client: "TÉLÉCOMS",
      tags: ["Azure", "Terraform", "Kubernetes"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC23fuv93uwZiYCt4Z2j_lf_2jDHEFGP2jxwAvcLuow694yrhOa4Ja9pkxFb1lPBtxqdPi2uAxNZUMkC_4AzNFBf6DVjAx19_FRKpiysOqD_O9AucvQ5VnbNF5trYKXhZoci-HcTHNgsogvoa0IBPq0g3mdCj-5-089DyKWebTOxda11jCQlk5KJRZEI_6rxdHToVCVlculkfbbgzIFuqgkRK0rZX5aPcCwTXOSI9gu9C_p6pdyNSO0a3reoVx2cYJLLofmFNLGn6Zn"
    },
    {
      title: "Audit & Fortification SOC",
      client: "LOGISTIQUE",
      tags: ["Pentesting", "SIEM", "Firewalling"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-36o-bUir0jIfptCe9ewvq13Ssp2mGuz-3-PbCti6yKoFWwcJJGP-D7IoswIsQwME9MP5VFXgNQGlukAcDHPOi6ojN0UKDSnr1UKB1UmbG0BYwaDetFpEki7custZhPXvlZrUHATw_VKVat2KbRzu7QomHqJ2muTec1YB9-F62kDz1Cxvj0fWlQr8o5-Jfz4Nf0iIY4H_9XoaZl0dMxQ_fWcEJqcq0jfgriNdLaCrOsnmBKzYFNSK3CES7eU_ebgQcbQJdPSdDu0-"
    },
    {
      title: "Plateforme Omnicanale UX",
      client: "RETAIL",
      tags: ["Figma", "Next.js", "Tailwind"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm0WLQ0s4G7nGtGt9fyBCJTnghwivuSjfllzD3JoVXBRnRzQMmDDj7skS6dW2aJl92Kl8DJiAVrPGcO_09FxjkuU-nADEYXNBF7FirpgSAU6axMsnVF8HKFIwfHHbTvUIT6YaD075p_ZHi44gHBPyIaJuqPgQDeVBeYaS3BXd-t5LrRnT4ZbmP7Zc7V2ooevXfPzVxzNrPxmTOzrZdUvm-DBFPN0tZjSi634TgL9Iou__jJ74iNDhZGvOSqqlTfDEKqmWto2BjQUGu"
    },
    {
      title: "Data Warehouse & BI",
      client: "ASSURANCE",
      tags: ["Python", "Tableau", "Snowflake"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2W7kFg9w4XcHFqup4G3GjJwM2pcEBNjSJiZq5SohkxpdF_jTdpS354YmGc7m2HNOJ8rsz4zoG05plHCa_sELhB6A6Mqs6kfK0PUR2l_Sakwl6YMQJim7gJk4hhS9gwFZjl0WccKMGo6GApt3NITAo3oJSPCFmz4GYMebgZRjte9Pog53AWSpl-RVx6dVtEqOjPBMR57aNNgUPHRc1ywxlPWZAUHYNJmxzJSZE1EpXrBhn6x4W19hYMa5cGVu1uXtiIiWTy1Jz1KFB"
    },
    {
      title: "Gestion Intégrée ERP v2",
      client: "INDUSTRIE",
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmhK4Pe0ho0x6jt4qoW2LZ-kYK9e91EFdVAbtCEHtuq1DSte1ErnvWMKa6xrxwiFoRBBuuBnyRZAOW047xvgZ-_Aqio3YvIaJFTdgbrFk-oLUIvh7kiNmwcnNMB_DwLXTR88aENglRlh-MwLo_LBhJ2LFWEGAhY3CCGaV7r5R0PdYbEBwJNWbHG-nntBPqJtRb3kqBBDiR14x8X_z5GwyKC3Zh9V7Azbb9IjAkP_pn95TpHZrcq7X5tNvS9fxMZjZK0wa6EqjmLL5c"
    }
  ];

  return (
    <div className={styles.projectsContainer}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Nos Réalisations &amp; Études de Cas</h1>
          <p>Explorez comment nous accompagnons les leaders de l'industrie dans leur transformation numérique avec des solutions IT sur-mesure et sécurisées.</p>
        </div>
      </section>

      {/* 2. BARRE DE FILTRES */}
      <div className={styles.filterBar}>
        <div className={styles.filterWrapper}>
          <div className={styles.filterTrack}>
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`${styles.filterBtn} ${index === 0 ? styles.activeFilter : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. GRILLE DES PROJETS */}
      <section className={styles.gridSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2>Découvrez nos derniers projets</h2>
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

          {/* BOUTON VOIR PLUS */}
          <div className={styles.paginationWrapper}>
            <button className={styles.loadMoreBtn}>
              Voir Plus de Projets
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}