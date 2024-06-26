import BlogSidebar from "@/components/BlogSidebar";
import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import Path from "@/layouts/Path";
import Story from "../page";
const page = () => {
  const story = {
    title: "滴滴行程时间预估系统",
    products: [
      {"name":"probETA",
        "url":Path("demo/eta")
      },
      {
        "name":"iETA",
        "url":Path("demo/eta")
      }
    ],
    hilight:"该系统已在超过40个城市落地，帮助拼车能业务badcase降低超9%。有效节省模型训练时间和资源成本约94%。",
    sections:[
      {
        "title":"核心挑战",
        "content":"滴滴出行在抵达时间预测模型训练中遇到了一些重大挑战：\
                  按天顺序训练的模型面临灾难性遗忘问题，基于全量历史数据重新训练面临巨大计算开销，\
                  低质量交通数据对模型预测产生巨大噪音，基于标量ETA标签训练模型感知交通不确定性，\
                  建模随路径变化的ETA分布,\
                  以及如何低成本地将分布建模融入高度优化的ETA业务系统等。",
        "pics":[
          {
            "url":"/assets/images/resource/eta_res_1.png",
            "caption":"滴滴行程时间预测需求",
          },
        ]
      },
      {
        "title":"解决方案",
        "content":  "利用近期数据增量式更新模型，并渐进式蒸馏关键历史知识 → 提升预测精度、降低模型训练部署成本；\
                    利用对抗训练主动模拟和抵抗交通噪声 → 提高增量学习框架对低质量数据的鲁棒性；\
                    将回归任务转化为分类任务，提出自适应局部标签平滑方案 → 感知ETA类别顺序，捕捉ETA分布；\
                    构建基于路径的对数正态分布正则化方案 → 吸收大规模历史行程数据中的先验知识，捕捉随路径变化的ETA分布；\
                    联合优化回归、分类任务 → 构建与基础模型架构无关的训练框架，低成本融合概率预测任务。\
                    ",
        "pics":[
          {
            "url":"/assets/images/resource/eta_res_3.png",
            "caption":"iETA模型架构图",
          },
          {
            "url":"/assets/images/resource/eta_res_2.png",
            "caption":"ProbETA模型架构图",
          },
        ]
      },
      {
        "title":"方案成效",
        "html":(
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-quote-box">
              <h5>
                业务收益
              </h5>
              <p></p>
              <div className="blog-quote-conent">
                <div className="blog-details-list">
                  <ul>
                    <li>
                      <i className="bi bi-check2-circle" />iETA落地40城，AB实验MAE下降2.6s，MAPE下降1.2pp
                    </li>
                    <li>
                      <i className="bi bi-check2-circle" />PROBETA MAE下降1.3s，MAPE下降0.76pp
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="blog-quote-box">
              <h5>
                赋能合作
              </h5>
              <p></p>
              <div className="blog-quote-conent">
                <div className="blog-details-list">
                  <ul>
                    <li>
                      <i className="bi bi-check2-circle" />PROBETA 分布结果转换置信度
                    </li>
                    <li>
                      <i className="bi bi-check2-circle" />拼车分单增加置信度判断，撬动拼车badcase率
                    </li>
                    <li>
                      <i className="bi bi-check2-circle" />时间badcase率两口价品类相对下降2.8%，拼成乐相对下降9.16%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="blog-quote-box">
              <h5>
                降本增效
              </h5>
              <p></p>
              <div className="blog-quote-conent">
                <div className="blog-details-list">
                  <ul>
                    <li>
                      <i className="bi bi-check2-circle" />iETA增量训练方式，训练数据由110天→5天
                    </li>
                    <li>
                      <i className="bi bi-check2-circle" />训练时间和资源成本整体节约94%+
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="blog-quote-box">
              <h5>
                丰富产品
              </h5>
              <p></p>
              <div className="blog-quote-conent">
                <div className="blog-details-list">
                  <ul>
                    <li>
                      <i className="bi bi-check2-circle" />PROBETA 计算ETA区间应用于行程预测等场景
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
        "pics":[
          // {
          //   "url":"/assets/images/resource/eta_res_perf_1.png",
          //   "caption":"",
          // }
        ]
      }
    ]

  }
  return (
    Story(story)
  )
};
export default page;
