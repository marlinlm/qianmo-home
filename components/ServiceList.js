const ServiceList = ({ dark }) => {
  return (
    <div className={`service-area Style-Four ${dark ? "dark" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <div className={`section-sub-title ${dark ? "dark" : ""}`}>
                <h4>Provide Services</h4>
              </div>
              <div className={`section-main-title ${dark ? "dark" : ""}`}>
                <h2>Provide Creative Services For</h2>
                <h2>Your Business Growth</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className={`service-items-four ${dark ? "dark" : ""}`}>
              <div className="service-four-thumb">
                <img src="assets/images/service/service5.png" alt="image" />
              </div>
              <div className="service-four-content">
                <div className={`service-four-title ${dark ? "dark" : ""}`}>
                  <h4>
                    <a href="#">Analysis Product Marketing</a>
                  </h4>
                </div>
                <div className="service-four-icon-thumb">
                  <img
                    src="assets/images/service/service-icon7.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="service-four-btn">
                <a href="#">
                  View Details <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={`service-items-four ${dark ? "dark" : ""}`}>
              <div className="service-four-thumb">
                <img src="assets/images/service/service6.png" alt="image" />
              </div>
              <div className="service-four-content">
                <div className={`service-four-title ${dark ? "dark" : ""}`}>
                  <h4>
                    <a href="#">Discover Creative Strategy</a>
                  </h4>
                </div>
                <div className="service-four-icon-thumb">
                  <img
                    src="assets/images/service/service-icon8.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="service-four-btn">
                <a href="#">
                  View Details <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={`service-items-four ${dark ? "dark" : ""}`}>
              <div className="service-four-thumb">
                <img src="assets/images/service/service7.png" alt="image" />
              </div>
              <div className="service-four-content">
                <div className={`service-four-title ${dark ? "dark" : ""}`}>
                  <h4>
                    <a href="#">Web Development And Design</a>
                  </h4>
                </div>
                <div className="service-four-icon-thumb">
                  <img
                    src="assets/images/service/service-icon9.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="service-four-btn">
                <a href="#">
                  View Details <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={`service-items-four ${dark ? "dark" : ""}`}>
              <div className="service-four-thumb">
                <img src="assets/images/service/service8.png" alt="image" />
              </div>
              <div className="service-four-content">
                <div className={`service-four-title ${dark ? "dark" : ""}`}>
                  <h4>
                    <a href="#">Market Analysis &amp; Research</a>
                  </h4>
                </div>
                <div className="service-four-icon-thumb">
                  <img
                    src="assets/images/service/service-icon10.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="service-four-btn">
                <a href="#">
                  View Details <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={`service-items-four ${dark ? "dark" : ""}`}>
              <div className="service-four-thumb">
                <img src="assets/images/service/service9.png" alt="image" />
              </div>
              <div className="service-four-content">
                <div className={`service-four-title ${dark ? "dark" : ""}`}>
                  <h4>
                    <a href="#">Customer Care &amp; Support</a>
                  </h4>
                </div>
                <div className="service-four-icon-thumb">
                  <img
                    src="assets/images/service/service-icon11.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="service-four-btn">
                <a href="#">
                  View Details <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={`service-items-four ${dark ? "dark" : ""}`}>
              <div className="service-four-thumb">
                <img src="assets/images/service/service10.png" alt="image" />
              </div>
              <div className="service-four-content">
                <div className={`service-four-title ${dark ? "dark" : ""}`}>
                  <h4>
                    <a href="#">IT Support And Consulting</a>
                  </h4>
                </div>
                <div className="service-four-icon-thumb">
                  <img
                    src="assets/images/service/service-icon12.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="service-four-btn">
                <a href="#">
                  View Details <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceList;
