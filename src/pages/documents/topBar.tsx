import ProductLogo from "../../assets/Logo";
import ProductLogoBW from "../../assets/LogoB&W";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import { useNavigate } from "react-router-dom";

interface Props {
  buttonText?: string; // Make the buttonText prop optional
}

function TopBar({ buttonText }: Props): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between items-center p-4">
      <div className="flex flex-col  gap-3 px-2">
        <Link to="/my/projects">
          <ProductLogoBW TextSize={3} />
        </Link>
      </div>

      <div className="flex">
        {!buttonText && (
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

       
        <div className="p-2 bg-red-400">
          Home
        </div>
        <div className="p-2 bg-red-400">
          Docs
        </div>
    

      </div>
    </div>
  );
}

export default TopBar;
