import ChargingSolutions from "./components/chargingSolution";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import RecentProjects from "./components/recentProjects";
import EnergyProgress from "./components/EnergyProgress";
import WhyChooseUs from "./components/WhyChooseUs";
import AppCTA from "./components/AppCTA";

export default function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <Home />
      <RecentProjects />
      <EnergyProgress />
      <WhyChooseUs />
      <AppCTA />
      <ChargingSolutions/>
    </div>
  );
}
