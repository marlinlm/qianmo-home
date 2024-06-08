"use client";
import Counter from "@/components/Counter";
import Faq from "@/components/Faq";
import Sucsess from "@/components/Sucsess";
import Work from "@/components/Work";
import ThrownLayout from "@/layouts/ThrownLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const page = () => {
  return (
    <ThrownLayout>
      {/*==================================================*/}
      {/* Start Thrown Slider Area */}
      {/*==================================================*/}
      <section className="banner-section">
        <div className="banner-carousel">
          <Swiper {...sliderProps.hero1}>
            <SwiperSlide className="slide-item one">
              <div
                className="image-layer"
                style={{
                  backgroundImage: 'url("assets/images/slider/slider1.jpg")',
                }}
              />
              <div className="container">
                <div className="slider-content">
                  <div className="slider-sub-title">
                    <h4>
                      <span>NEW</span> See new covered diseases
                    </h4>
                  </div>
                  <div className="slider-main-title">
                    <h1>We Are Digital Marketing</h1>
                    <h1>Creative Business</h1>
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
                <div className="slider-shape">
                  <img src="assets/images/slider/border.png" alt="" />
                </div>
                <div className="slider-shape2 bounce-animate ">
                  <img src="assets/images/slider/shape2.png" alt="" />
                </div>
                <div className="slider-box">
                  <div className="slider-title">
                    <h2>Winning plan</h2>
                    <span>96%</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item two">
              <div
                className="image-layer"
                style={{
                  backgroundImage: 'url("assets/images/slider/slider2.png")',
                }}
              />
              <div className="container">
                <div className="slider-content two">
                  <div className="slider-sub-title style-two">
                    <h4>Welcome to Business Advisor</h4>
                  </div>
                  <div className="slider-main-title">
                    <h1>Transform Your Business</h1>
                    <h1>With Expert Consulting</h1>
                    <h1>Services</h1>
                  </div>
                  <div className="thrown-btn slider2">
                    <a className="header-button" href="#">
                      Read More
                      <span />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="owl-nav">
            <div className="owl-prev">01</div>
            <div className="owl-next">02</div>
          </div>
        </div>
      </section>
      {/*==================================================*/}
      {/* End Thrown Slider Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown About Area */}
      {/*==================================================*/}
      <div className="about-area">
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
      {/* Start Thrown Contact Us Area */}
      {/*==================================================*/}
      <div className="contact-us-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-us-items">
                <div className="contact-us-content">
                  <h4>Support Center 24/7</h4>
                  <h2>Feel Free To Contact Us For Additional Info</h2>
                </div>
                <div className="thrown-btn contact-us">
                  <Link legacyBehavior href="/contact-us">
                    <a className="header-button">
                      Contact Us <span />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact-us-items two">
                <div className="contact-us-content">
                  <h4>Here We Are</h4>
                  <h2>Feel Free To Contact Us For Additional Info</h2>
                </div>
                <div className="thrown-btn contact-us2">
                  <Link legacyBehavior href="/contact-us">
                    <a className="header-button">
                      Get Started <span />
                    </a>
                  </Link>
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
                      <Link legacyBehavior href="service-details">
                        Analysis Product Marketing
                      </Link>
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
                      <Link legacyBehavior href="service-details">
                        Discover Creative Strategy
                      </Link>
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
                      <Link legacyBehavior href="service-details">
                        Analysis Product Marketing
                      </Link>
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
                      <Link legacyBehavior href="service-details">
                        Solution And Regenerating Easily
                      </Link>
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
                      <Link legacyBehavior href="service-details">
                        Cool &amp; Modern Animations
                      </Link>
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
                      <Link legacyBehavior href="service-details">
                        Varied Layouts &amp; Parallax
                      </Link>
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
                      <Link legacyBehavior href="service-details">
                        Market Analysis &amp; Research
                      </Link>
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
                      <Link legacyBehavior href="service-details">
                        Customer Care &amp; Support
                      </Link>
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
                      <Link legacyBehavior href="team-details">
                        George Clooney
                      </Link>
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
                      <Link legacyBehavior href="team-details">
                        Dennis Barrett
                      </Link>
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
                      <Link legacyBehavior href="team-details">
                        Louis Ferguson
                      </Link>
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
      {/*==================================================*/}
      {/* Start Thrown Faq Area */}
      {/*==================================================*/}
      <div className="faq-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="single-video">
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
      {/* Start Thrown Sales Report Area */}
      {/*==================================================*/}
      <div className="sales-report-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="section-title">
                <div className="section-main-title sales">
                  <h2>How we Plan to </h2>
                  <h2>Disrupt the Strategy</h2>
                </div>
              </div>
              <div className="sales-content">
                <div className="sales-discription">
                  <p>
                    We're based in NYC, which is home to so many great companies
                    and communities, but it's also where we started out as a
                    bootstrapped team of two people working from their
                    apartments.{" "}
                  </p>
                </div>
                <div className="sales-list">
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
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="sales-thumb">
                <img src="assets/images/resource/Sales-thumb.png" alt="" />
              </div>
              <div className="row sales">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="sales-single-box">
                    <div className="sales-item-content">
                      <div className="sales-title">
                        <h5>Sales</h5>
                      </div>
                      <div className="sales-price">
                        <span>$</span>
                        <h2 className="counter">31,092</h2>
                      </div>
                      <div className="sales-years">
                        <span>
                          <i className="bi bi-arrow-up-short" />
                          4.2%
                        </span>
                        <h4>from last year</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="sales-single-box">
                    <div className="sales-item-content">
                      <div className="sales-title">
                        <h5>Marketing</h5>
                      </div>
                      <div className="sales-price">
                        <span>$</span>
                        <h2>29,128</h2>
                      </div>
                      <div className="sales-years">
                        <span>
                          <i className="bi bi-arrow-up-short" />
                          2.1%
                        </span>
                        <h4>from last yea</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Sales Report Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown counter Area */}
      {/*==================================================*/}
      <div className="counter-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              {/* start counter single box */}
              <div className="counter-single-box">
                <div className="counter-numbar">
                  <h4 className="counter">
                    <Counter end={10} />
                  </h4>
                  <span>K+</span>
                </div>
                <div className="counter-content">
                  <h5>Experienced designers</h5>
                  <p>Our company has 100 expert</p>
                </div>
              </div>
              {/* End counter single box */}
            </div>
            <div className="col-lg-4 col-md-4">
              {/* start counter single box */}
              <div className="counter-single-box">
                <div className="counter-numbar">
                  <h4 className="counter">
                    {" "}
                    <Counter end={10} />
                  </h4>
                  <span>K+</span>
                </div>
                <div className="counter-content">
                  <h5>SATISFIED CUSTOMERS</h5>
                  <p>Our company satisfied customer</p>
                </div>
              </div>
              {/* End counter single box */}
            </div>
            <div className="col-lg-4 col-md-4">
              {/* start counter single box */}
              <div className="counter-single-box">
                <div className="counter-numbar">
                  <h4 className="counter">
                    {" "}
                    <Counter end={120} />
                  </h4>
                  <span>+</span>
                </div>
                <div className="counter-content">
                  <h5>COMPLETED CASSES</h5>
                  <p>We have done 1200 Cassses</p>
                </div>
              </div>
              {/* End counter single box */}
            </div>
          </div>
          <div className="counter-shape bounce-animate">
            <img src="assets/images/resource/counter-shape.png" alt="image" />
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/* End Thrown counter Area */}
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
                    <img src="assets/images/blog/blog-shape.png" alt="" />
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
                    <img src="assets/images/blog/blog-shape.png" alt="" />
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
                    <img src="assets/images/blog/blog-shape.png" alt="" />
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
            <img src="assets/images/blog/blog-shape2.png" alt="" />
          </div>
          <div className="blog-shape2 bounce-animate">
            <img src="assets/images/blog/blog-shape1.png" alt="" />
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
