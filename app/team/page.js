import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import TeamList from "@/components/TeamList";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Team Page"} />
      <TeamList />
      <BrandSlider />
    </ThrownLayout>
  );
};
export default page;
