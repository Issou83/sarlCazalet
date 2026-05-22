import { NavLink } from "react-router-dom";
import SEO from "../../composants/SEO/SEO";
import { localBusinessSchema } from "../../data/business";
import "./index.css";

const serviceDetails = [
  {
    title: "Assainissement",
    points: [
      "Vidange de fosses septiques",
      "Bacs à graisses et postes de relevage",
      "Hydrocurage et débouchage de canalisations",
      "Intervention pour particuliers, professionnels et collectivités",
    ],
  },
  {
    title: "Inspection par caméra",
    points: [
      "Contrôle visuel des canalisations",
      "Repérage des obstructions, casses ou défauts d'écoulement",
      "Diagnostic avant curage ou réparation",
      "Matériel adapté aux réseaux domestiques et professionnels",
    ],
  },
  {
    title: "Désherbage mécanique et fauchage",
    points: [
      "Désherbage mécanique pour limiter l'usage de produits chimiques",
      "Fauchage et entretien d'espaces extérieurs",
      "Intervention pour collectivités, particuliers et professionnels",
      "Solutions adaptées aux abords, terrains, accès et zones à entretenir",
    ],
  },
];

function Services() {
  return (
    <main className="servicesPage">
      <SEO
        title="Hydrocurage, vidange, débouchage et fauchage | Arudy"
        description="SARL Cazalet intervient autour d'Arudy, Pau et Oloron-Sainte-Marie pour hydrocurage, vidange de fosses septiques, débouchage de canalisations, inspection caméra, désherbage mécanique et fauchage."
        path="/services"
        image="/camion2.png"
        schema={localBusinessSchema}
      />

      <section className="servicesHero">
        <p className="servicesHero__eyebrow">Nos services</p>
        <h1>Assainissement, hydrocurage, débouchage et entretien extérieur</h1>
        <p>
          SARL Cazalet intervient autour d'Arudy pour vidanger, déboucher,
          diagnostiquer et entretenir vos installations, terrains et accès avec
          réactivité.
        </p>
        <NavLink className="button button--primary" to="/contact">
          Planifier une intervention
        </NavLink>
      </section>

      <section className="servicesGrid">
        {serviceDetails.map((service) => (
          <article className="servicePanel" key={service.title}>
            <h2>{service.title}</h2>
            <ul>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="servicesNotice">
        <div>
          <h2>Un doute sur votre besoin ?</h2>
          <p>
            Décrivez votre demande par téléphone : assainissement, canalisation,
            entretien extérieur, urgence, accès au chantier et localisation.
            Nous vous orientons vers la solution la plus adaptée.
          </p>
        </div>
        <a className="button button--secondaryDark" href="tel:0559308134">
          Appeler l'entreprise
        </a>
      </section>
    </main>
  );
}

export default Services;
