import { useState, useEffect } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import TopBar from "../topBar";
import { FaArrowUp } from "react-icons/fa";
import { AwesomeButton } from "react-awesome-button";
import Overview from "./OverView";
import "../mainpage.css";
import GettingStartFront from "./GettingStartFrontend";
import GettingStartBack from "./GettingStartBackend";
import ConnectingFEBE from "./Connecting";
import InfoComp3 from "../../home/infoComp3";
import LayoutGuide from "./LayoutGuide";
import Footer from "../../home/Footer";

const topBarColor = "bg-blue-500";
const cardColor = "bg-gray-200";

function GetStarted() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white">
      <div className={` ${topBarColor} fixed top-0 w-full`} id="TopBar">
        <TopBar onPage="getStarted" />
      </div>

      <div className="mx-auto container mt-24">
        <div>
          <div className="flex text-3xl justify-center pt-4 mb-4">
            Get Started
          </div>
        </div>

        {/* Overview section */}
        <Overview />

        <div className="flex gap-16">
          <div className="w-full">
            <div className="text-2xl mb-8">Getting Started with Frontend</div>
            <GettingStartFront />
          </div>
          <div className="w-full">
            <div className="text-2xl mb-8">Getting Started with Backend</div>
            <GettingStartBack />
          </div>
        </div>

        <div className="w-full">
          <div className="text-2xl mt-24 mb-4">
            Connecting Frontend to Backend
          </div>
          <ConnectingFEBE />
        </div>

        <div className="bg-blue-100 p-8 pt-16 rounded-xl shadow">
          <InfoComp3 />
        </div>

        <div className="mt-10">
          <LayoutGuide />
        </div>

        <div className="p-10">{""}</div>

        {showScroll && (
          <div
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              cursor: "pointer",
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              borderRadius: "50%",
            }}
          >
            <FaArrowUp size={20} />
          </div>
        )}
      </div>

      <div className="w-full p-10 bg-blue-600">
        <Footer />
      </div>
    </div>
  );
}

export default GetStarted;
