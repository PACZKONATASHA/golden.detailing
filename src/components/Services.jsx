import { motion } from 'framer-motion';
import bannerImage from '../assets/images/foto2.jpg';
import './Services.css';

const otrosServicios = [
  {
    title: 'Lavado de Motor',
    desc: 'Limpieza segura y detallada del motor para mejorar su estética y mantenimiento.',
  },
  {
    title: 'Preparaciones Preventa',
    desc: 'Acondicionamiento estético completo para realzar la imagen del vehículo antes de venderlo.',
  },
  {
    title: 'Atención para Concesionarios',
    desc: 'Servicio personalizado para agencias y concesionarios con soluciones adaptadas a cada necesidad.',
  },
  {
    title: 'Limpieza de Motor',
    desc: 'Opción básica o full, con limpieza profunda y terminación detallada.',
  },
  {
    title: 'Tratamiento de Pintura',
    desc: 'Abrillantado o tratamiento acrílico para recuperar brillo, profundidad y protección.',
  },
  {
    title: 'Pulido de Ópticas',
    desc: 'Restauración de ópticas opacas o desgastadas para mejorar estética y visibilidad.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

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
          <h2 className="services-title">Otros Servicios</h2>
          <div className="title-underline" />
        </motion.div>
      </div>

      {/* Banner full-width */}
      <motion.div
        className="services-banner"
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <img src={bannerImage} alt="Golden Detailing — otros servicios" />
      </motion.div>

      <div className="container">
        {/* Grid de 6 servicios */}
        <div className="otros-grid">
          {otrosServicios.map((srv, i) => (
            <motion.div
              key={i}
              className="otro-card glass-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <span className="otro-icon">✦</span>
              <h3 className="otro-title">{srv.title}</h3>
              <p className="otro-desc">{srv.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-red shine-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                'https://wa.me/5491135195978?text=Hola!%20Quiero%20consultar%20sobre%20sus%20servicios',
                '_blank'
              )
            }
          >
            Consultar por WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
