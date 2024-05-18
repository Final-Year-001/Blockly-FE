import React, { useState } from "react";
import top from "../../../assets/LayoutTour/1.png";
import btns from "../../../assets/LayoutTour/2.png";
import sb from "../../../assets/LayoutTour/3.png";
import wa from "../../../assets/LayoutTour/4.png";
import oa from "../../../assets/LayoutTour/5.png";
import tt from "../../../assets/LayoutTour/6.png";
import { blueButton } from "../../../assets/buttons/Buttons";

const style = "transition  duration-100 cursor-pointer relative";
const highlight = "border-4 border-red-500 ";

const topBarContent =
  "This is the top bar section. You can see our beautiful logo here. This logo has a secret that nobody knows. Its pretending to be something else. woah whats that you ask? its a hidden button. Yes you heard me right its a button you can click. You click this to go back from the builder interface.";
const buttonsContent =
  "These buttons allows you to do stuff. Preview code button will expand your code. You can do alot of experimentation with this. inside there's a download option to download your code. Pretty nice ya? Tutorial will take you to the documentation. So if you are feeling lost then go ahead and click that button. Now the last button should be easy for you to understand.";
const sideBarContent =
  "This is where you will find all your blocks. You can even search from the search bar. Everything you need will be nicely categoriesed. simply click on a menu which will expand to reveal more options for you to choose from.";
const workAreaContent =
  "This is the most important part. This is your work area. So you drag and drop blocks to here and you play and experiment with them here. You can zoom or zoom out using your mouse scroll wheel or by using those on screen + and - icons. By dragging blocks to the trash icon, you can delete blocks.";
const outputContent =
  "This is your outpur area. This particular tab is the code output tab. Tabs? yes tabs. You have other tabs as well but lets talk about what this section do. So basically when you play and experiment with your blocks, This area will show the code that is magically generated from what you made. Thats some alien sciency mambo jumbo that even i dont understand but pretty cool.";
const outputTabs =
  "Theese tabs will allow you to view your creation in different views. As I explained earlier the code tab will give you the code. What about Iframe? That gives your code in a visual format. This is my favourtite one because you get to SEE what you made. Then the console. This guy is for viewing additional information such as error messages and notifications when building a website";

