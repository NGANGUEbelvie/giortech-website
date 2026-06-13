import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// 1. Importation de nos 5 pages
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

export default function App() {
  return (
    <Router>
      {/* C'est ici qu'on placera plus tard la <Navbar /> pour qu'elle reste visible sur toutes les pages */}
      <Navbar />
      <main style={{ minHeight: '80vh', backgroundColor: '#f9f9f9' }}>
        {/* 2. Définition des chemins (routes) de notre site */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* C'est ici qu'on placera plus tard le <Footer /> */}
    </Router>
  );
}