import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import Link from "next/link";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Pricing"} />
      <div className="pricing-area inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>Pricing Plan</h4>
                </div>
                <div className="section-main-title pricing">
                  <h2>Our Best Price Plan</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-single-box">
                <div className="pricing-content">
                  <div className="pricing-title">
                    <h3>Basic Pack</h3>
                  </div>
                  <div className="pricing-rate">
                    <h3>
                      <span>$</span>30
                    </h3>
                    <span>.99</span>
                  </div>
                  <div className="pricing-time">
                    <span>
                      <i className="bi bi-alarm" /> 33 Min
                    </span>
                  </div>
                  <div className="pricing-list">
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
              <div className="pricing-single-box">
                <div className="pricing-content">
                  <div className="pricing-title">
                    <h3>Basic Pack</h3>
                  </div>
                  <div className="pricing-rate">
                    <h3>
                      <span>$</span>30
                    </h3>
                    <span>.99</span>
                  </div>
                  <div className="pricing-time">
                    <span>
                      <i className="bi bi-alarm" /> 33 Min
                    </span>
                  </div>
                  <div className="pricing-list">
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
              <div className="pricing-single-box">
                <div className="pricing-content">
                  <div className="pricing-title">
                    <h3>Basic Pack</h3>
                  </div>
                  <div className="pricing-rate">
                    <h3>
                      <span>$</span>30
                    </h3>
                    <span>.99</span>
                  </div>
                  <div className="pricing-time">
                    <span>
                      <i className="bi bi-alarm" /> 33 Min
                    </span>
                  </div>
                  <div className="pricing-list">
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
      <BrandSlider />
    </ThrownLayout>
  );
};
export default page;
