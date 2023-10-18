import React from "react";
import "./index.css";

function Services() {
  return <div className="mainServices">
    <h1>NOS SERVICES :</h1>
      <div className="sectionsServices">
        <h2>Assainissement</h2>
        <p className="descriServices">Implantée à Arudy, SARL Cazalet met à votre service une équipe de professionnels qualifiés, pour la réalisation de vos travaux, de vidange de fosses septiques, bacs à graisses, postes de relevages, ainsi que tout vos systèmes d'assainissement.
        </p>
      </div>
      <div className="sectionsServices">
        <h2>Passage camera</h2>
        <p className="camExplication">Nous déployons une camera vidéo performante et un materiel de pointe pour effectuer l'inspection, avant d'entamer le curage et débouchage des canalisations obstruées. Pour répondre à tous vos besoins, notre entreprise propose également la location de materiels divers pour organisation d'événemnts, de chantiers, d'entretiens...  
        </p>
      </div>
    </div>;
}

export default Services;
