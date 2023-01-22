// ....React module

// .....Assets
import { services_data } from "../_data/home_page";

const ServiceSection = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh & Organic Beans</h1>
        </div>
        <div className="row">
          {services_data?.map(({ img, title, des }, index) => {
            return (
              <div className="col-lg-6 mb-5" key={index}>
                <div className="row align-items-center">
                  <div className="col-sm-5">
                    <img className="img-fluid mb-3 mb-sm-0" src={img} alt="" />
                  </div>
                  <div className="col-sm-7">
                    <h4>
                      <i className="fa fa-truck service-icon"></i> {title}
                    </h4>
                    <p className="m-0">{des}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
