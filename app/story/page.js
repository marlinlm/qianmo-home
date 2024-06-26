import BlogSidebar from "@/components/BlogSidebar";
import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import Contact from "@/components/Contact";

const Story = (story) => {
  return (
    <ThrownLayout header={2}>
      <PageBanner pageName={story.title} />
      <div className="blog-details-area">
        <div className="container">
          <div className="row">

            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-quote-box">
                    <div className="blog-quote-conent">
                      <i className="fas fa-quote-left" />
                      <p></p>
                      <h5>
                        {story.hilight}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-40">
                  {/* start blog details single box */}
                    {
                      story.sections.map((section)=>(
                        <div className="blog-details-box">
                          <div className="blog-details-thumb">
                            {/* <img src="assets/images/blog/blog-details1.png" alt="" /> */}
                          </div>
                          <div className="blog-detaile-title">
                            <h4>
                              {section.title}
                            </h4>
                          </div>
                          
                          <div className="blog-details-discription">
                            <p>
                              {section.content}
                            </p>

                            {section.html}

                            {section.pics.map((pic)=>(
                              <div className="col-lg-12 col-md-12">
                                <div className="blog-details-thumb">
                                  <img src={pic.url} alt="" />
                                  <h5>{pic.caption}</h5>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))
                    }
                    
                  {/* End blog details single box */}
                </div>
                
                
              </div>
              <div className="contact story">
                <h2>联系我们</h2>
                <Contact/>
              </div>
            </div>
            <BlogSidebar products={story.products}/>
          </div>
        </div>
      </div>
    </ThrownLayout>
  );
};
export default Story;
