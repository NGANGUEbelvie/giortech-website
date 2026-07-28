import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
      localStorage.setItem('giortech_token', response.data.token);
      navigate('/giortech-admin-secretariat'); // Redirection vers le dashboard
    } catch (err) {
      setError(err.response?.data?.detail || 'Identifiants incorrects ou serveur indisponible.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleLogin} className={styles.loginCard}>
        <h2>Connexion Secrétariat</h2>
        <p>Espace de gestion GIORTECH</p>
        
        {error && <div className={styles.errorMessage}>{error}</div>}

        <div className={styles.inputGroup}>
          <label>Adresse Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" placeholder="secretaire@giortech.com" required />
        </div>

        <div className={styles.inputGroup}>
          <label>Mot de passe</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" placeholder="••••••••" required />
        </div>

        <button type="submit" className={styles.btnLogin}>Se connecter</button>
      </form>
    </div>
  );
}