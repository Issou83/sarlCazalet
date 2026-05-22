import { useEffect } from "react";
import L from "leaflet";
import { Circle, MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import SEO from "../../composants/SEO/SEO";
import { localBusinessSchema } from "../../data/business";
import Telephone from "../../assets/tel.png";
import Smartphone from "../../assets/smartphone.png";
import Mail from "../../assets/mail.png";
import Calendar from "../../assets/calendar.png";
import "./index.css";

const position = [43.1027198139486, -0.4270420423279545];

function Contact() {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
    });
  }, []);

  return (
    <main className="contactPage">
      <SEO
        title="Contact SARL Cazalet Arudy | Intervention Pau Oloron vallée d'Ossau"
        description="Contactez SARL Cazalet à Arudy pour hydrocurage, vidange, débouchage de canalisations, inspection caméra, désherbage mécanique, fauchage et location de WC autonomes dans un rayon d'environ 50 km."
        path="/contact"
        image="/camion2.png"
        schema={localBusinessSchema}
      />

      <section className="contactHero">
        <div>
          <p className="contactHero__eyebrow">Contact et interventions</p>
          <h1>Basés à Arudy, disponibles dans un rayon d'environ 50 km.</h1>
          <p>
            SARL Cazalet intervient entre Pau, Oloron-Sainte-Marie et la vallée
            d'Ossau pour les travaux de vidange, d'hydrocurage, de débouchage
            de canalisations, d'inspection caméra, de désherbage mécanique, de
            fauchage et de location de matériel.
          </p>
        </div>
      </section>

      <section className="contactPanel">
        <div className="contactCards">
          <a className="contactCard" href="tel:0559308134">
            <img src={Telephone} alt="" />
            <span>Téléphone</span>
            <strong>05 59 30 81 34</strong>
          </a>
          <a className="contactCard" href="tel:0615285911">
            <img src={Smartphone} alt="" />
            <span>Mobile</span>
            <strong>06 15 28 59 11</strong>
          </a>
          <a className="contactCard" href="mailto:jean-pierre.cazalet@wanadoo.fr">
            <img src={Mail} alt="" />
            <span>E-mail</span>
            <strong>jean-pierre.cazalet@wanadoo.fr</strong>
          </a>
          <div className="contactCard">
            <img src={Calendar} alt="" />
            <span>Horaires</span>
            <strong>7 j/7, de 7 h à 20 h</strong>
          </div>
        </div>

        <div className="contactMap">
          <div className="contactMap__header">
            <h2>Rayon d'intervention</h2>
            <p>Arudy et alentours, dans les Pyrénées-Atlantiques.</p>
          </div>
          <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle center={position} radius={50000} />
            <Marker position={position} />
          </MapContainer>
        </div>
      </section>
    </main>
  );
}

export default Contact;
