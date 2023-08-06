import React from "react";
import "./index.css";
import CarteDeVisite from "../../assets/carteVisite.webp"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerElement">
        <p></p>
      </div>
      <div className="footerElement">
        {/* <p>2</p> */}
        <img src={CarteDeVisite} alt="" className="carteVisite" />
      </div>
      <div className="footerElement">
       
      </div>
    </div>
  );
};

export default Footer;
