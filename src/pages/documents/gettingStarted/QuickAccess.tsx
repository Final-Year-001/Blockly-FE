import { useNavigate } from "react-router-dom";

const GettingStartedBtnSize =
  "hover:scale-110  transition duration-200 shadow-lg text-md  w-20 flex justify-center cursor-pointer border-2 border-black rounded-full p-6 pt-7 mb-6 mt-4";
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
          className={` ${GettingStartedBtnSize} ${HtmlButtonColor}`}
          onClick={() => navigate("/doc-html")}
        >
          HTML
        </div>
        <div
          className={` ${GettingStartedBtnSize} ${CssButtonColor}`}
          onClick={() => navigate("/doc-css")}
        >
          CSS
        </div>
        <div
          className={` ${GettingStartedBtnSize} ${JSButtonColor}`}
          onClick={() => navigate("/doc-js")}
        >
          JS
        </div>
        <div
          className={` ${GettingStartedBtnSize} ${serverButtonColor}`}
          onClick={() => navigate("/doc-html")}
        >
          Server
        </div>
        <div
          className={` ${GettingStartedBtnSize} ${APIButtonColor}`}
          onClick={() => navigate("/doc-html")}
        >
          API
        </div>
        <div
          className={` ${GettingStartedBtnSize} ${DBButtonColor}`}
          onClick={() => navigate("/doc-html")}
        >
          DB
        </div>
      </div>
    </div>
  );
}

export default QuickAccess;