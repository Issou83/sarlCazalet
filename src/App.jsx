import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./composants/Header/Header.jsx";

import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Locations from "./Pages/Locations/Locations";
import Footer from "./composants/Footer/Footer.jsx";
import Contact from "./Pages/Contact/Contact";
import Admin from "./Pages/Admin/Admin.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
