"use client";
import Faq from "@/components/Faq";
import Sucsess from "@/components/Sucsess";
import Work from "@/components/Work";
import ThrownLayout from "@/layouts/ThrownLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const page = () => {
  return (
    <ThrownLayout header={3}>
      {/*==================================================*/}
      {/* Start Thrown Slider Area */}
      {/*==================================================*/}
      <section className="banner-section style-three">
        <div className="banner-carousel">
          <Swiper {...sliderProps.hero1}>
            <SwiperSlide className="slide-item one">
              <div
                className="image-layer"
                style={{
                  backgroundImage: 'url("assets/images/slider/slider-5.png")',
                }}
              />
              <div className="container">
                <div className="slider-content style-three">
                  <div className="slider-sub-title style-three">
                    <h4>The Next Gen</h4>
                  </div>
                  <div className="slider-main-title style-three">
                    <h1>WE PROVIDE SERVICES</h1>
                    <h1>AND SOLUTIONS TO ENTERPRISE</h1>
                  </div>
                  <div className="thrown-btn slider three">
                    <Link legacyBehavior href="/contact-us">
                      <a className="header-button">
                        Read More <span />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item two">
              <div
                className="image-layer"
                style={{
                  backgroundImage: 'url("assets/images/slider/slider6.png")',
                }}
              />
              <div className="container">
                <div className="slider-content style-three">
                  <div className="slider-sub-title style-three">
                    <h4>Smart it solutions</h4>
                  </div>
                  <div className="slider-main-title style-three">
                    <h1>Our Agency Provide</h1>
                    <h1>Best IT Solutions </h1>
                    <h1>Success Future</h1>
                  </div>
                  <div className="thrown-btn slider three">
                    <Link legacyBehavior href="/contact-us">
                      <a className="header-button">
                        Read More <span />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/*==================================================*/}
      {/* End Thrown Slider Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown About Area */}
      {/*==================================================*/}
      <div className="about-area style-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-thumb style-three">
                <img src="assets/images/about/about-thumb3.png" alt="image" />
                <div className="about-shape-three bounce-animate ">
                  <img src="assets/images/about/shape3.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <div className="section-sub-title about3">
                  <h4>PROVIDE BETTER EXPERIENCES!</h4>
                </div>
                <div className="section-main-title about3">
                  <h2>Best It &amp; Technology Agency</h2>
                  <h2>For Your Business</h2>
                </div>
              </div>
              <div className="about-content">
                <div className="about-discribtion style-three">
                  <p>
                    Quisque dignissim enim diam, eget pulvinar ex viverra id.
                    Nulla a lobortis lectus, id volutpat magna. Morbi consequat
                    porttitor fermentum. Nulla vestibulum tincidunt viverra.
                    Vestibulum accumsan
                  </p>
                </div>
                <div className="process-ber-plugin">
                  <span className="process-bar">Best It &amp; Technology</span>
                  <div id="bar1" className="barfiller">
                    <div className="tipWrap" style={{ display: "inline" }}>
                      <span
                        className="tip"
                        style={{
                          left: "334.106px",
                          transition: "left 7s ease-in-out 0s",
                        }}
                      >
                        78%
                      </span>
                    </div>
                    <span
                      className="fill"
                      data-percentage={78}
                      style={{
                        background: "rgb(22, 181, 151)",
                        width: "365.811px",
                        transition: "width 7s ease-in-out 0s",
                      }}
                    />
                  </div>
                  <span className="process-bar">Health ValuableIdeas</span>
                  <div id="bar2" className="barfiller">
                    <div className="tipWrap" style={{ display: "inline" }}>
                      <span
                        className="tip"
                        style={{
                          left: "225.586px",
                          transition: "left 7s ease-in-out 0s",
                        }}
                      >
                        55%
                      </span>
                    </div>
                    <span
                      className="fill my-class"
                      data-percentage={55}
                      style={{
                        background: "rgb(22, 181, 151)",
                        width: "257.944px",
                        transition: "width 7s ease-in-out 0s",
                      }}
                    />
                  </div>
                </div>
                <div className="about-bottom">
                  <div className="about-bottom-thumb">
                    <img
                      src="assets/images/about/about-bottom.png"
                      alt="image"
                    />
                  </div>
                  <div className="about-bottom-title">
                    <h4>Max Benjamin</h4>
                    <span>Director</span>
                  </div>
                  <div className="about-signiture">
                    <img src="assets/images/about/signiture.png" alt="image" />
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
      <div className="contact-us-area style-three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="contact-us-items">
                <div className="contact-us-content style-three">
                  <h4>REASON TO CHOOSE US</h4>
                  <h2>We Provide Truly Prominent IT Solutions.</h2>
                </div>
                <div className="contact-us-list">
                  <span>
                    <i className="bi bi-check" /> Agile web design and
                    development methodology
                  </span>
                  <span>
                    <i className="bi bi-check" /> Award winning web solutions
                    and sites
                  </span>
                  <span>
                    <i className="bi bi-check" /> Competitive rates for web
                    design and development talent
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="contact-us-items-box">
                <div className="contact-icon-thumb">
                  <img
                    src="assets/images/resource/contact-icon.png"
                    alt="image"
                  />
                </div>
                <div className="contact-items-content">
                  <h6>Need Help? Call us</h6>
                  <h4>
                    <a href="#">+91 458 654 528</a>
                  </h4>
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
      {/* Start Thrown Service Area */}
      {/*==================================================*/}
      <div className="service-area style-three">
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
            <div className="col-lg-4 col-md-6">
              <div className="service-single-box style-three">
                <div className="service-conten style-three">
                  <div className="service-title style-three">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        It Server &amp; Cyber Security
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Transmax is the world’s driving worldwide coordinations
                      supplierwe uphold industry and exchange the worldwide
                    </p>
                  </div>
                </div>
                <div className="service-bottom">
                  <div className="service-icon">
                    <img
                      src="assets/images/service/service-icon1.png"
                      alt="image"
                    />
                  </div>
                  <div className="thrown-btn service">
                    <a className="header-button" href="#">
                      Learn More <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-single-box style-three">
                <div className="service-conten style-three">
                  <div className="service-title style-three">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Business Strategy Growth
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Transmax is the world’s driving worldwide coordinations
                      supplierwe uphold industry and exchange the worldwide
                    </p>
                  </div>
                </div>
                <div className="service-bottom">
                  <div className="service-icon">
                    <img
                      src="assets/images/service/service-icon2.png"
                      alt="image"
                    />
                  </div>
                  <div className="thrown-btn service">
                    <a className="header-button" href="#">
                      Learn More <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-single-box style-three">
                <div className="service-conten style-three">
                  <div className="service-title style-three">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Machine Learning And Ai
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Transmax is the world’s driving worldwide coordinations
                      supplierwe uphold industry and exchange the worldwide
                    </p>
                  </div>
                </div>
                <div className="service-bottom">
                  <div className="service-icon">
                    <img
                      src="assets/images/service/service-icon3.png"
                      alt="image"
                    />
                  </div>
                  <div className="thrown-btn service">
                    <a className="header-button" href="#">
                      Learn More <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-single-box style-three">
                <div className="service-conten style-three">
                  <div className="service-title style-three">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Analysis Product Marketing
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Transmax is the world’s driving worldwide coordinations
                      supplierwe uphold industry and exchange the worldwide
                    </p>
                  </div>
                </div>
                <div className="service-bottom">
                  <div className="service-icon">
                    <img
                      src="assets/images/service/service-icon4.png"
                      alt="image"
                    />
                  </div>
                  <div className="thrown-btn service">
                    <a className="header-button" href="#">
                      Learn More <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-single-box style-three">
                <div className="service-conten style-three">
                  <div className="service-title style-three">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Solution Regenerating Easily
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Transmax is the world’s driving worldwide coordinations
                      supplierwe uphold industry and exchange the worldwide
                    </p>
                  </div>
                </div>
                <div className="service-bottom">
                  <div className="service-icon">
                    <img
                      src="assets/images/service/service-icon5.png"
                      alt="image"
                    />
                  </div>
                  <div className="thrown-btn service">
                    <a className="header-button" href="#">
                      Learn More <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-single-box style-three">
                <div className="service-conten style-three">
                  <div className="service-title style-three">
                    <h4>
                      <a href="#">Customer Care &amp; Support</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Transmax is the world’s driving worldwide coordinations
                      supplierwe uphold industry and exchange the worldwide
                    </p>
                  </div>
                </div>
                <div className="service-bottom">
                  <div className="service-icon">
                    <img
                      src="assets/images/service/service-icon6.png"
                      alt="image"
                    />
                  </div>
                  <div className="thrown-btn service">
                    <Link legacyBehavior href="/contact-us">
                      <a className="header-button">
                        Learn More <span />
                      </a>
                    </Link>
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
      {/* Start Thrown Project Area */}
      {/*==================================================*/}
      <Work />
      {/*==================================================*/}
      {/* End Thrown Project Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Sucsess Area */}
      {/*==================================================*/}
      <Sucsess />
      {/*==================================================*/}
      {/* End Thrown Sucsess Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Team Area */}
      {/*==================================================*/}
      <div className="team-area style-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>OUR WORKERS</h4>
                </div>
                <div className="section-main-title">
                  <h2>Working With Excellentour</h2>
                  <h2>Great Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="team-items-box">
                <div className="team-itmes-content">
                  <h4>
                    <Link legacyBehavior href="team-details">
                      Roten Barsa
                    </Link>
                  </h4>
                  <span>IT Managment</span>
                </div>
                <div className="team-items-thumb">
                  <img src="assets/images/team/team8.png" alt="image" />
                  <div className="team-main-icon">
                    <a href="#">
                      <i className="bi bi-plus-lg" />
                    </a>
                  </div>
                  <div className="team-sub-icon">
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
                          <i className="fab fa-vimeo-v" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="team-items-box">
                <div className="team-itmes-content">
                  <h4>
                    <Link legacyBehavior href="team-details">
                      Greg Grinstead
                    </Link>
                  </h4>
                  <span>IT Managment</span>
                </div>
                <div className="team-items-thumb">
                  <img src="assets/images/team/team9.png" alt="image" />
                  <div className="team-main-icon">
                    <a href="#">
                      <i className="bi bi-plus-lg" />
                    </a>
                  </div>
                  <div className="team-sub-icon">
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
                          <i className="fab fa-vimeo-v" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="team-items-box">
                <div className="team-itmes-content">
                  <h4>
                    <Link legacyBehavior href="team-details">
                      Elijah Williaml
                    </Link>
                  </h4>
                  <span>IT Managment</span>
                </div>
                <div className="team-items-thumb">
                  <img src="assets/images/team/team10.png" alt="image" />
                  <div className="team-main-icon">
                    <a href="#">
                      <i className="bi bi-plus-lg" />
                    </a>
                  </div>
                  <div className="team-sub-icon">
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
                          <i className="fab fa-vimeo-v" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="team-items-box">
                <div className="team-itmes-content">
                  <h4>
                    <Link legacyBehavior href="team-details">
                      Nicole Finnan
                    </Link>
                  </h4>
                  <span>IT Managment</span>
                </div>
                <div className="team-items-thumb">
                  <img src="assets/images/team/team11.png" alt="image" />
                  <div className="team-main-icon">
                    <a href="#">
                      <i className="bi bi-plus-lg" />
                    </a>
                  </div>
                  <div className="team-sub-icon">
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
                          <i className="fab fa-vimeo-v" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
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
      {/* Start Thrown Faq Area */}
      {/*==================================================*/}
      <div className="faq-area style-three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="faq-thumb">
                <img src="assets/images/resource/faq-thumb.png" alt="image" />
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
      {/* Start Thrown Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>OUR WORKERS</h4>
                </div>
                <div className="section-main-title">
                  <h2>Working With Excellentour</h2>
                  <h2>Great Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="testi_list">
              <Swiper {...sliderProps.testimonial}>
                <SwiperSlide>
                  <div className="testi-single-box">
                    <div className="testi-thumb">
                      <img src="assets/images/testimonial/testi1.png" alt="" />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Charlize Theron</h4>
                        <span>Trainer</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          Foundation was established with a small idea that was
                          incepted in the minds of its promoters in the year
                          1994! We skilfully guide applicants for immigration
                          process to any country they aspire to settle down
                        </p>
                      </div>
                    </div>
                    <div className="testi-icon-thumb">
                      <img
                        src="assets/images/testimonial/testi-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="testi-rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testi-single-box">
                    <div className="testi-thumb">
                      <img src="assets/images/testimonial/testi2.png" alt="" />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Charlize Theron</h4>
                        <span>Admin Executive</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          Foundation was established with a small idea that was
                          incepted in the minds of its promoters in the year
                          1994! We skilfully guide applicants for immigration
                          process to any country they aspire to settle down
                        </p>
                      </div>
                    </div>
                    <div className="testi-icon-thumb">
                      <img
                        src="assets/images/testimonial/testi-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="testi-rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testi-single-box">
                    <div className="testi-thumb">
                      <img src="assets/images/testimonial/testi1.png" alt="" />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Charlize Theron</h4>
                        <span>Trainer</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          Foundation was established with a small idea that was
                          incepted in the minds of its promoters in the year
                          1994! We skilfully guide applicants for immigration
                          process to any country they aspire to settle down
                        </p>
                      </div>
                    </div>
                    <div className="testi-icon-thumb">
                      <img
                        src="assets/images/testimonial/testi-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="testi-rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testi-single-box">
                    <div className="testi-thumb">
                      <img src="assets/images/testimonial/testi2.png" alt="" />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Charlize Theron</h4>
                        <span>Admin Executive</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          Foundation was established with a small idea that was
                          incepted in the minds of its promoters in the year
                          1994! We skilfully guide applicants for immigration
                          process to any country they aspire to settle down
                        </p>
                      </div>
                    </div>
                    <div className="testi-icon-thumb">
                      <img
                        src="assets/images/testimonial/testi-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="testi-rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testi-single-box">
                    <div className="testi-thumb">
                      <img src="assets/images/testimonial/testi1.png" alt="" />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Charlize Theron</h4>
                        <span>Trainer</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          Foundation was established with a small idea that was
                          incepted in the minds of its promoters in the year
                          1994! We skilfully guide applicants for immigration
                          process to any country they aspire to settle down
                        </p>
                      </div>
                    </div>
                    <div className="testi-icon-thumb">
                      <img
                        src="assets/images/testimonial/testi-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="testi-rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testi-single-box">
                    <div className="testi-thumb">
                      <img src="assets/images/testimonial/testi2.png" alt="" />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Charlize Theron</h4>
                        <span>Admin Executive</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          Foundation was established with a small idea that was
                          incepted in the minds of its promoters in the year
                          1994! We skilfully guide applicants for immigration
                          process to any country they aspire to settle down
                        </p>
                      </div>
                    </div>
                    <div className="testi-icon-thumb">
                      <img
                        src="assets/images/testimonial/testi-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="testi-rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="owl-dots"></div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Blog Area */}
      {/*==================================================*/}
      <div className="blog-area">
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
              {/* start blog single box */}
              <div className="blog-single-box">
                <div className="blog-content">
                  <div className="blog-title">
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Digital Privacy Changes And The Impact On Advertising
                      </Link>
                    </h4>
                  </div>
                  <div className="blog-meta">
                    <span>
                      <i className="bi bi-calendar4-week" /> 15 Nov, 2023
                    </span>
                    <span>
                      <i className="bi bi-chat-left" /> 12 Comment
                    </span>
                  </div>
                  <div className="blog-discription">
                    <p>
                      Dolor sed maecenas quis faucibus justo nibh ultricies
                      praesent justo dolorIf you are going to use{" "}
                    </p>
                  </div>
                  <div className="blog-bottom-shape">
                    <img src="assets/images/blog/blog-shape.png" alt="image" />
                  </div>
                  <div className="blog-bottom-title">
                    <h4>Admin</h4>
                  </div>
                  <div className="blog-btn">
                    <a href="#">
                      Learn More <i className="bi bi-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End blog single box */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* start blog single box */}
              <div className="blog-single-box">
                <div className="blog-content">
                  <div className="blog-title">
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        How to Onboard New Clients the Right Way
                      </Link>
                    </h4>
                  </div>
                  <div className="blog-meta">
                    <span>
                      <i className="bi bi-calendar4-week" /> 15 Nov, 2023
                    </span>
                    <span>
                      <i className="bi bi-chat-left" /> 12 Comment
                    </span>
                  </div>
                  <div className="blog-discription">
                    <p>
                      Dolor sed maecenas quis faucibus justo nibh ultricies
                      praesent justo dolorIf you are going to use{" "}
                    </p>
                  </div>
                  <div className="blog-bottom-shape">
                    <img src="assets/images/blog/blog-shape.png" alt="image" />
                  </div>
                  <div className="blog-bottom-title">
                    <h4>Admin</h4>
                  </div>
                  <div className="blog-btn">
                    <a href="#">
                      Learn More <i className="bi bi-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End blog single box */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* start blog single box */}
              <div className="blog-single-box">
                <div className="blog-content">
                  <div className="blog-title">
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        How Marketing Compliance Your Marketing Strategy
                      </Link>
                    </h4>
                  </div>
                  <div className="blog-meta">
                    <span>
                      <i className="bi bi-calendar4-week" /> 15 Nov, 2023
                    </span>
                    <span>
                      <i className="bi bi-chat-left" /> 12 Comment
                    </span>
                  </div>
                  <div className="blog-discription">
                    <p>
                      Dolor sed maecenas quis faucibus justo nibh ultricies
                      praesent justo dolorIf you are going to use{" "}
                    </p>
                  </div>
                  <div className="blog-bottom-shape">
                    <img src="assets/images/blog/blog-shape.png" alt="image" />
                  </div>
                  <div className="blog-bottom-title">
                    <h4>Admin</h4>
                  </div>
                  <div className="blog-btn">
                    <a href="#">
                      Learn More <i className="bi bi-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End blog single box */}
            </div>
          </div>
          <div className="blog-shape1 bounce-animate">
            <img src="assets/images/blog/blog-shape2.png" alt="image" />
          </div>
          <div className="blog-shape2 bounce-animate">
            <img src="assets/images/blog/blog-shape1.png" alt="image" />
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
