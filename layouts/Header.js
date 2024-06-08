import { thrownutility } from "@/utility";
import Link from "next/link";
import { Fragment } from "react";
import Sidebar from "./Sidebar";
const Header = ({ headers, dark }) => {
  const getHeader = () => {
    switch (headers) {
      case 1:
        return <Header1 dark={dark} />;
      case 2:
        return <Header2 dark={dark} />;
      case 3:
        return <Header3 dark={dark} />;
      case 4:
        return <Header4 dark={dark} />;

      default:
        return <Header1 dark={dark} />;
    }
  };
  return (
    <Fragment>
      {getHeader()}
      <MobileMenu />
      <SearchPopup />
      <Sidebar />
    </Fragment>
  );
};
export default Header;

const Header1 = ({ dark }) => {
  return (
    <Fragment>
      <TopBar />
      <div
        className={`thrown-header-area ${dark ? "dark" : ""}`}
        id={dark ? "navbar" : "sticky-header"}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-6">
              <div className={`header-logo ${dark ? "dark" : ""}`}>
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/logo.png" alt="" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className={`thrown-menu ${dark ? "dark" : ""}`}>
                <Nav />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="thrown-search-button">
                <SearchBtn />
              </div>
            </div>
          </div>
          <div className="side-menu-info">
            <div className="sidebar-menu">
              <a className="navSidebar-button" href="#">
                <i className="bi bi-justify-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const Header2 = ({ dark }) => {
  return (
    <div className="thrown-header-area style-two" id="navbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="header-logo style-two">
              <Link legacyBehavior href="/">
                <a>
                  <img src="assets/images/logo.png" alt="logo" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="thrown-menu style-two">
              <Nav />
            </div>
            <div className="thrown-search-button style-two">
              <SearchBtn btnStyle={"style-two"} />
            </div>
          </div>
        </div>
        <div className="side-menu-info">
          <div className="sidebar-menu">
            <a className="navSidebar-button" href="#">
              <i className="bi bi-justify-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header3 = ({ dark }) => {
  return (
    <div
      className={`thrown-header-area style-three ${dark ? "dark" : ""}`}
      id={dark ? "navbar" : "sticky-header"}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="header-logo style-three">
              <Link legacyBehavior href="/">
                <a>
                  <img
                    src={
                      dark
                        ? "assets/images/logo.png"
                        : "assets/images/logo2.png"
                    }
                    alt="image"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-9">
            <div className={`thrown-menu style-three ${dark ? "dark" : ""}`}>
              <Nav />
            </div>
            <div className="thrown-search-button style-three">
              <SearchBtn />
            </div>
          </div>
        </div>
        <div className="side-menu-info">
          <div className="sidebar-menu">
            <a className="navSidebar-button" href="#">
              <i className="bi bi-justify-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header4 = ({ dark }) => {
  return (
    <Fragment>
      <TopBar2 />
      <div
        className={`thrown-header-area style-five ${dark ? "dark" : ""}`}
        id={dark ? "navbar" : "sticky-header"}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="header-logo style-five">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src={
                        dark
                          ? "assets/images/logo.png"
                          : "assets/images/logo5.png"
                      }
                      alt="image"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className={`thrown-menu style-five ${dark ? "dark" : ""}`}>
                <Nav />
              </div>
              <div className="thrown-search-button style-five">
                <SearchBtn />
              </div>
            </div>
          </div>
          <div className="side-menu-info">
            <div className="sidebar-menu">
              <a className="navSidebar-button" href="#">
                <i className="bi bi-justify-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const TopBar = () => {
  return (
    <div className="thrown-topbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2" />
          <div className="col-lg-6">
            <div className="topbar-info">
              <span>
                <i className="bi bi-geo-alt-fill" /> 5010 Avenue of the Moon New
                York, NY 10018 US.
              </span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="topbar-social-item">
              <h4>FOLLOW US</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="active">
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
  );
};
const TopBar2 = () => {
  return (
    <div className="thrown-topbar-area style-five">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="topbar-info style-five">
              <span>
                <i className="bi bi-geo-alt-fill" /> 5010 Avenue of the Moon New
                York, NY 10018 US.
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="topbar-social-item">
              <h4>FOLLOW US</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="active">
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
  );
};

const MobileMenu = () => {
  return (
    <div className="mobile-menu-area" id="navbar">
      <div className="mobile-menu">
        <div className="mobile-logo">
          <Link legacyBehavior href="/">
            <a>
              <img src="assets/images/logo.png" alt="image" />
            </a>
          </Link>
        </div>
        <div className="side-menu-info">
          <div className="sidebar-menu">
            <a
              className="navSidebar-button"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                thrownutility.sidebarToggle();
              }}
            >
              <i className="bi bi-justify-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchPopup = () => {
  return (
    <div className="search-popup">
      <button
        className="close-search style-two"
        onClick={() => thrownutility.searchActive()}
      >
        <span className="flaticon-multiply">
          <i className="far fa-times-circle" />
        </span>
      </button>
      <button className="close-search">
        <i className="fas fa-arrow-up" />
      </button>
      <form method="post" action="#">
        <div className="form-group">
          <input
            type="search"
            name="search-field"
            defaultValue=""
            placeholder="Search Here"
            required=""
          />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </div>
      </form>
    </div>
  );
};

const Nav = () => {
  return (
    <ul>
      <li>
        <a href="#">
          Home <i className="fas fa-chevron-down" />
        </a>
        <div className="home-menu">
          <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-5">
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-1.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="/">
                    Home One
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-2.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-two">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-two">
                    Home Two
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-3.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-three">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-three">
                    Home Three
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-4.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-four">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-four">
                    Home Four
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-5.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-five">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-five">
                    Home Five
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-6.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-dark-one">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-dark-one">
                    Home Six
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-7.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-dark-two">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-dark-two">
                    Home Seven
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-8.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-dark-three">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-dark-three">
                    Home Eight
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-9.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-dark-four">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-dark-four">
                    Home Nine
                  </Link>
                </h4>
              </div>
            </div>
            <div className="home-items">
              <div className="home-menu-thumb">
                <img src="assets/images/home-thumb/home-10.png" alt="" />
                <div className="home-btn">
                  <Link legacyBehavior href="/index-dark-five">
                    <a className="menu-btn">View Demo</a>
                  </Link>
                </div>
              </div>
              <div className="home-menu-title">
                <h4>
                  <Link legacyBehavior href="index-dark-five">
                    Home Ten
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <Link legacyBehavior href="about">
          About
        </Link>
      </li>
      <li>
        <a href="#">
          Service <i className="fas fa-chevron-down" />
        </a>
        <div className="sub-menu">
          <ul>
            <li>
              <Link legacyBehavior href="service">
                Service
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="service-details">
                Service Details
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#">
          Pages <i className="fas fa-chevron-down" />
        </a>
        <div className="sub-menu">
          <ul>
            <li>
              <Link legacyBehavior href="team">
                Team
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="team-details">
                Team Details
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="priching">
                Priching
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="project">
                Project
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="project-details">
                Project Details
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="contact-us">
                Contact
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="error">
                Error
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#">
          Blog <i className="fas fa-chevron-down" />
        </a>
        <div className="sub-menu">
          <ul>
            <li>
              <Link legacyBehavior href="blog">
                Blog
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="blog-two-grid">
                Blog Grid
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="blog-standard">
                Blog Standard
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="blog-details">
                Blog Details
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link legacyBehavior href="contact-us">
          Contact
        </Link>
      </li>
    </ul>
  );
};

const SearchBtn = ({ btnStyle }) => {
  return (
    <Fragment>
      <div className={`thrown-social-menu ${btnStyle ? btnStyle : ""}`}>
        <ul>
          <li>
            <a
              className="search-box-btn search-box-outer"
              href="#"
              onClick={() => thrownutility.searchActive()}
            >
              <i className="bi bi-search" />
            </a>
          </li>
          <li>
            <a className="handbag" href="#">
              <i className="bi bi-cart-fill" />
            </a>
          </li>
        </ul>
      </div>
      <div className="thrown-btn style-five">
        <Link legacyBehavior href="/contact-us">
          <a className="header-button">
            Get A Quout <span />
          </a>
        </Link>
      </div>
    </Fragment>
  );
};
