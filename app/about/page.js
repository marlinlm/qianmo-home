import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"About Us"} />
      {/*==================================================*/}
      {/* Start Thrown About Area */}
      {/*==================================================*/}
      <div className="about-area inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-thumb">
                <img src="assets/images/about/about-thumb.jpg" alt="" />
                <div className="about-shape bounce-animate">
                  <img src="assets/images/about/about-shape.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <div className="about-sub-title">
                  <h4>Business GROWTH</h4>
                </div>
                <div className="about-main-title">
                  <h2>Connecting your Business</h2>
                  <h2>With The World</h2>
                </div>
              </div>
              <div className="about-content">
                <div className="about-discribtion">
                  <p>
                    There are many variations of passages of lorem in free
                    market to available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised
                    words
                  </p>
                </div>
                <div className="about-title">
                  <h4>We Design &amp; Build Powerful Websites</h4>
                </div>
                <div className="about-discribtion">
                  <p>
                    Variations of passages of lorem in free market to available,
                    but the majority have suffered alteration in some form, by
                    injected humour,or randomised words
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    {/*start about single box */}
                    <div className="about-single-box">
                      <div className="about-icon">
                        <i className="bi bi-patch-check" />
                      </div>
                      <div className="about-text">
                        <h4>For marketing Professionals</h4>
                      </div>
                    </div>
                    {/*end about single box */}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    {/*start about single box */}
                    <div className="about-single-box">
                      <div className="about-icon">
                        <i className="bi bi-patch-check" />
                      </div>
                      <div className="about-text">
                        <h4>Event Marketing Opportunity</h4>
                      </div>
                    </div>
                    {/*end about single box */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown About Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Choose Area */}
      {/*==================================================*/}
      <div className="choose-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <div className="section-sub-title choose">
                  <h4>We Provide Best Solution</h4>
                </div>
                <div className="section-main-title choose">
                  <h2>Reason For Choosing</h2>
                  <h2>Our Consultancy</h2>
                </div>
              </div>
              <div className="choose-discription">
                <p>
                  Providing legal advice, contract drafting, coance assistance,
                  intellectual property protection, and other legal support for
                  businesses. Creating visual content, such as logos, brochures,
                  infographics, and other branding materials.
                </p>
              </div>
              <div className="choose-single-box">
                <div className="choose-icon">
                  <img src="assets/images/resource/choose1.png" alt="" />
                </div>
                <div className="choose-content">
                  <h4>Accounting and Bookkeeping</h4>
                  <p>We provide a range of digital marketing solutions.</p>
                </div>
              </div>
              <div className="choose-single-box">
                <div className="choose-icon">
                  <img src="assets/images/resource/choose2.png" alt="" />
                </div>
                <div className="choose-content">
                  <h4>Customer Service And Support</h4>
                  <p>
                    Our pricing varies depending on the specific services you
                    require.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="single-video style-two">
                <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="bi bi-play" />
                  </a>
                </div>
              </div>
              <div className="choose-contact">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="subscribe-title">
                      <h4>Subscribe Our Newslatter</h4>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <form
                      action="https://formspree.io/f/myyleorq"
                      method="post"
                      id="#"
                    >
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <div className="form-box">
                            <input
                              type="text"
                              name="email"
                              placeholder="Email Address"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <div className="form-box-button choose">
                            <button type="Submit">
                              Subscribe <i className="bi bi-arrow-right" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Choose Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Service Area */}
      {/*==================================================*/}
      <div className="service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>Provide Services</h4>
                </div>
                <div className="section-main-title">
                  <h2>Provide Creative Services For</h2>
                  <h2>Your Business Growth</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon1.png" alt="" />
                </div>
                <div className="service-content">
                  <div className="service-title">
                    <h4>
                      <a href="#">Analysis Product Marketing</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                    <p>
                      Egestas dictum le mmodo ristique nunc faucibus sitortor
                      commodo aliquet commodo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon2.png" alt="" />
                </div>
                <div className="service-content">
                  <div className="service-title">
                    <h4>
                      <a href="#">Discover Creative Strategy</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                    <p>
                      Egestas dictum le mmodo ristique nunc faucibus sitortor
                      commodo aliquet commodo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon3.png" alt="" />
                </div>
                <div className="service-content">
                  <div className="service-title">
                    <h4>
                      <a href="#">Analysis Product Marketing</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                    <p>
                      Egestas dictum le mmodo ristique nunc faucibus sitortor
                      commodo aliquet commodo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon4.png" alt="" />
                </div>
                <div className="service-content">
                  <div className="service-title">
                    <h4>
                      <a href="#">Solution And Regenerating Easily</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                    <p>
                      Egestas dictum le mmodo ristique nunc faucibus sitortor
                      commodo aliquet commodo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon5.png" alt="" />
                </div>
                <div className="service-content">
                  <div className="service-title">
                    <h4>
                      <a href="#">Cool &amp; Modern Animations</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                    <p>
                      Egestas dictum le mmodo ristique nunc faucibus sitortor
                      commodo aliquet commodo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon6.png" alt="" />
                </div>
                <div className="service-content">
                  <div className="service-title">
                    <h4>
                      <a href="#">Varied Layouts &amp; Parallax</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                    <p>
                      Egestas dictum le mmodo ristique nunc faucibus sitortor
                      commodo aliquet commodo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon1.png" alt="" />
                </div>
                <div className="service-content">
                  <div className="service-title">
                    <h4>
                      <a href="#">Market Analysis &amp; Research</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                    <p>
                      Egestas dictum le mmodo ristique nunc faucibus sitortor
                      commodo aliquet commodo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="service-single-box">
                <div className="service-icon">
                  <img src="assets/images/service/service-icon1.png" alt="" />
                </div>
                <div className="service-content">
                  <div className="service-title">
                    <h4>
                      <a href="#">Customer Care &amp; Support</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription">
                    <p>
                      Egestas dictum le mmodo ristique nunc faucibus sitortor
                      commodo aliquet commodo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Service Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Faq Area */}
      {/*==================================================*/}
      <div className="faq-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="single-video text-center">
                <div className="video-icon">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="bi bi-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <Faq />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Faq Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Team Area */}
      {/*==================================================*/}
      <div className="team-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>OUR WORKERS</h4>
                </div>
                <div className="section-main-title team">
                  <h2>Working With Excellentour</h2>
                  <h2>Great Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="team-single-box">
                <div className="team-thumb">
                  <img src="assets/images/team/team1.png" alt="" />
                  <div className="team-share-social">
                    <div className="team-socail-icon">
                      <a href="#">
                        <span>
                          <i className="fab fa-facebook-f" />
                        </span>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </div>
                    <div className="team-btn">
                      <div className="team-icon">
                        <span>
                          <i className="bi bi-share" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-title">
                    <h4>
                      <a href="#">George Clooney</a>
                    </h4>
                    <span>Marketing Officer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-single-box">
                <div className="team-thumb">
                  <img src="assets/images/team/team2.png" alt="" />
                  <div className="team-share-social">
                    <div className="team-socail-icon">
                      <a href="#">
                        <span>
                          <i className="fab fa-facebook-f" />
                        </span>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </div>
                    <div className="team-btn">
                      <div className="team-icon">
                        <span>
                          <i className="bi bi-share" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-title">
                    <h4>
                      <a href="#">Dennis Barrett</a>
                    </h4>
                    <span>Head of Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-single-box">
                <div className="team-thumb">
                  <img src="assets/images/team/team3.png" alt="" />
                  <div className="team-share-social">
                    <div className="team-socail-icon">
                      <a href="#">
                        <span>
                          <i className="fab fa-facebook-f" />
                        </span>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </div>
                    <div className="team-btn">
                      <div className="team-icon">
                        <span>
                          <i className="bi bi-share" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-title">
                    <h4>
                      <a href="#">Louis Ferguson</a>
                    </h4>
                    <span>Co-Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-shape1 bounce-animate">
            <img src="assets/images/team/team-shape1.png" alt="" />
          </div>
          <div className="team-shape2 bounce-animate">
            <img src="assets/images/team/team-shape2.png" alt="" />
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Team Area */}
      {/*==================================================*/}
    </ThrownLayout>
  );
};
export default page;
