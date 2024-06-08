import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Contact"} />
      {/*==================================================*/}
      {/* Start Thrown Pricing Area */}
      {/*==================================================*/}
      <div className="contact-inner-page">
        <div className="container">
          <div className="row inner mb-150">
            <div className="col-lg-4 col-md-6">
              <div className="contact-inner-box">
                <div className="contact-inner-icon">
                  <i className="bi bi-telephone-x" />
                </div>
                <div className="contact-content">
                  <h4>Phone Number</h4>
                  <span>012-345-6789</span>
                  <span>539-737-1380</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-inner-box">
                <div className="contact-inner-icon">
                  <i className="bi bi-envelope-open" />
                </div>
                <div className="contact-content">
                  <h4>E-mail</h4>
                  <span>inquiry@example.com</span>
                  <span>info@example.com</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-inner-box two">
                <div className="contact-inner-icon">
                  <i className="bi bi-geo-alt" />
                </div>
                <div className="contact-content">
                  <h4>Address</h4>
                  <span>27 Division St, New York</span>
                  <span>NY 10002, USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="contact-box inner">
              <div className="contact-title">
                <h2>Have be any question?</h2>
                <h2>feel free to Contact</h2>
              </div>
              <form
                action="https://formspree.io/f/myyleorq"
                method="POST"
                id="it-form"
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box">
                      <input type="text" name="name" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box">
                      <input type="text" name="name" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box">
                      <input type="text" name="phone" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box">
                      <input type="text" name="website" placeholder="Website" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-box">
                      <textarea
                        name="massage"
                        id="massage"
                        cols={30}
                        rows={10}
                        placeholder="Comment"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-box-button inner">
                      <button type="Submit">Send Message</button>
                    </div>
                  </div>
                </div>
              </form>
              <div id="status" />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Pricing Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Map Area */}
      {/*==================================================*/}
      <div className="map-area">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.95373021!2d85.84621250756469!3d23.452185887261447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1635150422284!5m2!1sen!2sbd"
                width={1920}
                height={608}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Map Area */}
      {/*==================================================*/}
      <BrandSlider />
    </ThrownLayout>
  );
};
export default page;
