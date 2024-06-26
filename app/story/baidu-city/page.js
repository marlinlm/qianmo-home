import BlogSidebar from "@/components/BlogSidebar";
import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import Path from "@/layouts/Path";
import Story from "../page";
const page = () => {
  const story = {
    title: "雄安城市大数据报告",
    products: [

    ],
    hilight:"通过百度大数据分析雄安城市发展和变化，与雄安政府联合发布大数据报告被超过50个主流媒体报道，包括新华社、人民日报、CCTV、河北卫视等。",
    sections:[
      {
        "title":"雄安新区生态环境改善明显",
        "content":"雄安新区整体水文显著改善：白洋淀的水域面积增加，起步区附近的烧车淀水域面积增加。\
                  雄安新区绿色植被覆盖显著提升：大清河片区绿色植被面积增加，容城县绿色植被覆盖面积增加。\
                  雄安新区环保工作有所进展：空气污染关注度以2018年检索量为基数100%，空气污染指数变化基于公开空气质量数据的统计结果。\
                  ",
        "pics":[
          {
            "url":"/assets/images/resource/xiongan-env.png",
            "caption":"雄安新区生态环境改善指标示意图",
          },
        ]
      },
      {
        "title":"雄安新区进入实质建设阶段",
        "content":  "雄安新区拆迁工作取得重大进展：启动区土地平整的面积8平方公里，截至10月底征迁工作完成27个。\
                    雄安部分组团片区建设取得进展：雄安站周边土地拆迁面积2.49平方公里，预计2020年底雄安站投入使用。\
                    雄安新区POI数量显著增长。雄安新区路网密度稳步增加。雄安新区功能区变化初显。\
                    ",
        "pics":[
          {
            "url":"/assets/images/resource/xiongan-construction.png",
            "caption":"雄安建设指标示意图",
          }
        ]
      },
      {
        "title":"雄安新区人口变化分析",
        "content":  "雄安新区人口总量稳定增长。雄安新区人口活跃度提升。雄安新区年轻人口回流明显。雄安新区人口教育水平提升。\
                    雄安新区民众兴趣关注变化：其中常驻人口对教育培训、医疗健康、商务服务、影音娱乐、家电数码、家居及休闲等方面的关注持续增加。\
                    而流动人口对教育培训、金融财经、书籍阅读、影音娱乐、家电数码及时尚等方面的关注持续增加。\
                    雄安新区人群行业分布趋于新兴产业：低附加值、高能耗产业减少；新兴行业，第三产业增加。\
                    ",
        "pics":[
          {
            "url":"/assets/images/resource/xiongan-population.png",
            "caption":"雄安建设指标示意图",
          }
        ]
      },
      {
        "title":"雄安新区网络形象及热门关注度分析",
        "content":  "雄安新区城市吸引力指数提升显著，主要表现为：雄安新区城市吸引力指数提升，外来人口生活品质指数提升，就业吸引力指数提升。\
                    全国民众对雄安的关注热点更加务实：“大学”在2019年成为全国民众的新关注点，2018年全国民众对雄安的共同关注为：“规划”、“房价”、“建设”、“招聘”。\
                    从热搜实体名词看雄安民众关注点：全国民众雄安新区本地人共同关注TOP 3分别为：人物、时间、机构组织；雄安人民对精神文化生活的特别关注为“文学作品”及“影视作品”。\
                    我们从检索词看出民众对雄安发展拥有极大信心：无论本地还是全国，对雄安相关检索的情感分析结果表明，正向相关搜索占比大于90%。\
                    我们还对比分析了全国省市对雄安的关注度：其中2018年最关注雄安的地区为河北、北京、天津，2019年为河北、北京、山东。\
                    ",
        "pics":[
          {
            "url":"/assets/images/resource/xiongan-querykey.png",
            "caption":"雄安新区网络形象及热门关注度示意图",
          }
        ]
      },
    ]

  }
  return (
    Story(story)
  )
};
export default page;
