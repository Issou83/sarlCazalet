import { NavLink } from "react-router-dom";
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
];

function Services() {
  return (
    <main className="servicesPage">
      <section className="servicesHero">
        <p className="servicesHero__eyebrow">Nos services</p>
        <h1>Assainissement, hydrocurage et inspection caméra</h1>
        <p>
          SARL Cazalet intervient autour d'Arudy pour entretenir, déboucher et
          diagnostiquer vos installations d'assainissement avec réactivité.
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
          <h2>Un doute sur votre installation ?</h2>
          <p>
            Décrivez votre besoin par téléphone : type d'installation, urgence,
            accès au chantier et localisation. Nous vous orientons vers la
            solution la plus adaptée.
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
