const BlogSidebar = () => {
  return (
    <div className="col-lg-4 col-md-8">
      {/* start widget search box */}
      <div className="widget_search box">
        <form action="#" method="get">
          <input
            type="text"
            name="s"
            defaultValue=""
            placeholder="Search Here"
            title="Search for:"
          />
          <button type="submit" className="icons">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      {/* End widget search box */}
      <div className="widget-categories-box">
        {/* categories title */}
        <div className="widget-catagories-title">
          <h4> Popular Post </h4>
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
      </div>
      <div className="widget-categories-box">
        {/* categories title */}
        <div className="widget-catagories-title">
          <h4> Popular Tags </h4>
        </div>
        <div className="widget-tags">
          <a href="#">Services</a>
          <a href="#">Business</a>
          <a href="#">Grooming</a>
          <a href="#">Breeding</a>
          <a href="#">Growth</a>
          <a href="#">Stable</a>
          <a href="#">Education</a>
          <a href="#">America</a>
          <a href="#">Maintenance</a>
        </div>
      </div>
    </div>
  );
};
export default BlogSidebar;
