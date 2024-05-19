import { useState, useEffect } from "react";
import TopBar from "../topBar";
import { FaArrowUp } from "react-icons/fa";
import Overview from "./OverView";
import "../mainpage.css";
import GettingStartFront from "./GettingStartFrontend";
import GettingStartBack from "./GettingStartBackend";
import ConnectingFEBE from "./Connecting";
import InfoComp3 from "../../home/infoComp3";
import LayoutGuideFE from "./LayoutGuideFE";
import LayoutGuideBE from "./LayoutGuideBE";
import Footer from "../../home/Footer";
import QuickAccess from "./QuickAccess";

const topBarColor = "bg-blue-500";

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
      <div className={` ${topBarColor} fixed top-0 z-50 w-full`} id="TopBar">
        <TopBar onPage="getStarted" />
      </div>

      <div className="pt-20">
        <div>
          <div className="flex text-3xl justify-center pt-4 mb-10">
            Get Started
          </div>
        </div>

        <div className="mx-auto container mb-4">
          <QuickAccess />
        </div>

        {/* Overview section */}
        <div className="mx-auto container ">
          <Overview />
        </div>

        <div className="mt-20 py-32 bg-blue-100">
          <div className="mx-auto container ">
            
            <div className="text-3xl mb-4">Frontend Builder Interface</div>
            <LayoutGuideFE />
            <div className="text-3xl mb-4 flex justify-end mt-24">Backend Builder Interface</div>
            <LayoutGuideBE />
          </div>
        </div>

        <div className="flex mt-20 gap-16 mx-auto container">
          <div className="w-full ">
            <div className="text-2xl mb-8">Getting Started with Frontend</div>

            <GettingStartFront />
          </div>

          <div className="w-full">
            <div className="text-2xl mb-8">Getting Started with Backend</div>

            <GettingStartBack />
          </div>
        </div>

        <div className="w-full mx-auto container mb-20">
          <div className="text-2xl mt-20 mb-4">
            Connecting Frontend to Backend
          </div>

          <ConnectingFEBE />
        </div>

        <div className="bg-blue-100 pt-28 pb-28 py-10">
          <InfoComp3 />  
        </div>


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
