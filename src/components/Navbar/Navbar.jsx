import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo_giortech from '../../assets/Logo_giortech.png';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour fermer le menu mobile quand on clique sur un lien
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo de l'entreprise */}

        <Link to="/" className={styles.logoContainer} onClick={closeMenu}>
          <img src={Logo_giortech} alt="Logo Officiel GIORTECH" className={styles.logoImg} />
        </Link>

        {/* Bouton Menu Burger pour le Responsive Mobile */}
        <button 
          className={`${styles.burger} ${isOpen ? styles.active : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu de navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Liens de navigation */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={closeMenu} end>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/a-propos" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={closeMenu}>
              À Propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/projets" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={closeMenu}>
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => styles.contactBtn} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}