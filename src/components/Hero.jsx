import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '../assets/imagen-hero.png';
import './Hero.css';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#services' },
  { label: 'Contacto', href: '#contact' },
];

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hero" id="inicio">
      {/* Fondo */}
      <div className="hero-bg">
        <img src={heroImage} alt="Golden Detailing auto deportivo" />
        <div className="hero-overlay" />
      </div>

      {/* ===== NAVBAR ===== */}
      <motion.header
        className="navbar"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="nav-container">
          {/* Logo */}
          <a href="#inicio" className="nav-logo">
            <span className="nav-logo-golden">Golden</span>
            <span className="nav-logo-detailing"> Detailing</span>
          </a>

          {/* Links desktop */}
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Botón contacto desktop */}
          <a href="#contact" className="nav-cta">Reservar turno</a>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Abrir menú"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Menú mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="nav-mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="nav-mobile-cta" onClick={() => setMenuOpen(false)}>
                Reservar turno
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ===== HERO CONTENT ===== */}
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <p className="hero-tag">Detailing profesional premium</p>
          <h1 className="hero-title">
            Tu auto,<br />
            impecable<br />
            <span className="hero-accent">siempre.</span>
          </h1>
          <p className="hero-subtitle">
            Lavado, pulido y protección cerámica de primera calidad.<br />
            Resultados que se notan desde el primer servicio.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Reservar ahora</a>
            <a href="#services" className="btn-ghost">Ver servicios</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
