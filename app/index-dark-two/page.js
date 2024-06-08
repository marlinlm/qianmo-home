"use client";
import BrandSlider from "@/components/BrandSlider";
import ThrownLayout from "@/layouts/ThrownLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Index2 = () => {
  return (
    <ThrownLayout header={2}>
      {/*==================================================*/}
      {/* Start Thrown Slider Area */}
      {/*==================================================*/}
      <div className="slider-list">
        <Swiper {...sliderProps.hero2}>
          <SwiperSlide>
            <div className="slider-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="slider-content style-two">
                      <div className="slider-sub-title style-two">
                        <h4>Smart Business Consulting</h4>
                      </div>
                      <div className="slider-main-title">
                        <h1>Unlock Your Business's</h1>
                        <h1>Full Potential with</h1>
                        <h1>Success Future</h1>
                      </div>
                      <div className="thrown-btn slider2">
                        <Link legacyBehavior href="/contact-us">
                          <a className="header-button">
                            Read More
                            <span />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="slider-shape3 dance3">
                      <img src="assets/images/slider/shape3.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-area two">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="slider-content style-two">
                      <div className="slider-sub-title style-two">
                        <h4>Smart Business Consulting</h4>
                      </div>
                      <div className="slider-main-title">
                        <h1>Unlock Your HR</h1>
                        <h1>Potential Strategic</h1>
                        <h1>Consulting Services</h1>
                      </div>
                      <div className="thrown-btn slider2">
                        <Link legacyBehavior href="/contact-us">
                          <a className="header-button">
                            Read More
                            <span />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*==================================================*/}
      {/* End Thrown Slider Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown About Area */}
      {/*==================================================*/}
      <div className="about-area dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-thumb">
                <img src="assets/images/about/about-thumb2.png" alt />
                <div className="about-video-icon">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="bi bi-play" />
                  </a>
                </div>
                <div className="about-counter">
                  <div className="about-counter-thumb">
                    <img src="assets/images/about/about-counter.png" alt />
                  </div>
                  <div className="about-countent-content">
                    <h5 className="counter">1.289</h5>
                    <p>Our Remote Team</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-main-title style-two dark">
                <h2>Make Your Website More</h2>
                <h2>User-Friendly for Search Engines</h2>
              </div>
              <div className="about-content">
                <div className="about-discribtion style-two dark">
                  <p>
                    We'll match you with our team of expert strategists who will
                    make sure your top-of-the-line strategies are always on
                    target. Contact us today to get started!
                  </p>
                </div>
                <div className="process-ber-plugin">
                  <span className="process-bar dark">Website Development</span>
                  <div id="bar1" className="barfiller">
                    <div className="tipWrap" style={{ display: "inline" }}>
                      <span
                        className="tip"
                        style={{
                          left: "352.641px",
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
                        width: "382.5px",
                        transition: "width 7s ease-in-out 0s",
                      }}
                    />
                  </div>
                  <span className="process-bar dark">Digital Products</span>
                  <div id="bar2" className="barfiller">
                    <div className="tipWrap" style={{ display: "inline" }}>
                      <span
                        className="tip"
                        style={{
                          left: "307.641px",
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
                        width: "337.5px",
                        transition: "width 7s ease-in-out 0s",
                      }}
                    />
                  </div>
                  <span className="process-bar dark">SEO Analysis</span>
                  <div id="bar3" className="barfiller">
                    <div className="tipWrap" style={{ display: "inline" }}>
                      <span
                        className="tip"
                        style={{
                          left: "375.141px",
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
                        width: 405,
                        transition: "width 7s ease-in-out 0s",
                      }}
                    />
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
      {/* Start Thrown Contact Us Area */}
      {/*==================================================*/}
      <div className="contact-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="section-title contact">
                <div className="section-main-title contact">
                  <h2>Contact us Today And Let us</h2>
                  <h2>Know What you Need</h2>
                </div>
                <div className="contact-discription">
                  <p>
                    When does a mere internet 'SEO' company grow into a trusted
                    partner that stays in front of the latest industry trends?
                    When it's time to partner with Mocer, that's when. saidul
                    islam
                  </p>
                </div>
                <div className="thrown-btn contact">
                  <Link legacyBehavior href="/contact-us">
                    <a className="header-button">
                      Contact Us{" "}
                      <span style={{ top: "197.658px", left: "152.499px" }} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="contact-thumb">
                <img
                  src="assets/images/resource/contact-thumb.png"
                  alt="image"
                />
                <div className="contact-shape bounce-animate">
                  <img
                    src="assets/images/resource/contact-shape.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Contact Us Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Service Style Two Area */}
      {/*==================================================*/}
      <div className="service-area style-two dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>Provide Services</h4>
                </div>
                <div className="section-main-title dark">
                  <h2>Provide Creative Services For</h2>
                  <h2>Your Business Growth</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              {/* start service items box */}
              <div className="service-items-box-two dark">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style1.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title dark">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Construction Management
                    </Link>
                  </h4>
                </div>
                <div className="service-items-content-two dark">
                  <p>
                    Services related to financial record-keeping, bookkeeping,
                    tax preparation.
                  </p>
                </div>
                <div className="service-items-thumb-two">
                  <img src="assets/images/service/service1.png" alt="image" />
                  <div className="service-items-icon-two">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
              {/* End service items box */}
            </div>
            <div className="col-md-6 col-xl-3">
              {/* start service items box */}
              <div className="service-items-box-two dark">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style2.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title dark">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Architecture &amp; Building
                    </Link>
                  </h4>
                </div>
                <div className="service-items-content-two dark">
                  <p>
                    Services related to financial record-keeping, bookkeeping,
                    tax preparation.
                  </p>
                </div>
                <div className="service-items-thumb-two">
                  <img src="assets/images/service/service2.png" alt="image" />
                  <div className="service-items-icon-two">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
              {/* End service items box */}
            </div>
            <div className="col-md-6 col-xl-3">
              {/* start service items box */}
              <div className="service-items-box-two dark">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style3.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title dark">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Facade Engineering
                    </Link>
                  </h4>
                </div>
                <div className="service-items-content-two dark">
                  <p>
                    Services related to financial record-keeping, bookkeeping,
                    tax preparation.
                  </p>
                </div>
                <div className="service-items-thumb-two">
                  <img src="assets/images/service/service3.png" alt="image" />
                  <div className="service-items-icon-two">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
              {/* End service items box */}
            </div>
            <div className="col-md-6 col-xl-3">
              {/* start service items box */}
              <div className="service-items-box-two dark">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style4.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title dark">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Tiling And Painting
                    </Link>
                  </h4>
                </div>
                <div className="service-items-content-two dark">
                  <p>
                    Services related to financial record-keeping, bookkeeping,
                    tax preparation.
                  </p>
                </div>
                <div className="service-items-thumb-two">
                  <img src="assets/images/service/service4.png" alt="image" />
                  <div className="service-items-icon-two">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
              {/* End service items box */}
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Service Style Two Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Choose Area */}
      {/*==================================================*/}
      <div className="choose-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="choose-content">
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
                    Providing legal advice, contract drafting, coance
                    assistance, intellectual property protection, and other
                    legal support for businesses. Creating visual content, such
                    as logos, brochures, infographics, and other branding
                    materials.
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
                    </p>
                  </div>
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
      {/* Start Thrown Work Process Area */}
      {/*==================================================*/}
      <div className="work-process-area dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>Working Process</h4>
                </div>
                <div className="section-main-title work dark">
                  <h2>Check How We Work in </h2>
                  <h2>Easy Steps</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="work-process-single-box">
                <div className="work-process-thumb">
                  <img src="assets/images/resource/work1.png" alt="image" />
                  <div className="work-process-shape rotateme">
                    <img
                      src="assets/images/resource/work-border-shape.png"
                      alt="image"
                    />
                  </div>
                  <div className="work-process-number dark">
                    <h4>01</h4>
                  </div>
                  <div className="work-process-content dark">
                    <h4>
                      <Link legacyBehavior href="project-details">
                        General Contract
                      </Link>
                    </h4>
                    <p>
                      We provide a range of digital marketing lutions including
                      website design
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="work-process-single-box">
                <div className="work-process-thumb">
                  <img src="assets/images/resource/work2.png" alt="image" />
                  <div className="work-process-shape rotateme">
                    <img
                      src="assets/images/resource/work-border-shape.png"
                      alt="image"
                    />
                  </div>
                  <div className="work-process-number dark">
                    <h4>02</h4>
                  </div>
                  <div className="work-process-content dark">
                    <h4>
                      <Link legacyBehavior href="project-details">
                        Project Planing
                      </Link>
                    </h4>
                    <p>
                      We provide a range of digital marketing lutions including
                      website design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="work-process-single-box work">
                <div className="work-process-thumb">
                  <img src="assets/images/resource/work3.png" alt="image" />
                  <div className="work-process-shape rotateme">
                    <img
                      src="assets/images/resource/work-border-shape.png"
                      alt="image"
                    />
                  </div>
                  <div className="work-process-number dark">
                    <h4>03</h4>
                  </div>
                  <div className="work-process-content dark">
                    <h4>
                      <Link legacyBehavior href="project-details">
                        Interior Design
                      </Link>
                    </h4>
                    <p>
                      We provide a range of digital marketing lutions including
                      website design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Work Process Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Pricing Area */}
      {/*==================================================*/}
      <div className="pricing-area dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>Pricing Plan</h4>
                </div>
                <div className="section-main-title pricing dark">
                  <h2>Our Best Price Plan</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-single-box dark">
                <div className="pricing-content">
                  <div className="pricing-title dark">
                    <h3>Basic Pack</h3>
                  </div>
                  <div className="pricing-rate  dark">
                    <h3>
                      <span>$</span>30
                    </h3>
                    <span>.99</span>
                  </div>
                  <div className="pricing-time dark">
                    <span>
                      <i className="bi bi-alarm" /> 33 Min
                    </span>
                  </div>
                  <div className="pricing-list dark">
                    <span>
                      <i className="bi bi-check2" /> Powerful Admin Panel
                    </span>
                    <span>
                      <i className="bi bi-check2" /> 1 Native Android App
                    </span>
                    <span>
                      <i className="bi bi-check2" /> Multi-Language Support
                    </span>
                    <span className="inner">
                      <i className="bi bi-x" /> Advance Options
                    </span>
                  </div>
                </div>
                <div className="thrown-btn pircing">
                  <Link legacyBehavior href="/contact-us">
                    <a className="header-button">
                      Purchase Now <span />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-single-box dark">
                <div className="pricing-content">
                  <div className="pricing-title dark">
                    <h3>Basic Pack</h3>
                  </div>
                  <div className="pricing-rate  dark">
                    <h3>
                      <span>$</span>30
                    </h3>
                    <span>.99</span>
                  </div>
                  <div className="pricing-time dark">
                    <span>
                      <i className="bi bi-alarm" /> 33 Min
                    </span>
                  </div>
                  <div className="pricing-list dark">
                    <span>
                      <i className="bi bi-check2" /> Powerful Admin Panel
                    </span>
                    <span>
                      <i className="bi bi-check2" /> 1 Native Android App
                    </span>
                    <span>
                      <i className="bi bi-check2" /> Multi-Language Support
                    </span>
                    <span className="inner">
                      <i className="bi bi-x" /> Advance Options
                    </span>
                  </div>
                </div>
                <div className="thrown-btn pircing">
                  <Link legacyBehavior href="/contact-us">
                    <a className="header-button">
                      Purchase Now <span />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-single-box dark">
                <div className="pricing-content">
                  <div className="pricing-title dark">
                    <h3>Basic Pack</h3>
                  </div>
                  <div className="pricing-rate  dark">
                    <h3>
                      <span>$</span>30
                    </h3>
                    <span>.99</span>
                  </div>
                  <div className="pricing-time dark">
                    <span>
                      <i className="bi bi-alarm" /> 33 Min
                    </span>
                  </div>
                  <div className="pricing-list dark">
                    <span>
                      <i className="bi bi-check2" /> Powerful Admin Panel
                    </span>
                    <span>
                      <i className="bi bi-check2" /> 1 Native Android App
                    </span>
                    <span>
                      <i className="bi bi-check2" /> Multi-Language Support
                    </span>
                    <span className="inner">
                      <i className="bi bi-x" /> Advance Options
                    </span>
                  </div>
                </div>
                <div className="thrown-btn pircing">
                  <Link legacyBehavior href="/contact-us">
                    <a className="header-button">
                      Purchase Now <span />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Pricing Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Team Area */}
      {/*==================================================*/}
      <div className="team-area style-two dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-main-title team2 dark">
                <h2>Working With Excellentour</h2>
                <h2>Great Team</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="team-discription dark">
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
                <div className="team-item-content dark">
                  <h4>
                    <Link legacyBehavior href="team-details">
                      Rakabuming Suhu
                    </Link>
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
                <div className="team-item-content dark">
                  <h4>
                    <Link legacyBehavior href="team-details">
                      Nancy Lawson
                    </Link>
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
                <div className="team-item-content dark">
                  <h4>
                    <Link legacyBehavior href="team-details">
                      Dunith Wellalage
                    </Link>
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
                <div className="team-item-content dark">
                  <h4>
                    <Link legacyBehavior href="team-details">
                      Lahiru Samarakoon
                    </Link>
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
      {/* Start Thrown Teatimonial Style Two Area */}
      {/*==================================================*/}
      <div className="testimonial-area style-two">
        <div className="container">
          <div className="row">
            <div className="testi_list2 position-relative">
              <Swiper {...sliderProps.testimonial2}>
                <SwiperSlide className="col-lg-12">
                  <div className="testimonial-items-box">
                    <div className="testimonial-item-thumb">
                      <img
                        src="assets/images/testimonial/testi-3.png"
                        alt="image"
                      />
                    </div>
                    <div className="testimonial-item-content">
                      <div className="testimonial-icon">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <div className="testimonial-discription">
                        <p>
                          I've been using [business name] for the past year and
                          I'm so glad I did. Their products and services are
                          top-notch and their customer service is amazing. I
                          would highly recommend them to anyone
                        </p>
                      </div>
                      <div className="testimonial-title">
                        <h4>Kamindu Mendis</h4>
                        <span>UI/UX Designar</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="col-lg-12">
                  <div className="testimonial-items-box">
                    <div className="testimonial-item-thumb">
                      <img
                        src="assets/images/testimonial/testi-3.png"
                        alt="image"
                      />
                    </div>
                    <div className="testimonial-item-content">
                      <div className="testimonial-icon">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <div className="testimonial-discription">
                        <p>
                          I've been using [business name] for the past year and
                          I'm so glad I did. Their products and services are
                          top-notch and their customer service is amazing. I
                          would highly recommend them to anyone
                        </p>
                      </div>
                      <div className="testimonial-title">
                        <h4>Kamindu Mendis</h4>
                        <span>UI/UX Designar</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="owl-nav">
                <div className="owl-prev testimonial-2-prev">
                  <i className="bi bi-arrow-left" />
                </div>
                <div className="owl-next testimonial-2-next">
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
            <div className="testimonial-shape">
              <img
                src="assets/images/testimonial/testi-shape.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start Thrown Teatimonial Style Two Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Contact Style Two Area */}
      {/*==================================================*/}
      <div className="contact-area-three dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="section-title">
                <div className="section-sub-title contact-thrree">
                  <h4>Contact With Us</h4>
                </div>
                <div className="section-main-title contact-thrree dark">
                  <h2>Let’s Work Together?</h2>
                </div>
              </div>
              <div className="contact-three-discription dark">
                <p>
                  Providing legal advice, contract drafting, compliance
                  assistance, intellectual property protection, and other legal
                  support for businesses.
                </p>
              </div>
              <div className="contact-list dark">
                <span>
                  <i className="bi bi-chevron-double-right" /> Refreshing to get
                  such a personal touch
                </span>
                <span>
                  {" "}
                  <i className="bi bi-chevron-double-right" />
                  Velit esse cillum dolore eu
                </span>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="contact-single-box">
                    <div className="contact-icon">
                      <i className="bi bi-telephone-plus" />
                    </div>
                    <div className="contact-content dark">
                      <h5>Have Any Question?</h5>
                      <h3>+ 014x4531 9504</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="contact-single-box">
                    <div className="contact-icon">
                      <i className="bi bi-envelope" />
                    </div>
                    <div className="contact-content dark">
                      <h5>Send Email</h5>
                      <h3>example@gmail.com</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="contact-box dark">
                <div className="contact-title dark">
                  <h4>Contact Us</h4>
                </div>
                <form
                  action="https://formspree.io/f/myyleorq"
                  method="post"
                  id="it-form"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box">
                        <input
                          type="text"
                          name="email"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box">
                        <textarea
                          name="message"
                          placeholder="Message here .."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box-button contact">
                        <button type="Submit">Read More</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Contact Us Style Two Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Brand Area */}
      {/*==================================================*/}
      <BrandSlider dark={true} />
      {/*==================================================*/}
      {/* End Thrown Brand Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Blog Area */}
      {/*==================================================*/}
      <div className="blog-area style-two dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>Our Blog update</h4>
                </div>
                <div className="section-main-title dark">
                  <h2>Recent Important Stories</h2>
                  <h2>Daily Updated</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-single-box style-two dark">
                <div className="blog-thumb">
                  <img src="assets/images/blog/blog1.png" alt="image" />
                  <div className="blog-meta-date">
                    <h5>15</h5>
                    <span>May</span>
                  </div>
                </div>
                <div className="blog-content style-two dark">
                  <div className="blog-meta style-two dark">
                    <span>
                      <i className="bi bi-person" />
                      By Admin
                    </span>
                    <span>
                      <i className="bi bi-chat-left" /> (05)
                    </span>
                  </div>
                  <div className="blog-title style-two dark">
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Smashing Podcast Episode With Trine Falbe Martin
                      </Link>
                    </h4>
                  </div>
                  <div className="blog-btn style-two dark">
                    <a href="#">
                      Read More <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-single-box style-two dark">
                <div className="blog-thumb">
                  <img src="assets/images/blog/blog2.png" alt="image" />
                  <div className="blog-meta-date">
                    <h5>15</h5>
                    <span>May</span>
                  </div>
                </div>
                <div className="blog-content style-two dark">
                  <div className="blog-meta style-two dark">
                    <span>
                      <i className="bi bi-person" />
                      By Admin
                    </span>
                    <span>
                      <i className="bi bi-chat-left" /> (05)
                    </span>
                  </div>
                  <div className="blog-title style-two dark">
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Business Opening &amp; Various Ownership Forms
                      </Link>
                    </h4>
                  </div>
                  <div className="blog-btn style-two dark">
                    <a href="#">
                      Read More <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-single-box style-two dark">
                <div className="blog-thumb">
                  <img src="assets/images/blog/blog3.png" alt="image" />
                  <div className="blog-meta-date">
                    <h5>15</h5>
                    <span>May</span>
                  </div>
                </div>
                <div className="blog-content style-two dark">
                  <div className="blog-meta style-two dark">
                    <span>
                      <i className="bi bi-person" />
                      By Admin
                    </span>
                    <span>
                      <i className="bi bi-chat-left" /> (05)
                    </span>
                  </div>
                  <div className="blog-title style-two dark">
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Tips for Effective Client Design Agency
                      </Link>
                    </h4>
                  </div>
                  <div className="blog-btn style-two dark">
                    <a href="#">
                      Read More <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
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
export default Index2;
