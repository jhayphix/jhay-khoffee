// .....React modules
import { Route, Routes } from "react-router-dom";

// .....Components
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import ServicePage from "../pages/service/ServicePage";
import MenuPage from "../pages/menu/MenuPage";
import ContactPage from "../pages/contact/ContactPage";

// .....Assets

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Not Found */}
      <Route path="*" element="Page not found" />
    </Routes>
  );
};

export default Routing;
