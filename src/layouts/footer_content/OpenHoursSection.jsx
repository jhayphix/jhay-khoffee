const OpenHoursSection = () => {
  return (
    <div className="col-lg-3 col-md-6 mb-5">
      <h4
        className="text-white text-uppercase mb-4"
        style={{ letterSpacing: "3px" }}
      >
        Open Hours
      </h4>
      <div>
        <h6 className="text-white text-uppercase">Monday - Friday</h6>
        <p>8.00 AM - 8.00 PM</p>
        <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
        <p>2.00 PM - 8.00 PM</p>
      </div>
    </div>
  );
};

export default OpenHoursSection;
