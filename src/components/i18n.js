import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    fr: {
    translation: {
      // Carrousel & Boutons
      homeSlide1Title: "GIORTECH - Votre Partenaire en Transformation Digitale",
      homeSlide1Desc: "Expertise technologique au service de votre croissance. Nous concevons des solutions numériques sécurisées, innovantes et sur mesure pour les leaders de demain.",
      homeSlide2Title: "Solutions Cloud & Infrastructure",
      homeSlide2Desc: "Optimisez vos performances avec nos architectures cloud sécurisées. Une agilité sans précédent pour vos opérations critiques.",
      homeSlide3Title: "Cybersécurité Avancée",
      homeSlide3Desc: "Protégez vos actifs numériques avec nos audits et solutions de défense. La sérénité face aux menaces cybernétiques modernes.",
      homeSlide4Title: "Design UI/UX & Branding Digital",
      homeSlide4Desc: "L'expérience utilisateur est au cœur de notre démarche. Nous créons des interfaces intuitives, esthétiques et percutantes pour garantir le succès de vos plateformes.",
      discoverServices: "Découvrir nos services",
      contactUs: "Nous contacter",

      // Section Expertises
      expertisesTitle: "Nos Domaines d'Expertise",
      expertise1Title: "Développement Web & Mobile",
      expertise1Desc: "Applications robustes et évolutives développées avec les dernières technologies de pointe.",
      expertise2Title: "Design UI/UX & Branding",
      expertise2Desc: "Expériences utilisateurs immersives et identités visuelles fortes pour marquer les esprits.",
      expertise3Title: "Infrastructure Cloud",
      expertise3Desc: "Gestion et optimisation de vos serveurs pour une disponibilité et une performance maximale.",
      expertise4Title: "Cybersécurité & Audit IT",
      expertise4Desc: "Protection de vos actifs numériques et conformité aux standards de sécurité mondiaux.",

      // Section Stats
      statYears: "ans d'expertise IT",
      statProjects: "projets livrés",
      statCompanies: "entreprises accompagnées",
      statTech: "technologies maîtrisées",

      // Page Services
      servicesHeroTitle: "Nos Prestations & Solutions IT",
      servicesHeroDesc: "GIORTECH accompagne les entreprises dans leur transformation digitale avec une expertise pointue et des solutions technologiques sur mesure, conçues pour allier performance, sécurité et innovation.",
      
      services1Title: "Design UI/UX & Branding Digital",
      services1Highlight: "L'expérience utilisateur est au cœur de notre démarche créative pour garantir l'adoption et le succès de vos outils.",
      services1Bullet1: "UX Research approfondie & Maquettage d'interfaces (Figma)",
      services1Bullet2: "Création d'identités visuelles et logos distinctifs",
      services1Bullet3: "Définition de chartes graphiques complètes et cohérentes",
      services1Bullet4: "Motion design premium pour vos supports digitaux",

      services2Title: "Développement Web & Mobile",
      services2Highlight: "Nous développons des solutions robustes et évolutives pour répondre aux besoins spécifiques de votre métier.",
      services2Bullet1: "Applications Web métiers (SaaS, ERP, CRM)",
      services2Bullet2: "Applications Mobiles natives (iOS & Android)",
      services2Bullet3: "Plateformes E-commerce performantes",
      services2Bullet4: "Maintenance et évolutions applicatives",

      services3Title: "Infrastructure Cloud & DevOps",
      services3Highlight: "Propulsez votre entreprise vers la flexibilité et la haute disponibilité grâce à des architectures Cloud sécurisées et évolutives.",
      services3Bullet1: "Migration de vos serveurs et applications vers le Cloud (AWS, Azure, GCP)",
      services3Bullet2: "Conteneurisation de vos applications pour un déploiement agile (Docker, Kubernetes)",
      services3Bullet3: "Automatisation des déploiements et intégration continue (Pipelines CI/CD)",
      services3Bullet4: "Supervision 24/7, optimisation des coûts Cloud et infogérance",

      services4Title: "Cybersécurité & Audit IT",
      services4Highlight: "Protégez vos actifs les plus précieux grâce à une approche proactive de la sécurité informatique.",
      services4Bullet1: "Audit de sécurité complet des systèmes d'information",
      services4Bullet2: "Tests d'intrusion et de vulnérabilité (Pentest)",
      services4Bullet3: "Mise en conformité et protection globale des données",
      services4Bullet4: "Formation et sensibilisation des équipes aux risques cyber",

      servicesCtaTitle: "Un projet technologique en tête ?",
      servicesCtaDesc: "Nos experts sont prêts à évaluer vos besoins et à vous proposer une solution technique optimale adaptée à votre budget.",
      servicesCtaButton: "Demander un devis",

      // Page À Propos
      aboutHeroTitle: "Qui sommes-nous ?",
      aboutHeroDesc: "Votre partenaire stratégique en ingénierie informatique et transformation digitale à Douala, dédié à l'excellence technologique en Afrique centrale.",
      
      aboutHistorySub: "Notre Histoire",
      aboutHistoryTitle: "Une décennie d'excellence technologique.",
      aboutHistoryDesc: "Née avec l'ambition de propulser la tech en Afrique centrale, GIORTECH est devenue un leader de l'IT. Notre moteur ? L'innovation continue et la réussite de nos partenaires locaux et internationaux.",
      
      aboutMissionSub: "Notre Mission",
      aboutMissionTitle: "Sécuriser et propulser votre infrastructure.",
      aboutMissionDesc: "Nous accompagnons les entreprises dans leur transformation numérique en fournissant des solutions robustes, évolutives et parfaitement alignées avec les standards internationaux de sécurité.",
      
      aboutMissionCard1Title: "Innovation Continue",
      aboutMissionCard1Desc: "Développer des solutions sur mesure qui anticipent les besoins du marché de demain grâce à une veille technologique constante.",
      aboutMissionCard2Title: "Intégrité & Rigueur",
      aboutMissionCard2Desc: "Bâtir des relations de confiance durables basées sur la transparence totale et une rigueur technique sans compromis.",
      
      aboutValuesHeader: "Nos Valeurs Fondamentales",
      aboutValue1Title: "Sécurité",
      aboutValue1Desc: "La protection de vos données et de vos actifs numériques est notre priorité absolue dans chaque déploiement.",
      aboutValue2Title: "Agilité",
      aboutValue2Desc: "Nous nous adaptons rapidement aux évolutions technologiques pour maintenir votre avantage compétitif.",
      aboutValue3Title: "Proximité",
      aboutValue3Desc: "Une équipe locale à Douala, hautement disponible et à l'écoute de vos enjeux business spécifiques.",
      aboutValue4Title: "Excellence",
      aboutValue4Desc: "Nous visons la perfection technique dans chaque architecture réseau et chaque ligne de code produite.",
      
      aboutTeamHeader: "Le Leadership GIORTECH",
      aboutTeamDesc: "Rencontrez les experts visionnaires qui pilotent l'innovation et garantissent votre succès technologique au quotidien.",
      teamRole1: "CEO & Fondateur",
      teamRole2: "Directrice Technique",
      teamRole3: "Chef de la Sécurité IT",
      teamRole4: "Directrice de Projets",
      
      aboutStatYears: "Années d'Expérience",
      aboutStatProjects: "Projets Réussis",
      aboutStatExperts: "Experts Dédiés",
      aboutStatSatisfaction: "Satisfaction Client",

      // Page Projets
      projectsHeroTitle: "Nos Réalisations & Études de Cas",
      projectsHeroDesc: "Explorez comment nous accompagnons les leaders de l'industrie dans leur transformation numérique avec des solutions IT sur-mesure et sécurisées.",
      projectsGridTitle: "Découvrez nos derniers projets",
      
      // Catégories / Filtres
      catAll: "Tous",
      catDev: "Développement",
      catUIUX: "Design UI/UX",
      catCloud: "Cloud & Hébergement",
      catCyber: "Cybersécurité",
      
      // Secteurs Clients
      clientBanking: "BANQUE",
      clientTelecoms: "TÉLÉCOMS",
      clientLogistics: "LOGISTIQUE",
      clientRetail: "RETAIL",
      clientInsurance: "ASSURANCE",
      clientIndustry: "INDUSTRIE",

      // Page Contact
      contactHeroTitle: "Contactez-nous",
      contactHeroDesc: "Discutons de vos projets techniques ou demandez un devis personnalisé. Notre équipe d'experts est prête à transformer vos défis en solutions innovantes.",
      contactFormTitle: "Envoyez-nous un message",
      
      // Formulaire Labels & Placeholders
      labelFullName: "Nom complet",
      placeholderFullName: "Jean Dupont",
      labelCompanyName: "Nom de l'entreprise",
      labelEmail: "Adresse e-mail",
      labelPhone: "Numéro de téléphone",
      labelProjectType: "Type de projet",
      labelMessage: "Message",
      placeholderMessage: "Décrivez votre projet ou votre demande...",
      btnSubmitContact: "Envoyer ma demande",
      
      // Options du sélecteur
      optWeb: "Développement Web",
      optMobile: "Application Mobile",
      optUIUX: "Design UI/UX",
      optCloud: "Cloud & Cybersécurité",
      optOther: "Autre",
      
      // Cartes d'informations
      infoLocationTitle: "Localisation",
      infoLocationCountry: "Douala, Cameroun",
      infoLocationAddress: "Makepe Bonamoussadi, face hôtel Forprolux",
      infoEmailTitle: "Email",
      infoEmailSub: "Support technique 24/7",
      infoHoursTitle: "Horaires",
      infoHoursDays: "Lundi - Samedi",
      infoHoursTime: "8h00 - 18h00",

      

      aboutTechHeader: "Notre Écosystème Technologique",
      aboutTechDesc: "Nous propulsons vos projets grâce aux technologies les plus performantes, sécurisées et évolutives du marché mondial.",
    }
  },
  en: {
    translation: {
      // Carrousel & Boutons
      homeSlide1Title: "GIORTECH - Your Digital Transformation Partner",
      homeSlide1Desc: "Technological expertise driving your growth. We design secure, innovative, and tailored digital solutions for tomorrow's leaders.",
      homeSlide2Title: "Cloud Solutions & Infrastructure",
      homeSlide2Desc: "Optimize your performance with our secure cloud architectures. Unprecedented agility for your critical operations.",
      homeSlide3Title: "Advanced Cybersecurity",
      homeSlide3Desc: "Protect your digital assets with our audits and defense solutions. Peace of mind against modern cyber threats.",
      homeSlide4Title: "UI/UX Design & Digital Branding",
      homeSlide4Desc: "User experience is at the heart of our approach. We create intuitive, aesthetic, and impactful interfaces to ensure your platforms' success.",
      discoverServices: "Discover our services",
      contactUs: "Contact us",

      // Section Expertises
      expertisesTitle: "Our Areas of Expertise",
      expertise1Title: "Web & Mobile Development",
      expertise1Desc: "Robust and scalable applications developed with the latest cutting-edge technologies.",
      expertise2Title: "UI/UX Design & Branding",
      expertise2Desc: "Immersive user experiences and strong visual identities to make a lasting impression.",
      expertise3Title: "Cloud Infrastructure",
      expertise3Desc: "Management and optimization of your servers for maximum availability and performance.",
      expertise4Title: "Cybersecurity & IT Audit",
      expertise4Desc: "Protection of your digital assets and compliance with global security standards.",

      // Section Stats
      statYears: "years of IT expertise",
      statProjects: "projects delivered",
      statCompanies: "companies supported",
      statTech: "technologies mastered",

      // Services Page
      servicesHeroTitle: "Our Services & IT Solutions",
      servicesHeroDesc: "GIORTECH supports companies in their digital transformation with sharp expertise and tailored technological solutions, designed to combine performance, security, and innovation.",
      
      services1Title: "UI/UX Design & Digital Branding",
      services1Highlight: "User experience is at the heart of our creative approach to ensure the adoption and success of your tools.",
      services1Bullet1: "In-depth UX Research & Interface Wireframing (Figma)",
      services1Bullet2: "Creation of distinctive visual identities and logos",
      services1Bullet3: "Definition of complete and consistent graphic charters",
      services1Bullet4: "Premium motion design for your digital assets",

      services2Title: "Web & Mobile Development",
      services2Highlight: "We develop robust and scalable solutions to meet the specific needs of your business.",
      services2Bullet1: "Business Web Applications (SaaS, ERP, CRM)",
      services2Bullet2: "Native Mobile Applications (iOS & Android)",
      services2Bullet3: "High-performance E-commerce platforms",
      services2Bullet4: "Application maintenance and evolution",

      services3Title: "Cloud Infrastructure & DevOps",
      services3Highlight: "Propel your business toward flexibility and high availability with secure and scalable Cloud architectures.",
      services3Bullet1: "Migration of your servers and applications to the Cloud (AWS, Azure, GCP)",
      services3Bullet2: "Containerization of your applications for agile deployment (Docker, Kubernetes)",
      services3Bullet3: "Deployment automation and continuous integration (CI/CD Pipelines)",
      services3Bullet4: "24/7 monitoring, Cloud cost optimization, and managed services",

      services4Title: "Cybersecurity & IT Audit",
      services4Highlight: "Protect your most valuable assets through a proactive approach to information security.",
      services4Bullet1: "Comprehensive security audit of information systems",
      services4Bullet2: "Penetration testing and vulnerability assessment (Pentest)",
      services4Bullet3: "Compliance management and global data protection",
      services4Bullet4: "Team training and awareness on cyber risks",

      servicesCtaTitle: "Have a technological project in mind?",
      servicesCtaDesc: "Our experts are ready to evaluate your needs and offer an optimal technical solution tailored to your budget.",
      servicesCtaButton: "Request a quote",

      // About Page
      aboutHeroTitle: "Who are we?",
      aboutHeroDesc: "Your strategic partner in IT engineering and digital transformation in Douala, dedicated to technological excellence in Central Africa.",
      
      aboutHistorySub: "Our History",
      aboutHistoryTitle: "A decade of technological excellence.",
      aboutHistoryDesc: "Born with the ambition to propel tech in Central Africa, GIORTECH has become an IT leader. Our engine? Continuous innovation and the success of our local and international partners.",
      
      aboutMissionSub: "Our Mission",
      aboutMissionTitle: "Secure and propel your infrastructure.",
      aboutMissionDesc: "We support businesses in their digital transformation by providing robust, scalable solutions perfectly aligned with international security standards.",
      
      aboutMissionCard1Title: "Continuous Innovation",
      aboutMissionCard1Desc: "Developing custom solutions that anticipate tomorrow's market needs through constant technological watch.",
      aboutMissionCard2Title: "Integrity & Rigor",
      aboutMissionCard2Desc: "Building long-term relationships of trust based on complete transparency and uncompromising technical rigor.",
      
      aboutValuesHeader: "Our Core Values",
      aboutValue1Title: "Security",
      aboutValue1Desc: "The protection of your data and digital assets is our absolute priority in every deployment.",
      aboutValue2Title: "Agility",
      aboutValue2Desc: "We quickly adapt to technological evolutions to maintain your competitive advantage.",
      aboutValue3Title: "Proximity",
      aboutValue3Desc: "A local team in Douala, highly available and attentive to your specific business challenges.",
      aboutValue4Title: "Excellence",
      aboutValue4Desc: "We aim for technical perfection in every network architecture and every line of code produced.",
      
      
      
      aboutStatYears: "Years of Experience",
      aboutStatProjects: "Successful Projects",
      aboutStatExperts: "Dedicated Experts",
      aboutStatSatisfaction: "Customer Satisfaction",

      // Projects Page
      projectsHeroTitle: "Our Achievements & Case Studies",
      projectsHeroDesc: "Explore how we support industry leaders in their digital transformation with secure and custom-built IT solutions.",
      projectsGridTitle: "Discover our latest projects",
      
      // Categories / Filters
      catAll: "All",
      catDev: "Development",
      catUIUX: "UI/UX Design",
      catCloud: "Cloud & Hosting",
      catCyber: "Cybersecurity",
      
      // Client Sectors
      clientBanking: "BANKING",
      clientTelecoms: "TELECOMS",
      clientLogistics: "LOGISTICS",
      clientRetail: "RETAIL",
      clientInsurance: "INSURANCE",
      clientIndustry: "INDUSTRY",

      aboutTechHeader: "Our Technological Ecosystem",
      aboutTechDesc: "We power your projects using the most efficient, secure, and scalable technologies on the global market.",

      // Contact Page
      contactHeroTitle: "Contact Us",
      contactHeroDesc: "Let's discuss your technical projects or request a custom quote. Our expert team is ready to turn your challenges into innovative solutions.",
      contactFormTitle: "Send us a message",
      
      // Form Labels & Placeholders
      labelFullName: "Full Name",
      placeholderFullName: "John Doe",
      labelCompanyName: "Company Name",
      labelEmail: "Email Address",
      labelPhone: "Phone Number",
      labelProjectType: "Project Type",
      labelMessage: "Message",
      placeholderMessage: "Describe your project or request...",
      btnSubmitContact: "Send Request",
      
      // Selector options
      optWeb: "Web Development",
      optMobile: "Mobile Application",
      optUIUX: "UI/UX Design",
      optCloud: "Cloud & Cybersecurity",
      optOther: "Other",
      
      // Information Cards
      infoLocationTitle: "Location",
      infoLocationCountry: "Douala, Cameroon",
      infoLocationAddress: "Makepe Bonamoussadi, opposite Forprolux hotel",
      infoEmailTitle: "Email",
      infoEmailSub: "24/7 Technical Support",
      infoHoursTitle: "Hours",
      infoHoursDays: "Monday - Friday",
      infoHoursTime: "8:00 AM - 6:00 PM"
    }
  }
};
  

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', 
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;