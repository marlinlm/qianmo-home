import BlogSidebar from "@/components/BlogSidebar";
import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import Path from "@/layouts/Path";
import Story from "../page";
const page = () => {
  const story = {
    title: "百度地图智行出行、公交出行引擎",
    products: [
      {"name":"Trans2Vec",
        "url":Path("demo/travel-recommendation")
      },
      {
        "name":"Hydra",
        "url":Path("demo/travel-recommendation")
      }
    ],
    hilight:"该系统覆盖全国逾 330 个地级市，累计为超过 2 亿用户提供超过 50 亿次智能服务，可为用户节省多达 20% 出行时间和 50% 出行成本。",
    sections:[
      {
        "title":"背景",
        "content":"市民出行高峰期驾车耗时是平常的1.9倍。\
        每天>1000万用户使用地图以同样的起终点查询多种交通方式。\
        14%用车订单和39%单车订单的起终点为公交/地铁车站。\
        地图15%的出行检索为跨城需求。\
        59%的公交最优方案换乘次数>=2或者步行>2公里。\
        这说明，随着用户活动范围变大、出行环境越发复杂，出行交通工具选择变多，用户横向比较决策的成本越来越高，需求日益突出。\
        我们的团队与百度地图团队合作打造了基于个性化和情境感知的多模态出行规划需求，更懂用户的多模态出行引擎。\
        "
        ,
        "pics":[
        ]
      },
      {
        "title":"Trans2vec：基于图嵌入的多模态出行推荐",
        "content":"首次在出行问题上引入了深度图嵌入技术，类比词嵌入思想，解决了跨交通工具的出行方案比较问题。\
        提出基于锚点的表征学习优化算法，捕捉人-交通工具-起终点之间的高阶相似性，学习用户、交通工具和起终点对（OD）的低维向量表示。\
        基于个体活动的规律性和局部性，构建人-交通工具和起终点对-交通工具的正则化相似矩阵，优化用户和区域出行偏好表征。\
        相关技术在百度 2018 世界大会发布，受邀在 AAAI 2019 和 澳门大学 进行口头报告2次，传播了百度技术影响力。在百度“听大咖讲论文”系列讲座中担任主讲嘉宾1次。\
        ",
        "pics":[
          {
            "url":"/assets/images/resource/travel_rec_ref_1.png",
            "caption":"多模态异构交通图",
          },
          {
            "url":"/assets/images/resource/travel_rec_ref_5.png",
            "caption":"trans2vec模型架构图",
          },
        ]
      },
      {
        "title":"Hydra：个性化和情境感知的多模态出行引擎",
        "content":  "引入POI、气候等多源异构城市大数据，融合一阶线性特征和基于Trans2vec的高阶特征，构建基于 XGB 的多分类模型，精确建模不同情境下的出行偏好。自2018年8月来算法累计迭代5次。\
                    高可扩展框架，T+1 自动更新，7月底日均请求量 超过 2400万，经受住地图五一峰值请求压力，可用性达 99.99%。\
                    支持百度地图智行和公交服务。\
                    ",
        "pics":[
          {
            "url":"/assets/images/resource/travel_rec_ref_2.png",
            "caption":"Hydra系统架构图",
          }
        ]
      },
      {
        "title":"方案成效",
        "html":(
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-quote-box">
              <div className="blog-quote-conent">
                <div className="blog-details-list">
                  <ul>
                    <li>
                      <i className="bi bi-check2-circle" />相关技术作为长文被 KDD 2019 收录为 Oral paper (接收率 45/700≈6.4%)，并受邀做口头报告
                    </li>
                    <li>
                      <i className="bi bi-check2-circle" />
                      受邀在World AI Summit Americas 做大会报告
                    </li>
                    <li>
                      <i className="bi bi-check2-circle" />
                      申请专利共计5项
                    </li>
                    <li>
                      <i className="bi bi-check2-circle" />
                      推荐点击率 ↑142.6%
                    </li>
                    <li>
                      <i className="bi bi-check2-circle" />
                      推荐覆盖率 ↑63%
                    </li>
                    <li>
                      <i className="bi bi-check2-circle" />
                      DAU ↑382%
                    </li>
                    <li>
                      <i className="bi bi-check2-circle" />
                      周留存： 11.5%→17.6%，提升 53%。
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
