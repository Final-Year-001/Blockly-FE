import React, { useState } from "react";
import top from "../../../assets/LayoutTour/1.png";
import sb from "../../../assets/LayoutTour/2.png";
import wa from "../../../assets/LayoutTour/3.png";
import co from "../../../assets/LayoutTour/4.png";

const style = "transition  duration-100 cursor-pointer relative";
const highlight = "border-2 border-red-500";

const topBarContent =
  "This is the top bar section. You will see some buttons here. You can previous your code from here, check our out documentation guide or logout";
const sideBarContent =
  "This is where you will find all your blocks. You can even search from the search bar. Everything you need will be nicely categoriesed. simply click on a menu which will expand to reveal more options for you to choose from.";
const workAreaContent =
  "This is the most important part. This is your work area. So you drag and drop blocks to here and you play and experiment with them here. You can zoom or zoom out using your mouse scroll wheel or by using those on screen + and - icons. By dragging blocks to the trash icon, you can delete blocks.";
const outputContent =
  "This is where you will see the output of your creation. This section is devided into three sections. Code section as the name suggest will show the code output of your creation. Iframe option will visually display your creation. Console section is for additional information and error messages that you get when building a web page.";

function LayoutGuide() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selected, setSelected] = useState("");

  const handleMouseEnter = (image: any) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="flex w-full">
      <div className="w-9/12">
        <div className="bg-amber-200 flex flex-col">
          <div
            className={style}
            onMouseEnter={() => handleMouseEnter("top")}
            onMouseLeave={handleMouseLeave}
            onClick={() => setSelected("topbar")}
          >
            <div
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black ${selected == "topbar" && highlight} ${selected == "topbar" && "bg-opacity-0"} bg-opacity-40 rounded font-bold text-lg z-10 ${
                hoveredImage === "top" && "hidden"
              }`}
            >
              1
            </div>
            <img src={top} alt="" />
          </div>
          <div className="flex">
            <div
              className={style}
              onMouseEnter={() => handleMouseEnter("sb")}
              onMouseLeave={handleMouseLeave}
              onClick={() => setSelected("sidebar")}
            >
              <div
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black  ${selected == "sidebar" && highlight} ${selected == "sidebar" && "bg-opacity-0"} bg-opacity-40 rounded font-bold text-lg z-10 ${
                  hoveredImage === "sb" && "hidden"
                }`}
              >
                2
              </div>
              <img src={sb} alt="" />
            </div>
            <div
              className={style}
              onMouseEnter={() => handleMouseEnter("wa")}
              onMouseLeave={handleMouseLeave}
              onClick={() => setSelected("workarea")}
            >
              <div
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black  ${selected == "workarea" && highlight} ${selected == "workarea" && "bg-opacity-0"} bg-opacity-40 rounded font-bold text-lg z-10 ${
                  hoveredImage === "wa" && "hidden"
                }`}
              >
                3
              </div>
              <img src={wa} alt="" />
            </div>
            <div
              className={style}
              onMouseEnter={() => handleMouseEnter("co")}
              onMouseLeave={handleMouseLeave}
              onClick={() => setSelected("codeoutput")}
            >
              <div
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black  ${selected == "codeoutput" && highlight} ${selected == "codeoutput" && "bg-opacity-0"} bg-opacity-40 rounded font-bold text-lg z-10 ${
                  hoveredImage === "co" && "hidden"
                }`}
              >
                4
              </div>
              <img src={co} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/12">
        <div className="bg-gray-200 p-6 shadow-lg mx-4 text-justify rounded-lg">
          {!selected && "Click on something to get more information"}
          {selected == "topbar" && (
            <div>
              <div className="text-2xl">Top Bar</div>
              <div>{topBarContent}</div>
            </div>
          )}
          {selected == "sidebar" && (
            <div>
              <div className="text-2xl">Side Bar</div>
              <div>{sideBarContent}</div>
            </div>
          )}
          {selected == "workarea" && (
            <div>
              <div className="text-2xl">Work Area</div>
              <div>{workAreaContent}</div>
            </div>
          )}
          {selected == "codeoutput" && (
            <div>
              <div className="text-2xl">Output Area</div>
              <div>{outputContent}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LayoutGuide;
