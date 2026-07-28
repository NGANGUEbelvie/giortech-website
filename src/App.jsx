import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Career from './pages/Career/career';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';

export default function App() {
  return (
    <Router>
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Espace Secrétariat Sécurisé */}
          <Route path="/giortech-login-secure" element={<Login />} />
          <Route path="/giortech-admin-secretariat" element={<Dashboard />} />

        </Routes>
      </main>

      <Footer />
    </Router>
  );
}