import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import fotoFooter from '../assets/images/foto- foother.jpeg';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Imagen de fondo decorativa */}
      <div className="footer-bg-image">
        <img src={fotoFooter} alt="" aria-hidden="true" />
      </div>
      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-section brand">
            <div className="footer-logo">
              <span className="logo-text">Golden</span>
              <span className="logo-detail">Detailing</span>
            </div>
            <p className="footer-tagline">
              Detailing profesional premium.<br />
              Perfección en cada detalle.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com/golden.detailing__" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://wa.me/5491135195978" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="footer-section">
            <h4>Navegación</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#premium">Detailing Premium</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="footer-section">
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li><a href="#services">Lavado Básico</a></li>
              <li><a href="#premium">Lavado Exterior Premium</a></li>
              <li><a href="#premium">Detallado Interior</a></li>
              <li><a href="#premium">Sellado Híbrido</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul className="footer-contact">
              <li>
                <a href="https://wa.me/5491135195978" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                  <span>+54 9 11 3519-5978</span>
                </a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Olazábal y Mendoza, Villa Caraza, Buenos Aires</span>
              </li>
              <li>
                <a href="https://instagram.com/golden.detailing__" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                  <span>@golden.detailing__</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} Golden Detailing. Todos los derechos reservados.</p>
          </div>
          <div className="footer-credits">
            <p>Hecho con <FaHeart className="heart-icon" /> por <strong>Paczko Natasha</strong> · Diseño Web</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
