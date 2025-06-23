import { useNavigate } from "react-router-dom";
import cmrlLogo from "../assets/cmrl.png";
import wheelHealthImg from "../assets/wheel_health.png";
import alertIcon from "../assets/alert_icon.png";
import predictIcon from "../assets/predict_icon.png";
import aboutIcon from "../assets/about_icon.png";
import trainImg from "../assets/train.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen pt-[175px] pb-10 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('bg1.png')" }}
    >
      {/* Fixed Top Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="flex flex-col items-center py-4">

          {/* CMRL Logo Row */}
          <div className="flex items-center gap-4">
            <img src={cmrlLogo} alt="CMRL Logo" className="h-12" />
            <span className="text-3xl font-extrabold text-black">CMRL</span>
          </div>

          {/* Train Track */}
          <div className="relative w-full h-[60px] my-2 overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-[4px] bg-gray-800 transform -translate-y-1/2 z-0" />
            <img
              src={trainImg}
              alt="Train"
              className="absolute top-[-30px] left-0 h-[100px] z-10 animate-train"
            />
          </div>
        </div>
      </div>

<div className="w-full text-center mb-6">
  <h2 className="text-2xl font-bold text-black">WHEEL ANALYSER</h2>
  <p className="italic text-gray-600">|| Where speed meets simplicity ||</p>
  <div className="h-1 bg-gray-300 mt-2 w-full"></div>
</div>




      {/* Main Cards Section */}
      <main className="flex flex-col gap-[100px] items-center">

        {/* Wheel Health Card */}
        <div
          onClick={() => navigate("/wheelhealth")}
          className="flex items-center justify-between w-full max-w-[1300px] bg-[#97d5c6] p-8 rounded-2xl shadow-lg cursor-pointer"
        >
          <img src={wheelHealthImg} alt="Wheel Health" className="w-[200px] h-[200px] rounded-xl" />
          <div className="text-left ml-6">
            <h3 className="text-2xl font-bold">WHEEL HEALTH</h3>
            <p>(Wheel parameter and status, visualized data)</p>
          </div>
        </div>

        {/* Alerts Card */}
        <div
          onClick={() => navigate("/alerts")}
          className="flex items-center justify-between w-full max-w-[1300px] bg-[#d9534f] text-white p-8 rounded-2xl shadow-lg cursor-pointer"
        >
          <div className="text-left mr-6">
            <h3 className="text-2xl font-bold">ALERTS</h3>
            <p>(Auto alert on threshold breach, categorized alerts and notifications)</p>
          </div>
          <img src={alertIcon} alt="Alerts" className="w-[200px] h-[200px] rounded-xl" />
        </div>

        {/* Prediction Card */}
        <div
          onClick={() => navigate("/prediction")}
          className="flex items-center justify-between w-full max-w-[1300px] bg-[#5bc0de] text-white p-8 rounded-2xl shadow-lg cursor-pointer"
        >
          <img
            src={predictIcon}
            alt="Prediction Icon"
            className="w-[200px] h-[200px] mr-6 rounded-xl"
          />
          <div className="text-left">
            <h3 className="text-2xl font-bold">PREDICTION</h3>
            <p>(Predict future wheel issues using ML model)</p>
          </div>
        </div>

        {/* About Card */}
        <div
          onClick={() => navigate("/about")}
          className="flex items-center justify-between w-full max-w-[1300px] bg-[#f0ad4e] text-white p-8 rounded-2xl shadow-lg cursor-pointer"
        >
          <div className="text-left mr-6">
            <h3 className="text-2xl font-bold">ABOUT</h3>
            <p>(Information about this tool and CMRL team)</p>
          </div>
          <img src={aboutIcon} alt="About" className="w-[200px] h-[200px] rounded-xl" />
        </div>
      </main>
    </div>
  );
}
