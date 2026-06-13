import styles from './About.module.css';

export default function About() {
  const team = [
    {
      name: "Marc Giosi",
      role: "CEO & Fondateur",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA77c40SuAHqx5IRJwKFlcoLJGWk9l8gm2TmbWKJajQobOUh8CM-EphDsBKWnf4ExHRtX_DaW4s6nQYqWnIJOFamYldaDdMpvJt_rnrty0w5453zO9ecg17dlQg-9Kocyo2b26do39s8c3nckgz8HGvQ4_h1Ylt4TjnMygTCKgYX__MTDdnRPpVjhumdM5OmAiRoejLO0ufN91V1AbXmOZT2IJS9xa1qvlKA039ouzuKE5sTkjnG81LIaFtaGSo_UERCHxVnDRWnIk3"
    },
    {
      name: "Sarah Kamga",
      role: "Directrice Technique",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbHl616o-HHsXEOFBmi-fxGCt43462CUtnOxNDAuapbMaezF-fa5fgUVk2CHV0KsAHYig_wFBgwRRm2s7YceybbHeyVEG5Xm-uDBoqqDco0erBTNVP6qDSCNwyB6lV2PBaEmIq3fdsWVdbUL6KYGDsBpp2tjtKvfabQRlr56ZQSH4NrhDC7YbxHW31kUJkw-bl8Pr9WvKVrPTK8slEc3eK0-ZHknCtmIfEG56ITLc7nUrGXHrNCJhG--h2BDJRgxHy15dn33oMMXt1"
    },
    {
      name: "Alain Tagne",
      role: "Chef de la Sécurité IT",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3znZP7j8JoGNPHdwPd7txU0erN6Z9PmziPAkLGopk6N4rH6_s7B6krM4rd3eH3nLr6bg_bv3B_qzWAxGO5AMb3wyuxeckyfCLcinxd37Wao55hiqQbFc1Rh7eluKpmadCS2LL2g0okv9BCFXx7HWtQaLVaBQvJhk9vTboujcGAcZNi5WWW7cRquC5wQvR6Ze4bcEycx-rke2PC0MbBfL3pfOCswrB0Yo_zAUervLtOfrxNsg3I-TRG4K4BTCa0CXtd3l1BjUY_Klx"
    },
    {
      name: "Elena Mvogo",
      role: "Directrice de Projets",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7WYDP7BlVIgBF6Evoiv6EM2NP0t8L0biuJQnypJMvOrNlniTbWQ5ycTl0dj7lWhYzoiv0Nlndt9ro14iwazz0_t-SSsgvKRbcr1qePa9XBQkp1TZArnlHDKO0tJVrqZTzFvZM0pYys-XyX8DL9_UgjLW8N9WHQ3au-CU0UMQY-Nojo0byaJCZ2hDtT4Mdh1aiGInxGrP9kELygnl8-GW4S0I8equqmklQ7jXi0t-bJwSnc-7qgotYprZYKvR-OKF1J492HxGN8RL5"
    }
  ];

  return (
    <div className={styles.aboutContainer}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Qui sommes-nous ?</h1>
          <p>Votre partenaire stratégique en ingénierie informatique et transformation digitale à Douala, dédié à l'excellence technologique en Afrique centrale.</p>
        </div>
      </section>

      {/* 2. HISTOIRE & MISSION */}
      <section className={styles.historyMissionSection}>
        <div className={styles.gridTwoCols}>
          
          {/* Colonne Gauche : Histoire */}
          <div className={styles.column}>
            <span className={styles.subTitle}>Notre Histoire</span>
            <h2>Une décennie d'excellence technologique.</h2>
            <p className={styles.description}>
              Fondée avec la vision de combler le fossé technologique en Afrique centrale, GIORTECH s'est imposée comme un leader incontournable de l'IT. Notre parcours est marqué par une quête constante d'innovation et un engagement indéfectible envers la réussite de nos partenaires locaux et internationaux.
            </p>
            <div className={styles.imageWrapper}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9508LMk15JO-SGqJRy67Lz8fFDyuj8pOiEpSkl10ESSCAb2TJ-Vi2esZ5FK7PAP-cP3ECN74qlMgDmjLINBOQvUdSpT-MZ0xJ_P_B6QR1jUgU20vkDNTpEQJahLMMj7-4oC3rogiMOG3wfypsXVTHgOaKGmnKhuhfsP73xK1EpTEMTcGU7cUHwr9OxgrBaAs0Or-b9TqBBAlkESVuRTyM_hqhOcgOuP0TLwtsKWbSbtNnEahp_AajuQ_mIzE4SPKcuLE1Isk7ZUwY" 
                alt="Bureaux de GIORTECH" 
              />
            </div>
          </div>

          {/* Colonne Droite : Mission */}
          <div className={`${styles.column} ${styles.columnRight}`}>
            <span className={styles.subTitle}>Notre Mission</span>
            <h2>Sécuriser et propulser votre infrastructure.</h2>
            <p className={styles.description}>
              Nous accompagnons les entreprises dans leur transformation numérique en fournissant des solutions robustes, évolutives et parfaitement alignées avec les standards internationaux de sécurité.
            </p>
            
            <div className={styles.cardsStack}>
              <div className={styles.missionCard}>
                <h3>Innovation Continue</h3>
                <p>Développer des solutions sur mesure qui anticipent les besoins du marché de demain grâce à une veille technologique constante.</p>
              </div>
              <div className={styles.missionCard}>
                <h3>Intégrité & Rigueur</h3>
                <p>Bâtir des relations de confiance durables basées sur la transparence totale et une rigueur technique sans compromis.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. VALEURS FONDAMENTALES */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionHeader}>
          <h2>Nos Valeurs Fondamentales</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.gridFourCols}>
          <div className={styles.valueCard}>
            <div className={styles.icon}>🛡️</div>
            <h3>Sécurité</h3>
            <p>La protection de vos données et de vos actifs numériques est notre priorité absolue dans chaque déploiement.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.icon}>⚡</div>
            <h3>Agilité</h3>
            <p>Nous nous adaptons rapidement aux évolutions technologiques pour maintenir votre avantage compétitif.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.icon}>🤝</div>
            <h3>Proximité</h3>
            <p>Une équipe locale à Douala, hautement disponible et à l'écoute de vos enjeux business spécifiques.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.icon}>💡</div>
            <h3>Excellence</h3>
            <p>Nous visons la perfection technique dans chaque architecture réseau et chaque ligne de code produite.</p>
          </div>
        </div>
      </section>

      {/* 4. ÉQUIPE / LEADERSHIP */}
      <section className={styles.teamSection}>
        <div className={styles.sectionHeaderCentered}>
          <h2>Le Leadership GIORTECH</h2>
          <p>Rencontrez les experts visionnaires qui pilotent l'innovation et garantissent votre succès technologique au quotidien.</p>
        </div>

        <div className={styles.gridFourCols}>
          {team.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.avatarWrapper}>
                <img src={member.img} alt={`${member.name} - ${member.role}`} />
                <div className={styles.avatarOverlay}></div>
              </div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. STATISTIQUES */}
      <section className={styles.statsSection}>
        <div className={styles.gridStats}>
          <div className={styles.statBox}>
            <span className={styles.statNumber}>12+</span>
            <span className={styles.statLabel}>Années d'Expérience</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNumber}>150+</span>
            <span className={styles.statLabel}>Projets Réussis</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNumber}>40+</span>
            <span className={styles.statLabel}>Experts Dédiés</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Satisfaction Client</span>
          </div>
        </div>
      </section>

    </div>
  );
}