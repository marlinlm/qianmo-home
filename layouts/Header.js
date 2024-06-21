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
                <Link legacyBehavior href="index">
                  <a>
                    <img src="assets/images/logo-white_bg.png" alt="" />
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
          <div className="col-lg-1 align-items-center"></div>
          <div className="col-lg-2 align-items-center">
            
            <div className="header-logo style-two">
              <Link legacyBehavior href="index">
                <a>
                  <img src="assets/images/logo-white_bg.png" alt="logo" height="40px"/>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 align-items-center">
            <div className="thrown-menu style-two">
              <Nav />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="thrown-search-button style-two">
              <SearchBtn btnStyle={"style-two"} />
            </div>
          </div>
          <div className="col-lg-1 align-items-center"></div>
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
              <Link legacyBehavior href="index">
                <a>
                  <img
                    src={
                      dark
                        ? "assets/images/logo-white_bg.png"
                        : "assets/images/logo-white_bg.png"
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
                <Link legacyBehavior href="index">
                  <a>
                    <img
                      src={
                        dark
                          ? "assets/images/logo-white_bg.png"
                          : "assets/images/logo-white_bg.png"
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
                <i className="bi bi-geo-alt-fill" /> 香港科技大学（广州）E3栋5楼 
              </span>
            </div>
          </div>
          {/* <div className="col-lg-4">
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
          </div> */}
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
                <i className="bi bi-geo-alt-fill" /> 香港科技大学（广州）E3栋5楼
              </span>
            </div>
          </div>
          {/* <div className="col-lg-6">
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
          </div> */}
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
          <Link legacyBehavior href="index">
            <a>
              <img src="assets/images/logo-white_bg.png" alt="image" />
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
        {/* <a href="#"> */}
        <Link legacyBehavior href="index">
          <a>
            首页 {/* Home <i className="fas fa-chevron-down" /> */}
          </a>
        </Link>
      </li>

      <li>
        <a href="index#service">
          服务 <i className="fas fa-chevron-down" />
        </a>
        <div className="sub-menu">
          <ul>
            <li>
              <Link legacyBehavior href="service#solution1">
                智慧交通解决方案
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="service#solution2">
                智慧出行解决方案
              </Link>
            </li>
            {/* <li>
              <Link legacyBehavior href="report">
                大数据报告
              </Link>
            </li> */}
          </ul>
        </div>
      </li>

      <li>
        <a href="index#academic">
          学术 <i className="fas fa-chevron-down" />
        </a>
        <div className="sub-menu">
          <ul>
            <li>
              <Link legacyBehavior href="https://raymondhliu.github.io/publications/">
                论文
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="pattern">
                专利
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="opensource">
                开源项目
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="talks">
                公开演讲
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="demo">
                成果演示
              </Link>
            </li>

          </ul>
        </div>
      </li>

      <li>
        <Link legacyBehavior href="cases">
          成功案例 
        </Link>
      </li>
      <li>
        <a href="index#about">
          关于 <i className="fas fa-chevron-down" />
        </a>
        <div className="sub-menu">
          <ul>
            <li>
              <Link legacyBehavior href="index#about">
                关于阡陌
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="index#offer">
                招聘
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

const SearchBtn = ({ btnStyle }) => {
  return (
    <Fragment>
      {/* <div className={`thrown-social-menu ${btnStyle ? btnStyle : ""}`}>
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
      </div> */}
      <div className="thrown-btn style-five">
        <Link legacyBehavior href="index#contact">
          <a className="header-button">
            联系我们 <span />
          </a>
        </Link>
      </div>
    </Fragment>
  );
};
