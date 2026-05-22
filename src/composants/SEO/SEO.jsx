import { useEffect } from "react";
import { siteUrl } from "../../data/business";

function setMeta(name, content, attribute = "name") {
  if (!content) return;

  let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

function setSchema(schema) {
  const id = "structured-data";
  const existing = document.getElementById(id);

  if (existing) {
    existing.remove();
  }

  if (!schema) return;

  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function SEO({ title, description, path = "/", image = "/camion2.png", schema }) {
  useEffect(() => {
    const canonicalUrl = `${siteUrl}${path}`;
    const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("og:image", imageUrl, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", imageUrl);
    setCanonical(canonicalUrl);
    setSchema(schema);
  }, [description, image, path, schema, title]);

  return null;
}

export default SEO;
