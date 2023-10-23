import React, { useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Circle, Marker } from "react-leaflet";
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';


import "./index.css";
import Telephone from "../../assets/tel.png";
import Smartphone from "../../assets/smartphone.png";
import Mail from "../../assets/mail.png";
import Calendar from "../../assets/calendar.png";

const Contact = () => {
  useEffect(() => {
    // Fix for the leaflet map icons
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
    });
  }, []);
  

  const position = [43.1027198139486, -0.4270420423279545];

  return (
    <div className="mainContact">
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
                  <img src={Telephone} alt="Téléphone" className="tel1" />
                  05 59 30 81 34
                </div>
              </a>
              <a href="tel:0615285911">
                <div className="caseContact">
                <h3>Mobile</h3>
                  <img src={Smartphone} alt="Smartphone" className="smartphone"/>06 15 28 59 11
                </div>
              </a>
              <a href="mailto:jean-pierre.cazalet@wanadoo.fr">
                <div className="caseContact">
                <h3>E-MAIL</h3>
                <img src={Mail} alt="Mail" className="mail" />jean-pierre.cazalet@wanadoo.fr
                </div>
              </a>
            </div>
          </div>
          <div className="horaires">
            <h2>Nos horaires</h2>
            <div className="joursHeures">
              <img src={Calendar} alt="Calendrier" className="calendar" />
              <p>
                7/7 <br /> 07:00 à 20h00
              </p>
            </div>
          </div>
        </div>
      </div>
      <div 
      className="sectionMap">
      <h2>Notre rayon d'action</h2>
      <MapContainer center={position} zoom={8} style={{ height: "300px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Circle center={position} radius={50000} />
        <Marker position={position}>
        </Marker>
        </MapContainer>
    </div>
    </div>
  );
};

export default Contact;
