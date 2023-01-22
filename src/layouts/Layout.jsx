// .....React modules

// .....Components
import Footer from "./Footer";
import Navigation from "./Navigation";

// .....Assets

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {/* Inject pages here */}
      {children}
      {/* Back to Top */}
      <a
        href="/jhay-khoffee/#navbar"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="fa fa-angle-double-up"></i>
      </a>
      <Footer />
    </>
  );
};

export default Layout;
