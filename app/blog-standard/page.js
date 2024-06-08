import BlogSidebar from "@/components/BlogSidebar";
import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import Link from "next/link";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Blog Standard"} />
      <div className="blog-standard-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-quote-box mb-40">
                    <div className="blog-quote-conent">
                      <i className="fas fa-quote-right" />
                      <p>
                        Tosser argy-bargy mush loo at public school Elizabeth up
                        the duff buggered chinwag on your bike mate don’t get
                        shirty with me super, Jeffrey bobby Richard cheesed off
                        spend a penny a load of old tosh blag horseTosser
                        argy-bargy mush loo at public school Elizabeth up the
                        duff buggered chinwag on your bike mate don’t get
                      </p>
                      <h4>Silvester Scot</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-40">
                  {/* start blog single box */}
                  <div className="blog-standard-box">
                    <div className="blog-standard-thumb">
                      <img src="assets/images/blog/blog-standard1.png" alt="" />
                      <div className="blog-single-video">
                        <div className="blog-video-icon">
                          <a
                            className="video-vemo-icon venobox vbox-item"
                            data-vbtype="youtube"
                            data-autoplay="true"
                            href="https://youtu.be/BS4TUd7FJSg"
                          >
                            <i className="bi bi-play-fill" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blog-standard-meta">
                      <span>By Admin</span>
                      <span>17 Aug 2023 </span>
                      <span className="meta">Construction</span>
                    </div>
                    <div className="blog-standard-content">
                      <h4>
                        <a href="#">
                          Best Practices Construction Law Construction
                        </a>
                      </h4>
                      <p>
                        Why Roofing are factmake 17 Reason EasierForesee the
                        pain &amp; trouble that are bounds too ensue equalidea
                        off denouncing pleasures and praising pain was
                        borncomplete account and expound the actual teachings
                        the great the master-builder of human happiness. In a
                        free hour...
                      </p>
                    </div>
                    <div className="project-btn">
                      <a href="#">
                        Read More{" "}
                        <i className="bi bi-arrow-up-right-circle-fill" />
                      </a>
                    </div>
                  </div>
                  {/* End blog single box */}
                </div>
                <div className="col-lg-12 mb-40">
                  {/* start blog single box */}
                  <div className="blog-standard-box">
                    <div className="blog-standard-thumb">
                      <img src="assets/images/blog/blog-stnandar2.png" alt="" />
                    </div>
                    <div className="blog-standard-meta">
                      <span>By Admin</span>
                      <span>17 Aug 2023 </span>
                      <span className="meta">Construction</span>
                    </div>
                    <div className="blog-standard-content">
                      <h4>
                        <a href="#">All the Greatest Moments of Thoroughbred</a>
                      </h4>
                      <p>
                        Why Roofing are factmake 17 Reason EasierForesee the
                        pain &amp; trouble that are bounds too ensue equalidea
                        off denouncing pleasures and praising pain was
                        borncomplete account and expound the actual teachings
                        the great the master-builder of human happiness. In a
                        free hour...
                      </p>
                    </div>
                    <div className="project-btn">
                      <a href="#">
                        Read More{" "}
                        <i className="bi bi-arrow-up-right-circle-fill" />
                      </a>
                    </div>
                  </div>
                  {/* End blog single box */}
                </div>
                <div className="col-lg-12 mb-20">
                  {/* start blog single box */}
                  <div className="blog-standard-box">
                    <div className="row">
                      <div className="blog_list owl-carousel">
                        <div className="col-lg-12">
                          <div className="blog-standard-thumb">
                            <img
                              src="assets/images/blog/blog-standard3.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="blog-standard-thumb">
                            <img
                              src="assets/images/blog/blog-standard1.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-standard-meta">
                      <span>By Admin</span>
                      <span>17 Aug 2023 </span>
                      <span className="meta">Construction</span>
                    </div>
                    <div className="blog-standard-content">
                      <h4>
                        <a href="#">All the Greatest Moments of Thoroughbred</a>
                      </h4>
                      <p>
                        Why Roofing are factmake 17 Reason EasierForesee the
                        pain &amp; trouble that are bounds too ensue equalidea
                        off denouncing pleasures and praising pain was
                        borncomplete account and expound the actual teachings
                        the great the master-builder of human happiness. In a
                        free hour...
                      </p>
                    </div>
                    <div className="project-btn">
                      <a href="#">
                        Read More{" "}
                        <i className="bi bi-arrow-up-right-circle-fill" />
                      </a>
                    </div>
                  </div>
                  {/* End blog single box */}
                </div>
                <div className="col-lg-12">
                  <div className="as-pagination text-center">
                    <ul>
                      <li>
                        <Link legacyBehavior href="Blog-details">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="Blog-details">
                          2
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="Blog-details">
                          <i className="bi bi-chevron-double-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </div>
      <BrandSlider />
    </ThrownLayout>
  );
};
export default page;
