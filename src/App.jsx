import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./composants/Header/Header.jsx";
import ScrollToTop from "./composants/ScrollToTop/ScrollToTop.jsx";

import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Locations from "./Pages/Locations/Locations";
import WcAutonomes from "./Pages/WcAutonomes/WcAutonomes";
import Footer from "./composants/Footer/Footer.jsx";
import Contact from "./Pages/Contact/Contact";
import Admin from "./Pages/Admin/Admin.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/location-wc-autonome-arudy-pau-oloron" element={<WcAutonomes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
