import BlogSidebar from "@/components/BlogSidebar";
import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout header={2}>
      <PageBanner pageName={"城市拥堵预测的可解释级联混合专家模型"} />
      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row">
                <div className="col-lg-12 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-details-thumb">
                      <img src="assets/images/resource/traffic.png" alt="" />
                      
                    </div>
                    <div className="blog-detaile-title">
                      {/* <h1>
                      城市拥堵预测的可解释级联混合专家模型
                      </h1> */}
                    </div>
                  </div>
                  {/* End blog details single box */}
                </div>
                
                <div className="col-lg-6 mb-40">
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
                          <i className="bi bi-check2-circle" /> 发表于人工智能顶级会议SIGKDD 2024
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 核心技术在滴滴出行真实业务场景部署验证
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End blog details single box */}
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-12 col-md-12">
                    <div className="blog-details-thumb">
                      <img src="assets/images/resource/congestion_res1.png" alt=""/>
                      <h4>CP-MoE 模型架构</h4>
                    </div>
                  </div>
                </div>

                

                <div className="col-lg-6 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">核心挑战 </a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li>
                          <i className="bi bi-check2-circle" /> 城市交通数据呈现异质且动态的时空关联
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 现实数据中的缺失和噪声扭曲真实交通模式
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 深度学习模型受限于可解释性，不利于可信决策
                        </li>
                      </ul>
                    </div>
                    {/* <div className="blog-details-discription">
                      <p>
                        Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque porro est qui dolorem ipsum quia quaed
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Aelltes port lacus quis enim var
                        as sed efficitur turpis gilla sed sit amet finibus eros.
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the ndustry
                        standard dummy text ever since the 1500s, when an
                        unknown too
                      </p>
                    </div> */}
                  </div>
                  {/* End blog details single box */}
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
                          <i className="bi bi-check2-circle" /> 提出自适应图学习混合专家模块(MAGL)，赋予专家拥堵感知偏置 → 捕捉不同场景的复杂时空关联
                        </li>
                        <li >
                          <i className="bi bi-check2-circle" /> 构建两种特定专家模型以识别交通数据中的稳定趋势和周期模式，并通过级联结构将其与 MAGL 结合 → 提升拥堵预测的鲁棒性和可解释性
                        </li>
                        <li >
                          <i className="bi bi-check2-circle" /> 采用序数回归策略以提升专家对路况顺序关系的感知 → 避免专家预测过度自信，促进专家间高效合作
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
                          <i className="bi bi-check2-circle" /> 准确性：北京、上海细粒度拥堵预测 F1 提升 3.3%
                          <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                              <div className="blog-details-thumb">
                                <img src="assets/images/resource/congestion_res_2.png" alt=""/>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li >
                          <i className="bi bi-check2-circle" /> 鲁棒性：严重数据噪声场景下拥堵预测 F1 提升 8%
                          <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                              <div className="blog-details-thumb">
                                <img src="assets/images/resource/congestion_res_3.png" alt=""/>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li >
                          <i className="bi bi-check2-circle" /> 可解释性：级联聚合权重能够揭示主导不同样本预测的专家，提供符合现实意义的模型决策解释
                          <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                              <div className="blog-details-thumb">
                                <img src="../assets/images/resource/congestion_res_4.png" alt=""/>
                              </div>
                            </div>
                          </div>
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
                        <li >
                          <i className="bi bi-check2-circle" /> 
                          <a href="">
                          Jiang, Wenzhao, et al. Interpretable Cascading Mixture-of-Experts for Urban Traffic Congestion Prediction.
                        </a>
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
