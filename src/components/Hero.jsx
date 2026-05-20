import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/images/logo.png';
import img1  from '../assets/images/imagen-hero.png';
import img2  from '../assets/images/foto2.hero.jpeg';
import img3  from '../assets/images/foto.3hero.jpeg';
import img4  from '../assets/images/foto4.hero.jpeg';
import img5  from '../assets/images/foto.5hero.jpeg';
import './Hero.css';

const SLIDES = [img1, img2, img3, img4, img5];
const INTERVAL = 4500; // ms por foto

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#services' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Contacto', href: '#contact' },
];

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="inicio">

      {/* ===== CARRUSEL DE FONDO ===== */}
      <div className="hero-bg">
        <AnimatePresence>
          <motion.img
            key={current}
            src={SLIDES[current]}
            alt="Golden Detailing"
            className="hero-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
        </AnimatePresence>
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
          <a href="#inicio" className="nav-logo">
            <img src={logoImg} alt="Golden Detailing" className="nav-logo-img" />
          </a>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="nav-cta">Reservar turno</a>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Abrir menú"
          >
            <span /><span /><span />
          </button>
        </div>
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

      {/* ===== TARJETA DE TEXTO ===== */}
      <div className="hero-card-wrapper">
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <span className="hero-card-tag">Golden Detailing</span>
          <h1 className="hero-card-title">Lavado &amp; Servicio<br />para tu auto</h1>
          <p className="hero-card-desc">Pulido · Protección cerámica · Detailing premium</p>
          <div className="hero-card-actions">
            <a href="#contact" className="btn-primary">Reservar ahora</a>
            <a href="#services" className="btn-ghost">Ver servicios</a>
          </div>
        </motion.div>
      </div>

      {/* ===== PUNTOS INDICADORES ===== */}
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
