import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Team Details"} />
      <div className="team-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8">
              <div className="ba-team-details-author-skill-area pb-20 pb-xl-0">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="team-details-author-img">
                      <img
                        src="assets/images/team/team-details-thumb.png"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className=" col-lg-6 col-md-6">
                    <div className="team-details-author-content">
                      <div className="team-details-author-name">
                        <h5>Anthony Jeferson</h5>
                        <span>Constraction Designer</span>
                      </div>
                      <div className="team-details-author-experience">
                        <ul>
                          <li>
                            <span className="label">Position:</span>
                            <span className="value">Co Founder</span>
                          </li>
                          <li>
                            <span className="label">Practice Area:</span>
                            <span className="value">Realestate Agen</span>
                          </li>
                          <li>
                            <span className="label">Experience:</span>
                            <span className="value">12 Years</span>
                          </li>
                          <li>
                            <span className="label">Address:</span>
                            <span className="value">
                              Millington, Ave, TN 38053
                            </span>
                          </li>
                          <li>
                            <span className="label">Phone:</span>
                            <span className="value">
                              <a href="tel:+00568746987">+00 568 746 987</a>
                            </span>
                          </li>
                          <li>
                            <span className="label">Email:</span>
                            <a
                              href="mailto:youremail@gmail.com"
                              className="value"
                            >
                              youremail@gmail.com
                            </a>
                          </li>
                          <li>
                            <span className="label">Website:</span>
                            <a href="yourwebsitehere.com" className="value">
                              yourwebsitehere.com
                            </a>
                          </li>
                          <li>
                            <span className="label">Fax: </span>
                            <a className="value" href="tel:568746987">
                              568 746 987
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team-card-box-social">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /. team details author skill */}
            </div>
            <div className="col-lg-4 col-md-12">
              {/* start progress bar */}
              <div className="process-ber-plugin">
                <span className="process-bar style-two">
                  Customer Satisficed{" "}
                </span>
                <div id="bar1" className="barfiller style-two">
                  <div className="tipWrap" style={{ display: "inline" }}>
                    <span
                      className="tip"
                      style={{
                        left: "259.477px",
                        transition: "left 7s ease-in-out 0s",
                      }}
                    >
                      70%
                    </span>
                  </div>
                  <span
                    className="fill"
                    data-percentage={70}
                    style={{
                      background: "rgb(22, 181, 151)",
                      width: "291.199px",
                      transition: "width 7s ease-in-out 0s",
                    }}
                  />
                </div>
                <span className="process-bar style-two">
                  Customer Satisficed
                </span>
                <div id="bar2" className="barfiller style-two">
                  <div className="tipWrap" style={{ display: "inline" }}>
                    <span
                      className="tip"
                      style={{
                        left: "216.54px",
                        transition: "left 7s ease-in-out 0s",
                      }}
                    >
                      60%
                    </span>
                  </div>
                  <span
                    className="fill my-class"
                    data-percentage={60}
                    style={{
                      background: "rgb(22, 181, 151)",
                      width: "249.599px",
                      transition: "width 7s ease-in-out 0s",
                    }}
                  />
                </div>
                <span className="process-bar style-two">
                  Customer Satisficed
                </span>
                <div id="bar3" className="barfiller style-two">
                  <div className="tipWrap" style={{ display: "inline" }}>
                    <span
                      className="tip"
                      style={{
                        left: "330.213px",
                        transition: "left 7s ease-in-out 0s",
                      }}
                    >
                      87%
                    </span>
                  </div>
                  <span
                    className="fill my-class"
                    data-percentage={87}
                    style={{
                      background: "rgb(22, 181, 151)",
                      width: "361.918px",
                      transition: "width 7s ease-in-out 0s",
                    }}
                  />
                </div>
                <span className="process-bar style-two">
                  Customer Satisficed
                </span>
                <div id="bar4" className="barfiller style-two">
                  <div className="tipWrap" style={{ display: "inline" }}>
                    <span
                      className="tip"
                      style={{
                        left: "259.477px",
                        transition: "left 7s ease-in-out 0s",
                      }}
                    >
                      70%
                    </span>
                  </div>
                  <span
                    className="fill my-class"
                    data-percentage={70}
                    style={{
                      background: "rgb(22, 181, 151)",
                      width: "291.199px",
                      transition: "width 7s ease-in-out 0s",
                    }}
                  />
                </div>
                <span className="process-bar style-two">
                  Customer Satisficed
                </span>
                <div id="bar5" className="barfiller style-two">
                  <div className="tipWrap" style={{ display: "inline" }}>
                    <span
                      className="tip"
                      style={{
                        left: "216.54px",
                        transition: "left 7s ease-in-out 0s",
                      }}
                    >
                      60%
                    </span>
                  </div>
                  <span
                    className="fill my-class"
                    data-percentage={60}
                    style={{
                      background: "rgb(22, 181, 151)",
                      width: "249.599px",
                      transition: "width 7s ease-in-out 0s",
                    }}
                  />
                </div>
              </div>
              {/* end progress bar */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="team-details-content">
                <div className="team-details-title">
                  <h4>Personal Experience</h4>
                </div>
                <div className="team-details-discription">
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    , omnis voluptas assumenda est, omnis dolor repellendus.
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates repudiandae
                    sint et molestiae non recusandae. Itaque earum rerum hic
                    tenetur a sapiente delectus, ut aut reiciendis voluptatibus.
                  </p>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus. Temporibus autem quibusdam et aut officiis
                    debitis aut
                  </p>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    , omnis voluptas assumenda est, omnis dolor repellendus.
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates repudiandae
                    sint et molestiae non recusandae. Itaque earum rerum hic
                    tenetur a sapiente delectus, ut aut reiciendis voluptatibus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="contact-box inner team">
                <div className="contact-title inner team">
                  <h4>Leave A Comment</h4>
                </div>
                <form
                  action="https://formspree.io/f/myyleorq"
                  method="POST"
                  id="it-form"
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box team">
                        <input type="text" name="name" placeholder="Name*" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box team">
                        <input type="text" name="email" placeholder="E-mail*" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-box team">
                        <input
                          type="text"
                          name="email"
                          placeholder="Website*"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-box team">
                        <textarea
                          name="massage"
                          id="massage"
                          cols={30}
                          rows={10}
                          placeholder="Your Comments*"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-box-button team">
                        <button type="Submit">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="status" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BrandSlider />
    </ThrownLayout>
  );
};
export default page;
