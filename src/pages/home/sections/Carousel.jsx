// .....React modules

// .....Assets
import carousel_1 from "../../../assets/img/carousel/carousel_1.jpg";
import carousel_2 from "../../../assets/img/carousel/carousel_2.jpg";

const Carousel = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <div
        id="blog-carousel"
        className="carousel slide overlay-bottom"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src={carousel_1} alt="carousel" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-primary font-weight-medium m-0">
                We Have Been Serving
              </h2>
              <h1 className="display-1 text-white m-0">COFFEE</h1>
              <h2 className="text-white m-0">* SINCE 1950 *</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={carousel_2} alt="carousel" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-primary font-weight-medium m-0">
                We Have Been Serving
              </h2>
              <h1 className="display-1 text-white m-0">COFFEE</h1>
              <h2 className="text-white m-0">* SINCE 1950 *</h2>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#blog-carousel"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#blog-carousel"
          data-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
