import BlogSidebar from "@/components/BlogSidebar";
import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout header={2}>
      <PageBanner pageName={"交通信号控制大模型智能体LLMLight"} />
      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row">
                <div className="col-lg-12 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">


                    <div className="blog-details-thumb">
                      <img src="assets/images/resource/llmlight_orig.png" alt="" />
                      <div className="blog-single-video">
                        <div className="blog-video-icon">
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
                    </div>

                    {/* <div className="blog-details-meta">
                      <span>
                        <i className="bi bi-person" />
                        By Admin
                      </span>
                      <span>
                        <i className="bi bi-calendar3" /> June 13
                      </span>
                      <span>
                        <i className="bi bi-chat-left" /> (05)
                      </span>
                    </div> */}
                    
                    <div className="blog-detaile-title">
                      <h1>
                      </h1>
                    </div>
                    <div className="blog-details-discription">
                      <p></p>
                      <p>
                      利用大模型卓越的泛化能力，采用符合人类直觉的推理和决策过程来实现有效的交通控制。在九个交通流数据集上的实验证明了LLMLight框架的有效性、泛化能力和可解释性。具体来说，在真实数据集上，LLMLight在所有基准测试中始终达到了SOTA或与经典强化学习等方法同等的性能水平，并且拥有比后者更为强大的泛化性。同时，LLMLight还能在决策时提供背后的分析逻辑，这一可解释性实现了信号灯控制的透明化。TSC垂类大模型LightGPT在此任务上的决策能力显著优于GPT-4。
                      </p>
                    </div>
                  </div>
                  {/* End blog details single box */}
                </div>
                
                <div className="col-lg-12 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">亮点 </a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li>
                          <i className="bi bi-check2-circle" /> 首个基于大语言模型的交通信号控制智能体
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 多家知名人工智能技术媒体报导，如“量子位”、“AI Time 论道”等
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 作为智慧城市重要工作被多篇综述文章收录
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End blog details single box */}
                </div>
                
                <div className="row align-items-center">
                  <div className="col-lg-12 col-md-12">
                    <div className="blog-details-thumb">
                      <img src="assets/images/resource/llmlight_res1.png" alt=""/>
                      <h4>LLMLight 模型架构</h4>
                    </div>
                  </div>
                </div>



                <div className="col-lg-12 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">核心技术 </a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li>
                          <i className="bi bi-check2-circle" /> 利用大语言模型的泛化能力，可零训练迁移到多种交通场景中
                        </li>
                        <li >
                          <i className="bi bi-check2-circle" /> 可利用打分模型的智能反馈，在真实场景下持续优化大模型的控制策略
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End blog details single box */}
                </div>


                <div className="col-lg-12 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">智能体性能</a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li >
                          <i className="bi bi-check2-circle" /> 小型路网：通行时间减少 3.48% 至 3.11%，等待时间缩短 12.29% 至 15.66%
                        </li>
                        <li >
                          <i className="bi bi-check2-circle" /> 大型路网：通行时间缩短 2.3% 至 18.45%，等待时间减少 49.80% 至 57.80%
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End blog details single box */}
                </div>


                <div className="col-lg-12 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">论文 </a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li className="">
                          <i className="bi bi-check2-circle" /> 
                          <a href="">
                          Lai, Siqi, et al. " LLMLight: Large Language Models as Traffic Signal Control Agents." arXiv preprint arXiv:2312.16044 (2023).
                        </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End blog details single box */}
                </div>

                <div className="col-lg-12 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">开源项目 </a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li className="">
                          <i className="bi bi-check2-circle" /> <a href="https://github.com/usail-hkust/LLMTSCS">https://github.com/usail-hkust/LLMTSCS</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End blog details single box */}
                </div>

              </div>
            </div>
            {/* <BlogSidebar /> */}
            
            
          </div>
        </div>
      </div>
    </ThrownLayout>
  );
};
export default page;