function LayoutGuideFE() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex w-full">
      <div className="w-9/12">
        <div className="flex">
          <div
            className={style}
            onClick={() => setSelected(1)}
          >
            <div
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black  ${
                selected == 1 && highlight
              } ${
                selected == 1
                  ? "bg-opacity-0"
                  : "bg-opacity-40 hover:opacity-0 font-bold text-lg z-10"
              } `}
            >
              1
            </div>
            <img src={top} alt="layoutImgComp" />
          </div>
          <div
            className={style}
            onClick={() => setSelected(2)}
          >
            <div
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black  ${
                selected == 2 && highlight
              } ${
                selected == 2
                  ? "bg-opacity-0"
                  : "bg-opacity-40 hover:opacity-0 font-bold text-lg z-10"
              } `}
            >
              2
            </div>
            <img src={btns} alt="layoutImgComp" />
          </div>
        </div>
        <div className="flex">
          <div
            className={style}
            onClick={() => setSelected(3)}
          >
            <div
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black  ${
                selected == 3 && highlight
              } ${
                selected == 3
                  ? "bg-opacity-0"
                  : "bg-opacity-40 hover:opacity-0 font-bold text-lg z-10"
              } `}
            >
              3
            </div>
            <img src={sb} alt="layoutImgComp" />
          </div>
          <div
            className={style}
            onClick={() => setSelected(4)}
          >
            <div
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black  ${
                selected == 4 && highlight
              } ${
                selected == 4
                  ? "bg-opacity-0"
                  : "bg-opacity-40 hover:opacity-0 font-bold text-lg z-10"
              } `}
            >
              4
            </div>
            <img src={wa} alt="layoutImgComp" />
          </div>
          <div className="bg-green-200">
            <div
              className={style}
              onClick={() => setSelected(6)}
            >
              <div
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black  ${
                  selected == 6 && highlight
                } ${
                  selected == 6
                    ? "bg-opacity-0"
                    : "bg-opacity-40 hover:opacity-0 font-bold text-lg z-10"
                } `}
              >
                6
              </div>
              <img src={tt} alt="layoutImgComp" />
            </div>
            <div
              className={style}
              onClick={() => setSelected(5)}
            >
              <div
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black  ${
                  selected == 5 && highlight
                } ${
                  selected == 5
                    ? "bg-opacity-0 text-white"
                    : "bg-opacity-40 hover:opacity-0 font-bold text-gray-500 text-lg z-10"
                } `}
              >
                5
              </div>
              <img src={oa} alt="layoutImgComp" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/12">
        <div className="bg-white p-6 shadow-lg mx-4 text-justify rounded-lg">
          {selected == 0 && (
            <div>
              <div className="text-2xl">Start Tour</div>
              <div>
                This will quickly show what are the main components of the
                frontend builder. You can get a quick idea where things are with
                this. Click start to begin
              </div>
              <div
                onClick={() => setSelected(1)}
                className={`${blueButton} mt-10 flex shadow`}
              >
                Start
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          )}
          {selected == 1 && (
            <div>
              <div className="text-2xl">Top Bar</div>
              <div>{topBarContent}</div>
              <div className="flex justify-end mt-4 gap-4">
                <div
                  onClick={() => setSelected(selected - 1)}
                  className={`${blueButton} px-6`}
                >
                  Back
                </div>
                <div
                  onClick={() => setSelected(selected + 1)}
                  className={`${blueButton} px-6`}
                >
                  Next
                </div>
              </div>
            </div>
          )}
          {selected == 2 && (
            <div>
              <div className="text-2xl">Buttons Bar</div>
              <div>{buttonsContent}</div>
              <div className="flex justify-end mt-4 gap-4">
                <div
                  onClick={() => setSelected(selected - 1)}
                  className={`${blueButton} px-6`}
                >
                  Back
                </div>
                <div
                  onClick={() => setSelected(selected + 1)}
                  className={`${blueButton} px-6`}
                >
                  Next
                </div>
              </div>
            </div>
          )}
          {selected == 3 && (
            <div>
              <div className="text-2xl">Side Bar</div>
              <div>{sideBarContent}</div>
              <div className="flex justify-end mt-4 gap-4">
                <div
                  onClick={() => setSelected(selected - 1)}
                  className={`${blueButton} px-6`}
                >
                  Back
                </div>
                <div
                  onClick={() => setSelected(selected + 1)}
                  className={`${blueButton} px-6`}
                >
                  Next
                </div>
              </div>
            </div>
          )}
          {selected == 4 && (
            <div>
              <div className="text-2xl">Work Area</div>
              <div>{workAreaContent}</div>
              <div className="flex justify-end mt-4 gap-4">
                <div
                  onClick={() => setSelected(selected - 1)}
                  className={`${blueButton} px-6`}
                >
                  Back
                </div>
                <div
                  onClick={() => setSelected(selected + 1)}
                  className={`${blueButton} px-6`}
                >
                  Next
                </div>
              </div>
            </div>
          )}
          {selected == 5 && (
            <div>
              <div className="text-2xl">Output Area</div>
              <div>{outputContent}</div>
              <div className="flex justify-end mt-4 gap-4">
                <div
                  onClick={() => setSelected(selected - 1)}
                  className={`${blueButton} px-6`}
                >
                  Back
                </div>
                <div
                  onClick={() => setSelected(selected + 1)}
                  className={`${blueButton} px-6`}
                >
                  Next
                </div>
              </div>
            </div>
          )}
          {selected == 6 && (
            <div>
              <div className="text-2xl">Output Tabs</div>
              <div>{outputTabs}</div>
              <div className="flex justify-end mt-4 gap-4">
                <div
                  onClick={() => setSelected(selected - 1)}
                  className={`${blueButton} px-6`}
                >
                  Back
                </div>
                <div
                  onClick={() => setSelected(0)}
                  className={`${blueButton} px-6`}
                >
                  Finish
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LayoutGuideFE;
