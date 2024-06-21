import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import Link from "next/link";
const page = () => {
  return (
    <ThrownLayout header={2}>
      <PageBanner pageName={"学术成果演示"} />
      <div className="blog-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>内部演示项目</h4>
                </div>
                <div className="section-main-title">
                  <h2>仅供内部演示使用，请勿外传</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="blog-single-box style-two inner-page">
                <div className="blog-thumb">
                  <img src="assets/images/resource/llmlight_orig.png" alt="" />
                  <div className="single-video style-two">
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="video"
                        data-autoplay="true"
                        href="assets/vedio/llmlight.mp4"
                      >
                        <i className="bi bi-play" />
                      </a>
                    </div>
                  </div>
                  {/* <div className="blog-meta-date">
                    <h5>15</h5>
                    <span>May</span>
                  </div> */}
                </div>
                
                <div className="blog-content style-two">

                  <div className="blog-title style-two">
                    <h4>
                      <Link legacyBehavior href="demo/llmlight">
                        交通信号控制大模型智能体LLMLight
                      </Link>
                    </h4>
                  </div>
                  <div className="blog-btn style-two">
                    <a href="#">
                      详情 <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-single-box style-two">
                <div className="blog-thumb">
                  <img src="assets/images/resource/eta_res_1.png" alt="" />
                </div>
                <div className="blog-content style-two inner">

                  <div className="blog-title style-two">
                    <h4>
                      <Link legacyBehavior href="demo/eta">
                      ETA模型
                      </Link>
                    </h4>
                  </div>
                  <div className="blog-btn style-two">
                    <a href="demo/eta">
                      详情 <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="blog-single-box style-two inner-page">
                <div className="blog-thumb">
                  <img src="assets/images/resource/congestion_res1.png" alt="" />
                  {/* <div className="blog-meta-date">
                    <h5>14</h5>
                    <span>May</span>
                  </div> */}
                </div>
                <div className="blog-content style-two inner-page">
                  <div className="blog-meta style-two">
                    {/* <span>
                      <i className="bi bi-person" />
                      By Admin
                    </span>
                    <span>
                      <i className="bi bi-chat-left" /> (06)
                    </span> */}
                  </div>
                  <div className="blog-title style-two">
                    <h4>
                      <Link legacyBehavior href="demo/congestion">
                      城市拥堵预测的可解释级联混合专家模型
                      </Link>
                    </h4>
                  </div>
                  <div className="blog-btn style-two">
                    <a href="demo/congestion">
                      详情 <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog-single-box style-two">
                <div className="blog-thumb">
                  <img src="assets/images/resource/travel_rec_ref_5.png" alt="" />
                </div>
                <div className="blog-content style-two inner">

                  <div className="blog-title style-two">
                    <h4>
                      <Link legacyBehavior href="demo/travel-recommendation">
                      多模态出行推荐模型
                      </Link>
                    </h4>
                  </div>
                  <div className="blog-btn style-two">
                    <a href="demo/eta">
                      详情 <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              
            </div>
            <div className="col-lg-6 col-md-6">
              
            </div>
          </div>
        </div>
      </div>
    </ThrownLayout>
  );
};
export default page;
