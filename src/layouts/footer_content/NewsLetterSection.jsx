const NewsLetterSection = () => {
  return (
    <div className="col-lg-3 col-md-6 mb-5">
      <h4
        className="text-white text-uppercase mb-4"
        style={{ letterSpacing: "3px" }}
      >
        Newsletter
      </h4>
      <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
      <div className="w-100">
        <div className="input-group">
          <input
            type="text"
            className="form-control border-light"
            style={{ padding: "25px" }}
            placeholder="Your Email"
          />
          <div className="input-group-append">
            <button className="btn btn-primary font-weight-bold px-3">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
