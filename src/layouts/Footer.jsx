// .....React modules

// .....Components
import CopyrightSection from "./footer_content/CopyrightSection";
import FollowUsSection from "./footer_content/FollowUsSection";
import InTouchSection from "./footer_content/InTouchSection";
import NewsLetterSection from "./footer_content/NewsLetterSection";
import OpenHoursSection from "./footer_content/OpenHoursSection";

// .....Assets

const Footer = () => {
  return (
    <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
      <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
        {/* Injection */}
        <InTouchSection />
        <FollowUsSection />
        <OpenHoursSection />
        <NewsLetterSection />
      </div>
      <CopyrightSection />
    </div>
  );
};

export default Footer;
