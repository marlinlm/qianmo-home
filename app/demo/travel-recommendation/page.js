import BlogSidebar from "@/components/BlogSidebar";
import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout header={2}>
      <PageBanner pageName={"基于图嵌入的多模态出行推荐Trans2Vec 及 个性化和情境感知的多模态出行引擎Hydra"} />
      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row">
                <div className="col-lg-6 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-details-thumb">
                      <img src="assets/images/resource/travel_rec_thumb.png" alt="" />
                    </div>
                  </div>
                  {/* End blog details single box */}
                </div>

                <div className="blog-detaile-title">
                  <h1>
                  
                  </h1>
                </div>

                <div className="col-lg-12 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">亮点</a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li>
                          <i className="bi bi-check2-circle" /> 相关技术已应用于百度地图，并于百度世界大会发布。
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 
                          多次受邀在 AAAI、KDD、World AI Summit Americas 等学术会议上做口头报告。
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 
                          授权相关中美专利5项。
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 
                          相关产品点击率提升近150%。
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 
                          产品DAU增长近4倍。
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End blog details single box */}
                </div>

                <div className="row align-items-center">
                  
                  
                  <div className="col-lg-5 col-md-12">
                    <div className="blog-details-thumb">
                      <img src="assets/images/resource/travel_rec_ref_5.png" alt=""/>
                      <h4>Trans2vec 系统架构</h4>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-12">
                    <div className="blog-details-thumb">
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12">
                    <div className="blog-details-thumb">
                      <img src="assets/images/resource/travel_rec_ref_2.png" alt=""/>
                      <h4>Hydra 系统架构</h4>
                    </div>
                  </div>
                </div>


                <div className="col-lg-5 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">核心技术（Trans2vec） </a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li>
                          <i className="bi bi-check2-circle" /> 首次在出行问题上引入了深度图嵌入技术，类比词嵌入思想，解决了跨交通工具的出行方案比较问题。提出基于锚点的表征学习优化算法，捕捉人-交通工具-起终点之间的高阶相似性，学习用户、交通工具和起终点对（OD）的低维向量表示。
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 基于个体活动的规律性和局部性，构建人-交通工具和起终点对-交通工具的正则化相似矩阵，优化用户和区域出行偏好表征。
                        </li>
                      </ul>
                    </div>

                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">模型性能（Trans2vec） </a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li>
                          <i className="bi bi-check2-circle" /> 取得SOTA级F1分数
                        </li>
                        <div className="row align-items-center">
                          <div className="col-lg-12 col-md-12">
                            <div className="blog-details-thumb">
                              <img src="assets/images/resource/travel_rec_ref_6.png" alt=""/>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                  {/* End blog details single box */}
                </div>

                <div className="col-lg-2 mb-40"></div>


                <div className="col-lg-5 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">核心技术（Hydra） </a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li>
                          <i className="bi bi-check2-circle" /> 引入POI、气候等多源异构城市大数据，融合一阶线性特征和基于Trans2vec的高阶特征，构建基于 XGB 的多分类模型，精确建模不同情境下的出行偏好。
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 高可扩展框架，T+1 自动更新，7月底日均请求量 超过 2400万，经受住地图五一峰值请求压力，可用性达 99.99%。
                        </li>
                      </ul>
                    </div>
                    
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">模型性能（Hydra） </a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li>
                          <i className="bi bi-check2-circle" /> 提高预测F1分数1.7%
                        </li>
                        <div className="row align-items-center">
                          <div className="col-lg-12 col-md-12">
                            <div className="blog-details-thumb">
                              <img src="assets/images/resource/travel_rec_ref_3.png" alt=""/>
                            </div>
                          </div>
                        </div>
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
                        <li className="active">
                          <i className="bi bi-check2-circle" /> 
                          <a href="">
                          Hao Liu, et al. Joint Representation Learning for Multi-Modal Transportation Recommendation. AAAI 2019.
                          </a>
                        </li>
                        <li className="active">
                          <i className="bi bi-check2-circle" /> 
                          <a href="">
                          Hao Liu, et al. Hydra: A Personalized and Context-Aware Multi-Modal Transportation Recommendation System. KDD 2019.
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
