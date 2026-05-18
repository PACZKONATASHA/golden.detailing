import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import heroImage from '../assets/imagen2.png';
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

      {/* Navbar flotante */}
      <motion.nav
        className="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="nav-inner">
          <div className="logo">
            <span className="logo-main">Golden</span>
            <span className="logo-sub">Detailing</span>
          </div>

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

      {/* Contenido principal */}
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="hero-title">
            Lavado<br />
            profesional<br />
            <span className="hero-title-red">para tu auto</span>
          </h1>

          <p className="hero-subtitle">
            Reservá tu turno por WhatsApp y dejá tu vehículo
            limpio, brillante y listo para salir.
          </p>

          <motion.button
            className="btn-red shine-effect hero-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                'https://wa.me/5491234567890?text=Hola!%20Quiero%20reservar%20un%20turno',
                '_blank'
              )
            }
          >
            <FaWhatsapp size={20} />
            Reservar turno
          </motion.button>
        </motion.div>
      </div>

      {/* Diagonal roja inferior */}
      <div className="hero-diagonal-wrap">
        <div className="hero-diagonal-red" />
        <div className="hero-diagonal-dark" />
      </div>
    </section>
  );
};

export default Hero;
