import Link from "next/link";

const TeamList = ({ short }) => {
  const boss_team = [
    {
      id: 1,
      name: "刘浩",
      designation: "创始人",
      title: "博士",
      img: "assets/images/team/team_liuhao.png",
      page: "https://raymondhliu.github.io/",
      intro: [
        "香港科技大学（广州）人工智能学域助理教授",
        "香港科技大学计算机科学与工程学院联属助理教授",
        "前百度研究院资深研究员",
        "已申请中美专利50余项，计算机知名期刊和会议发表研究论文60余篇",
        "多项研究已部署在现实世界的产品中，影响了中国数亿居民的日常生活",
      ]
    },
    {
      id: 2,
      name: "熊辉",
      page: "https://www.hkust-gz.edu.cn/zh/people/hui-xiong/",
      designation: "联合创始人",
      title: "教授",
      img: "assets/images/team/team_xionghui.png",
      intro: [
        "香港科技大学讲座教授，AAAS / IEEE Fellow",
        "国家杰出青年科学基金（海外）",
        "教育部长江讲座教授",
        "香港科技大学（广州）协理副校长",
        "前美国罗格斯大学杰出教授",
        "前百度研究院副院长",
      ]
    }
  ];

  const worker_team = [
    {
      id: 1,
      name: "韩金栋",
      // designation: "创始人",
      // title: "博士",
      img: "assets/images/team/team_jindong.png",
      intro: [
        "北京邮电大学硕士，香港科技大学博士生。",
        "2018 KDD Cup 以队长身份取得第一名。",
        "香港科技大学2024 AIS最佳学术奖得主。",
        "已在计算机知名期刊和会议发表论文20余篇。",
      ]
    },
    {
      id: 2,
      name: "许钊",
      img: "assets/images/team/team_xuzhao.png",
      intro: [
        "清华大学电子工程系毕业，香港科技大学（广州）硕士生。",
        "多段高校科研课题组及互联网公司人工智能算法实习经历。",
        "专攻大语言模型及其在智慧城市中的应用。",
      ]
    },
    {
      id: 3,
      name: "江文钊",
      img: "assets/images/team/team_wenzhao.png",
      intro: [
        "中国科学技术大学少年班优秀毕业生毕业，香港科技大学（广州）博士生。",
        "专攻城市智能交通流量及拥堵预测。",
        "其发表在数据挖掘顶级会议SIGKDD上的论文已在滴滴出行部署并造成可观效益。",
      ]
    },
    {
      id: 4,
      name: "赖思奇",
      img: "assets/images/team/team_siqi.png",
      intro: [
        "武汉大学计算机科学系毕业，香港科技大学（广州）博士生。",
        "专攻大语言模型及其在城市智能交通上的应用。",
        "其发表的《LLMLight：基于大语言模型的交通信号控制智能体》被包括“量子位”在内的超过20家知名人工智能媒体报道。",
      ]
    }
  ];

  return (
    <div className="team-area style-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <div className="section-sub-title">
                <h4>深耕城市计算数十年</h4>
              </div>
              <div className="section-main-title">
                <h2>创始人</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {boss_team.map((team) => (
            <div
              className={`col-lg-6 col-md-6 col-xl-6 ${
                short ? (team.id > 4 ? "d-none" : "") : ""
              }`}
              key={team.id}
            >
              <div className="team-items-thumb">
                <img src={team.img} alt="" />
              </div>
              <div className="team-items-box inner-page">
                <div className="team-itmes-content">
                  <h4>
                    <Link legacyBehavior href={team.page}>
                      {team.name + " " + team.title}
                    </Link>
                  </h4>
                  <span>{team.designation}</span>
                </div>
                <div className="team-details-list">
                  <ul>
                    {team.intro.map((intro) => (
                      <li>
                        <i className="bi bi-check2-circle" /> {intro}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <div className="section-sub-title">
                <h4>大模型及城市计算专精</h4>
              </div>
              <div className="section-main-title">
                <h2>科研团队</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {worker_team.map((team) => (
            <div
              className={`col-lg-3 col-md-3 col-xl-3 ${
                short ? (team.id > 4 ? "d-none" : "") : ""
              }`}
              key={team.id}
            >
              <div className="team-items-thumb">
                <img src={team.img} alt="" />
              </div>
              <div className="team-items-box inner-page">
                <div className="team-itmes-content">
                  <h4>
                    {/* <Link legacyBehavior href="team-details"> */}
                      {team.name}
                    {/* </Link> */}
                  </h4>
                  <span>{team.designation}</span>
                </div>
                <div className="team-worker-details-list">
                  <ul>
                    {team.intro.map((intro) => (
                      <li>
                       {intro}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeamList;
