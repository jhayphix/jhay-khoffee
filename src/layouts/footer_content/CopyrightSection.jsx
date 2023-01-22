// .....React module
import { Link } from "react-router-dom";

const CopyrightSection = () => {
  return (
    <div
      className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5"
      style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
    >
      <p className="mb-2 text-white">
        Copyright &copy;
        <Link className="font-weight-bold" to="#">
          J-Khoffee
        </Link>
        . All Rights Reserved
      </p>
      <p className="m-0 text-white">
        Developed by{" "}
        <a
          className="font-weight-bold"
          href="https://jhaphix.github.io/portfolio/"
          targe="_blank"
          rel="noreferrer"
        >
          Jhayphix
        </a>
      </p>
    </div>
  );
};

export default CopyrightSection;
