import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logoCam from "/camion11.svg";
import "./index.css";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/locations", label: "Locations" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => setIsScrolled(window.scrollY > 12);
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <header className={`siteHeader ${isScrolled ? "siteHeader--compact" : ""}`}>
      <NavLink className="siteHeader__brand" to="/">
        <img src={logoCam} alt="" />
        <span>SARL Cazalet</span>
      </NavLink>

      <nav className="siteHeader__nav" aria-label="Navigation principale">
        {navItems.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `siteHeader__link ${isActive ? "siteHeader__link--active" : ""}`
            }
            to={item.to}
            key={item.to}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <a className="siteHeader__phone" href="tel:0559308134">
        05 59 30 81 34
      </a>
    </header>
  );
}

export default Header;
