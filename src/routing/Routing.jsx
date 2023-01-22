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
  const project_name = "jhay-khoffee";
  return (
    <Routes>
      <Route path={`/${project_name}/`} element={<HomePage />} />
      <Route path={`/${project_name}/home`} element={<HomePage />} />
      <Route path={`/${project_name}/about`} element={<AboutPage />} />
      <Route path={`/${project_name}/services`} element={<ServicePage />} />
      <Route path={`/${project_name}/menu`} element={<MenuPage />} />
      <Route path={`/${project_name}/contact`} element={<ContactPage />} />

      {/* Not Found */}
      <Route path="*" element="Page not found" />
    </Routes>
  );
};

export default Routing;
