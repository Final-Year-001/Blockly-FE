import { useNavigate } from "react-router-dom";
import ProductLogo from "../../assets/Logo";
import ProductLogoBW from "../../assets/LogoB&W";
import TeamImg from "../../assets/home/team.png";
import InfoComp1 from "./InfoComp1";
import AboutUs from "./AboutUs";
import IntroToWBC from "./Intro";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import InfoComp2 from "./infoComp2";
import TopSection from "./TopSection";
import InfoComp3 from "./infoComp3";
import InfoComp4 from "./infoComp4";
import Footer from "./Footer";
import { FaArrowUp } from "react-icons/fa";
import Pricing from "./Pricing";
import bgImage from '../../assets/home/patt.jpg'
import bgImageWhite from '../../assets/home/pattWhite.png'
import bgImageWhiteNoOp from '../../assets/home/pattWhiteNoOp.jpg'

function logout() {
  localStorage.removeItem("tokens");
  console.log("Token removed!");
  window.location.href = "/login";
}

function MainPage() {
  const navigate = useNavigate();
  const [logged, setLogged] = useState<any>(null);
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false);
  const [showScroll, setShowScroll] = useState(false);
  const documentationBtn =
  "bg-blue-600 hover:bg-blue-700 avtive:bg-blue-800  active:scale-95 hover:scale-105  transition duration-100 text-white px-4 py-2 rounded-lg border-black border-2";
  const logoutBtn =
  "bg-red-500 hover:bg-red-700 avtive:bg-red-900 hover:scale-105 active:scale-95 transition duration-100 text-white px-4 py-2 rounded-lg border-black border-2";
  const projectBtn = 'bg-amber-600 hover:bg-amber-700 avtive:bg-amber-900 hover:scale-105 active:scale-95 transition duration-100  text-white px-4 py-2 rounded-lg border-black border-2'


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      const decodedToken: any = jwtDecode(token);
      setLogged(decodedToken);

      const currentTime: number = Date.now() / 1000; // Convert milliseconds to seconds
      console.log(currentTime,decodedToken.exp)
      if (decodedToken.exp > currentTime) {
        setIsTokenValid(true);
        console.log("HETT", isTokenValid, decodedToken.exp, "ss", currentTime);
      } else {
        setIsTokenValid(false);
      }
    }
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

  return (
    <div className="min-h-screen bg-cover bg-center relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0  bg-gray-900/10 z-20 backdrop-filter backdrop-blur-sm ">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <div>
            <ProductLogoBW />
            {/* Example: <img src="your-logo-url.png" alt="Logo" className="h-12" /> */}
          </div>
          {/* Logout Button */}
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/get-started")}
              className={documentationBtn}
            >
              Documentation
            </button>
            {isTokenValid ? (
              <button
                onClick={logout}
                className={logoutBtn}
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => (window.location.href = "/login")}
                className="bg-amber-500 text-white px-4 py-2 rounded-lg border-black border-2"
              >
                LogIn
              </button>
            )}
          </div>
        </div>
      </header>
      {/* <div className="mb-16"></div> */}

      <div style={{ backgroundImage: `url(${bgImage})` }}  className={`bg-cover bg-[length:80%] `}>
      {/* <div className="bg-blue-400"> */}
        <TopSection tokenValid={isTokenValid} />
      </div>

      {/* what is WBC */}
      {/* <div className="bg-white"> */}
      <div className="bg-blue-100">
        <IntroToWBC />
      </div>

      {/* <div className="pb-20 pt-10"> */}
      <div style={{ backgroundImage: `url(${bgImageWhite})` }}  className={`pb-20 pt-10 bg-cover bg-[length:50%]`}>
        <Pricing />
      </div>

      {/* what can you learn from WBC */}
      {/* <div className="bg-amber-500 pt-24 pb-12"> */}
      <div className="pt-24 pb-12 bg-blue-100">
        <InfoComp1 />
      </div>

      {/* <div className="pt-28 pb-28 bg-orange-100 py-10"> */}
      <div className="pt-28 pb-28 py-10">
        <InfoComp2 />
      </div>

      {/* <div className="pt-28 pb-28 bg-green-500 py-10"> */}
      <div className="pt-28 bg-red-100 pb-28 py-10">
        <InfoComp3 />
      </div>

      {/* <div className="pt-28 pb-28 bg-green-200 py-10"> */}
      <div className="pt-28 pb-28 py-10 bg-gray-300">
        <InfoComp4 />
      </div>

      <div style={{ backgroundImage: `url(${bgImageWhite})` }}  className={`pt-32 pb-32 py-10 bg-cover bg-[length:50%]`}>
      {/* <div className="pt-32 pb-32 bg-orange-400 py-10"> */}
        <AboutUs />
      </div>

      <div className="bg-blue-600 text-white py-6">
        <Footer />
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
  );
}

export default MainPage;
