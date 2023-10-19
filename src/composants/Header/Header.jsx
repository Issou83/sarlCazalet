import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import logoCam from "/camion11.svg";
import camion22 from "../../assets/camion22.svg";

import "./index.css";

const Header = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);
  
  console.log(location.pathname);

  return (
    <div className="top">
      <div className={`header ${isScrolled ? "small" : "height"}`}>
        <img className="logoCam" src={logoCam} alt="logo"></img>
        <h2 className="title">sarl CAZALET</h2>
        <div className={`navigation ${isScrolled ? "row" : "column"}`}>
          <NavLink
            to="/"
            className={`btnNav ${location.pathname === "/" ? "urlActive" : ""}`}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/services"
            className={`btnNav ${
              location.pathname === "/services" ? "urlActive" : ""
            }`}
          >
            Services
          </NavLink>
          <NavLink
            to="/locations"
            className={`btnNav ${
              location.pathname === "/locations" ? "urlActive" : ""
            }`}
          >
            Locations
          </NavLink>
          <NavLink
            to="/contact"
            className={`btnNav ${
              location.pathname === "/contact" ? "urlActive" : ""
            }`}
          >
            Contact
          </NavLink>
        </div>
        <img className="camion22" src={camion22} alt=""></img>
        <div className="tel">
          <NavLink href="tel:0559308134" className="btnTel">
            05 59 30 81 34
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
