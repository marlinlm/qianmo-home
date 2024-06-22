"use client";
import BrandSlider from "@/components/BrandSlider";
import Counter from "@/components/Counter";
import ThrownLayout from "@/layouts/ThrownLayout";
import { sliderProps } from "@/utility/sliderProps";
import TeamList from "@/components/TeamList";
import Link from "next/link";
import OfferList from "@/components/OfferList";
import { Swiper, SwiperSlide } from "swiper/react";
const Index2 = () => {
  return (
    <ThrownLayout header={2}>
      {/*==================================================*/}
      {/* Start Thrown Slider Area */}
      {/*==================================================*/}
      <div className="slider-list">
        <Swiper {...sliderProps.hero2}>
          <SwiperSlide>
            <div className="slider-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="slider-content style-two">
                      <div className="slider-sub-title style-two">
                        <h4></h4>
                        <h1></h1>
                      </div>
                      <div className="slider-main-title">
                        <h1>阡陌智能，交通未来</h1>
                      </div>
                      <div className="thrown-btn slider2">
                        <Link legacyBehavior href="service">
                          <a className="header-button">
                            详情
                            <span />
                          </a>
                        </Link>
                      </div>
                    </div>
                    {/* <div className="slider-shape3 dance3">
                      <img src="assets/images/slider/shape3.png" alt="image" />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*==================================================*/}
      {/* End Thrown Slider Area */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* Start Thrown Service Style Two Area */}
      {/*==================================================*/}
      <div className="service-area style-two" id="service">

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>旗下智能体集合</h4>
                </div>
                <div className="section-main-title">
                  <h2>产品</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              {/* start service items box */}
              <div className="service-items-box-two">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style3.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title">
                  <h4>
                    <Link legacyBehavior href="demo/llmlight">
                      LLMLight
                    </Link>
                  </h4>
                  <p></p>
                  <p>交通信控智能体</p>
                </div>
                <div className="service-items-content-two">
                  <p>
                    大模型区域交通信号控制智能体，用于优化路网交通流量。
                  </p>
                </div>
                <div className="service-items-icon-two">
                  <i className="bi bi-arrow-right" />
                </div>
                <div className="service-items-thumb-two">
                  {/* <img src="assets/images/service/service3.png" alt="image" /> */}
                </div>
              </div>
              {/* End service items box */}
            </div>

            <div className="col-md-6 col-xl-3">
              {/* start service items box */}
              <div className="service-items-box-two">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style4.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title">
                  <h4>
                    <Link legacyBehavior href="demo/eta">
                    iETA
                    </Link>
                  </h4>
                  <p></p>
                  <p>出行时间预测智能体</p>
                </div>
                <div className="service-items-content-two">
                  <p>
                  鲁棒可扩展的增量ETA预测智能体。
                  </p>
                </div>
                <div className="service-items-icon-two">
                  <i className="bi bi-arrow-right" />
                </div>
                <div className="service-items-thumb-two">
                  {/* <img src="assets/images/service/service4.png" alt="image" /> */}
                </div>
              </div>
              {/* End service items box */}
            </div>

            <div className="col-md-6 col-xl-3">
              {/* start service items box */}
              <div className="service-items-box-two">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style4.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title">
                  <h4>
                    <Link legacyBehavior href="demo/eta">
                    ProbETA
                    </Link>
                  </h4>
                  
                  <p></p>
                  <p>出行时间预测智能体</p>
                </div>
                <div className="service-items-content-two">
                  <p>
                  不确定性感知的ETA概率预测智能体。
                  </p>
                </div>
                <div className="service-items-icon-two">
                  <i className="bi bi-arrow-right" />
                </div>
                <div className="service-items-thumb-two">
                  {/* <img src="assets/images/service/service4.png" alt="image" /> */}
                </div>
              </div>
              {/* End service items box */}
            </div>


            <div className="col-md-6 col-xl-3">
              {/* start service items box */}
              <div className="service-items-box-two">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style4.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title">
                  <h4>
                    <Link legacyBehavior href="demo/congestion">
                    CP-MoE
                    </Link>
                  </h4>
                  <p></p>
                  <p>拥堵预测智能体</p>
                </div>
                <div className="service-items-content-two">
                  <p>
                  城市拥堵预测的可解释级联混合专家模型
                  </p>
                </div>
                <div className="service-items-icon-two">
                  <i className="bi bi-arrow-right" />
                </div>
                <div className="service-items-thumb-two">
                  {/* <img src="assets/images/service/service4.png" alt="image" /> */}
                </div>
              </div>
              {/* End service items box */}
            </div>

            <div className="col-md-6 col-xl-3">
              {/* start service items box */}
              <div className="service-items-box-two">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style4.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title">
                  <h4>
                    <Link legacyBehavior href="demo/travel-recommendation">
                    Trans2vec
                    </Link>
                  </h4>
                  <p></p>
                  <p>出行推荐智能体</p>
                </div>
                <div className="service-items-content-two">
                  <p>
                  基于图嵌入的多模态出行推荐模型。{"    "}
                  </p>
                </div>
                <div className="service-items-icon-two">
                  <i className="bi bi-arrow-right" />
                </div>
                <div className="service-items-thumb-two">
                  {/* <img src="assets/images/service/service4.png" alt="image" /> */}
                </div>
              </div>
              {/* End service items box */}
            </div>

            <div className="col-md-6 col-xl-3">
              {/* start service items box */}
              <div className="service-items-box-two">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style4.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title">
                  <h4>
                    <Link legacyBehavior href="demo/travel-recommendation">
                    Hydra
                    </Link>
                  </h4>
                  <p></p>
                  <p>出行推荐智能体</p>
                </div>
                <div className="service-items-content-two">
                  <p>
                  个性化和情境感知的多模态出行引擎。
                  </p>
                </div>
                <div className="service-items-icon-two">
                  <i className="bi bi-arrow-right" />
                </div>
                <div className="service-items-thumb-two">
                  {/* <img src="assets/images/service/service4.png" alt="image" /> */}
                </div>
              </div>
              {/* End service items box */}
            </div>

          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>大模型+交通，下一代智慧交通解决方案</h4>
                </div>
                <div className="section-main-title">
                  <h2>
                    <a href="service">
                      解决方案
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              {/* start service items box */}
              <div className="service-items-box-two">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style3.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title">
                  <h4>
                    <Link legacyBehavior href="service#solution1">
                      智慧交管
                    </Link>
                  </h4>
                </div>
                <div className="service-items-content-two">
                  <p>
                    主要面向交管部门的人工智能解决方案。
                  </p>
                </div>
                <div className="service-items-thumb-two">
                  <img src="assets/images/service/service3.png" alt="image" />
                  <div className="service-items-icon-two">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
              {/* End service items box */}
            </div>
            <div className="col-md-6 col-xl-3">
              {/* start service items box */}
              <div className="service-items-box-two">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style4.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title">
                  <h4>
                    <Link legacyBehavior href="service#solution2">
                      智慧出行
                    </Link>
                  </h4>
                </div>
                <div className="service-items-content-two">
                  <p>
                    主要面向私营出行平台的人工智能解决方案。
                  </p>
                </div>
                <div className="service-items-thumb-two">
                  <img src="assets/images/service/service4.png" alt="image" />
                  <div className="service-items-icon-two">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
              {/* End service items box */}
            </div>
            
            {/* <div className="col-md-6 col-xl-4">
              <div className="service-items-box-two">
                <div className="service-icon-thumb">
                  <img
                    src="assets/images/service/service-style2.png"
                    alt="image"
                  />
                </div>
                <div className="service-items-title">
                  <h4>
                    <Link legacyBehavior href="big-data">
                    城市大数据分析
                    </Link>
                  </h4>
                </div>
                <div className="service-items-content-two">
                  <p>
                    基于城市认知技术的城市分析平台，可以为政府及商业部门提供具有深度洞察力的研究报告。
                  </p>
                </div>
                <div className="service-items-thumb-two">
                  <img src="assets/images/service/service2.png" alt="image" />
                  <div className="service-items-icon-two">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
            </div> */}
            
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Service Style Two Area */}
      {/*==================================================*/}



      {/*==================================================*/}
      {/* Start Thrown Choose Area */}
      {/*==================================================*/}
      <div className="choose-area" id="academic">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="choose-content">
                <div className="section-title">
                  <div className="section-sub-title choose">
                    <h4></h4>
                  </div>
                  <div className="section-main-title choose">
                    <h2>学术</h2>
                  </div>
                </div>
                <div className="choose-discription">
                  <p>
                    了解我们的最新科研成果和研究方向。
                  </p>
                </div>

                {/* <div className="about-counter">
                  <div className="about-counter-thumb">
                    <img
                      src="assets/images/about/about_paper.png"
                      alt="image"
                    />
                  </div>
                  <div className="about-counter-content">
                    <h5 className="counter">
                      <Counter end={50} decimals={0} />
                    </h5>
                    <p>发表论文</p>
                  </div>
                  <div className="about-counter-thumb">
                    <img
                      src="assets/images/about/about_pattern.png"
                      alt="image"
                    />
                  </div>
                  <div className="about-counter-content">
                    <h5 className="counter">
                      <Counter end={70} decimals={0} />
                    </h5>
                    <p>获得专利</p>
                  </div>
                </div> */}
                <div className="choose-single-box row">

                  <div className="choose-icon col-lg-4">
                    <div className="about-counter-thumb">
                      <img
                        src="assets/images/about/about_paper.png"
                        alt="image"
                      />
                    </div>

                    {/* <img src="assets/images/resource/choose1.png" alt="image" /> */}
                  </div>
                  <div className="choose-content col-lg-8">
                    <a href="https://raymondhliu.github.io/publications/">
                      <h4>发表论文</h4>
                    </a>
                    <div className="about-counter-content">
                      <h5 className="counter">
                        <Counter end={50} decimals={0} />
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="choose-single-box row">

                  <div className="choose-icon col-lg-8">
                    <div className="about-counter-thumb">
                      <img
                        src="assets/images/about/about_pattern.png"
                        alt="image"
                      />
                    </div>

                    {/* <img src="assets/images/resource/choose1.png" alt="image" /> */}
                  </div>
                  <div className="choose-content col-lg-4">

                    <h4>获得专利数</h4>
                    <div className="about-counter-content">
                      <h5 className="counter">
                        <Counter end={60} decimals={0} />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
            
              {/* <div className="single-video style-two">
                <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="bi bi-play" />
                  </a>
                </div>
              </div> */}
              {/* <div className="choose-contact">
                <div className="row">
                  <div className="col-lg-4 col-md-12">
                    <div className="subscribe-title">
                      <h4>Subscribe Our Newslatter</h4>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12">
                    <form
                      action="https://formspree.io/f/myyleorq"
                      method="post"
                      id="#"
                    >
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <div className="form-box">
                            <input
                              type="text"
                              name="email"
                              placeholder="Email Address"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <div className="form-box-button choose">
                            <button type="Submit">
                              Subscribe <i className="bi bi-arrow-right" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="thrown-btn contact" >
                  <Link legacyBehavior href="demo">
                    <a className="header-button">
                      研究成果演示
                      <span style={{ top: "197.658px", left: "152.499px" }} />
                    </a>
                  </Link>
                </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Choose Area */}
      {/*==================================================*/}


      {/*==================================================*/}
      {/* Start Thrown About Area */}
      {/*==================================================*/}
      <div className="about-area style-two" id="about">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-6 col-md-12">
              <div className="about-thumb">
                <img src="assets/images/about/hkust_gz.jpg" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-main-title style-two">
                <h2>深耕行业，科研立身</h2>
              </div>
              <div className="about-content">
                <div className="about-discribtion style-two">
                  <p>
                      我们是一个以教授、博士生为主干的创业团队，依托香港科技大学（广州）深厚的科研底蕴，我们在交通领域积累了大量顶尖科研成果，并应用到行业头部出行平台，每天影响数千万人的日常出行。
                  </p>
                </div>
              </div>
            </div> */}
            <TeamList/>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown About Area */}
      {/*==================================================*/}



      {/*==================================================*/}
      {/* Start Thrown Contact Us Area */}
      {/*==================================================*/}
      <div className="contact-area" id="contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="section-title contact">
                <div className="section-main-title contact">
                  <h2>联系我们</h2>
                  <h2>一起改变世界</h2>
                </div>
                <div className="contact-discription">
                  <p>你知道大模型除了写诗画画之外还能做什么吗？我们希望大模型可以真正服务人类，而不是代替人类。现在跟我们联系，了解怎样让大模型做大模型该做的事，把有趣的事留给它们的创造者。</p>
                </div>
                {/* <div className="thrown-btn contact">
                  <Link legacyBehavior href="contact-us">
                    <a className="header-button">
                      联系我们{" "}
                      <span style={{ top: "197.658px", left: "152.499px" }} />
                    </a>
                  </Link>
                </div> */}
                
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="contact-single-box">
                    <div className="contact-icon">
                      <i className="bi bi-telephone-plus" />
                    </div>
                    <div className="contact-content">
                      {/* <h3>电话</h3> */}
                      <h3>17610309866</h3>
                      <h3>（刘老师）</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="contact-single-box">
                    <div className="contact-icon">
                      <i className="bi bi-envelope" />
                    </div>
                    <div className="contact-content">
                      {/* <h3>邮箱</h3> */}
                      <h3>liuh@ust.hk</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="contact-thumb">
                <img
                  src="assets/images/resource/contact-thumb.png"
                  alt="image"
                />
                <div className="contact-shape bounce-animate">
                  <img
                    src="assets/images/resource/contact-shape.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Contact Us Area */}
      {/*==================================================*/}


      <div className="offer-area inner-page" id="offer">
        <div className="container">
          <OfferList />
        </div>
      </div>

      {/*==================================================*/}
      {/* Start Thrown Brand Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End Thrown Brand Area */}
      {/*==================================================*/}
 
    </ThrownLayout>
  );
};
export default Index2;
