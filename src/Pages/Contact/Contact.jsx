import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css";
import Telephone from "../../assets/tel.png";
import Smartphone from "../../assets/smartphone.png";
import Mail from "../../assets/mail.png";
import Calendar from "../../assets/calendar.png";

const Contact = () => {
  return (
    <div>
      <div className="laPourVous">
        <h1>
          Implantée à ARUDY, entre PAU et OLORON-SAINTE-MARIE
          dans les Pyrénées-Atlantiques, notre entreprise SARL Cazalet
          intervient en urgence même les week-ends et les jours fériés pour vos
          travaux de vidange et de désherbage, dans un rayon de 50 km autour de
          notre zone d’implantation.
        </h1>
        <div className="cardContact">
          <p>Intervention d'urgence possible le week-end et jours fériés.</p>
          <div className="contactTel">
            <h2>Contactez-nous</h2>

            <div className="mobileFixe">
            <a href="tel:0559308134">
                <div className="caseContact">
                  <h3>Téléphone</h3>
                  <img src={Telephone} alt="" className="tel1" />
                  05 59 30 81 34
                </div>
              </a>
              <a href="tel:0615285911">
                <div className="caseContact">
                <h3>Mobile</h3>
                  <img src={Smartphone} alt="" className="smartphone"/>06 15 28 59 11
                </div>
              </a>
              <a href="mailto:jean-pierre.cazalet@wanadoo.fr">
                <div className="caseContact">
                <h3>E-MAIL</h3>
                <img src={Mail} alt="" className="mail" />jean-pierre.cazalet@wanadoo.fr
                </div>
              </a>
            </div>
          </div>
          <div className="horaires">
            <h2>Nos horaires</h2>
            <div className="joursHeures">
              <img src={Calendar} alt="" className="calendar" />
              <p>
                7/7 <br /> 07:00 à 20h00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
