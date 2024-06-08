import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row gx-6">
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget">
              <div className="footer-wiget-log">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/footer-logo.png" alt="" />
                  </a>
                </Link>
              </div>
              <div className="footer-wiget-text">
                <h4>Say Hello!</h4>
              </div>
              <div className="footer-shape-title">
                <h3>Discover our app</h3>
              </div>
              <div className="footer-wiget-shape">
                <img src="assets/images/footer/Google-Play.png" alt="" />
              </div>
              <div className="footer-wiget-shape">
                <img src="assets/images/footer/Play-Store.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget">
              <div className="footer-wiget-title">
                <h4>Links</h4>
              </div>
              <div className="footer-wiget-menu">
                <ul>
                  <li>
                    <a href="#"> About us</a>
                  </li>
                  <li>
                    <a href="#"> Meet our team</a>
                  </li>
                  <li>
                    <a href="#"> Case stories</a>
                  </li>
                  <li>
                    <a href="#"> Latest news</a>
                  </li>
                  <li>
                    <a href="#"> Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget">
              <div className="footer-wiget-title">
                <h4>Other Link</h4>
              </div>
              <div className="footer-wiget-menu">
                <ul>
                  <li>
                    <a href="#"> Faq</a>
                  </li>
                  <li>
                    <a href="#"> Tearm of user</a>
                  </li>
                  <li>
                    <a href="#"> Disclaimer</a>
                  </li>
                  <li>
                    <a href="#"> Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pr-0">
            <div className="foter-box">
              <div className="footer-wiget-icon">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-widget-contct-menu">
                <ul>
                  <li>
                    <a href="#">( 800 ) 160-616481</a>
                  </li>
                  <li className="line">
                    <a href="#">example@gmail.com</a>
                  </li>
                  <li>
                    <a href="#">175 10h Street, Office 375 Berlin, De 21562</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-100">
          <div className="col-lg-6 col-md-12">
            <div className="copyright-text">
              <p>
                Copyright © <a href="Http://www.bootstrapmb.com">Website_Stock</a> All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="footer-condition">
              <ul>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
