import Faq from "@/components/Faq";
import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
import About from "@/components/About"
import TeamList from "@/components/TeamList";
import Contact from "@/components/Contact";
const page = () => {
  return (
    <ThrownLayout header={2}>
      <PageBanner pageName={"关于阡陌"} />
      {/*==================================================*/}
      {/* Start Thrown About Area */}
      {/*==================================================*/}
      <div className="about-area inner-page">
        <div className="container">
          <Contact/>
          <About />
          <TeamList/>
        </div>
      </div>

      {/* <BrandSlider /> */}
      {/*==================================================*/}
      {/* End Thrown Team Area */}
      {/*==================================================*/}
    </ThrownLayout>
  );
};
export default page;
