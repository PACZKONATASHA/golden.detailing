import { motion } from 'framer-motion';
import servicesImage from '../assets/images/foto1.jpeg';
import bannerImage from '../assets/images/foto2.jpg';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      {/* Título */}
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="services-title">Nuestros Servicios</h2>
          <div className="title-underline" />
        </motion.div>
      </div>

      {/* Banner full-width fuera del container */}
      <motion.div
        className="services-banner"
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <img src={bannerImage} alt="Golden Detailing flota de autos" />
      </motion.div>

      <div className="container">
        {/* Layout principal */}
        <div className="services-layout">
          {/* Columna izquierda: imagen + card Lavado Básico */}
          <motion.div
            className="services-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="service-img-wrap">
              <img src={servicesImage} alt="Lavado Básico" className="service-img" />
              <div className="service-img-overlay" />
              <span className="service-img-label">Golden Detailing</span>
            </div>

            <div className="lavado-card glass-card">
              <h3 className="lavado-title">Lavado Básico</h3>
              <p className="lavado-desc">
                Ideal para mantener tu auto limpio, brillante y cuidado en el día a día.
              </p>

              <div className="lavado-includes">
                <h4 className="includes-label">Incluye</h4>
                <ul className="includes-list">
                  <li><span className="star">✦</span> Lavado exterior</li>
                  <li><span className="star">✦</span> Limpieza básica de interior</li>
                  <li><span className="star">✦</span> Encerado de ruedas</li>
                </ul>
              </div>

              <motion.button
                className="btn-red shine-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open(
                    'https://wa.me/5491234567890?text=Hola!%20Quiero%20el%20servicio%20de%20Lavado%20B%C3%A1sico',
                    '_blank'
                  )
                }
              >
                Reservar turno
              </motion.button>
            </div>
          </motion.div>

          {/* Columna derecha: card Resultado */}
          <motion.div
            className="services-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="resultado-card glass-card">
              <div className="resultado-icon">✦</div>
              <h3 className="resultado-title">Resultado</h3>
              <p className="resultado-desc">
                Cada lavado está pensado para darte resultados visibles desde el primer momento.
              </p>

              <ul className="resultado-list">
                <li>
                  <span className="check">✔</span>
                  <div>
                    <strong>Limpieza rápida y efectiva</strong>
                    <p>Sin residuos, sin marcas de agua.</p>
                  </div>
                </li>
                <li>
                  <span className="check">✔</span>
                  <div>
                    <strong>Mejor apariencia exterior</strong>
                    <p>Pintura realzada y carrocería reluciente.</p>
                  </div>
                </li>
                <li>
                  <span className="check">✔</span>
                  <div>
                    <strong>Terminación prolija y brillante</strong>
                    <p>Acabado profesional en cada rincón.</p>
                  </div>
                </li>
              </ul>

              <div className="resultado-cta">
                <motion.button
                  className="btn-red shine-effect"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      'https://wa.me/5491234567890?text=Hola!%20Quiero%20consultar%20sobre%20sus%20servicios',
                      '_blank'
                    )
                  }
                >
                  Consultar por WhatsApp
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
