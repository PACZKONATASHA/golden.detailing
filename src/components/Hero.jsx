import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '../assets/images/imagen-hero.png';
import logoImg from '../assets/images/logo.png';
import './Hero.css';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#services' },
  { label: 'Trabajos', href: '#trabajos' },
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
            <img src={logoImg} alt="Golden Detailing" className="nav-logo-img" />
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


    </section>
  );
};

export default Hero;
