import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CityPage from "./pages/CityPage";
import SubmitSpot from "./pages/SubmitSpot";
import Explore from "./pages/Explore";
import SpotPage from "./pages/SpotPage";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/city/:cityName" element={<CityPage />} />
        <Route path="/spot/:spotName" element={<SpotPage />} />
        <Route path="/submit" element={<SubmitSpot />} />
      </Routes>
    </HashRouter>
  );
}

export default App;