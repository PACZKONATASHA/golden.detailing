import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import heroImage from '../assets/imagen-hero.png';
import './Hero.css';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="hero" id="inicio">
      {/* Imagen de fondo */}
      <div className="hero-bg">
        <img src={heroImage} alt="Golden Detailing" />
        <div className="hero-overlay" />
      </div>

      {/* Navbar flotante circular */}
      <motion.nav
        className="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="nav-inner">
          <span className="logo">Golden</span>
          <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contactos</a></li>
          </ul>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menú"
          >
            <span /><span /><span />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="nav-mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
            >
              <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
              <li><a href="#services" onClick={closeMenu}>Servicios</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contactos</a></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Contenido principal - Título en el cielo */}
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="hero-title">
            Lavado<br />
            profesional<br />
            <span className="hero-title-red">para tu auto</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
