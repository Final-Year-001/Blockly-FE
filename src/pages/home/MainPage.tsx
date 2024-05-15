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

function logout() {
  localStorage.removeItem("tokens");
  console.log("Token removed!");
  window.location.href = "/login";
}

function MainPage() {
  const navigate = useNavigate();
  const [logged, setLogged] = useState<any>(null);
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      const decodedToken: any = jwtDecode(token);
      setLogged(decodedToken);

      const currentTime: number = Date.now() / 1000; // Convert milliseconds to seconds
      if (decodedToken.exp > currentTime) {
        setIsTokenValid(true);
        console.log("HETT", isTokenValid, decodedToken.exp, "ss", currentTime);
      } else {
        setIsTokenValid(false);
      }
    }
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
              className="bg-blue-500 text-white px-4 py-2 rounded-lg border-black border-2"
            >
              Documentation
            </button>
            {isTokenValid ? (
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg border-black border-2"
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

      {/* <div className="bg-white"> */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-900">
        <TopSection tokenValid={isTokenValid} />
      </div>

      {/* what is WBC */}
      <div className="bg-blue-100">
        <IntroToWBC />
      </div>

      {/* what can you learn from WBC */}
      <div className="bg-amber-500 pt-24 pb-12">
        <InfoComp1 />
      </div>

      <div className="pt-28 pb-28 bg-amber-100/80 py-10">
        <InfoComp2 />
      </div>

      <div className="pt-28 pb-28 bg-red-400 py-10">
        <InfoComp3 />
      </div>

      <div className="pt-28 pb-28 bg-red-100 py-10">
        <InfoComp4 />
      </div>

      <div className="pt-32 pb-32 bg-gray-200 py-10">
        <AboutUs />
      </div>

      <div className="bg-gray-900 text-white py-20">
        <Footer />
      </div>

    </div>
  );
}

export default MainPage;
