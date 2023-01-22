// .....React modules
import { Link, NavLink } from "react-router-dom";

// .....Assets

const Navigation = () => {
  return (
    <div className="container-fluid p-0 nav-bar">
      <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
        <Link to="/" className="navbar-brand px-lg-4 m-0">
          <h1 className="m-0 display-4 text-uppercase text-white">J-KHOFFEE</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto p-4">
            <NavLink to="/" className="nav-item nav-link" end={true}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="/services" className="nav-item nav-link">
              Service
            </NavLink>
            <NavLink to="/menu" className="nav-item nav-link">
              Menu
            </NavLink>
            <NavLink to="/contact" className="nav-item nav-link">
              Contact
            </NavLink>
          </div>
        </div>
        {/* Nav links end */}
      </nav>
    </div>
  );
};

export default Navigation;
