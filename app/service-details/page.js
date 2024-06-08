import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import Link from "next/link";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Service Details"} />
      <div className="service-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-12">
                  {/* start service details single box */}
                  <div className="service-details-single-box mb-30">
                    <div className="service-details-thumb">
                      <img
                        src="assets/images/service/service-details1.png"
                        alt=""
                      />
                    </div>
                    <div className="service-details-content">
                      <h4>
                        <Link legacyBehavior href="service-details">
                          <a>Service Overview</a>
                        </Link>
                      </h4>
                      <p>
                        Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque porro est qui dolorem ipsum a quia
                        quaed inventore veritatis et quasi architecto beatae
                        vitae dicta sunt explicabo. Aelltes port lacus quis enim
                        var sed sed efficitur turpis gilla sed sit amet eros.
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the ndustry
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a
                      </p>
                    </div>
                  </div>
                  {/* End service details single box */}
                </div>
                <div className="col-lg-12">
                  {/* start service details single box */}
                  <div className="service-details-single-box">
                    <div className="service-details-thumb">
                      <img
                        src="assets/images/service/service-details2.png"
                        alt=""
                      />
                    </div>
                    <div className="service-details-content">
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Building Everything Best
                        </Link>
                      </h4>
                      <p>
                        Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque porro est qui dolorem ipsum a quia
                        quaed inventore veritatis et quasi architecto beatae
                        vitae dicta sunt explicabo. Aelltes port lacus quis enim
                        var sed sed efficitur turpis gilla sed sit amet eros.
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the ndustry
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a
                      </p>
                    </div>
                  </div>
                  {/* End service details single box */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/* start widget search box */}
              <div className="widget_search box">
                <form action="#" method="get">
                  <input
                    type="text"
                    name="s"
                    defaultValue=""
                    placeholder="Search Here"
                    title="Search for:"
                  />
                  <button type="submit" className="icons">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
              {/* End widget search box */}
              <div className="widget-categories-box">
                <div className="widget-catagories-title">
                  <h4>Main Services</h4>
                </div>
                {/* widget categories menu */}
                <div className="widget-categories-menu">
                  <ul>
                    <li>
                      <Link legacyBehavior href="service-details">
                        <a>
                          Business Solution{" "}
                          <span>
                            <i className="bi bi-chevron-right" />
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="service-details">
                        <a>
                          Expert Mechanical{" "}
                          <span>
                            <i className="bi bi-chevron-right" />
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="service-details">
                        <a>
                          Architecture &amp; Building{" "}
                          <span>
                            <i className="bi bi-chevron-right" />
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="service-details">
                        <a>
                          {" "}
                          Construction Management{" "}
                          <span>
                            <i className="bi bi-chevron-right" />
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="service-details">
                        <a>
                          Apartment Design{" "}
                          <span>
                            <i className="bi bi-chevron-right" />
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="service-details">
                        <a>
                          Facade Engineering{" "}
                          <span>
                            <i className="bi bi-chevron-right" />
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget-categories-box">
                {/* categories title */}
                <div className="widget-catagories-title">
                  <h4> Tag Cloud </h4>
                </div>
                <div className="widget-tags">
                  <a href="#">Services</a>
                  <a href="#">Business</a>
                  <a href="#">Grooming</a>
                  <a href="#">Breeding</a>
                  <a href="#">Growth</a>
                  <a href="#">Stable</a>
                  <a href="#">Education</a>
                  <a href="#">America</a>
                  <a href="#">Maintenance</a>
                </div>
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
