import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Work from "./pages/work/Work";
import VisionSquare from "./pages/visionSquare/VisionSquare";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/work-single" element={<VisionSquare />} />
      </Routes>
    </div>
  );
}

export default App;
