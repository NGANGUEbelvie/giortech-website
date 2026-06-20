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
      statTech: "technologies maîtrisées"
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
      statTech: "technologies mastered"
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