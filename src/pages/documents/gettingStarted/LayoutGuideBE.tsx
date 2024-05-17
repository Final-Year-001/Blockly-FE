import React, { useState } from "react";
import top from "../../../assets/LayoutTour/1.png";
import btns from "../../../assets/LayoutTour/2.png";
import sb from "../../../assets/LayoutTour/3.png";
import wa from "../../../assets/LayoutTour/4.png";
import oa from "../../../assets/LayoutTour/5.png";
import tt from "../../../assets/LayoutTour/6.png";
import { blueButton } from "../../../assets/buttons/Buttons";

const style = "transition  duration-100 cursor-pointer relative";
const highlight = "border-4 border-red-500";

const topBarContent =
  "This is the top bar section. You can see our beautiful logo here. This logo has a secret that nobody knows. Its pretending to be something else. woah whats that you ask? its a hidden button. Yes you heard me right its a button you can click. You click this to go back from the builder interface.";





function LayoutGuideBE() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selected, setSelected] = useState(0);
  const handleMouseEnter = (image: any) => {
    setHoveredImage(image);
  };
  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const [gradientDirection, setGradientDirection] = useState('to-br');

  const changeGradientDirection = (direction: any) => {
    setGradientDirection(direction);
  };

  return (
    <div className="flex w-full">
      <div className="w-9/12">
        s
      </div>
       





    <div
      className="w-64 h-64 bg-gradient-to-br from-blue-500 to-green-500 relative"
      style={{ background: `linear-gradient(${gradientDirection}, #00B4D8, #00B4D8, #48BB78, #48BB78)` }}
    >
      <button onClick={() => changeGradientDirection('to-tr')} className="absolute bottom-0 right-0 m-2 bg-white px-4 py-2 rounded-md">Change Gradient</button>
    </div>












      <div className="w-3/12">s </div>
       
    </div>
  );
}

export default LayoutGuideBE;
