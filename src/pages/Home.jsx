import HomeSlider from "../components/HomeSlider";
import ChargingSolutions from "../components/chargingSolution";
import RecentProjects from "../components/recentProjects";
import EnergyProgress from "../components/EnergyProgress";
import WhyChooseUs from "../components/WhyChooseUs";
import AppCTA from "../components/AppCTA";
import Review from "../components/Review";
import NeedHelp from "../components/NeedHelp";
import Posts from "../components/Posts";
import HomeSlider1 from "../components/HomeSlide1";

export default function Home() {
  return (
    <>
      
      <HomeSlider1 />
      <ChargingSolutions />
      <HomeSlider />
      
      <RecentProjects />
      <EnergyProgress />
      <WhyChooseUs />
      <AppCTA />
      <Review />
      <NeedHelp />
      <Posts />
    </>
  );
}
