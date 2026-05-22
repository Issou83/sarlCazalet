import { NavLink } from "react-router-dom";
import Truck from "../../assets/truck-fast-outline.svg";
import Hands from "../../assets/handshake.png";
import Timer from "../../assets/timer.png";
import Medal from "../../assets/medal.svg";
import "./index.css";

const strengths = [
  {
    icon: Timer,
    alt: "Horloge",
    title: "Intervention sous 48 h",
    text: "Réponse rapide autour d'Arudy, Pau et Oloron-Sainte-Marie.",
  },
  {
    icon: Hands,
    alt: "Poignée de main",
    title: "Conseil de proximité",
    text: "Un interlocuteur local pour orienter la bonne intervention.",
  },
  {
    icon: Truck,
    alt: "Camion",
    title: "Urgences 7 j/7",
    text: "Permanence possible les week-ends et jours fériés.",
  },
  {
    icon: Medal,
    alt: "Médaille",
    title: "Entreprise agréée",
    text: "SARL Cazalet est agréée par la préfecture des Pyrénées-Atlantiques.",
  },
];

const services = [
  {
    title: "Vidange et hydrocurage",
    text: "Fosses septiques, bacs à graisses, postes de relevage et réseaux d'assainissement.",
    to: "/services",
    className: "homeService--curage",
  },
  {
    title: "Inspection caméra",
    text: "Diagnostic des canalisations avant curage, débouchage ou réparation.",
    to: "/services",
    className: "homeService--camera",
  },
  {
    title: "Location de matériel",
    text: "WC autonomes, chauffage, matériel d'entretien extérieur et équipements de chantier.",
    to: "/locations",
    className: "homeService--location",
  },
];

function Home() {
  return (
    <main className="home">
      <section className="homeHero">
        <div className="homeHero__content">
          <p className="homeHero__eyebrow">Assainissement et location de matériel à Arudy</p>
          <h1>SARL Cazalet</h1>
          <p className="homeHero__lead">
            Hydrocurage, vidange de fosses septiques, inspection caméra et location
            d'équipements pour particuliers, professionnels et collectivités.
          </p>
          <div className="homeHero__actions">
            <NavLink className="button button--primary" to="/contact">
              Demander une intervention
            </NavLink>
            <a className="button button--secondary" href="tel:0559308134">
              05 59 30 81 34
            </a>
          </div>
        </div>
      </section>

      <section className="homeStrengths" aria-label="Pourquoi choisir SARL Cazalet">
        {strengths.map((item) => (
          <article className="homeStrength" key={item.title}>
            <img src={item.icon} alt={item.alt} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="homeIntro">
        <div>
          <p className="sectionKicker">Entreprise locale</p>
          <h2>Une équipe équipée pour les interventions d'assainissement du quotidien comme les urgences.</h2>
        </div>
        <p>
          Implantée à Arudy, SARL Cazalet intervient dans un rayon d'environ 50 km
          avec du matériel adapté aux réseaux d'assainissement, aux évènements,
          aux chantiers et aux besoins d'entretien extérieur.
        </p>
      </section>

      <section className="homeServices" aria-label="Services principaux">
        {services.map((service) => (
          <NavLink
            className={`homeService ${service.className}`}
            to={service.to}
            key={service.title}
          >
            <span>Découvrir</span>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </NavLink>
        ))}
      </section>
    </main>
  );
}

export default Home;
