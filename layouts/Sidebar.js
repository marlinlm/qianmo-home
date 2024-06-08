import { thrownutility } from "@/utility";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeLi = (value) => setActiveMenu(activeMenu === value ? "" : value);
  return (
    <div className="sidebar-group info-group">
      <div className="sidebar-widget">
        <div className="sidebar-widget-container">
          <div className="widget-heading">
            <a
              href="#"
              className="close-side-widget"
              onClick={(e) => {
                e.preventDefault();
                thrownutility.sidebarToggle();
              }}
            >
              <i className="bi bi-x-lg" />
            </a>
          </div>
          <div className="sidebar-textwidget">
            <div className="sidebar-info-contents">
              <div className="content-inner">
                <div className="sidebar-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src="assets/images/logo.png" alt="logo" />
                    </a>
                  </Link>
                </div>
                <div className="sidebar-widget-menu">
                  <ul>
                    <li className="dropdown">
                      <a
                        href="#"
                        data-toggle="dropdown"
                        onClick={() => activeLi("Home")}
                      >
                        Home <i className="icon-arrow" />
                      </a>
                      <div
                        className={`dropdown-menu ${
                          activeMenu === "Home" ? "show" : "hide"
                        }`}
                      >
                        <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-2 row-cols-xxl-2">
                          <div className="home-items">
                            <div className="home-menu-thumb">
                              <img
                                src="assets/images/home-thumb/home-1.png"
                                alt="image"
                              />
                              <div className="home-btn">
                                <Link legacyBehavior href="/">
                                  <a className="menu-btn">View Demo</a>
                                </Link>
                              </div>
                            </div>
                            <div className="home-menu-title">
                              <h4>
                                <Link legacyBehavior href="/">
                                  <a>Home One</a>
                                </Link>
                              </h4>
                            </div>
                          </div>
                          <div className="home-items">
                            <div className="home-menu-thumb">
                              <img
                                src="assets/images/home-thumb/home-2.png"
                                alt="image"
                              />
                              <div className="home-btn">
                                <Link legacyBehavior href="/index-two">
                                  <a className="menu-btn">View Demo</a>
                                </Link>
                              </div>
                            </div>
                            <div className="home-menu-title">
                              <h4>
                                <Link legacyBehavior href="/index-two">
                                  <a>Home Two</a>
                                </Link>
                              </h4>
                            </div>
                          </div>
                          <div className="home-items">
                            <div className="home-menu-thumb">
                              <img
                                src="assets/images/home-thumb/home-3.png"
                                alt="image"
                              />
                              <div className="home-btn">
                                <Link legacyBehavior href="/index-three">
                                  <a className="menu-btn">View Demo</a>
                                </Link>
                              </div>
                            </div>
                            <div className="home-menu-title">
                              <h4>
                                <Link legacyBehavior href="/index-three">
                                  <a>Home Three</a>
                                </Link>
                              </h4>
                            </div>
                          </div>
                          <div className="home-items">
                            <div className="home-menu-thumb">
                              <img
                                src="assets/images/home-thumb/home-4.png"
                                alt="image"
                              />
                              <div className="home-btn">
                                <Link legacyBehavior href="/index-four">
                                  <a className="menu-btn">View Demo</a>
                                </Link>
                              </div>
                            </div>
                            <div className="home-menu-title">
                              <h4>
                                <Link legacyBehavior href="/index-four">
                                  <a>Home Four</a>
                                </Link>
                              </h4>
                            </div>
                          </div>
                          <div className="home-items">
                            <div className="home-menu-thumb">
                              <img
                                src="assets/images/home-thumb/home-5.png"
                                alt="image"
                              />
                              <div className="home-btn">
                                <Link legacyBehavior href="/index-five">
                                  <a className="menu-btn">View Demo</a>
                                </Link>
                              </div>
                            </div>
                            <div className="home-menu-title">
                              <h4>
                                <Link legacyBehavior href="/index-five">
                                  <a>Home Five</a>
                                </Link>
                              </h4>
                            </div>
                          </div>
                          <div className="home-items">
                            <div className="home-menu-thumb">
                              <img
                                src="assets/images/home-thumb/home-6.png"
                                alt="image"
                              />
                              <div className="home-btn">
                                <Link legacyBehavior href="/index-dark-one">
                                  <a className="menu-btn">View Demo</a>
                                </Link>
                              </div>
                            </div>
                            <div className="home-menu-title">
                              <h4>
                                <Link legacyBehavior href="/index-dark-one">
                                  <a>Home Six</a>
                                </Link>
                              </h4>
                            </div>
                          </div>
                          <div className="home-items">
                            <div className="home-menu-thumb">
                              <img
                                src="assets/images/home-thumb/home-7.png"
                                alt="image"
                              />
                              <div className="home-btn">
                                <Link legacyBehavior href="/index-dark-two">
                                  <a className="menu-btn">View Demo</a>
                                </Link>
                              </div>
                            </div>
                            <div className="home-menu-title">
                              <h4>
                                <Link legacyBehavior href="/index-dark-two">
                                  <a>Home Seven</a>
                                </Link>
                              </h4>
                            </div>
                          </div>
                          <div className="home-items">
                            <div className="home-menu-thumb">
                              <img
                                src="assets/images/home-thumb/home-8.png"
                                alt="image"
                              />
                              <div className="home-btn">
                                <Link legacyBehavior href="/index-dark-three">
                                  <a className="menu-btn">View Demo</a>
                                </Link>
                              </div>
                            </div>
                            <div className="home-menu-title">
                              <h4>
                                <Link legacyBehavior href="/index-dark-three">
                                  <a>Home Eight</a>
                                </Link>
                              </h4>
                            </div>
                          </div>
                          <div className="home-items">
                            <div className="home-menu-thumb">
                              <img
                                src="assets/images/home-thumb/home-9.png"
                                alt="image"
                              />
                              <div className="home-btn">
                                <Link legacyBehavior href="/index-dark-four">
                                  <a className="menu-btn">View Demo</a>
                                </Link>
                              </div>
                            </div>
                            <div className="home-menu-title">
                              <h4>
                                <Link legacyBehavior href="/index-dark-four">
                                  <a>Home Nine</a>
                                </Link>
                              </h4>
                            </div>
                          </div>
                          <div className="home-items">
                            <div className="home-menu-thumb">
                              <img
                                src="assets/images/home-thumb/home-10.png"
                                alt="image"
                              />
                              <div className="home-btn">
                                <Link legacyBehavior href="/index-dark-five">
                                  <a className="menu-btn">View Demo</a>
                                </Link>
                              </div>
                            </div>
                            <div className="home-menu-title">
                              <h4>
                                <Link legacyBehavior href="/index-dark-five">
                                  <a>Home Ten</a>
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown">
                      <Link legacyBehavior href="/about">
                        <a data-toggle="dropdown">About</a>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <a
                        href="#"
                        data-toggle="dropdown"
                        onClick={() => activeLi("Service")}
                      >
                        Service <i className="icon-arrow" />
                      </a>
                      <ul
                        className={`dropdown-menu ${
                          activeMenu === "Service" ? "show" : "hide"
                        }`}
                      >
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
                    </li>
                    <li className="dropdown">
                      <a
                        href="#"
                        data-toggle="dropdown"
                        onClick={() => activeLi("Pages")}
                      >
                        Pages <i className="icon-arrow" />
                      </a>
                      <ul
                        className={`dropdown-menu ${
                          activeMenu === "Pages" ? "show" : "hide"
                        }`}
                      >
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
                    </li>
                    <li className="dropdown">
                      <a
                        href="#"
                        data-toggle="dropdown"
                        onClick={() => activeLi("Blog")}
                      >
                        Blog <i className="icon-arrow" />
                      </a>
                      <ul
                        className={`dropdown-menu ${
                          activeMenu === "Blog" ? "show" : "hide"
                        }`}
                      >
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
                    </li>
                    <li className="dropdown">
                      <Link legacyBehavior href="/contact-us">
                        <a data-toggle="dropdown">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="contact-info">
                  <h2>Contact Info</h2>
                  <ul className="list-style-one">
                    <li>
                      <i className="bi bi-geo-alt-fill" />
                      6391 Elgin St. Celina, Delaware
                    </li>
                    <li>
                      <i className="bi bi-telephone-fill" />
                      (+001) 123-456-789
                    </li>
                    <li>
                      <i className="bi bi-envelope" /> info@example.com
                    </li>
                    <li>
                      <i className="bi bi-alarm-fill" /> Week Days: 08.00 to
                      10.00
                    </li>
                  </ul>
                </div>
                <ul className="social-box">
                  <li className="facebook">
                    <a href="#" className="fab fa-facebook-f" />
                  </li>
                  <li className="twitter">
                    <a href="#" className="fab fa-instagram" />
                  </li>
                  <li className="linkedin">
                    <a href="#" className="fab fa-twitter" />
                  </li>
                  <li className="instagram">
                    <a href="#" className="fab fa-pinterest-p" />
                  </li>
                  <li className="youtube">
                    <a href="#" className="fab fa-linkedin-in" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
