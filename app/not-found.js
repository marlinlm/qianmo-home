import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import Link from "next/link";
const NotFound = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Error Page"} />
      <div className="error-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="error-thumb mb-60">
                <img src="assets/images/resource/error.svg" alt="image" />
              </div>
              <div className="thrown-btn error text-center">
                <Link legacyBehavior href="/contact-us">
                  <a className="header-button">
                    Go To Home <span />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThrownLayout>
  );
};
export default NotFound;
