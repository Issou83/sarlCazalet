import React from "react";
import "./index.css";
import Telephone from "../../assets/tel.png";
import Smartphone from "../../assets/smartphone.png";
import Mail from "../../assets/mail.png";
import Calendar from "../../assets/calendar.png"

const Contact = () => {
  return (
    <div>
      <div className="laPourVous">
        <h1>
          Implantée à Sévignacq-Meyracq, près d’Arudy et d’Oloron-Sainte-Marie
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
              <div className="caseContact">
                <h3>Téléphone</h3>
                <img src={Telephone} alt="" className="iconContact tel1" />
                <p>05 59 30 81 34</p>
              </div>
              <div className="caseContact">
                <h3>Mobile</h3>
                <img
                  src={Smartphone}
                  alt=""
                  className="iconContact smartphone"
                />

                <p>06 15 28 59 11</p>
              </div>
              <div className="caseContact">
                <h3>Email</h3>
                <img src={Mail} alt="" className="iconContact mail" />

                <p>jean-pierre.cazalet@wanadoo.fr</p>
              </div>
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
