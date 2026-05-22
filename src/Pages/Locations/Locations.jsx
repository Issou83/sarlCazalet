import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SEO from "../../composants/SEO/SEO";
import { localBusinessSchema } from "../../data/business";
import "./index.css";

const fallbackItems = [
  {
    _id: "wc",
    title: "WC autonomes",
    description: "WC pour évènements, chantiers et manifestations.",
    imageUrl: "/camion2.png",
  },
  {
    _id: "bruleur",
    title: "Brûleur de mauvaises herbes",
    description: "Entretien des extérieurs sans produits chimiques.",
    imageUrl: "/Bruleurs.png",
  },
  {
    _id: "motoculteur",
    title: "Motoculteur",
    description: "Préparation de la terre et travaux de jardinage.",
    imageUrl: "/Motoculteur.jpg",
  },
  {
    _id: "brouette",
    title: "Brouette",
    description: "Matériel pratique pour chantiers et jardins.",
    imageUrl: "/Brouette.jpg",
  },
  {
    _id: "rotofil",
    title: "Rotofil",
    description: "Entretien des bordures et espaces verts.",
    imageUrl: "/Rotofil.jpg",
  },
  {
    _id: "souffleur",
    title: "Souffleur thermique",
    description: "Ramassage des feuilles et végétaux légers.",
    imageUrl: "/Soufleur.jpg",
  },
];

const localImagesByTitle = {
  "wc autonomes": "/camion2.png",
  "bruleur de mauvaises herbes": "/Bruleurs.png",
  "brûleur de mauvaises herbes": "/Bruleurs.png",
  motoculteur: "/Motoculteur.jpg",
  brouette: "/Brouette.jpg",
  rotofil: "/Rotofil.jpg",
  "souffleur thermique": "/Soufleur.jpg",
};

const normalizeTitle = (title = "") =>
  title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const getReliableImageUrl = (item) =>
  localImagesByTitle[normalizeTitle(item.title)] || item.imageUrl || "/camion2.png";

const getCleanTitle = (title = "") => title.replace(/\s+/g, " ").trim();

function Locations() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api-cazalet.vercel.app/items", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Impossible de charger les locations.");
        }
        return response.json();
      })
      .then((data) => {
        setItems(Array.isArray(data) && data.length > 0 ? data : fallbackItems);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setHasError(true);
          setItems(fallbackItems);
        }
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <main className="locationsPage">
      <SEO
        title="Location matériel Arudy | WC autonomes, chantier, évènement"
        description="Location de matériel à Arudy : WC autonomes pour chantiers et évènements, chauffage, motoculteur, brouette, rotofil, souffleur, matériel de désherbage mécanique et fauchage autour de Pau et Oloron."
        path="/locations"
        image="/camion2.png"
        schema={localBusinessSchema}
      />

      <section className="locationsHero">
        <p className="locationsHero__eyebrow">Location de matériel</p>
        <h1>Des équipements prêts à l'emploi pour vos chantiers et évènements.</h1>
        <p>
          Matériel entretenu, disponible localement et adapté aux particuliers,
          professionnels, associations et collectivités, avec des solutions pour
          les chantiers, évènements, extérieurs, fauchage et désherbage mécanique.
        </p>
      </section>

      <section className="locationsContent">
        <div className="locationsIntro">
          <div>
            <h2>Nos locations disponibles</h2>
            <p>
              Contactez l'entreprise pour confirmer la disponibilité, la durée de
              location et les conditions de retrait ou de livraison.
            </p>
          </div>
          <a className="button button--primary" href="tel:0559308134">
            Réserver par téléphone
          </a>
        </div>

        <article className="locationsFeatured">
          <img src="/camion2.png" alt="WC autonomes disponibles en location" />
          <div>
            <p className="sectionKicker">Service prioritaire local</p>
            <h2>Location de WC autonomes à Arudy, Pau et Oloron-Sainte-Marie</h2>
            <p>
              Pour chantiers, fêtes, foires, évènements sportifs, manifestations
              associatives et besoins temporaires sans sanitaires sur place.
            </p>
            <NavLink className="button button--primary" to="/location-wc-autonome-arudy-pau-oloron">
              Voir la page WC autonomes
            </NavLink>
          </div>
        </article>

        {hasError && (
          <p className="locationsAlert">
            Le catalogue en ligne est momentanément indisponible. Les équipements
            principaux restent affichés ci-dessous.
          </p>
        )}

        {isLoading ? (
          <div className="locationsLoading" role="status" aria-live="polite">
            Chargement des locations...
          </div>
        ) : (
          <div className="locationsGrid">
            {items.map((item) => (
              <article className="locationCard" key={item._id || item.title}>
                <img
                  src={getReliableImageUrl(item)}
                  alt={getCleanTitle(item.title)}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = "/camion2.png";
                  }}
                />
                <div className="locationCard__body">
                  <h3>{getCleanTitle(item.title)}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Locations;
