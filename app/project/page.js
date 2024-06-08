import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import Work from "@/components/Work";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Projects Page"} />
      <Work />
      <BrandSlider />
    </ThrownLayout>
  );
};
export default page;
