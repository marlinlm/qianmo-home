const BlogSidebar = ({products}) => {
  return (
    <div className="sidebar col-lg-4 col-md-8" id="sidebar">
      {/* End widget search box */}
      {/* <div className="widget-categories-box">
        <div className="widget-catagories-title">
          <h4> 相关产品 </h4>
        </div>
        <div className="sidber-widget-recent-post mb-40">
          <div className="recent-widget-thumb">
            <img src="assets/images/blog/recen1.png" alt="" />
          </div>
          <div className="recent-widget-content">
            <div className="recent-widget-meta">
              <span>
                <i className="bi bi-calendar-event" /> June 13
              </span>
              <span>
                <i className="bi bi-chat-left" /> (05)
              </span>
            </div>
            <div className="recent-widget-title">
              <h4>
                <a href="#">This Place Really Place For Awesome Moment</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="sidber-widget-recent-post mb-40">
          <div className="recent-widget-thumb">
            <img src="assets/images/blog/recen2.png" alt="" />
          </div>
          <div className="recent-widget-content">
            <div className="recent-widget-meta">
              <span>
                <i className="bi bi-calendar-event" /> June 13
              </span>
              <span>
                <i className="bi bi-chat-left" /> (05)
              </span>
            </div>
            <div className="recent-widget-title">
              <h4>
                <a href="#">This Place Really Place For Awesome Moment</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="sidber-widget-recent-post">
          <div className="recent-widget-thumb">
            <img src="assets/images/blog/recen3.png" alt="" />
          </div>
          <div className="recent-widget-content">
            <div className="recent-widget-meta">
              <span>
                <i className="bi bi-calendar-event" /> June 13
              </span>
              <span>
                <i className="bi bi-chat-left" /> (05)
              </span>
            </div>
            <div className="recent-widget-title">
              <h4>
                <a href="#">This Place Really Place For Awesome Moment</a>
              </h4>
            </div>
          </div>
        </div>
      </div> */}
      <div className="widget-categories-box">
        {/* categories title */}
        <div className="widget-catagories-title">
          <h4> 相关产品 </h4>
        </div>
        <div className="widget-tags">
          {
            products.map((product) => 
              (
                <a href={product.url}>{product.name}</a>
              )
            )
          }
        </div>
      </div>
    </div>
  );
};
export default BlogSidebar;
