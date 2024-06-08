import Link from "next/link";

const PageBanner = ({ pageName }) => {
  return (
    <div className="breatcome-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="breatcome-content">
              <div className="breatcome-title">
                <h1>{pageName}</h1>
              </div>
              <div className="bratcome-text">
                <ul>
                  <li>
                    <Link legacyBehavior href="/">
                      Home
                    </Link>
                  </li>{" "}
                  <li> {pageName}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageBanner;
