import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        
        {/* Colonne 1 : Identité */}
        <div className={styles.footerCol}>
          <span className={styles.footerLogo}>GIOR<span>TECH</span></span>
          <p className={styles.footerDesc}>Votre partenaire de confiance en ingénierie logicielle et transformation digitale au Cameroun.</p>
        </div>

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
            <li>✉️ contact@giortech.com</li>
            <li>📞 +237 6XX XXX XXX</li>
          </ul>
        </div>

        {/* Colonne 4 : Newsletter */}
        <div className={styles.footerCol}>
          <h3>Newsletter</h3>
          <p className={styles.newsletterText}>Recevez nos dernières actualités technologiques.</p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Votre email" />
            <button>S'inscrire</button>
          </div>
        </div>

      </div>
      
      <div className={styles.footerBottom}>
        <p>© 2026 GIORTECH. All rights reserved.</p>
      </div>
    </footer>
  );
}