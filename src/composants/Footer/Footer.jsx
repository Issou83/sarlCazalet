import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css";
import CarteDeVisite from "../../assets/carteVisite.webp"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerElement linkeIN">
        <NavLink className="linkFooter" to="./contact">Contact</NavLink>
        <NavLink className="linkFooter" >Mentions légales</NavLink>
      </div>
      <div className="footerElement">
        {/* <p>2</p> */}
        <img src={CarteDeVisite} alt="Carte de visite" className="carteVisite" />
      </div>
      <div className="footerElement">
       <NavLink className="linkFooter" to="https://nkdevweb.netlify.app/">Créé par NKTdev.web </NavLink>
      </div>
    </div>
  );
};

export default Footer;
