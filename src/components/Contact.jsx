import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const handleQuickBooking = (service) => {
    const message = `Hola! Quiero agendar un turno para: ${service}`;
    window.open(`https://wa.me/5491234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  const quickServices = [
    'Lavado Básico',
    'Detailing Interior',
    'Detailing Premium',
    'Servicio Personalizado',
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '70px' }}
        >
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
            color: '#fff',
            letterSpacing: '4px',
            marginBottom: '16px',
          }}>
            Agendá tu Turno
          </h2>
          <div style={{
            width: '70px',
            height: '3px',
            background: 'var(--rojo)',
            margin: '0 auto 20px',
            boxShadow: '0 0 16px var(--rojo-glow)',
          }} />
          <p className="contact-subtitle">
            Reservá en segundos y transformá tu auto
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Turnos Rápidos */}
          <motion.div
            className="booking-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Turnos Rápidos</h3>
            <p className="booking-description">
              Seleccioná tu servicio y agendá por WhatsApp
            </p>

            <div className="quick-services">
              {quickServices.map((service, index) => (
                <motion.button
                  key={index}
                  className="quick-service-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleQuickBooking(service)}
                >
                  <span>{service}</span>
                  <FaWhatsapp />
                </motion.button>
              ))}
            </div>

            <div className="booking-cta">
              <motion.button
                className="btn-red shine-effect"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() =>
                  window.open(
                    'https://wa.me/5491234567890?text=Hola!%20Quiero%20agendar%20un%20turno',
                    '_blank'
                  )
                }
              >
                <FaWhatsapp size={18} />
                Agendar por WhatsApp
              </motion.button>
            </div>
          </motion.div>

          {/* Información */}
          <motion.div
            className="info-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Información</h3>

            <div className="info-items">
              <div className="info-item-card">
                <div className="info-icon-wrapper">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h4>Ubicación</h4>
                  <p>Olazábal y Mendoza<br />Villa Caraza, Buenos Aires</p>
                  <a href="https://maps.google.com/?q=Olazabal+y+Mendoza,+Villa+Caraza,+Lanus,+Buenos+Aires" target="_blank" rel="noopener noreferrer">
                    Ver en Maps →
                  </a>
                </div>
              </div>

              <div className="info-item-card">
                <div className="info-icon-wrapper">
                  <FaClock />
                </div>
                <div className="info-content">
                  <h4>Horarios</h4>
                  <p>Lun - Vie: 9:00 - 19:00<br />Sábados: 9:00 - 14:00</p>
                </div>
              </div>

              <div className="info-item-card">
                <div className="info-icon-wrapper">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h4>Teléfono</h4>
                  <p>+54 9 11 1234-5678</p>
                  <a href="https://wa.me/5491234567890" target="_blank" rel="noopener noreferrer">
                    WhatsApp →
                  </a>
                </div>
              </div>

              <div className="info-item-card">
                <div className="info-icon-wrapper">
                  <FaInstagram />
                </div>
                <div className="info-content">
                  <h4>Instagram</h4>
                  <p>@goldendetailing</p>
                  <a href="https://instagram.com/goldendetailing" target="_blank" rel="noopener noreferrer">
                    Seguinos →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mapa */}
        <motion.div
          className="map-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            className="map-iframe"
            title="Ubicación Golden Detailing"
            src="https://maps.google.com/maps?q=Olazabal+y+Mendoza,+Villa+Caraza,+Lanus,+Buenos+Aires,+Argentina&output=embed&z=16"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>


      </div>
    </section>
  );
};

export default Contact;
