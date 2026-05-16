import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Activity_1/landing_page";
import GradeCalculator from "./pages/Activity_2/GradeCalculator";
import StudentGradeViewer from "./pages/Activity_3/StudentGradeViewer";
import HarryPotterViewer from "./pages/Activity_4/HarryPotterViewer";
import MCO_LandingPage from "./pages/MCO/MCO_LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MCO_LandingPage />} />
        <Route path="/activity1" element={<LandingPage />} />
        <Route path="/activity2" element={<GradeCalculator />} />
        <Route path="/activity3" element={<StudentGradeViewer />} />
        <Route path="/activity4" element={<HarryPotterViewer />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;