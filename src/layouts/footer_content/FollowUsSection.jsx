// .....React module

const FollowUsSection = () => {
  return (
    <div className="col-lg-3 col-md-6 mb-5">
      <h4
        className="text-white text-uppercase mb-4"
        style={{ letterSpacing: "3px" }}
      >
        Follow Us
      </h4>
      <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
      <div className="d-flex justify-content-start">
        <a
          className="btn btn-lg btn-outline-light btn-lg-square mr-2"
          href="https://wa.me/+233248359918"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          className="btn btn-lg btn-outline-light btn-lg-square mr-2"
          href="https://github.com/jhayphix"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="btn btn-lg btn-outline-light btn-lg-square mr-2"
          href="https://jhayphix.github.io/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://jhayphix.github.io/portfolio"
          rel="noreferrer"
          className="btn btn-lg btn-outline-light btn-lg-square"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default FollowUsSection;
