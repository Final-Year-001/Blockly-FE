import { useNavigate } from "react-router-dom";

const GettingStartedBtnSize =
  "hover:scale-105  transition duration-300 text-3xl  cursor-pointer border-2 border-black  rounded-xl p-6 px-16";
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
          HTML Tutorials
        </div>
        <div
          className={` ${GettingStartedBtnSize} ${CssButtonColor}`}
          onClick={() => navigate("/doc-js")}
        >
          CSS Tutorials
        </div>
        <div
          className={` ${GettingStartedBtnSize} ${JSButtonColor}`}
          onClick={() => navigate("/doc-js")}
        >
          JS Tutorials
        </div>
      </div>
    </div>
  );
}

export default GettingStartFront;
