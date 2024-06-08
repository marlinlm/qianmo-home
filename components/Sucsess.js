import Counter from "./Counter";
const Sucsess = ({ dark }) => {
  return (
    <div className={`sucsess-area ${dark ? "dark" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className={`sucsees-single-box ${dark ? "dark" : ""}`}>
              <div className="sucsess-counter">
                <div className="sucsess-counter-icon">
                  <i className="bi bi-heart-fill" />
                </div>
                <div className={`sucsess-numbar ${dark ? "dark" : ""}`}>
                  <h4 className="counter">
                    <Counter end={7230} />
                  </h4>
                </div>
              </div>
              <div className={`sucsess-content ${dark ? "dark" : ""}`}>
                <h4>Trusted Clients</h4>
                <h6>There are of Lorem Ipsum</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={`sucsees-single-box ${dark ? "dark" : ""}`}>
              <div className="sucsess-counter">
                <div className="sucsess-counter-icon">
                  <i className="bi bi-star-fill" />
                </div>
                <div className={`sucsess-numbar ${dark ? "dark" : ""}`}>
                  <h4 className="counter">
                    <Counter end={98} />
                  </h4>
                  <span>%</span>
                </div>
              </div>
              <div className={`sucsess-content ${dark ? "dark" : ""}`}>
                <h4>Successful Cases</h4>
                <h6>There are of Lorem Ipsum</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sucsees-item-box">
              <div className="sucsess-item-counter">
                <div className="sucsess-item-numbar">
                  <h4 className="counter">15,890</h4>
                  <span>+</span>
                </div>
              </div>
              <div className="sucsess-item-two">
                <h4>Criminal Defense</h4>
                <h4>Case Served</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sucsess;
