import ProductLogo from "../../assets/Logo";
import ProductLogoBW from "../../assets/LogoB&W";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import { useNavigate } from "react-router-dom";

const buttonGroup = "flex gap-2";
const logoutBtn =
  "bg-red-500 hover:bg-red-700 avtive:bg-red-900 hover:scale-105  transition duration-100 active:scale-95 text-white px-4 py-2 rounded-lg border-black border-2";
const documentationBtn =
  "bg-blue-600 hover:bg-blue-700 avtive:bg-blue-800 hover:scale-105  transition duration-100 active:scale-95 text-white px-4 py-2 rounded-lg border-black border-2";
const homeBtn =
  "bg-green-400 hover:bg-green-500 avtive:bg-green-600 hover:scale-105 active:scale-95 transition duration-100  text-white px-4 py-2 rounded-lg border-black border-2";
const projectBtn =
  "bg-amber-600 hover:bg-amber-700 avtive:bg-amber-900 hover:scale-105 active:scale-95 transition duration-100  text-white px-4 py-2 rounded-lg border-black border-2";

interface Props {
  onPage?: string; // 
}

function TopBar({ onPage }: Props): JSX.Element {
  function logout() {
    localStorage.removeItem("tokens");
    console.log("Token removed!");
    window.location.href = "/login";
  }

  const navigate = useNavigate();
  return (
    <div className="flex px-20 w-full bg-blue-500 justify-between items-center p-4">
      <div className="flex flex-col  gap-3 px-2">
        <Link to="/home">
          <ProductLogoBW TextSize={3} />
        </Link>
      </div>

      <div className="flex">
        {onPage == "projectSss" && (
          <AwesomeButton
            style={{
              "--button-primary-color": "#4682B4",
              "--button-primary-color-dark": "#008080",
              "--button-primary-color-light": "#ffffff",
              "--button-primary-color-hover": "#4682B4",
              "--button-primary-color-active": "#2d82c7",
              "--button-default-border-radius": "8px",
              width: "180px",
              height: "50px",
              marginRight: "10px",
            }}
            href={"/my/projects"}
            type="primary"
          >
            Back To My Projects
          </AwesomeButton>
        )}

        {onPage == "projectSelection" && (
          <div className={buttonGroup}>
            <div>
              <button onClick={() => navigate("/home")} className={homeBtn}>
                Home
              </button>
            </div>
            <div>
              <button
                onClick={() => navigate("/get-started")}
                className={documentationBtn}
              >
                Documentation
              </button>
            </div>
            <div>
              <button onClick={logout} className={logoutBtn}>
                Logout
              </button>
            </div>
          </div>
        )}

        {onPage == "getStarted" && (
          <div className={buttonGroup}>
            <div>
              <div>
                <button
                  onClick={() => navigate("/my/projects")}
                  className={projectBtn}
                >
                  My Projects
                </button>
              </div>
            </div>
            <div>
              <button onClick={logout} className={logoutBtn}>
                Logout
              </button>
            </div>
          </div>
        )}

        {onPage == "documentation" && (
          <div className={buttonGroup}>
            <div>
              <button
                onClick={() => navigate("/get-started")}
                className={documentationBtn}
              >
                Documentation
              </button>
            </div>
            <div>
              <button
                onClick={() => navigate("/my/projects")}
                className={projectBtn}
              >
                My Projects
              </button>
            </div>
            <div>
              <button onClick={logout} className={logoutBtn}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopBar;
