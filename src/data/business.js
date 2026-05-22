export const siteUrl = "https://sarl-cazalet.com";

export const businessInfo = {
  name: "SARL Cazalet",
  phone: "05 59 30 81 34",
  mobile: "06 15 28 59 11",
  email: "jean-pierre.cazalet@wanadoo.fr",
  city: "Arudy",
  postalCode: "64260",
  department: "Pyrénées-Atlantiques",
  region: "Nouvelle-Aquitaine",
  country: "FR",
  latitude: 43.1027198139486,
  longitude: -0.4270420423279545,
  radiusKm: 50,
  openingHours: "Mo-Su 07:00-20:00",
  serviceArea: [
    "Arudy",
    "Pau",
    "Oloron-Sainte-Marie",
    "Vallée d'Ossau",
    "Pyrénées-Atlantiques",
    "Béarn",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: businessInfo.name,
  url: siteUrl,
  telephone: businessInfo.phone,
  email: businessInfo.email,
  image: `${siteUrl}/camion2.png`,
  priceRange: "Sur devis",
  address: {
    "@type": "PostalAddress",
    addressLocality: businessInfo.city,
    postalCode: businessInfo.postalCode,
    addressRegion: businessInfo.department,
    addressCountry: businessInfo.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: businessInfo.latitude,
    longitude: businessInfo.longitude,
  },
  openingHours: businessInfo.openingHours,
  areaServed: businessInfo.serviceArea.map((name) => ({
    "@type": "Place",
    name,
  })),
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Location de WC autonomes",
        areaServed: businessInfo.serviceArea.join(", "),
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Hydrocurage et vidange de fosses septiques",
        areaServed: businessInfo.serviceArea.join(", "),
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Débouchage de canalisations",
        areaServed: businessInfo.serviceArea.join(", "),
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Désherbage mécanique et fauchage",
        areaServed: businessInfo.serviceArea.join(", "),
      },
    },
  ],
};
