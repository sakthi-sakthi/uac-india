import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import MainLayout from "./layout";
import ImageGallery from "./Pages/Gallery/ImageGallery";
import { GccTeam } from "./Pages/Team/Gccteam";
import { NccTeam } from "./Pages/Team/NccTeam";
import { LccTeam } from "./Pages/Team/Lccteam";
import Motto from "./Pages/AboutUs/Motto";
import Mission from "./Pages/AboutUs/Mission";
import Objective from "./Pages/AboutUs/Objective";
import History from "./Pages/AboutUs/History";
import SocioCharitable from "./Pages/Activities/SocioCharitable";
import Spiritual from "./Pages/Activities/Spiritual";
import Evangelization from "./Pages/Activities/Evangelization";
import Home from "./layout/partials/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<MainLayout />}>
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="objective" element={<Objective />} />
          <Route path="history" element={<History />} />
          <Route path="motto" element={<Motto />} />
          <Route path="mission" element={<Mission />} />
          <Route path="lccteam" element={<LccTeam />} />
          <Route path="spiritual" element={<Spiritual />} />
          <Route path="socio-charitable" element={<SocioCharitable />} />
          <Route path="evangelization" element={<Evangelization />} />
          <Route path="nccteam" element={<NccTeam />} />
          <Route path="gallery" element={<ImageGallery />} />
          <Route path="gccteam" element={<GccTeam />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
