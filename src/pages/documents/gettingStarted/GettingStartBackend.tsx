import { useNavigate } from "react-router-dom";

const GettingStartedBtnSize =
  "hover:scale-105 transition duration-300 cursor-pointer  border-2 border-black  rounded-xl p-6 px-16";
const serverButtonColor = "bg-blue-300";
const APIButtonColor = "bg-orange-300";
const DBButtonColor = "bg-green-300";

function GettingStartBack() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col gap-3 text-3xl justify-between">
        <div
          className={` ${GettingStartedBtnSize} ${serverButtonColor}`}
          onClick={() => navigate("/doc-server-creation")}
        >
          Server Creation Documentation
        </div>

        <div
          className={` ${GettingStartedBtnSize} ${APIButtonColor}`}
          onClick={() => navigate("/doc-auth")}
        >
          Authentication Documentation
        </div>

        <div
          className={` ${GettingStartedBtnSize} ${DBButtonColor}`}
          onClick={() => navigate("/doc-html")}
        >
          API and Database Handling Documentation
        </div>
      </div>
    </div>
  );
}

export default GettingStartBack;
