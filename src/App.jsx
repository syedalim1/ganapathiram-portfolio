import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
import Publications from "./components/Publications";
import Footer from "./components/Footer";
import ConferencePresentations from "./components/ConferencePresentations";
import AreaOfInterest from "./components/AreaOfInterest";
import PersonalProfile from "./components/PersonalProfile";
import RolesAndResponsibilities from "./components/RolesAndResponsibilities";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/publications" element={<Publications />} />
        <Route
          path="/conferencePresentations"
          element={<ConferencePresentations />}
        />
        <Route path="/areaOfInterest" element={<AreaOfInterest />} />
        <Route path="/personalProfile" element={<PersonalProfile />} />
        <Route
          path="/rolesAndResponsibilities"
          element={<RolesAndResponsibilities/>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
