// .....React modules

// .....Components
import PageHeaderSection from "../../components/PageHeaderSection";
import ServiceSection from "../../components/ServiceSection";

// .....Assets

const ServicePage = () => {
  return(
    <>
       <PageHeaderSection page_name="Services" />
       <ServiceSection />
    </>
  );
};

export default ServicePage;
