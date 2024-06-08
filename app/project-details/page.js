import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Project Details"} />
      <div className="project-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="projetct-details-image">
                <img
                  src="assets/images/project/project-details.png"
                  alt="Service"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="info-area">
                <div className="project-details-title">
                  <h5>Stable &amp; Horse's Care And Maintenance.</h5>
                </div>
                <div className="project-detials-discriopton">
                  <p>
                    Roof hen an unknown printer took a galley of type and
                    scrambled itheiro make not only five centurie when an
                    unknown printer took a galley of type area bookurvived not
                    only five lley of type and scram
                  </p>
                </div>
                <ul className="info">
                  <li>
                    <h6>
                      Category <span>:</span>
                    </h6>
                    <p>Commercial , Factory</p>
                  </li>
                  <li>
                    <h6>
                      Client <span>:</span>
                    </h6>
                    <p>Nguyen, Shane</p>
                  </li>
                  <li>
                    <h6>
                      Start <span>:</span>
                    </h6>
                    <p>November 27, 2021</p>
                  </li>
                  <li>
                    <h6>
                      End <span>:</span>
                    </h6>
                    <p>November 01, 2023</p>
                  </li>
                  <li>
                    <h6>
                      Website <span>:</span>
                    </h6>
                    <p>website-stock</p>
                  </li>
                  <li>
                    <h6>
                      Rating <span>:</span>
                    </h6>
                    <div className="project-rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </li>
                </ul>
                <div className="project-btn">
                  <a href="#">
                    Read More <i className="bi bi-arrow-up-right-circle-fill" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="title">
                <h4>Description of Situation</h4>
              </div>
              <p className="discription">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nul pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus e voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
              </p>
            </div>
            <div className="col-lg-12 list-part">
              <div className="row align-items-end">
                <div className="col-lg-8 col-md-12">
                  <div className="title">
                    <h4>client's goal</h4>
                  </div>
                  <p className="discription">
                    The result of employees, over 115 detailers and engineers,
                    all coming together to solve probl before they arise. the
                    teamwork it demonstrates both internally and externally is
                    outstandingThe result of employees, over 115 detailers and
                    engineers, all coming together to solve problem before they
                  </p>
                  <ul className="desc-list">
                    <li>
                      <p>
                        The triple pressures of more regulations outstanding in
                        the creation.
                      </p>
                    </li>
                    <li>
                      <p>
                        The legacy of the financial crisis has meant a few
                        tricky years
                      </p>
                    </li>
                    <li>
                      <p>
                        Now, the triple pressures of more regulations more
                        regulations
                      </p>
                    </li>
                    <li>
                      <p>
                        Outstanding in the creation he triple pressures of more
                        regulations
                      </p>
                    </li>
                    <li>
                      <p>
                        The triple pressures of more regulations outstanding in
                        the creation
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="image">
                    <img
                      src="assets/images/project/project-details2.png"
                      alt="Service"
                    />
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
