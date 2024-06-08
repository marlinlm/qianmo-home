import Link from "next/link";

const Work = ({ dark }) => {
  return (
    <div className={`project-area ${dark ? "dark" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <div className="section-sub-title">
                <h4>About Our Work</h4>
              </div>
              <div className={`section-main-title ${dark ? "dark" : ""}`}>
                <h2>We Are Passionate About Our</h2>
                <h2>Clients And Our Work.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* Photo Grid */}
        <div className="row">
          <div className="column">
            <div className="project-thumb">
              <img
                src="assets/images/project/project1.png"
                alt="image"
                style={{ width: "100%" }}
              />
              <div className="portfolio-content">
                <div className="protfolio-title">
                  <h6>Strategy</h6>
                  <h3>
                    <Link legacyBehavior href="project-details">
                      Digital Experience
                    </Link>
                  </h3>
                  <h3>
                    <Link legacyBehavior href="project-details">
                      Development Case
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="project-thumb">
              <img
                src="assets/images/project/project4.png"
                alt="image"
                style={{ width: "100%" }}
              />
              <div className="portfolio-content">
                <div className="protfolio-title">
                  <h6>Strategy</h6>
                  <h3>
                    <Link legacyBehavior href="project-details">
                      Digital Experience
                    </Link>
                  </h3>
                  <h3>
                    <Link legacyBehavior href="project-details">
                      Development Case
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="project-thumb">
              <img
                src="assets/images/project/project2..png"
                alt="image"
                style={{ width: "100%" }}
              />
              <div className="portfolio-content">
                <div className="protfolio-title">
                  <h6>Strategy</h6>
                  <h3>
                    <Link legacyBehavior href="project-details">
                      Digital Experience
                    </Link>
                  </h3>
                  <h3>
                    <Link legacyBehavior href="project-details">
                      Development Case
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="project-thumb">
              <img
                src="assets/images/project/project5.png"
                alt="image"
                style={{ width: "100%" }}
              />
              <div className="portfolio-content">
                <div className="protfolio-title">
                  <h6>Strategy</h6>
                  <h3>
                    <Link legacyBehavior href="project-details">
                      Digital Experience
                    </Link>
                  </h3>
                  <h3>
                    <Link legacyBehavior href="project-details">
                      Development Case
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="project-thumb">
              <img
                src="assets/images/project/project3.png"
                alt="image"
                style={{ width: "100%" }}
              />
              <div className="portfolio-content">
                <div className="protfolio-title">
                  <h6>Strategy</h6>
                  <h3>
                    <Link legacyBehavior href="project-details">
                      Digital Experience
                    </Link>
                  </h3>
                  <h3>
                    <Link legacyBehavior href="project-details">
                      Development Case
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="project-thumb">
              <img
                src="assets/images/project/project6.png"
                alt="image"
                style={{ width: "100%" }}
              />
              <div className="portfolio-content">
                <div className="protfolio-title">
                  <h6>Strategy</h6>
                  <h3>
                    <Link legacyBehavior href="project-details">
                      Digital Experience
                    </Link>
                  </h3>
                  <h3>
                    <Link legacyBehavior href="project-details">
                      Development Case
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
