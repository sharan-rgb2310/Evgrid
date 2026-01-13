import ChargingSolutions from "./components/chargingSolution";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import RecentProjects from "./components/recentProjects";
import EnergyProgress from "./components/EnergyProgress";
import WhyChooseUs from "./components/WhyChooseUs";
import AppCTA from "./components/AppCTA";
import HomeSlider from "./components/HomeSlider";
import Review from "./components/Review";
import NeedHelp from "./components/NeedHelp";
import Footer from "./components/Footer";
import Posts from "./components/Posts";

export default function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <Home />
      <ChargingSolutions/>
      <HomeSlider />
      <RecentProjects />
      <EnergyProgress />
      <WhyChooseUs />
      <AppCTA />
      <Review />
      <NeedHelp/>
      <Posts/>
      <Footer/>

    </div>
  );
}
