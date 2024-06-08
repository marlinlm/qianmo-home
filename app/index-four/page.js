"use client";
import Counter from "@/components/Counter";
import ServiceList from "@/components/ServiceList";
import ThrownLayout from "@/layouts/ThrownLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const page = () => {
  return (
    <ThrownLayout header={2}>
      {/*==================================================*/}
      {/* Start Thrown Slider Area */}
      {/*==================================================*/}
      <div className="slider-area style-four">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="slider-four-thumb wow animate__slideInLeft">
                <img src="assets/images/slider/slider-thumb.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="slider-content four">
                <div className="slider-sub-title four">
                  <h4> Best IT Solutions</h4>
                </div>
                <div className="slider-main-title four">
                  <h1>IT Business Consulting</h1>
                  <h1>Our Agency Provide</h1>
                  <h1>Success Future</h1>
                </div>
                <div className="thrown-btn slider">
                  <Link legacyBehavior href="/contact-us">
                    <a className="header-button">
                      Get A Quout <span />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Slider Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown About Area */}
      {/*==================================================*/}
      <div className="about-area style-four">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-main-title style-two">
                <h2>Make Your Website More</h2>
                <h2>User-Friendly for Search Engines</h2>
              </div>
              <div className="about-content">
                <div className="about-discribtion style-two">
                  <p>
                    We'll match you with our team of expert strategists who will
                    make sure your top-of-the-line strategies are always on
                    target. Contact us today to get started!
                  </p>
                </div>
                <div className="process-ber-plugin">
                  <span className="process-bar">Website Development</span>
                  <div id="bar1" className="barfiller">
                    <div className="tipWrap" style={{ display: "inline" }}>
                      <span
                        className="tip"
                        style={{
                          left: "334.106px",
                          transition: "left 7s ease-in-out 0s",
                        }}
                      >
                        85%
                      </span>
                    </div>
                    <span
                      className="fill"
                      data-percentage={85}
                      style={{
                        background: "rgb(22, 181, 151)",
                        width: "365.811px",
                        transition: "width 7s ease-in-out 0s",
                      }}
                    />
                  </div>
                  <span className="process-bar">Digital Products</span>
                  <div id="bar2" className="barfiller">
                    <div className="tipWrap" style={{ display: "inline" }}>
                      <span
                        className="tip"
                        style={{
                          left: "225.586px",
                          transition: "left 7s ease-in-out 0s",
                        }}
                      >
                        75%
                      </span>
                    </div>
                    <span
                      className="fill my-class"
                      data-percentage={75}
                      style={{
                        background: "rgb(22, 181, 151)",
                        width: "257.944px",
                        transition: "width 7s ease-in-out 0s",
                      }}
                    />
                  </div>
                  <span className="process-bar">SEO Analysis</span>
                  <div id="bar3" className="barfiller">
                    <div className="tipWrap" style={{ display: "inline" }}>
                      <span
                        className="tip"
                        style={{
                          left: "225.586px",
                          transition: "left 7s ease-in-out 0s",
                        }}
                      >
                        90%
                      </span>
                    </div>
                    <span
                      className="fill my-class"
                      data-percentage={90}
                      style={{
                        background: "rgb(22, 181, 151)",
                        width: "257.944px",
                        transition: "width 7s ease-in-out 0s",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-thumb four">
                <img src="assets/images/about/about-4.png" alt="image" />
                <div className="about-counter four">
                  <div className="about-countent-content four">
                    <div className="about-counter-numbar">
                      <h5 className="counter">
                        <Counter end={17} />
                      </h5>
                    </div>
                    <div className="about-counter-discription">
                      <p>Years of Experience</p>
                    </div>
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
      {/* Start Thrown Call Do Action Area */}
      {/*==================================================*/}
      <div className="call-do-action-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="single-video style-four text-center">
                <div className="video-icon style-four">
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
              <div className="call-do-title text-center">
                <h2>Our Most Popular Services</h2>
                <h2>Watching Video</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Call Do Action Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Service Style Four Area */}
      {/*==================================================*/}
      <ServiceList />
      {/*==================================================*/}
      {/* End Thrown Service Style Four Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Brand Area */}
      {/*==================================================*/}
      <div className="brand-area">
        <div className="container">
          <div className="row">
            <div className="brand_list">
              <Swiper {...sliderProps.brand_list}>
                <SwiperSlide className="col-lg-12">
                  <div className="brand-thumb">
                    <img src="assets/images/brand/brand1.svg" alt="image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-lg-12">
                  <div className="brand-thumb">
                    <img src="assets/images/brand/brand2.svg" alt="image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-lg-12">
                  <div className="brand-thumb">
                    <img src="assets/images/brand/brand3.svg" alt="image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-lg-12">
                  <div className="brand-thumb">
                    <img src="assets/images/brand/brand4.svg" alt="image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-lg-12">
                  <div className="brand-thumb">
                    <img src="assets/images/brand/brand5.svg" alt="image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-lg-12">
                  <div className="brand-thumb">
                    <img src="assets/images/brand/brand6.svg" alt="image" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Brand Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Project Area Style Four Area */}
      {/*==================================================*/}
      <div className="project-area style-four">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>About Our Work</h4>
                </div>
                <div className="section-main-title">
                  <h2>We Are Passionate About Our</h2>
                  <h2>Clients And Our Work.</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="project-items-box">
                <div className="project-items-thumb">
                  <img src="assets/images/project/project7.png" alt="image" />
                  <div className="project-icon">
                    <a
                      className="project-icon venobox vbox-item"
                      data-gall="myportfolio"
                      href="assets/images/project/project7.png"
                    >
                      <i className="bi bi-plus-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-items-box">
                <div className="project-items-thumb">
                  <img src="assets/images/project/project8.png" alt="image" />
                  <div className="project-icon">
                    <a
                      className="project-icon venobox vbox-item"
                      data-gall="myportfolio"
                      href="assets/images/project/project8.png"
                    >
                      <i className="bi bi-plus-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-items-box">
                <div className="project-items-thumb">
                  <img src="assets/images/project/project9.png" alt="image" />
                  <div className="project-icon">
                    <a
                      className="project-icon venobox vbox-item"
                      data-gall="myportfolio"
                      href="assets/images/project/project9.png"
                    >
                      <i className="bi bi-plus-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-items-box">
                <div className="project-items-thumb">
                  <img src="assets/images/project/project10.png" alt="image" />
                  <div className="project-icon">
                    <a
                      className="project-icon venobox vbox-item"
                      data-gall="myportfolio"
                      href="assets/images/project/project10.png"
                    >
                      <i className="bi bi-plus-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-items-box">
                <div className="project-items-thumb">
                  <img src="assets/images/project/project11.png" alt="image" />
                  <div className="project-icon">
                    <a
                      className="project-icon venobox vbox-item"
                      data-gall="myportfolio"
                      href="assets/images/project/project11.png"
                    >
                      <i className="bi bi-plus-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-items-box">
                <div className="project-items-thumb">
                  <img src="assets/images/project/project12.png" alt="image" />
                  <div className="project-icon">
                    <a
                      className="project-icon venobox vbox-item"
                      data-gall="myportfolio"
                      href="assets/images/project/project12.png"
                    >
                      <i className="bi bi-plus-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Project Area Style Four Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Like Area */}
      {/*==================================================*/}
      <div className="like-us-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="like-us-single-box">
                <div className="like-us-content">
                  <h4>100 % Compensations</h4>
                  <p>
                    Disruptive forces such as new technology and system
                    integration, talent shortages, and infrastructure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="like-us-single-box">
                <div className="like-us-content">
                  <h4>Experienced Team</h4>
                  <p>
                    Disruptive forces such as new technology and system
                    integration, talent shortages, and infrastructure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="like-us-single-box">
                <div className="like-us-content">
                  <h4>Positive Change</h4>
                  <p>
                    Disruptive forces such as new technology and system
                    integration, talent shortages, and infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Like Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Team Area */}
      {/*==================================================*/}
      <div className="team-area style-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-main-title team2">
                <h2>Working With Excellentour</h2>
                <h2>Great Team</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="team-discription">
                <p>
                  We provide SEO services to help your website rank higher on
                  search engines like Google.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="team-items-box">
                <div className="team-item-thumb">
                  <img src="assets/images/team/team4.png" alt="image" />
                </div>
                <div className="team-item-content">
                  <h4>
                    <a href="#">Rakabuming Suhu</a>
                  </h4>
                  <span>Marketing Officer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="team-items-box">
                <div className="team-item-thumb">
                  <img src="assets/images/team/team5.png" alt="image" />
                </div>
                <div className="team-item-content">
                  <h4>
                    <a href="#">Nancy Lawson</a>
                  </h4>
                  <span>Account Manager</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="team-items-box">
                <div className="team-item-thumb">
                  <img src="assets/images/team/team6.png" alt="image" />
                </div>
                <div className="team-item-content">
                  <h4>
                    <a href="#">Dunith Wellalage</a>
                  </h4>
                  <span>Backend Developer</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="team-items-box">
                <div className="team-item-thumb">
                  <img src="assets/images/team/team7.png" alt="image" />
                </div>
                <div className="team-item-content">
                  <h4>
                    <a href="#">Lahiru Samarakoon</a>
                  </h4>
                  <span>Founder, CTO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Team Area */}
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
                  <img src="assets/images/resource/choose1.png" alt="image" />
                </div>
                <div className="choose-content">
                  <h4>Accounting and Bookkeeping</h4>
                  <p>We provide a range of digital marketing solutions.</p>
                </div>
              </div>
              <div className="choose-single-box">
                <div className="choose-icon">
                  <img src="assets/images/resource/choose2.png" alt="image" />
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
                  <div className="col-lg-4 col-md-12">
                    <div className="subscribe-title">
                      <h4>Subscribe Our Newslatter</h4>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12">
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
                          <div className="form-box-button">
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
      {/* Start Thrown Blog Area */}
      {/*==================================================*/}
      <div className="blog-area style-four">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>Our Blog update</h4>
                </div>
                <div className="section-main-title">
                  <h2>Recent Important Stories</h2>
                  <h2>Daily Updated</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-items-four">
                <div className="blog-four-thumb">
                  <img src="assets/images/blog/blog4.jpg" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-items-four inner">
                <div className="blog-content style-two">
                  <div className="blog-meta style-two">
                    <span>
                      <i className="bi bi-calendar-day" /> September 26, 2023
                    </span>
                  </div>
                  <div className="blog-title style-two">
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Meet Auto Manage, The Best AI Management Tools
                      </Link>
                    </h4>
                  </div>
                  <div className="blog-btn style-two">
                    <a href="#">
                      Read More <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-items-four">
                <div className="blog-four-thumb">
                  <img src="assets/images/blog/blog5.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-items-four inner">
                <div className="blog-content style-two">
                  <div className="blog-meta style-two">
                    <span>
                      <i className="bi bi-calendar-day" /> September 26, 202
                    </span>
                  </div>
                  <div className="blog-title style-two">
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Innovative Business Solutions for Financial Company
                      </Link>
                    </h4>
                  </div>
                  <div className="blog-btn style-two">
                    <a href="#">
                      Read More <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-items-four">
                <div className="blog-four-thumb">
                  <img src="assets/images/blog/blog6.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-items-four inner">
                <div className="blog-content style-two">
                  <div className="blog-meta style-two">
                    <span>
                      <i className="bi bi-calendar-day" /> September 26, 202
                    </span>
                  </div>
                  <div className="blog-title style-two">
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Our Business Thrives To Contribute Global
                      </Link>
                    </h4>
                  </div>
                  <div className="blog-btn style-two">
                    <a href="#">
                      Read More <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-four-discription">
                <p>
                  We have more Recent Blog for extra knowledge.{" "}
                  <a href="#">More Blog</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Blog Area */}
      {/*==================================================*/}
    </ThrownLayout>
  );
};
export default page;
