// .....React modules

// .....Components

import AboutSection from "../../components/AboutSection";
import Carousel from "./sections/Carousel";
import MenuSection from "../../components/MenuSection";
import OfferSection from "../../components/OfferSection";
import ReservationSection from "../../components/ReservationSection";
import ServiceSection from "../../components/ServiceSection";

// .....Assets

const HomePage = () => {
  return (
    <>
      <Carousel />
      <AboutSection />
      <ServiceSection />
      <OfferSection />
      <MenuSection />
      <ReservationSection />
    </>
  );
};

export default HomePage;
