import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Truck from "../../assets/truck-fast-outline.svg";
import Hands from "../../assets/handshake.png";
import Timer from "../../assets/timer.png";
import Medal from "../../assets/medal.svg";
import cookies from "../../assets/cookies.png";
import Cookies from "../../composants/Cookies/cookies";

import "./index.css";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHoveredServices, setIsHoveredServices] = useState(false);
  const [isHoveredServicesCamera, setIsHoveredServicesCamera] = useState(false);
  const [isHoveredServicesLocation, setIsHoveredServicesLocation] = useState(false);
  const [showCookiesPopup, setShowCookiesPopup] = useState(false);
  
  
  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);
  
  return (
    <div className="home">

      <button className="btnCookies" onClick={() => setShowCookiesPopup(true)}><img className="imagCookies" src={cookies}></img></button>
      <div className="card presentation">
        <h1 className="cardTitle">
          ~ sarl Cazalet ~<br />
          Entreprise spécialisée en hydrocurage et locations de materiels <br />
        </h1>
        <p className="clients">
          (Collectivitées / Professionels / Particuliers)
        </p>
        <NavLink to="/contact">
          <button className="btnContact">Contactez-nous</button>
        </NavLink>

        <div className="secCard">
          <p className="secCardTitle">
            Pourquoi faire appel à notre entreprise d'assainissement ?
          </p>
          <div className="secCardCheck">
            <div className={`setCardDetails ${isScrolled ? "apparition" : ""}`}>
              <div className="sep">
                <img className="secCardIcon timer" src={Timer} alt="" />
              </div>
              <h2>Intervention rapide dans les 48h maximum</h2>
            </div>
            <div className={`setCardDetails ${isScrolled ? "apparition" : ""}`}>
              <div className="sep">
                <img className="secCardIcon" src={Hands} alt="" />
              </div>
              <h2>Disponibilité, réactivité et conseils</h2>
            </div>
            <div className={`setCardDetails ${isScrolled ? "apparition" : ""}`}>
              <div className="sep">
                <img className="secCardIcon" src={Truck} alt="" />
              </div>
              <h2>Permanence les jours fériés et week-ends</h2>
            </div>
            <div className={`setCardDetails ${isScrolled ? "apparition" : ""}`}>
              <div className="sep">
                <img className="secCardIcon" src={Medal} alt="" />
              </div>
              <h2>Entreprise agréée par la préfecture (64)</h2>
            </div>
          </div>
        </div>
      </div>
      <NavLink to="/services"
        className="card services"
        onMouseEnter={() => setIsHoveredServices(true)}
        onMouseLeave={() => setIsHoveredServices(false)}
      >
        <h2 className={`cardTitle ${isHoveredServices ? "hidden" : "display"}`}>
          Equipée et specialisée pour hydrocurage et vidanges de fosses
          septiques
        </h2>
        <p
          className={`descriptionsServices ${
            isHoveredServices ? "display" : "hidden"
          }`}
        >
          Implantée à ARUDY, SARL Cazalet met à votre service une
          équipe de professionnels qualifiés, pour la réalisation de vos travaux
          de vidange de fosses septiques, bacs à graisses, postes de relevages,
          ainsi que de tous vos systèmes d’assainissement.
        </p>
      </NavLink>
      <NavLink to="/services"
        className="card servicesCamera"
        onMouseEnter={() => setIsHoveredServicesCamera(true)}
        onMouseLeave={() => setIsHoveredServicesCamera(false)}>
        <h2
          className={`cardTitle ${
            isHoveredServicesCamera ? "hidden" : "display"}`}>
          Inspection par caméra de canalisation et réseau
        </h2>
        <p
          className={`descriptionsServices ${
            isHoveredServicesCamera ? "display" : "hidden"}`}>
          Nous déployons une caméra vidéo performante et un matériel de pointe
          pour effectuer l’inspection, avant d'entamer le curage et débouchage
          des canalisations obstruées.
        </p>
      </NavLink>
      <NavLink to="/locations" className="card location"
        onMouseEnter={() => setIsHoveredServicesLocation(true)}
        onMouseLeave={() => setIsHoveredServicesLocation(false)}> 
        <h2
          className={`cardTitle ${
            isHoveredServicesLocation ? "hidden" : "display"}`}>
          Nos équipements à louer
        </h2>
        <p
          className={`descriptionsServices ${
            isHoveredServicesLocation ? "display" : "hidden"}`}>
          Pour vos événements, chantiers, manifestations (sportives, foires,
          fêtes...) nous vous proposons un service de location de WC autonome.
          <br />
          Et tout ce dont vous avec besoin pour entretenir vos exterieurs...
          <br />
          Pour particuliers, professionnels et collectivités.
          <br />
          Cliquez pour découvrir tout nos équipements !
        </p>
      </NavLink>
      {showCookiesPopup && (
        <div className="cookiesPopup">
        <Cookies/>
          <button className="closeCookiesPopup" onClick={() => setShowCookiesPopup(false)}>X</button>
        </div>)}
    </div>
  );
};

export default Home;
