import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import Link from "next/link";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Blog Two Grid"} />
      <div className="blog-area style-two">
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
            <div className="col-lg-6 col-md-6">
              <div className="blog-single-box style-two inner-page">
                <div className="blog-thumb">
                  <img src="assets/images/blog/blog1.png" alt="" />
                  <div className="blog-meta-date">
                    <h5>15</h5>
                    <span>May</span>
                  </div>
                </div>
                <div className="blog-content style-two">
                  <div className="blog-meta style-two">
                    <span>
                      <i className="bi bi-person" />
                      By Admin
                    </span>
                    <span>
                      <i className="bi bi-chat-left" /> (05)
                    </span>
                  </div>
                  <div className="blog-title style-two">
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Smashing Podcast Episode With Trine Falbe Martin
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
            <div className="col-lg-6 col-md-6">
              <div className="blog-single-box style-two inner-page">
                <div className="blog-thumb">
                  <img src="assets/images/blog/blog2.png" alt="" />
                  <div className="blog-meta-date">
                    <h5>14</h5>
                    <span>May</span>
                  </div>
                </div>
                <div className="blog-content style-two inner-page">
                  <div className="blog-meta style-two">
                    <span>
                      <i className="bi bi-person" />
                      By Admin
                    </span>
                    <span>
                      <i className="bi bi-chat-left" /> (06)
                    </span>
                  </div>
                  <div className="blog-title style-two">
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Business Opening &amp; Various Ownership Forms
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
            <div className="col-lg-6 col-md-6">
              <div className="blog-single-box style-two">
                <div className="blog-thumb">
                  <img src="assets/images/blog/blog3.png" alt="" />
                  <div className="blog-meta-date">
                    <h5>12</h5>
                    <span>May</span>
                  </div>
                </div>
                <div className="blog-content style-two inner">
                  <div className="blog-meta style-two">
                    <span>
                      <i className="bi bi-person" />
                      By Admin
                    </span>
                    <span>
                      <i className="bi bi-chat-left" /> (03)
                    </span>
                  </div>
                  <div className="blog-title style-two">
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Tips for Effective Client Design Agency
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
            <div className="col-lg-6 col-md-6">
              <div className="blog-single-box style-two">
                <div className="blog-thumb inner">
                  <img src="assets/images/blog/blog1.png" alt="" />
                  <div className="blog-meta-date">
                    <h5>11</h5>
                    <span>May</span>
                  </div>
                </div>
                <div className="blog-content style-two">
                  <div className="blog-meta style-two">
                    <span>
                      <i className="bi bi-person" />
                      By Admin
                    </span>
                    <span>
                      <i className="bi bi-chat-left" /> (03)
                    </span>
                  </div>
                  <div className="blog-title style-two">
                    <h4>
                      <Link legacyBehavior href="blog-details">
                        Tips for Effective Client Design Agency
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
        </div>
      </div>
      <BrandSlider />
    </ThrownLayout>
  );
};
export default page;
