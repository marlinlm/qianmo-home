import BrandSlider from "@/components/BrandSlider";
import PageBanner from "@/components/PageBanner";
import TeamList from "@/components/TeamList";
import Contact from "@/components/Contact";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout header={2}>
      <PageBanner pageName={"团队"} />
      <TeamList />
      <Contact />
    </ThrownLayout>
  );
};
export default page;
