import Link from "next/link";
import BrandSlider from "@/components/BrandSlider";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row gx-6 align-items-center">
          <div className="col-lg-2 col-md-2"></div>
          <div className="col-lg-3 col-md-3">
            <div className="footer-wiget">
              <div className="footer-wiget-log">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="/assets/images/logo-white_bg.png" alt="" />
                  </a>
                </Link>
              </div>
              <div className="footer-wiget-text">
                <h4>阡陌智能，交通未来</h4>
              </div>
              
            </div>
          </div>
          <div className="col-lg-1 col-md-1 footer-box"></div>
          <div className="col-lg-6 col-md-6">
            
            <BrandSlider/>
          </div>
        </div>
        <div className="row align-items-center mt-50">
        </div>
      </div>
    </div>
  );
};
export default Footer;
