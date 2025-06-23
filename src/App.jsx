import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Alerts from "./pages/Alerts";
import About from "./pages/About";
import Prediction from "./pages/Prediction";
import WheelHealth from "./pages/WheelHealth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/about" element={<About />} />
      <Route path="/prediction" element={<Prediction />} />
      <Route path="/wheelhealth" element={<WheelHealth />} />
    </Routes>
  );
}
