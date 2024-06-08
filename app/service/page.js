import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import ServiceList from "@/components/ServiceList";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Service Page"} />
      <ServiceList />
      <BrandSlider />
    </ThrownLayout>
  );
};
export default page;
