import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import Link from "next/link";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"网站还在建设中。。。"} />
      <div className="error-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="error-thumb mb-60">
                <img src="assets/images/resource/error.svg" alt="image" />
              </div>
              <div className="thrown-btn error text-center">
                <Link legacyBehavior href="index">
                  <a className="header-button">
                    回到首页 <span />
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
export default page;
