import BlogSidebar from "@/components/BlogSidebar";
import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import SubHeader from "@/components/Subheader";



import Link from "next/link";
import Contact from "@/components/Contact";
const page = () => {
  return (
    <ThrownLayout header={2} subheader={250} background={"assets/images/resource/traffic_bg_2.png"}>
      <PageBanner pageName={"智慧交通解决方案"}  />
      <SubHeader/>
      <div className="blog-standard-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row">

                <div className="blog-detaile-title">
                  <h1>
                    行业痛点
                  </h1>
                </div>
                <div className="col-lg-12 blog-quote-box mb-40" id="paint">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-details-discription blog-quote-conent">
                      <h3>
                        智慧交管
                      </h3>
                      <p>
                      交管行业在面临交通拥堵、交通事故频发、交通违法行为等问题的同时，还需要应对数字化升级的挑战和数据质量的问题。
                      为了解决这些痛点，交管行业需要不断创新和提升，加强智慧交通解决方案的研发和应用。总体来说，我们的解决方案主要针对以下行业痛点。
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="blog-quote-box mb-40">
                          <div className="blog-quote-conent">
                            <h5>
                            交通系统立体化发展，交通态势复杂多变、演化机理不明。
                            </h5>
                            {/* <h4>Silvester Scot</h4> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="blog-quote-box mb-40">
                          <div className="blog-quote-conent">
                            <h5>
                            大量异构多模态数据沉睡，数据孤岛难以打破。
                            </h5>
                            {/* <h4>Silvester Scot</h4> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="blog-quote-box mb-40">
                          <div className="blog-quote-conent">
                            <h5>
                            未形成事前预测、事中干预和事后优化的完整智能化闭环。
                            </h5>
                            {/* <h4>Silvester Scot</h4> */}
                          </div>
                        </div>
                      </div>

                    </div>
                    
                    <div className="blog-details-discription blog-quote-conent">
                      <h3>
                        智慧出行
                      </h3>
                      <p>
                      智慧出行领域的痛点主要包括决策复杂度增加、资源碎片化和高成本的人工智能模型构建。我们的解决方案，可以实现不同应用场景之间的有效整合和协同，提高服务的智能化水平和用户体验。
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="blog-quote-box mb-40">
                          <div className="blog-quote-conent">
                            <h5>
                            居民活动范围增大，出行工具选择更多，决策复杂度飙升。
                            </h5>
                            {/* <h4>Silvester Scot</h4> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="blog-quote-box mb-40">
                          <div className="blog-quote-conent">
                            <h5>
                            出行/消费场景在应用上互相割裂，资源碎片化。
                            </h5>
                            {/* <h4>Silvester Scot</h4> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="blog-quote-box mb-40">
                          <div className="blog-quote-conent">
                            <h5>
                            跨场景应用需求各异，逐个场景构建人工智能模型成本高昂。
                            </h5>
                            {/* <h4>Silvester Scot</h4> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End blog details single box */}
                </div>

                <div className="blog-detaile-title">
                  <h1>
                    技术架构
                  </h1>
                </div>
                <div className="col-lg-12 blog-quote-box mb-40" id="solutions">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-details-discription">
                      <p>
                        围绕AI训练、部署和应用全生命周期自主可控的算力基座、数据基座和服务基座，我们自研了理解、预测和决策等应用方向的大模型技术。在此基础上，
                        我们开发了一组面向政府交管应用平台和互联网出行应用平台的大模型智能体集合，可以赋能智慧交通领域的多个使用场景。这些智能体可以灵活部署到客户内网环境中，同时，我们
                        提供了插件化的大模型客户端，方便客户平台集成使用。
                      </p>
                    </div>
                  </div>

                  
                  <div className="blog-quote-conent">
                    
                    <h3>方案优势</h3>
                  
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="blog-quote-box mb-40">
                          <div className="blog-quote-conent">
                            <h5>
                            自有模型，部署灵活，调用方便。
                            </h5>
                            {/* <h4>Silvester Scot</h4> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="blog-quote-box mb-40">
                          <div className="blog-quote-conent">
                            <h5>
                            插件式客户端，便于被集成。
                            </h5>
                            {/* <h4>Silvester Scot</h4> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="blog-quote-box mb-40">
                          <div className="blog-quote-conent">
                            <h5>
                            自研调优技术，训练成本更低。
                            </h5>
                            {/* <h4>Silvester Scot</h4> */}
                          </div>
                        </div>
                      </div>

                      <h3>方案架构图</h3>

                      <div className="row align-item-center">
                        <div className="col-lg-12 blog-details-thumb">
                          <img src="assets/images/resource/tech_arch.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>


                <div className="blog-detaile-title" id="solution1">
                  <h1>
                    智慧交管解决方案
                  </h1>
                </div>

                <div className="col-lg-12 blog-quote-box mb-40">
                  {/* start blog single box */}
                  <div className="blog-details-box mb-40">
                    <div className="blog-detaile-title row">
                      <div className="blog-quote-conent">
                        <h3>
                          <a href="#contact" title="获取方案详情">
                            区域交通信号控制平台
                          </a>
                        </h3>
                      </div>
                    </div>

                    <div className="blog-standard-thumb">
                      <img src="assets/images/resource/llmlight_orig.png" alt="" />
                      <div className="blog-single-video style-two">
                        <div className="blog-video-icon style-two">
                          <a
                            className="video-vemo-icon venobox vbox-item"
                            data-vbtype="video"
                            data-autoplay="true"
                            href="assets/vedio/llmlight.mp4"
                          >
                            <i className="bi bi-play-fill" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <p></p>
                    <p>
                    {/* 交通信号控制（TSC）是城市交通管理的重要组成部分，旨在优化道路网络效率并减少拥堵。TSC 中的传统方法主要基于交通工程和强化学习 (RL)，通常在不同交通场景的泛化性方面表现出局限性，并且缺乏可解释性。
                    受此启发，港科大广州刘浩教授团队在2023年12月开源了 LLMLight框架，用于结合大型语言模型 (LLM) 作为 TSC 的决策智能体。该框架首先向智能体提供详细的实时交通状况，并结合先验知识构成提示。利用LLM卓越的泛化能力，LLMLight 采用符合人类直觉的推理和决策过程来实现有效的交通控制。该团队还于2024年2月开源了交通信号灯控制垂类大模型LightGPT。其通过学习的交通流量模式和控制策略，经济且高效地增强了 LLMLight 框架的控制性能。
                    在九个真实世界和合成数据集进行的广泛实验中， LLMLight 相对于九个基于交通工程和强化学习的基线模型展现出显著有效性、泛化能力和可解释性。LightGPT在此任务上的决策能力显著优于GPT-4。 */}
                      结合大型语言模型 (LLM) 作为 TSC 的决策智能体。该框架首先向智能体提供详细的实时交通状况，并结合先验知识构成提示。利用LLM卓越的泛化能力，LLMLight采用符合人类直觉的推理和决策过程来实现有效的交通控制。
                      该智能体已在多个大型城市交通模型中取得SOTA指标。
                    </p>
                  </div>
                  <div className="row">
                    <h5 className="col-lg-1">产品:</h5>
                    <div className="project-btn col-lg-2">
                      <a href="/demo/llmlight">
                        LLMLight{" "}
                        <i className="bi bi-arrow-up-right-circle-fill" />
                      </a>
                    </div>

                  </div>
                  {/* End blog single box */}
                </div>

                <div className="col-lg-12 blog-quote-box mb-40">
                  {/* start blog single box */}
                  <div className="blog-details-box">
                    <div className="">
                      <div className="blog-detaile-title">
                        
                        <div className="blog-quote-conent">
                          <h3>
                            <a href="#contact" title="获取方案详情">
                            拥堵预测
                            </a>
                          </h3>
                        </div>

                      </div>

                      <div className="blog-standard-thumb">
                        <img src="assets/images/resource/congestion_res1.png" alt="" />
                        
                      </div>
                      <p></p>
                      <p>
                        一个SOTA级拥堵预测模型。通过识别交通数据中的稳定趋势和周期模式特征，结合自适应图学习混合专家模块(MAGL)，提升拥堵预测的鲁棒性和可解释性。
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <h5 className="col-lg-1">产品:</h5>
                    <div className="project-btn col-lg-3">
                      <a href="/demo/congestion">
                      CP-MoE{" "}
                        <i className="bi bi-arrow-up-right-circle-fill" />
                      </a>
                    </div>

                  </div>
                  
                  {/* End blog single box */}
                </div>

                

                <div className="blog-detaile-title" id="solution2">
                  <h1>
                      智慧出行解决方案
                  </h1>
                </div>

                <div className="col-lg-12 blog-quote-box mb-40">
                  {/* start blog single box */}
                  <div className="blog-details-box mb-40">
                    <div className="">
                      <div className="blog-detaile-title">
                        <div className="blog-quote-conent">
                          <h3>
                            <a href="#contact" title="获取方案详情">
                              出行推荐
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="blog-standard-thumb">
                      <img src="assets/images/resource/travel_rec_ref_5.png" alt="" />
                    </div>
                    <p></p>
                    <p>
                    个性化和情境感知的多模态出行规划需求,更懂用户的多模态出行引擎。 
                    </p>
                  </div>
                  <div className="row">
                    <h5 className="col-lg-1">产品:</h5>
                    <div className="project-btn col-lg-2">
                      <a href="/demo/travel-recommendation">
                      Trans2vec{" "}
                        <i className="bi bi-arrow-up-right-circle-fill" />
                      </a>
                    </div>
                    <div className="project-btn col-lg-2">
                      <a href="/demo/travel-recommendation">
                      Hydra{" "}
                        <i className="bi bi-arrow-up-right-circle-fill" />
                      </a>
                    </div>
                  </div>
                  {/* End blog single box */}
                </div>

                <div className="col-lg-12 blog-quote-box mb-40">
                  {/* start blog single box */}
                  <div className="blog-details-box">
                    <div className="">
                      <div className="blog-detaile-title">
                        <div className="blog-quote-conent">
                          <h3>
                            <a href="#contact" title="获取方案详情">
                              行程时间预测
                            </a>
                          </h3>
                        </div>
                      </div>

                      <div className="blog-standard-thumb">
                        <img src="assets/images/resource/eta_res_1.png" alt="" />
                        
                      </div>
                      <p></p>
                      <p>
                        一个适应于多种出行场景下的高鲁棒性预测的行程时间预测智能体，在实现22倍训练速度的情况下，降低预测误差达到6.9%。
                      </p>
                    </div>

                  </div>
                  <div className="row">
                    <h5 className="col-lg-1">产品:</h5>
                    <div className="project-btn col-lg-2">
                      <a href="/demo/eta">
                      iETA{" "}
                        <i className="bi bi-arrow-up-right-circle-fill" />
                      </a>
                    </div>
                    <div className="project-btn col-lg-2 ">
                      <a href="/demo/eta">
                      ProbETA{" "}
                        <i className="bi bi-arrow-up-right-circle-fill" />
                      </a>
                    </div>
                  </div>
                  {/* End blog single box */}
                </div>

                <div className="col-lg-12 mb-40" id="contact">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-detaile-title">
                      <h1>
                        索取方案
                      </h1>
                      <Contact/>
                    </div>
                  </div>
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
