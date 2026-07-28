import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Dashboard.module.css';

export default function SecretaryDashboard() {
  const [offers, setOffers] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    department: 'Cloud & DevOps',
    location: 'Douala',
    type: 'Full-time',
    description: ''
  });
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('offers'); // 'offers' ou 'applications'
  const [applications, setApplications] = useState([]);
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();
  const token = localStorage.getItem('giortech_token');

  useEffect(() => {
    if (!token) {
      navigate('/giortech-login-secure');
      return;
    }
    fetchOffers();
    fetchApplications(); // Charge le vivier au démarrage
    fetchLeads(); // Charge les leads au démarrage
  }, [token, navigate]);
    

  const fetchOffers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/jobs');
      setOffers(response.data);
    } catch (err) {
      setError('Impossible de récupérer les offres depuis MySQL.');
    }
  };

  //Récupérer et filtrer le vivier de candidatures
  const fetchApplications = async (searchQuery = '') => {
    try {
      const url = searchQuery 
        ? `http://127.0.0.1:8000/api/applications?search=${encodeURIComponent(searchQuery)}`
        : 'http://127.0.0.1:8000/api/applications';
        
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setApplications(response.data);
    } catch (err) {
      console.error("Erreur lors de la récupération des CV:", err);
      if (err.response?.status === 401) {
        handleSessionExpired();
      }
    }
  };

  const fetchLeads = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/leads', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLeads(response.data);
    } catch (err) {
      console.error("Erreur récupération leads:", err);
    }
  };

  //Déclenchée à chaque lettre tapée dans la barre de recherche
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchApplications(value); // Appelle l'API en temps réel avec le filtre
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSessionExpired = () => {
    alert('Session expirée. Veuillez vous reconnecter.');
    localStorage.removeItem('giortech_token');
    navigate('/giortech-login-secure');
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) return;

    try {
      await axios.post(
        'http://127.0.0.1:8000/api/jobs', 
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setFormData({ ...formData, title: '', description: '' });
      alert('Offre publiée avec succès !');
      fetchOffers();
    } catch (err) {
      if (err.response?.status === 401) {
        alert('Session expirée. Veuillez vous reconnecter.');
        navigate('/giortech-login-secure');
      } else {
        alert('Erreur lors de la publication.');
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Voulez-vous supprimer cette offre définitivement ?')) {
      try {
        await axios.delete(
          `http://127.0.0.1:8000/api/jobs/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert('Offre supprimée !');
        fetchOffers();
      } catch (err) {
        alert('Erreur lors de la suppression.');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('giortech_token');
    navigate('/giortech-login-secure');
  };

  return (
    <div className={styles.dashboardContainer}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h1>Bienvenue dans votre espace!</h1>
          <p className={styles.subtitle}>Gestion des offres </p>
        </div>
        <button onClick={handleLogout} style={{ padding: '10px 20px', background: '#0099CC', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Déconnexion
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', gap: '10px', marginBottom: '25px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
        <button 
          onClick={() => setActiveTab('offers')}
          style={{ padding: '10px 20px', background: activeTab === 'offers' ? '#0099CC' : 'transparent', color: activeTab === 'offers' ? '#fff' : '#475569', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', transition: 'all 0.2s' }}
        >
           Gestion des Offres ({offers.length})
        </button>
        <button 
          onClick={() => setActiveTab('applications')}
          style={{ padding: '10px 20px', background: activeTab === 'applications' ? '#0099CC' : 'transparent', color: activeTab === 'applications' ? '#fff' : '#475569', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', transition: 'all 0.2s' }}
        >
          📁 Vivier de Candidatures ({applications.length})
        </button>
        <button 
          onClick={() => setActiveTab('leads')}
          style={{ padding: '10px 20px', background: activeTab === 'leads' ? '#0099CC' : 'transparent', color: activeTab === 'leads' ? '#fff' : '#475569', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
        >
          Leads & Contacts ({leads.length})
        </button>
      </div>

      {/* VUE 1 : GESTION DES OFFRES (Ton code d'origine encapsulé) */}
      {activeTab === 'offers' && (
        <>

      <section className={styles.formSection}>
        <h2>Créer une nouvelle offre</h2>
        <form onSubmit={handleSubmit} className={styles.formGrid}>
          <div className={styles.inputGroup}>
            <label>Intitulé du poste</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Ex: Administrateur Système" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Département</label>
            <select name="department" value={formData.department} onChange={handleChange}>
              <option value="Cloud & DevOps">Cloud & DevOps</option>
              <option value="Web Applications">Web Applications</option>
              <option value="Security">Security</option>
              <option value="Infrastructure">UI/UX</option>
              <option value="Infrastructure">Commercial</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Lieu</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Ex: Douala" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Type de contrat</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className={styles.textareaGroup} style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label>Description du poste</label>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Missions, profils recherchés..." style={{ minHeight: '100px', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} required />
          </div>
          <button type="submit" className={styles.btnSubmit}>Publier l'offre</button>
        </form>
      </section>

      <section className={styles.tableSection}>
        <table className={styles.jobsTable}>
          <thead>
            <tr>
              <th>Poste</th>
              <th>Département</th>
              <th>Lieu</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {offers.length === 0 ? (
              <tr><td colSpan="5" style={{ textAlign: 'center' }}>Aucune offre en base de données.</td></tr>
            ) : (
              offers.map((offer) => (
                <tr key={offer.id}>
                  <td><strong>{offer.title}</strong></td>
                  <td>{offer.department}</td>
                  <td>{offer.location}</td>
                  <td>{offer.type}</td>
                  <td><button onClick={() => handleDelete(offer.id)} className={styles.btnDelete}>Supprimer</button></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </>
)}

{/*VIVIER DE CANDIDATURES (Recherche et consultation des CV) */}
      {activeTab === 'applications' && (
        <section className={styles.tableSection}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', gap: '15px', flexWrap: 'wrap' }}>
            <h2>Candidatures reçues</h2>
            
            {/* BARRE DE RECHERCHE TEXTUELLE */}
            <input 
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="🔍 Rechercher un profil (Nom, email, poste, service...)"
              style={{ padding: '10px 15px', width: '350px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
            />
          </div>

          <table className={styles.jobsTable}>
            <thead>
              <tr>
                <th>Candidat</th>
                <th>Email</th>
                <th>Poste ciblé</th>
                <th>Département</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '20px', color: '#64748b' }}>
                    {searchTerm ? "Aucun profil ne correspond à votre recherche." : "Aucune candidature reçue pour le moment."}
                  </td>
                </tr>
              ) : (
                applications.map((app) => (
                  <tr key={app.id}>
                    <td><strong>{app.fullname}</strong></td>
                    <td><a href={`mailto:${app.email}`} style={{ color: '#0099CC', textDecoration: 'none' }}>{app.email}</a></td>
                    <td><span style={{ background: '#eff6ff', color: '#1e40af', padding: '4px 8px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '500' }}>{app.job_title}</span></td>
                    <td>{app.department}</td>
                    <td>{new Date(app.submitted_at).toLocaleDateString('fr-FR')}</td>
                    <td>
                      {/* Pour un projet local, ce bouton affiche une alerte avec l'emplacement du fichier physique enregistré par FastAPI */}
                      <button 
                        onClick={() => {
                            // Transforme les antislashs Windows (\) en slashs web (/) si nécessaire
                            const cleanPath = app.cv_path.replace(/\\/g, '/');
                            window.open(`http://127.0.0.1:8000/${cleanPath}`, '_blank');
                        }}
                        className={styles.btnSubmit}
                        style={{ padding: '6px 12px', fontSize: '0.85rem', margin: 0 }}
                      >
                        Voir le CV
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      )}

      {/* LEADS & CONTACTS */}
      {activeTab === 'leads' && (
        <section className={styles.tableSection}>
          <h2>Leads de Contact Reçus</h2>
          <table className={styles.jobsTable} style={{ marginTop: '15px' }}>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 ? (
                <tr><td colSpan="4" style={{ textAlign: 'center', padding: '20px', color: '#64748b' }}>Aucun lead de contact enregistré.</td></tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id}>
                    <td><strong>{lead.fullname || 'N/A'}</strong></td>
                    <td><a href={`mailto:${lead.email}`} style={{ color: '#0099CC', textDecoration: 'none' }}>{lead.email}</a></td>
                    <td>{lead.message || '—'}</td>
                    <td>{new Date(lead.created_at).toLocaleDateString('fr-FR')}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      )}

    </div>
  );
}