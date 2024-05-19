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
      <div className="flex justify-between px-72">
        <div
          className={` ${GettingStartedBtnSize} ${HtmlButtonColor} flex flex-col`}
          onClick={() => navigate("/doc-html")}
        >
          <img src={htmlIMG}  alt="Quick access image" />
        </div>
        <div
          className={` ${GettingStartedBtnSize} ${CssButtonColor}`}
          onClick={() => navigate("/doc-css")}
        >
          <img src={cssImg}  alt="Quick access image" />
        </div>
        <div
          className={` ${GettingStartedBtnSize} ${JSButtonColor}`}
          onClick={() => navigate("/doc-js")}
        >
           <img src={jsImg}  alt="Quick access image" />
        </div>
        <div
          className={` ${GettingStartedBtnSize} ${serverButtonColor}`}
          onClick={() => navigate("/doc-html")}
        >
           <img src={serverImg}  alt="Quick access image" />
        </div>
        <div
          className={` ${GettingStartedBtnSize} ${APIButtonColor}`}
          onClick={() => navigate("/doc-api-blocks")}
        >
           <img src={APIImg}  alt="Quick access image" />
        </div>
        <div
          className={` ${GettingStartedBtnSize} ${DBButtonColor}`}
          onClick={() => navigate("/doc-database-blocks")}
        >
           <img src={DBImg}  alt="Quick access image" />
        </div>
      </div>
    </div>
  );
}

export default QuickAccess;
