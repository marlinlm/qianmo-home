const About = () => {
    return (
        <div className="about-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-thumb">
                <img src="assets/images/about/hkust_gz.jpg" alt="image" />
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
                        <Counter end={70} decimals={0}/>
                      </h5>
                      <p>获得专利</p>
                    </div>
                  </div> */}
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
            </div>
          </div>
        </div>
      </div>
    );
};
export default About;