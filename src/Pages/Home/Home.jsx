import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Truck from "../../assets/truck-fast-outline.svg";
import Hands from "../../assets/handshake.png";
import Timer from "../../assets/timer.png";
import Medal from "../../assets/medal.svg";
import "./index.css";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHoveredServices, setIsHoveredServices] = useState(false);
  const [isHoveredServicesCamera, setIsHoveredServicesCamera] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="home">
      <div className="card presentation">
        <h1 className="cardTitle">
          ~ sarl Cazalet ~<br />
          Entreprise spécialisée en hydrocurage et locations de materiels <br />
        </h1>
        <p className="clients">(Collectivitées / Professionels / Particuliers)</p>
        <NavLink to="/contact" >

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
              <h2>Intervention rapide dans 48h maximum</h2>
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
      <div
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
          Implantée à Sévignacq-Meyracq, SARL Cazalet met à votre service une
          équipe de professionnels qualifiés, pour la réalisation de vos travaux
          de vidange de fosses septiques, bacs à graisses, postes de relevages,
          ainsi que de tous vos systèmes d’assainissement.
        </p>
      </div>
      <div
        className="card servicesCamera"
        onMouseEnter={() => setIsHoveredServicesCamera(true)}
        onMouseLeave={() => setIsHoveredServicesCamera(false)}
      >
        <h2
          className={`cardTitle ${
            isHoveredServicesCamera ? "hidden" : "display"
          }`}
        >
          Inspection par caméra de canalisation et réseau
        </h2>
        <p
          className={`descriptionsServices ${
            isHoveredServicesCamera ? "display" : "hidden"
          }`}
        >
          Nous déployons une caméra vidéo performante et un matériel de pointe
          pour effectuer l’inspection, avant d'entamer le curage et débouchage
          des canalisations obstruées.
        </p>
      </div>
      <div
        className="card location"
        onMouseEnter={() => setIsHoveredServicesCamera(true)}
        onMouseLeave={() => setIsHoveredServicesCamera(false)}
      >

        <h2
          className={`cardTitle ${
            isHoveredServicesCamera ? "hidden" : "display"
          }`}
        >
          Nos équipements à louer
        </h2>
        <p
          className={`descriptionsServices ${
            isHoveredServicesCamera ? "display" : "hidden"
          }`}
        >
                   Tout ce dont vous avec besoin pour entretenir vos exterieurs, vous aider dans vos évenements (fêtes/concerts/rassemblements) et bien plus...<br/>Cliquez pour découvrir tout nos équipements !

        </p>
      </div>
    </div>
  );
};

export default Home;
