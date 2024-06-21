import BrandSlider from "@/components/BrandSlider";
import TeamList from "@/components/TeamList";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";
import About from "@/components/About";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout header={2}>
      <PageBanner pageName={"联系我们"} />
      {/*==================================================*/}
      {/* Start Thrown Pricing Area */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* End Thrown Pricing Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Map Area */}
      {/*==================================================*/}
      {/* <div className="map-area">
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
      </div> */}
      {/*==================================================*/}
      {/* End Thrown Map Area */}
      {/*==================================================*/}
      <div className="about-area inner-page">
        <div className="container">
          <Contact/>
          <About />
          <TeamList/>
        </div>
      </div>

    </ThrownLayout>
  );
};
export default page;
