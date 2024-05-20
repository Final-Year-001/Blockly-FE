import { useNavigate } from "react-router-dom";

import htmlIMG from '../../../assets/gettingStarted/quickaccess/html.png'
import cssImg from '../../../assets/gettingStarted/quickaccess/css.png'
import jsImg from '../../../assets/gettingStarted/quickaccess/js.png'
import serverImg from '../../../assets/gettingStarted/quickaccess/server.png'
import APIImg from '../../../assets/gettingStarted/quickaccess/api.png'
import DBImg from '../../../assets/gettingStarted/quickaccess/db.png'

const GettingStartedBtnSize =
  "hover:scale-150 active:scale-125  transition duration-200 shadow-lg text-md  w-20 flex justify-center cursor-pointer border-2 border-black rounded-full  p-4 mb-6 mt-4";
const hide = 'hidden'
  const HtmlButtonColor = "bg-pink-300 hover:bg-pink-500 active:bg-pink-700";
const CssButtonColor = "bg-purple-300 hover:bg-purple-500 active:bg-purple-700";
const JSButtonColor = "bg-amber-300 hover:bg-amber-500 active:bg-amber-700";
const serverButtonColor = "bg-blue-300 hover:bg-blue-500 active:bg-blue-700";
const APIButtonColor = "bg-orange-300 hover:bg-orange-500 active:bg-orange-700";
const DBButtonColor = "bg-green-300 hover:bg-green-500 active:bg-green-700";

function QuickAccess() {
  const navigate = useNavigate();

  return (
    <div>
      <style>{`
        .tooltip {
          position: relative;
          display: inline-block;
        }

        .tooltip .tooltiptext {
          visibility: hidden;
          width: 80px;
          background-color: #28282B;
          color: #fff;
          text-align: center;
          font-size: 10px;
          border-radius: 5px;
          padding: 2px 0;
          position: absolute;
          z-index: 1;
          bottom: 105%;
          left: 50%;
          margin-left: -40px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .tooltip:hover .tooltiptext {
          visibility: visible;
          opacity: 1;
        }
      `}</style>
      <div className="flex justify-between px-72">
        <div
          className={`tooltip ${GettingStartedBtnSize} ${HtmlButtonColor} flex flex-col`}
          onClick={() => navigate("/doc-html")}
        >
          <img src={htmlIMG} alt="Quick access image" />
          <span className="tooltiptext">HTML</span>
        </div>
        <div
          className={`tooltip ${GettingStartedBtnSize} ${CssButtonColor}`}
          onClick={() => navigate("/doc-css")}
        >
          <img src={cssImg} alt="Quick access image" />
          <span className="tooltiptext">CSS</span>
        </div>
        <div
          className={`tooltip ${GettingStartedBtnSize} ${JSButtonColor}`}
          onClick={() => navigate("/doc-js")}
        >
          <img src={jsImg} alt="Quick access image" />
          <span className="tooltiptext">JavaScript</span>
        </div>
        <div
          className={`tooltip ${GettingStartedBtnSize} ${serverButtonColor}`}
          onClick={() => navigate("/doc-server-creation")}
        >
          <img src={serverImg} alt="Quick access image" />
          <span className="tooltiptext">Server Creation</span>
        </div>
        <div
          className={`tooltip ${GettingStartedBtnSize} ${APIButtonColor}`}
          onClick={() => navigate("/doc-auth")}
        >
          <img src={APIImg} alt="Quick access image" />
          <span className="tooltiptext">API Handling</span>
        </div>
        <div
          className={`tooltip ${GettingStartedBtnSize} ${DBButtonColor}`}
          onClick={() => navigate("/doc-database-blocks")}
        >
          <img src={DBImg} alt="Quick access image" />
          <span className="tooltiptext">Database Handling</span>
        </div>
      </div>
    </div>
  );
}

export default QuickAccess;
