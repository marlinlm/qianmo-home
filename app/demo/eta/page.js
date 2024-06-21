import BlogSidebar from "@/components/BlogSidebar";
import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout header={2}>
      <PageBanner pageName={"鲁棒可扩展的增量ETA学习框架iETA 及 不确定性感知的ETA概率预测模型ProbETA"} />
      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row">
                <div className="col-lg-10 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-details-thumb">
                      <img src="/assets/images/resource/eta_res_1.png" alt="" />
                      {/* <div className="blog-single-video">
                        <div className="blog-video-icon">
                          <a
                            className="video-vemo-icon venobox vbox-item"
                            data-vbtype="video"
                            data-autoplay="true"
                            href="/assets/vedio/llmlight.mp4"
                          >
                            <i className="bi bi-play" />
                          </a>
                        </div>
                      </div> */}
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
                    {/* <div className="blog-details-discription">
                      <p>
                      利用大模型卓越的泛化能力，采用符合人类直觉的推理和决策过程来实现有效的交通控制。在九个交通流数据集上的实验证明了LLMLight框架的有效性、泛化能力和可解释性。具体来说，在真实数据集上，LLMLight在所有基准测试中始终达到了SOTA或与经典强化学习等方法同等的性能水平，并且拥有比后者更为强大的泛化性。同时，LLMLight还能在决策时提供背后的分析逻辑，这一可解释性实现了信号灯控制的透明化。TSC垂类大模型LightGPT在此任务上的决策能力显著优于GPT-4。
                      </p>
                    </div> */}
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
                          <i className="bi bi-check2-circle" /> 相关技术应用于滴滴出行核心ETA引擎
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 
                          系列论文在KDD 2023发表
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

                <div className="row align-items-center">
                  
                  <div className="col-lg-5 col-md-12">
                    <div className="blog-details-thumb">
                      <img src="/assets/images/resource/eta_res_3.png" alt=""/>
                      <h4>iETA模型架构</h4>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-12">
                    <div className="blog-details-thumb">
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12">
                    <div className="blog-details-thumb">
                      <img src="/assets/images/resource/eta_res_2.png" alt=""/>
                      <h4>ProbETA模型架构</h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">核心挑战（iETA） </a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li>
                          <i className="bi bi-check2-circle" /> 按天顺序训练的模型面临灾难性遗忘问题
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 基于全量历史数据重新训练面临巨大计算开销
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 低质量交通数据对模型预测产生巨大噪音
                        </li>
                      </ul>
                    </div>
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">核心技术（iETA） </a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li>
                          <i className="bi bi-check2-circle" /> 利用近期数据增量式更新模型，并渐进式蒸馏关键历史知识 → 提升预测精度、降低模型训练部署成本
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 利用对抗训练主动模拟和抵抗交通噪声 → 提高增量学习框架对低质量数据的鲁棒性
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-detaile-title">
                    <h4>
                      <a href="#">模型性能（iETA） </a>
                    </h4>
                  </div>
                  <div className="blog-details-list">
                    <ul>
                      <li>
                        <i className="bi bi-check2-circle" /> 降低预测误差高达6.9%
                        <div className="row align-items-center">
                          <div className="col-lg-12 col-md-12">
                            <div className="blog-details-thumb">
                              <img src="/assets/images/resource/eta_res_perf_1.png" alt=""/>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" /> 实现 22× 训练加速
                        <div className="row align-items-center">
                          <div className="col-lg-12 col-md-12">
                            <div className="blog-details-thumb">
                              <img src="/assets/images/resource/eta_res_perf_2.png" alt=""/>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" /> 实现不同测试情景下的鲁棒预测
                        <div className="row align-items-center">
                          <div className="col-lg-12 col-md-12">
                            <div className="blog-details-thumb">
                              <img src="/assets/images/resource/eta_res_perf_3.png" alt=""/>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* End blog details single box */}
                </div>

                <div className="col-lg-2 mb-40"></div>


                <div className="col-lg-5 mb-40">
                  {/* start blog details single box */}
                  <div className="blog-details-box">
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">核心挑战（ProbETA） </a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li>
                          <i className="bi bi-check2-circle" /> 基于标量ETA标签训练模型感知交通不确定性
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 建模随路径变化的ETA分布
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 低成本地将分布建模融入高度优化的ETA业务系统
                        </li>
                      </ul>
                    </div>
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">核心技术（ProbETA） </a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li>
                          <i className="bi bi-check2-circle" /> 将回归任务转化为分类任务，提出自适应局部标签平滑方案 → 感知ETA类别顺序，捕捉ETA分布
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 构建基于路径的对数正态分布正则化方案 → 吸收大规模历史行程数据中的先验知识，捕捉随路径变化的ETA分布
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 联合优化回归、分类任务 → 构建与基础模型架构无关的训练框架，低成本融合概率预测任务
                        </li>
                      </ul>
                    </div>
                    
                    <div className="blog-detaile-title">
                      <h4>
                        <a href="#">模型性能（ProbETA） </a>
                      </h4>
                    </div>
                    <div className="blog-details-list">
                      <ul>
                        <li>
                          <i className="bi bi-check2-circle" /> 降低预测误差高达6.29%
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> 对超参数变化保持良好的鲁棒性
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
                          Jindong Han, et al. iETA: A Robust and Scalable Incremental Learning Framework for Time-of-Arrival Estimation. KDD 2023. 
                          </a>
                        </li>
                        <li className="">
                          <i className="bi bi-check2-circle" /> 
                          <a href="">
                          Hao Liu, et al. Uncertainty-Aware Probabilistic Travel Time Prediction for On-Demand Ride-Hailing at DiDi. KDD 2023.
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
