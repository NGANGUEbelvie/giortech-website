import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        


        {/* Colonne 2 : Liens Rapides */}
        <div className={styles.footerCol}>
          <h3>Liens Rapides</h3>
          <nav className={styles.footerNav}>
            <Link to="/">Accueil</Link>
            <Link to="/services">Services</Link>
            <Link to="/a-propos">À Propos</Link>
            <Link to="/projets">Projets</Link>
          </nav>
        </div>

        {/* Colonne 3 : Contact */}
        <div className={styles.footerCol}>
          <h3>Contact</h3>
          <ul className={styles.contactList}>
            <li>📍 Douala, Cameroun</li>
            <li>✉️ info@giortech.com</li>
            <li>📞 +237 691 499 305 </li>
          </ul>
        </div>

        {/* Colonne 4 : Newsletter */}

      </div>
      
      <div className={styles.footerBottom}>
        <p>© 2026 GIORTECH. All rights reserved.</p>
      </div>
    </footer>
  );
}