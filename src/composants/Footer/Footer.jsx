import { NavLink } from "react-router-dom";
import CarteDeVisite from "../../assets/carteVisite.webp";
import "./index.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <strong>SARL Cazalet</strong>
        <span>Hydrocurage, assainissement et location de matériel à Arudy.</span>
      </div>

      <img src={CarteDeVisite} alt="Carte de visite SARL Cazalet" className="footer__card" />

      <nav className="footer__links" aria-label="Liens secondaires">
        <NavLink to="/contact">Contact</NavLink>
        <span>Mentions légales</span>
        <a href="https://nkdevweb.netlify.app/">Créé par NKTdev.web</a>
      </nav>
    </footer>
  );
}

export default Footer;
