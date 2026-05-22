import { NavLink } from "react-router-dom";
import SEO from "../../composants/SEO/SEO";
import { businessInfo, localBusinessSchema, siteUrl } from "../../data/business";
import "./index.css";

const useCases = [
  "Chantiers BTP, travaux de rénovation et interventions sans sanitaires disponibles",
  "Fêtes de village, foires, marchés, évènements sportifs et manifestations associatives",
  "Réceptions privées, rassemblements familiaux et besoins ponctuels en extérieur",
  "Sites isolés ou temporaires sans raccordement immédiat à l'eau ou à l'assainissement",
];

const advantages = [
  {
    title: "Autonome et pratique",
    text: "La cabine peut être utilisée là où le besoin se situe, sans dépendre d'un sanitaire existant.",
  },
  {
    title: "Réponse locale",
    text: "Un interlocuteur basé à Arudy, avec intervention autour de Pau, Oloron-Sainte-Marie et la vallée d'Ossau.",
  },
  {
    title: "Chantier ou évènement",
    text: "La location s'adapte aux besoins ponctuels comme aux demandes plus longues, selon disponibilité.",
  },
  {
    title: "Conseil avant réservation",
    text: "Nombre d'utilisateurs, durée, accès au terrain et emplacement sont vérifiés avant validation.",
  },
];

const checklist = [
  "Lieu exact de pose et accès possible pour le dépôt",
  "Durée de location souhaitée",
  "Nombre approximatif d'utilisateurs ou de participants",
  "Type d'usage : chantier, fête, évènement sportif, foire ou besoin privé",
  "Contraintes du terrain : pente, sol meuble, accès étroit ou éloignement",
];

const faqs = [
  {
    question: "Dans quelle zone louer un WC autonome avec SARL Cazalet ?",
    answer:
      "SARL Cazalet est basée à Arudy et intervient dans un rayon d'environ 50 km, notamment vers Pau, Oloron-Sainte-Marie, la vallée d'Ossau et les communes voisines.",
  },
  {
    question: "Pour quels usages louer un WC autonome ?",
    answer:
      "La location convient aux chantiers, manifestations, évènements sportifs, foires, fêtes de village, rassemblements privés et sites temporaires sans sanitaires disponibles.",
  },
  {
    question: "Comment connaître la disponibilité ?",
    answer:
      "Le plus rapide est d'appeler SARL Cazalet au 05 59 30 81 34 afin de confirmer la disponibilité, la durée de location et les conditions de dépôt.",
  },
  {
    question: "Combien de WC faut-il prévoir ?",
    answer:
      "Le bon nombre dépend de la durée, du public, du type d'évènement et de l'accès au site. Pour un chantier, il faut aussi tenir compte des obligations d'hygiène applicables à l'employeur.",
  },
];

const wcSchema = {
  "@context": "https://schema.org",
  "@graph": [
    localBusinessSchema,
    {
      "@type": "Service",
      "@id": `${siteUrl}/location-wc-autonome-arudy-pau-oloron#service`,
      name: "Location de WC autonomes à Arudy, Pau et Oloron-Sainte-Marie",
      serviceType: "Location de WC autonomes et toilettes mobiles",
      provider: {
        "@id": `${siteUrl}/#localbusiness`,
      },
      areaServed: businessInfo.serviceArea.map((name) => ({
        "@type": "Place",
        name,
      })),
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: businessInfo.phone,
      },
      image: `${siteUrl}/wc-autonomes.jpg`,
      description:
        "Location de WC autonomes pour chantiers, évènements, manifestations et besoins temporaires autour d'Arudy, Pau et Oloron-Sainte-Marie.",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/location-wc-autonome-arudy-pau-oloron#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

function WcAutonomes() {
  return (
    <main className="wcPage">
      <SEO
        title="Location WC autonome Arudy, Pau, Oloron | SARL Cazalet"
        description="Location de WC autonomes et toilettes mobiles pour chantiers, évènements, foires, fêtes et manifestations autour d'Arudy, Pau et Oloron-Sainte-Marie."
        path="/location-wc-autonome-arudy-pau-oloron"
        image="/wc-autonomes.jpg"
        schema={wcSchema}
      />

      <section className="wcHero">
        <div className="wcHero__content">
          <p className="wcHero__eyebrow">Location WC autonome en Béarn</p>
          <h1>WC autonomes pour chantiers et évènements autour d'Arudy.</h1>
          <p>
            Une solution simple pour installer des sanitaires temporaires là où
            vous en avez besoin : chantier, manifestation, fête, foire, terrain
            isolé ou évènement associatif.
          </p>
          <div className="wcHero__actions">
            <a className="button button--primary" href={`tel:${businessInfo.phone.replaceAll(" ", "")}`}>
              Appeler {businessInfo.phone}
            </a>
            <NavLink className="button button--secondary" to="/contact">
              Voir la zone d'intervention
            </NavLink>
          </div>
        </div>
      </section>

      <section className="wcLocalProof">
        <div>
          <p className="sectionKicker">Pourquoi choisir Cazalet</p>
          <h2>Un service local, clair et rapide pour éviter les mauvaises surprises.</h2>
        </div>
        <p>
          Les grandes plateformes couvrent large. SARL Cazalet parle terrain :
          accès, durée, emplacement, urgence, communes autour d'Arudy et besoins
          réels sur chantier ou évènement. L'objectif est de confirmer vite la
          bonne solution, pas de vendre une cabine au hasard.
        </p>
      </section>

      <section className="wcAdvantages" aria-label="Avantages de la location WC autonome">
        {advantages.map((advantage) => (
          <article className="wcAdvantage" key={advantage.title}>
            <h2>{advantage.title}</h2>
            <p>{advantage.text}</p>
          </article>
        ))}
      </section>

      <section className="wcSplit">
        <div className="wcPanel wcPanel--dark">
          <h2>Pour quels besoins ?</h2>
          <ul>
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="wcPanel">
          <h2>Avant d'appeler, préparez ces infos</h2>
          <ul>
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wcArea">
        <div>
          <h2>Zone prioritaire : Arudy, Pau, Oloron-Sainte-Marie et vallée d'Ossau.</h2>
          <p>
            SARL Cazalet intervient dans un rayon d'environ {businessInfo.radiusKm} km
            depuis Arudy. Pour une commune hors zone ou un besoin urgent, appelez
            directement pour vérifier la faisabilité.
          </p>
        </div>
        <a className="button button--primary" href={`tel:${businessInfo.phone.replaceAll(" ", "")}`}>
          Vérifier la disponibilité
        </a>
      </section>

      <section className="wcFaq" aria-label="Questions fréquentes">
        <p className="sectionKicker">Questions fréquentes</p>
        <h2>Les réponses utiles avant de louer un WC autonome.</h2>
        <div className="wcFaq__grid">
          {faqs.map((faq) => (
            <article className="wcFaq__item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default WcAutonomes;
