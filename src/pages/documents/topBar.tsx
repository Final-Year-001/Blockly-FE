import {Avatar } from "@material-tailwind/react";
import ProductLogo from "../../assets/Logo";
import { Link } from "react-router-dom";
  
  function TopBar() {
  
    return (
      <div className="flex w-full justify-between items-center p-4">
        <div className="flex flex-col  gap-3 px-2">
        <Link to="/my/projects">
          <ProductLogo TextSize={3}/>
          </Link>
        </div>
  
        <div>
          <Link to="/my/projects"><Avatar src="/img/cat default avatar.png" alt="avatar" size="md" /></Link>
        </div>
  
      </div>
    );
  }
  
  export default TopBar;
  