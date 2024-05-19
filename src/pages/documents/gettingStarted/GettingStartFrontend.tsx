import { useNavigate } from "react-router-dom";

import htmlIMG from "../../../assets/gettingStarted/quickaccess/html.png";
import cssImg from "../../../assets/gettingStarted/quickaccess/css.png";
import jsImg from "../../../assets/gettingStarted/quickaccess/js.png";

const GettingStartedBtnSize =
  "hover:scale-105  transition duration-300 text-3xl  cursor-pointer border-2 border-black  rounded-xl p-4 px-16 flex justify-items items-center gap-4";
const HtmlButtonColor = "bg-pink-300";
const CssButtonColor = "bg-purple-300";
const JSButtonColor = "bg-amber-300";

function GettingStartFront() {
  const navigate = useNavigate();

  return (
    <div>
      <div className=" flex flex-col gap-3 justify-between">
        <div
          className={` ${GettingStartedBtnSize} ${HtmlButtonColor}`}
          onClick={() => navigate("/doc-html")}
        >
          <div>
            <img src={htmlIMG} width={65} alt="image" />
          </div>
          <div>HTML Doc</div>
        </div>

        <div
          className={` ${GettingStartedBtnSize} ${CssButtonColor}`}
          onClick={() => navigate("/doc-css")}
        >
          <div>
            <img src={cssImg} width={65} alt="image" />
          </div>
          <div>CSS Doc</div>
        </div>

        <div
          className={` ${GettingStartedBtnSize} ${JSButtonColor}`}
          onClick={() => navigate("/doc-js")}
        >
          <div>
            <img src={jsImg} width={65} alt="image" />
          </div>
          <div>JS Doc</div>
        </div>
      </div>
    </div>
  );
}

export default GettingStartFront;
