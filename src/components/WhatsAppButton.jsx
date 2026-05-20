import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { emoji: '🚗', text: 'Consultar servicios', message: 'Hola! Me gustaría conocer más sobre sus servicios' },
    { emoji: '📅', text: 'Agendar turno', message: 'Hola! Quiero agendar un turno' },
    { emoji: '💰', text: 'Consultar precios', message: 'Hola! Me gustaría conocer sus precios' },
    { emoji: '📍', text: 'Ubicación', message: 'Hola! ¿Dónde están ubicados?' },
  ];

  const handleQuickMessage = (message) => {
    window.open(`https://wa.me/5491135195978?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
  };

  const handleDirectMessage = () => {
    window.open('https://wa.me/5491135195978', '_blank');
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="whatsapp-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              className="whatsapp-menu"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 500 }}
            >
              <div className="whatsapp-menu-header">
                <h4>¿En qué podemos ayudarte?</h4>
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                  <FaTimes />
                </button>
              </div>
              
              <div className="quick-messages">
                {quickMessages.map((item, index) => (
                  <motion.button
                    key={index}
                    className="quick-message-btn"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleQuickMessage(item.message)}
                  >
                    <span className="message-emoji">{item.emoji}</span>
                    <span className="message-text">{item.text}</span>
                  </motion.button>
                ))}
              </div>
              
              <motion.button
                className="whatsapp-menu-direct"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDirectMessage}
              >
                <FaWhatsapp />
                Abrir WhatsApp
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button
        className="whatsapp-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <motion.div
          animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaTimes /> : <FaWhatsapp />}
        </motion.div>
        
        <motion.div
          className="whatsapp-pulse"
          animate={{
            scale: [1, 1.5, 1.5, 1],
            opacity: [1, 0, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </motion.button>
    </>
  );
};

export default WhatsAppButton;
