import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./components/Homepage.jsx";
import About from "./components/About";

import Boeing from "./components/Boeing";
import BoeingModels from "./components/BoeingModels";

import Airbus from "./components/Airbus";
import AirbusModels from "./components/AirbusModels";

import Dassault from "./components/Dassault";
import DassaultModels from "./components/DassaultModels";

import HAL from "./components/HAL";
import HALModels from "./components/HALModels";

import Updates from "./components/Updates";


import "./components/styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/boeing" element={<Boeing />} />
        <Route path="/boeing-models" element={<BoeingModels />} />

        <Route path="/airbus" element={<Airbus />} />
        <Route path="/airbus-models" element={<AirbusModels />} />

        <Route path="/dassault" element={<Dassault />} />
        <Route path="/dassault-models" element={<DassaultModels />} />

        <Route path="/hal" element={<HAL />} />
        <Route path="/hal-models" element={<HALModels />} />

        <Route path="/updates" element={<Updates />} />
      </Routes>
    </Router>
  );
}

export default App;
