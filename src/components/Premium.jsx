import { motion } from 'framer-motion';
import './Premium.css';

const cards = [
  {
    number: '01',
    title: 'Lavado Exterior Premium',
    desc: 'Limpieza profunda de carrocería con productos profesionales que eliminan suciedad sin dañar la pintura.',
    details: null,
  },
  {
    number: '02',
    title: 'Sellado Híbrido',
    desc: 'Aplicación de protección híbrida que aporta brillo intenso, repelencia al agua y mayor duración frente a agentes externos.',
    details: null,
  },
  {
    number: '03',
    title: 'Detallado Interior Completo',
    desc: 'Limpieza minuciosa del habitáculo para recuperar limpieza, frescura y terminaciones impecables.',
    details: [
      'Limpieza de torpedo',
      'Limpieza y detallado de las 4 puertas',
      'Detallado de pasaruedas',
      'Limpieza profunda de llantas',
    ],
  },
  {
    number: '04',
    title: 'Acondicionador Interior con Protección UV',
    desc: 'Protección para plásticos y superficies interiores contra resequedad, desgaste y rayos solares.',
    details: null,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const Premium = () => {
  return (
    <section id="premium" className="premium-section">
      {/* Decoración de fondo */}
      <div className="premium-bg-glow" />

      <div className="container">
        {/* Encabezado */}
        <motion.div
          className="premium-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="premium-eyebrow">✦ Servicio profesional</span>
          <h2 className="premium-title">Detailing Premium<br />para tu Auto</h2>
          <p className="premium-subtitle">
            Devolvemos brillo, protección y sensación de auto nuevo con un servicio de
            detailing profesional pensado para cuidar cada detalle.
          </p>
        </motion.div>

        {/* Subtítulo de tarjetas */}
        <motion.div
          className="premium-cards-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="cards-header-line" />
          <span className="cards-header-text">Nuestro servicio incluye</span>
          <div className="cards-header-line" />
        </motion.div>

        {/* Grid de tarjetas */}
        <div className="premium-grid">
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              className="premium-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="card-body">
                <div className="card-top-line" />
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
                {card.details && (
                  <ul className="card-details">
                    {card.details.map((d, idx) => (
                      <li key={idx}>
                        <span className="card-dot" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="premium-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="cta-text">¿Querés el paquete completo para tu auto?</p>
          <motion.button
            className="btn-red shine-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                'https://wa.me/5491234567890?text=Hola!%20Quiero%20consultar%20por%20el%20Detailing%20Premium',
                '_blank'
              )
            }
          >
            Consultar Detailing Premium
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Premium;
