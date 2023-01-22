// .....React modules
import { Link } from "react-router-dom";

const PageHeaderSection = ({ page_name }) => {
  return (
    <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
      <div
        className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
        style={{ minHeight: "400px" }}
      >
        <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
          {page_name}
        </h1>
        <div className="d-inline-flex mb-lg-5">
          <p className="m-0 text-white">
            <Link to="/" className="text-white">
              Home
            </Link>
          </p>
          <p className="m-0 text-white px-2">/</p>
          <p className="m-0 text-white">{page_name}</p>
        </div>
      </div>
    </div>
  );
};

PageHeaderSection.defaultProps = {
  page_name: "Page",
};

export default PageHeaderSection;
