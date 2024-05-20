import { useNavigate } from "react-router-dom";
import serverImg from "../../../assets/gettingStarted/quickaccess/server.png";
import APIImg from "../../../assets/gettingStarted/quickaccess/api.png";
import DBImg from "../../../assets/gettingStarted/quickaccess/db.png";

const GettingStartedBtnSize =
  "hover:scale-105 transition duration-300 cursor-pointer  border-2 border-black  rounded-xl p-4 px-16 flex justify-items items-center gap-4";
const serverButtonColor = "bg-blue-300";
const APIButtonColor = "bg-orange-300";
const DBButtonColor = "bg-green-300";

function GettingStartBack() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col gap-3 text-3xl justify-between">
        <div
          className={` ${GettingStartedBtnSize} ${serverButtonColor} `}
          onClick={() => navigate("/doc-server-creation")}
        >
          <div>
            <img src={serverImg} width={65} alt="image" />
          </div>
          <div>Server Creation Doc</div>
        </div>
        <div
          className={` ${GettingStartedBtnSize} ${APIButtonColor}`}
          onClick={() => navigate("/doc-auth")}
        >
          <div>
            <img src={APIImg} width={65} alt="image" />
          </div>
          <div>Auth Handling Doc</div>
        </div>

        <div
          className={` ${GettingStartedBtnSize} ${APIButtonColor}`}
          onClick={() => navigate("/doc-api-blocks")}
        >
          <div>
            <img src={APIImg} width={65} alt="image" />
          </div>
          <div>API Handling Doc</div>
        </div>

        <div
          className={` ${GettingStartedBtnSize} ${DBButtonColor}`}
          onClick={() => navigate("/doc-database-blocks")}
        >
          <div>
            <img src={DBImg} width={65} alt="image" />
          </div>
          <div>Database Handling Doc</div>
        </div>
      </div>
    </div>
  );
}

export default GettingStartBack;
