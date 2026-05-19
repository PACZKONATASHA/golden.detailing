import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import foto1 from '../assets/images/foto1.jpeg';
import foto2 from '../assets/images/foto2.jpg';
import foto3 from '../assets/images/foto3.jpg';
import foto5 from '../assets/images/foto5.jpg';
import foto6 from '../assets/images/foto6.jpg';
import './Gallery.css';

const photos = [
  { src: foto2, label: 'Exterior · Sellado Híbrido', featured: true },
  { src: foto1, label: 'Exterior · Pulido' },
  { src: foto6, label: 'Lavado Profesional' },
  { src: foto5, label: 'Ruedas · Detailing' },
  { src: foto3, label: 'Interior · Limpieza' },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  const openPhoto = (photo) => {
    setSelected(photo);
    document.body.style.overflow = 'hidden';
  };

  const closePhoto = () => {
    setSelected(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="gallery-section" id="trabajos">
      <div className="container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="gallery-eyebrow">✦ Resultados reales · clientes reales</span>
          <h2 className="gallery-title">Nuestros Trabajos</h2>
          <div className="gallery-underline" />
          <p className="gallery-sub">
            Tocá cualquier foto para verla en detalle.
          </p>
        </motion.div>
      </div>

      <div className="gallery-grid">
        {/* Foto grande destacada */}
        <motion.div
          className="gallery-item gallery-item--featured"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onClick={() => openPhoto(photos[0])}
        >
          <img src={photos[0].src} alt={photos[0].label} loading="lazy" />
          <div className="gallery-overlay">
            <span className="gallery-tag">{photos[0].label}</span>
            <span className="gallery-zoom-hint">Ver foto completa +</span>
          </div>
        </motion.div>

        {/* Columna derecha — 4 fotos en 2x2 */}
        <div className="gallery-col">
          {photos.slice(1).map((photo, i) => (
            <motion.div
              key={i}
              className="gallery-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openPhoto(photo)}
            >
              <img src={photo.src} alt={photo.label} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-tag">{photo.label}</span>
                <span className="gallery-zoom-hint">Ver foto completa +</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pie de sección */}
      <div className="container">
        <motion.div
          className="gallery-footer-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span>¿Querés resultados así para tu auto?</span>
          <a href="#contact" className="gallery-cta-link">Agendá tu turno →</a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closePhoto}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.src} alt={selected.label} />
              <div className="lightbox-info">
                <span className="lightbox-label">{selected.label}</span>
                <button className="lightbox-close" onClick={closePhoto} aria-label="Cerrar">✕</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

