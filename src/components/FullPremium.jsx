import { motion } from 'framer-motion';
import './FullPremium.css';

const exteriorItems = [
  'Lavado exterior premium',
  'Desarme de ruedas',
  'Limpieza profunda de pasaruedas',
  'Encerado de llantas',
  'Limpieza de burletes y plásticos exteriores',
  'Descontaminado de pintura',
  'Encerado a máquina',
];

const interiorItems = [
  'Aspirado completo',
  'Desarme parcial de tapizados',
  'Limpieza profunda de torpedo, puertas y parlantes',
  'Acondicionador interior con protección UV',
];

const resultados = [
  'Brillo profundo',
  'Protección duradera',
  'Interior renovado',
  'Sensación de auto nuevo',
];

const FullPremium = () => {
  return (
    <section id="full-premium" className="fp-section">
      <div className="fp-bg-glow" />

      <div className="container">
        {/* Header */}
        <motion.div
          className="fp-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="fp-eyebrow">✦ Servicio completo</span>
          <h2 className="fp-title">Detailing Full Premium</h2>
          <p className="fp-subtitle">
            Un servicio completo para devolverle brillo, limpieza y protección a tu auto con terminaciones premium.
          </p>
        </motion.div>

        {/* Contenido principal */}
        <div className="fp-content">
          {/* Columna: Incluye (exterior) */}
          <motion.div
            className="fp-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="fp-col-label">
              <span className="fp-col-line" />
              <h3 className="fp-col-title">Incluye</h3>
            </div>
            <ul className="fp-list">
              {exteriorItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="fp-list-item"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <span className="fp-star">✦</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Columna: Detallado Interior + Resultado */}
          <motion.div
            className="fp-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="fp-col-label">
              <span className="fp-col-line" />
              <h3 className="fp-col-title">Detallado Interior</h3>
            </div>
            <ul className="fp-list">
              {interiorItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="fp-list-item"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <span className="fp-star">✦</span>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Resultado */}
            <div className="fp-resultado">
              <h4 className="fp-resultado-title">Resultado</h4>
              <ul className="fp-resultado-list">
                {resultados.map((r, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <span className="fp-check">✔</span>
                    {r}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Cita */}
        <motion.div
          className="fp-quote-wrap"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <blockquote className="fp-quote">"Cada detalle importa."</blockquote>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="fp-cta"
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
                'https://wa.me/5491234567890?text=Hola!%20Quiero%20consultar%20por%20el%20Detailing%20Full%20Premium',
                '_blank'
              )
            }
          >
            Consultar Detailing Full Premium
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FullPremium;
