// .....React modules

// .....Assets
import { menu_data } from "../_data/home_page";

const MenuSection = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Menu & Pricing
          </h4>
          <h1 className="display-4">Competitive Pricing</h1>
        </div>
        <div className="row">
          {menu_data?.map(({ title, dishes }, index) => {
            return (
              <div className="col-lg-6" key={index}>
                <h1 className="mb-5">{title}</h1>

                {dishes?.map(({ title, price, img, des }, index) => {
                  return (
                    <div className="row align-items-center mb-5" key={index}>
                      <div className="col-4 col-sm-3">
                        <img
                          className="w-100 rounded-circle mb-3 mb-sm-0"
                          src={img}
                          alt="menu"
                        />
                        <h5 className="menu-price">${price}</h5>
                      </div>
                      <div className="col-8 col-sm-9">
                        <h4>{title}</h4>
                        <p className="m-0">{des}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
          {/* Repeat */}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
