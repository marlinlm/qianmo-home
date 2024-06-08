"use client";
import Counter from "@/components/Counter";
import ThrownLayout from "@/layouts/ThrownLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const page = () => {
  return (
    <ThrownLayout header={4}>
      {/*==================================================*/}
      {/* Start Thrown Slider Area */}
      {/*==================================================*/}
      <section className="banner-section style-five">
        <div className="banner-carousel">
          <Swiper {...sliderProps.hero2}>
            <SwiperSlide className="slide-item one">
              <div
                className="image-layer"
                style={{
                  backgroundImage: 'url("assets/images/slider/slider7.jpg")',
                }}
              />
              <div className="container">
                <div className="slider-content style-five">
                  <div className="slider-sub-title style-five">
                    <h4>Sustainable Solutions for you</h4>
                  </div>
                  <div className="slider-main-title">
                    <h1>Trusted &amp; Professional For</h1>
                    <h1>Advisors your Business</h1>
                  </div>
                  <div className="slider-discripton">
                    <p>
                      Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                      voluptas sit aspernatur aut odit aut fugit sed quia.Dicta
                      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                      sit aspernatur aut odit aut fugit sed quia.
                    </p>
                  </div>
                  <div className="thrown-btn slider">
                    <Link legacyBehavior href="/contact-us">
                      <a className="header-button">
                        Get A Quout <span />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="slider-bottom">
                  <div className="slider-bottom-shape">
                    <img
                      src="assets/images/slider/slider-btm-shape.png"
                      alt="image"
                    />
                  </div>
                  <div className="slider-bottom-title">
                    <h4>Consulting Users Wherever</h4>
                    <h4>They Go Business</h4>
                  </div>
                  <div className="slider-bottom-discription">
                    <p>
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews. Iterative approaches to corporate
                      strategy.
                    </p>
                  </div>
                  <div className="thrown-btn slider bottom">
                    <a className="header-button" href="#">
                      Read More <span />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item two">
              <div
                className="image-layer"
                style={{
                  backgroundImage: 'url("assets/images/slider/slider8.png")',
                }}
              />
              <div className="container">
                <div className="slider-content style-five inner">
                  <div className="slider-sub-title style-five">
                    <h4>Trust And Client Focus</h4>
                  </div>
                  <div className="slider-main-title">
                    <h1>Best Digital Agency For</h1>
                    <h1>Business Sucsess</h1>
                  </div>
                  <div className="slider-discripton inner">
                    <p>
                      Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                      voluptas sit aspernatur aut odit aut fugit sed quia.Dicta
                      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                      sit aspernatur aut odit aut fugit sed quia.
                    </p>
                  </div>
                  <div className="thrown-btn slider">
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
      {/* Start Thrown Service Style Two Area */}
      {/*==================================================*/}
      <div className="service-area style-five">
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
              {/* start service items box */}
              <div className="service-items-box-two">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style1.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Construction Management
                    </Link>
                  </h4>
                </div>
                <div className="service-items-content-two">
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
              <div className="service-items-box-two">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style2.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Architecture &amp; Building
                    </Link>
                  </h4>
                </div>
                <div className="service-items-content-two">
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
              <div className="service-items-box-two">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style3.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Facade Engineering
                    </Link>
                  </h4>
                </div>
                <div className="service-items-content-two">
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
              <div className="service-items-box-two">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style4.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Tiling And Painting
                    </Link>
                  </h4>
                </div>
                <div className="service-items-content-two">
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
          <div className="row align-items-center mt-50">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="service-disctription">
                <span>
                  <Link legacyBehavior href="service-details">
                    Thrwon
                  </Link>{" "}
                  Services Built Specifically Business
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="thrown-btn service5">
                <a className="header-button" href="#">
                  find More Services
                  <span />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Service Style Two Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Conversion Area */}
      {/*==================================================*/}
      <div className="conversion-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="conversion-content">
                <div className="conversion-sub-title">
                  <h4>More Conversion</h4>
                </div>
                <div className="conversion-main-title">
                  <h2>Thinking Beyond Ordinary</h2>
                  <h2>Strategies Service</h2>
                </div>
                <div className="conversion-discription">
                  <p>
                    Organically grow the holistic world view of disruptive
                    innovation via workplace.Organically grow the holistic world
                  </p>
                </div>
                <div className="conversion-list">
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
                    design and development talen
                  </span>
                </div>
                <div className="process-ber-plugin">
                  <span className="process-bar">Website Development</span>
                  <div id="bar1" className="barfiller">
                    <div className="tipWrap" style={{ display: "inline" }}>
                      <span
                        className="tip"
                        style={{
                          left: "352.536px",
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
                        width: "382.489px",
                        transition: "width 7s ease-in-out 0s",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="conversion-text">
                <div className="choose-single-box">
                  <div className="choose-icon style-five">
                    <img src="assets/images/resource/choose1.png" alt="image" />
                  </div>
                  <div className="choose-content style-five">
                    <h4>Accounting and Bookkeeping</h4>
                    <p>
                      Organically grow the holistic world view of disruptive
                      innovation via.
                    </p>
                  </div>
                </div>
                <div className="choose-single-box">
                  <div className="choose-icon style-five">
                    <img src="assets/images/resource/choose2.png" alt="image" />
                  </div>
                  <div className="choose-content style-five">
                    <h4>Multi-layered security</h4>
                    <p>
                      Our pricing varies depending on the specific services you
                      require.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Conversion Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Call Do Action Style Five Area */}
      {/*==================================================*/}
      <div className="call-do-action-area style-five d-flex align-items-center">
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
      {/* End Thrown Call Do Action Style Five Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown About Style Five Area */}
      {/*==================================================*/}
      <div className="about-area style-five">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-thumb">
                <img src="assets/images/about/about-5.png" alt="image" />
                <div className="about-counter-five">
                  <div className="counter-five-content">
                    <div className="counter-five-numbar">
                      <h4 className="counter">
                        <Counter end={256} />
                      </h4>
                      <span>+</span>
                    </div>
                    <div className="counter-five-discription">
                      <p>Clients on Worldwide</p>
                    </div>
                  </div>
                  <div className="counter-five-content">
                    <div className="counter-five-numbar">
                      <h4 className="counter">
                        <Counter end={750} />
                      </h4>
                      <span>+</span>
                    </div>
                    <div className="counter-five-discription">
                      <p>Completed Projects</p>
                    </div>
                  </div>
                  <div className="counter-five-content">
                    <div className="counter-five-numbar">
                      <h4 className="counter">
                        <Counter end={350} />
                      </h4>
                      <span>+</span>
                    </div>
                    <div className="counter-five-discription">
                      <p>Running Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  <div id="bar2" className="barfiller">
                    <div className="tipWrap" style={{ display: "inline" }}>
                      <span
                        className="tip"
                        style={{
                          left: "352.536px",
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
                        width: "382.489px",
                        transition: "width 7s ease-in-out 0s",
                      }}
                    />
                  </div>
                  <span className="process-bar">Digital Products</span>
                  <div id="bar3" className="barfiller">
                    <div className="tipWrap" style={{ display: "inline" }}>
                      <span
                        className="tip"
                        style={{
                          left: "307.537px",
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
                        width: "337.49px",
                        transition: "width 7s ease-in-out 0s",
                      }}
                    />
                  </div>
                  <span className="process-bar">SEO Analysis</span>
                  <div id="bar4" className="barfiller">
                    <div className="tipWrap" style={{ display: "inline" }}>
                      <span
                        className="tip"
                        style={{
                          left: "375.035px",
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
                        width: "404.988px",
                        transition: "width 7s ease-in-out 0s",
                      }}
                    />
                  </div>
                </div>
                <div className="thrown-btn about5">
                  <a className="header-button" href="#">
                    Get Started
                    <span />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown About Style Five Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Team Style Five Area */}
      {/*==================================================*/}
      <div className="team-area style-five">
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
            <div className="col-lg-4 col-md-6">
              <div className="team-items-five">
                <div className="team-five-thumb">
                  <img src="assets/images/team/team12.png" alt="image" />
                  <div className="team-five-main-icon">
                    <a href="#">
                      <i className="bi bi-plus-lg" />
                    </a>
                  </div>
                  <div className="team-five-icon">
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
                  <div className="team-five-content">
                    <h4>Founder</h4>
                    <h2>
                      <Link legacyBehavior href="team-details">
                        Selina Donald
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-items-five">
                <div className="team-five-thumb">
                  <img src="assets/images/team/team13.png" alt="image" />
                  <div className="team-five-main-icon">
                    <a href="#">
                      <i className="bi bi-plus-lg" />
                    </a>
                  </div>
                  <div className="team-five-icon">
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
                  <div className="team-five-content">
                    <h4> Manager</h4>
                    <h2>
                      <Link legacyBehavior href="team-details">
                        Jessica Brown
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-items-five">
                <div className="team-five-thumb">
                  <img src="assets/images/team/team14.png" alt="image" />
                  <div className="team-five-main-icon">
                    <a href="#">
                      <i className="bi bi-plus-lg" />
                    </a>
                  </div>
                  <div className="team-five-icon">
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
                  <div className="team-five-content">
                    <h4>Founder</h4>
                    <h2>
                      <Link legacyBehavior href="team-details">
                        Kevin Martin
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Team Style Five Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Brand Style Five Area */}
      {/*==================================================*/}
      <div className="brand-area style-five">
        <div className="container">
          <div className="row">
            <div className="brand_list owl-carousel">
              <div className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand1.svg" alt="image" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand2.svg" alt="image" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand3.svg" alt="image" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand4.svg" alt="image" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand5.svg" alt="image" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand6.svg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Brand Style Five Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Working Project Area */}
      {/*==================================================*/}
      <div className="working-project-area">
        <div className="container">
          <div className="row working">
            <div className="col-lg-6 col-md-6">
              <div className="working-single-box">
                <div className="working-icon">
                  <a href="#">
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
                <div className="working-content">
                  <h6>Business </h6>
                  <h4>
                    <Link legacyBehavior href="project-details">
                      Business Growth Through
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="working-project-item">
                <div className="working-single-box two">
                  <div className="working-icon">
                    <a href="#">
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                  <div className="working-content">
                    <h6>Business </h6>
                    <h4>
                      <Link legacyBehavior href="project-details">
                        Business Growth Through
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Working Project Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area style-five">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="testi-item-five">
                <img src="assets/images/testimonial/testi6.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="testi-title">
                <div className="testi-sub-title">
                  <h4>Our Testimonials</h4>
                </div>
                <div className="testi-main-title">
                  <h2>Customer’s View points &amp; Feedback</h2>
                </div>
              </div>
              <div className="row">
                <div className="testi_list4 position-relative">
                  <Swiper {...sliderProps.testimonial2}>
                    <SwiperSlide>
                      <div className="testi-five-box">
                        <div className="testi-five-content">
                          <div className="testi-five-discription">
                            <p>
                              Salty helped me a lot in finding the best place
                              for our first outdoor adventure trip. They
                              responded very quickly and gave me a detailed
                              account of the place—its history, as well as its
                              best features.
                            </p>
                          </div>
                          <div className="testi-five-rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                          </div>
                          <div className="testi-five-title">
                            <h4>Andrew Sarma</h4>
                            <span>Enterpreneur</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testi-five-box">
                        <div className="testi-five-content">
                          <div className="testi-five-discription">
                            <p>
                              Salty helped me a lot in finding the best place
                              for our first outdoor adventure trip. They
                              responded very quickly and gave me a detailed
                              account of the place—its history, as well as its
                              best features.
                            </p>
                          </div>
                          <div className="testi-five-rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                          </div>
                          <div className="testi-five-title">
                            <h4>Andrew Sarma</h4>
                            <span>Enterpreneur</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="owl-nav">
                    <div className="owl-prev testimonial-2-prev">
                      <i className="bi bi-chevron-left" />
                    </div>
                    <div className="owl-next testimonial-2-next">
                      <i className="bi bi-chevron-right" />
                    </div>
                  </div>
                </div>
              </div>
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
