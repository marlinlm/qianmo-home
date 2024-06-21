import Link from "next/link";

const OfferList = ({ short }) => {
  const boss_team = [
    {
      id: 1,
      job: "算法研究员",
      salary:"10000 - 20000",
      experience: "不限",
      degree:"硕士",
      resp: ["1. 设计、开发、测试和优化各种类型的大型语言模型和多模态模型，例如llama等，并探索其应用于公司业务的潜力。",
        "2. 熟悉pytorch和其他机器学习框架，如TensorFlow等，使用这些框架构建高效的模型训练和推理系统。",
        "3. 熟悉分布式推理框架，如Horovod、HuggingFace Transformers等，并使用这些框架构建高效的模型推理系统。",
        // "4. 熟悉megatron-deepspeed框架，使用该框架构建大型语言模型和多模态模型训练系统，并进行性能优化。探索和应用强化学习、扩散模型等新兴技术，提升模型效果和稳定性。",
        "4. 研究和使用各种transformer、图卷积网络、自注意力机制等技术，以提高模型的性能和效果。",
        "5. 有在开源社区代码贡献或者顶会论文发布者优先。"],
      req: [
        "1. 有机器学习、自然语言处理、计算机视觉或相关领域的硕士以上学位。",
        "2. 具有3年以上大规模语言模型和多模态模型开发和优化的经验。",
        "3. 熟悉pytorch和其他机器学习框架，如TensorFlow，pytorch等。",
        "4. 熟练掌握强化学习、扩散模型等技术，并在模型优化中有实践经验。",
        "5. 熟悉各种transformer、图卷积网络、自注意力机制等技术，具备实践经验。",
        "6. 具备团队合作和沟通能力，能够与其他工程师和数据科学家密切合作。",
      ]
    },
    {
      id: 2,
      job: "前端工程师",
      degree: "大专",
      experience: "1-3年",
      salary: "10000 - 15000",
      resp: [
        "1.根据产品的需求进行前端架构设计工作；",
        "2.承担前端核心模块的设计、实现工作；",
        "3.承担主要开发工作，对代码质量及进度负责；",
        "4.参与进行关键技术验证以及技术选型工作；",
        "5.和产品经理沟通并确定产品开发需求；",
        "6.与后台开发工程师配合，完成开发任务和上线。"
      ],
      req: [
        "1. 精通HTML、CSS、JavaScript语言，了解HTML5、CSS3的新标准，熟悉JQuery类库，熟练使用一到两种前端调试工具；",
        "2.至少熟练使用过Vue、React、AngularJS、NextJs其中一种JS框架；", 
        "3.深刻理解Web标准，对前端性能.可访问性.可维护性等相关知识有实际的了解和实践经验；",
        "4.工作积极主动，具有很强的学习能力.对新技术的追求精神.良好的团队合作精神和沟通能力。",
      ]
    },
    {
      id: 3,
      job: "前端工程师（实习生）",
      degree: "专科",
      experience: "不限",
      salary: "3000",
      resp: [
        "1.参与前端架构设计工作；",
        "2.参与承担前端核心模块的设计、实现工作；",
        "3.承担主要开发工作，对代码质量及进度负责；",
        "4.和产品经理沟通并确定产品开发需求；",
        "5.与后台开发工程师配合，完成开发任务和上线。"
      ],
      req: [
        "1.精通HTML、CSS、JavaScript语言，了解HTML5、CSS3的新标准，熟悉JQuery类库，熟练使用一到两种前端调试工具；",
        "2.至少熟练使用过Vue、React、AngularJS、NextJs其中一种JS框架；", 
        "3.深刻理解Web标准，对前端性能.可访问性.可维护性等相关知识有实际的了解和实践经验；",
        "4.工作积极主动，具有很强的学习能力.对新技术的追求精神.良好的团队合作精神和沟通能力。",
      ]
    },
    {
      id: 4,
      job: "Java工程师",
      degree: "本科",
      experience: "3-5年",
      salary: "10000 - 20000",
      resp: [
        "1.参与进行项目的需求讨论、系统架构设计及技术方案设计。",
        "2.根据项目任务安排完成系统编码工作。",
        "3.参与进行项目需求评审、项目工作量评估、代码评审等工作。"
      ],
      req: [
        "1.熟悉一种以上应用开发框架（主要指spring）的底层原理。",
        "2.熟悉一种分布式服务框架并有使用经验。熟悉多线程和响应式编程框架和范式。",
        "3.具有一定的数据库和jvm调优经验。",
        "4.具有常见开源框架（包括zookeeper、redis、kafka、logback等）的集成能力和经验。",
        "5.具有强大的学习能力，可以快速掌握新的技术框架并可对框架进行定制开发。在开发工作中有习惯去寻找和落实最佳实践。"
      ]
    },
    {
      id: 5,
      job: "Java工程师（实习生）",
      degree: "本科",
      experience: "不限",
      salary: "3000",
      resp: [
        "1.参与进行项目的需求讨论、系统架构设计及技术方案设计。",
        "2.根据项目任务安排完成系统编码工作。",
        "3.参与进行项目需求评审、项目工作量评估、代码评审等工作。"
      ],
      req: [
        "1.熟悉一种以上应用开发框架（主要指spring）的底层原理。",
        "2.了解一种分布式服务框架。",
        "3.具有常见开源框架（包括zookeeper、redis、kafka、logback等）的集成能力。",
        "4.具有强大的学习能力，可以快速掌握新的技术框架。在开发工作中有习惯去寻找和落实最佳实践。"
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
                <h4></h4>
              </div>
              <div className="section-main-title">
                <h2>招聘 - 广州南沙</h2>
                <p>如果有意向申请我们的岗位，请将个人简历以邮件的方式发送给我们。</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {boss_team.map((team) => (
            <div
              className={`col-lg-12 col-md-12 col-xl-12 ${
                short ? (team.id > 4 ? "d-none" : "") : ""
              }`}
              key={team.id}
            >
              <div className="offer-items-content">
                <h4>
                  {/* <Link legacyBehavior > */}
                    {team.job}
                  {/* </Link> */}
                </h4>
                <span>{team.degree + "学历 | " + team.experience + "经验 | " + team.salary + "元/月"}</span>
              </div>
              <div className="offer-items-thumb">
                {/* <img src={team.img} alt="" /> */}
              </div>
              <div className="offer-items-box inner-page">
                <div className="offer-details-list row">
                  <div className="col-lg-6">
                      <h5>岗位职责：</h5>
                      <p></p>
                    {/* <ul> */}
                      {team.resp.map((intro) => (
                        //  <li>
                        //    <i className=" " /> {intro}
                          <p>{intro}</p>
                        //</li>
                      ))}
                    {/* </ul> */}
                  </div>
                  <div className="col-lg-6">
                      <h5>任职要求：</h5>
                      <p></p>
                    {/* <ul> */}
                      {team.req.map((intro) => (
                        // <li>
                        //   <i className=" " /> {intro}
                        // </li>
                        <p>{intro}</p>
                      ))}
                    {/* </ul> */}
                  </div>

                </div>

                <div className="team-details-list">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};
export default OfferList;
