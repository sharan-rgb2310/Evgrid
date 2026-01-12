import ChargingSolutions from "./components/chargingSolution";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <Home />
      <ChargingSolutions/>
    </div>
  );
}
