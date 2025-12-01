import Icon from "../../components/common/Icon/Icon";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Conoce HiveElectronics.com</h3>
            <ul>
              <li>
                <a href="placeholder">Acerca de nosotros</a>
              </li>
              <li>
                <a href="placeholder">Prensa</a>
              </li>
              <li>
                <a href="placeholder">Misión</a>
              </li>
              <li>
                <a href="placeholder">Contáctanos</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Atención al cliente</h3>
            <ul>
              <li>
                <a href="placeholder">Centro de Ayuda</a>
              </li>
              <li>
                <a href="placeholder">Reclamos</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Mi cuenta</h3>
            <ul>
              <li>
                <a href="placeholder">Mi cuenta</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Síguenos</h3>
            <ul>
              <li>
                <a href="placeholder">
                  Facebook<Icon className="social-icons" name="facebook" size={20}></Icon>
                </a>
              </li>
              <li>
                <a href="placeholder">X<Icon className="social-icons" name="twitter" size={20}></Icon></a>
              </li>
              <li>
                <a href="placeholder">Instagram<Icon className="social-icons" name="instagram" size={20}></Icon></a>
              </li>
              <li>
                <a href="placeholder">Youtube<Icon className="social-icons" name="youtube" size={20}></Icon></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} HiveElectronics.com Todos los
            derechos reservados
          </span>
          <nav>
            <a href="/privacy">Política de Privacidad</a>
            <a href="/terms">Términos y Condiciones</a>
            <a href="/cookies">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
