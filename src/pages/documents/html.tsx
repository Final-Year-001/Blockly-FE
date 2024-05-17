import React, { useState, useEffect, useRef } from "react";
import TopBar from "./topBar";
import { FaArrowUp } from "react-icons/fa";
import { blocks, categoryDescriptions } from "./htmlDocData";
import { useNavigate } from "react-router-dom";
import Confetti from "react-dom-confetti";

const cardColor = "bg-white/0";
const sideBarColor = "bg-gray-200";
const sideBarHover = "bg-blue-500";
const sideBarActive = "hover:bg-blue-600";
const blueButton =
  "bg-blue-400 hover:bg-blue-500 cursor-pointer active:bg-blue-700 mb-10 p-2 rounded-lg border-black border-2";

function HTMLDoc(): JSX.Element {
  const navigate = useNavigate();

  // Group blocks by category
  const groupedBlocks: { [key: string]: Block[] } = blocks.reduce(
    (acc, block) => {
      acc[block.category] = acc[block.category] || [];
      acc[block.category].push(block);
      return acc;
    },
    {}
  );

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(
    "Get Started"
  );
  const [confettiActive, setConfettiActive] = useState<boolean>(false);

  // Refs for each category section
  const categoryBlocksRef = useRef<{ [key: string]: HTMLDivElement | null }>(
    {}
  );
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollTop = scrollContainerRef.current.scrollTop;
        const scrollHeight = scrollContainerRef.current.scrollHeight;
        const clientHeight = scrollContainerRef.current.clientHeight;

        setShowScroll(scrollTop > 300);

        if (scrollTop + clientHeight >= scrollHeight - 1) {
          setConfettiActive(true);
          setTimeout(() => setConfettiActive(false), 3000);
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleCategoryClick = (category: string) => {
    const categoryBlock = categoryBlocksRef.current[category];
    if (categoryBlock) {
      categoryBlock.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(category); // Update active section
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`h-full ${sideBarColor} text-black transition-all ${
          isCollapsed ? "w-0" : "w-64 block"
        }`}
      >
        <div
          className={`mt-10 mb-10 flex flex-col items-center transition delay-300  ${
            isCollapsed ? "hidden" : "block"
          } `}
        >
          <div className="mb-10 text-xl">HTML Categories</div>
          {/* Render links for each category */}
          {Object.keys(groupedBlocks).map((category, index) => (
            <a
              key={index}
              className={`cursor-pointer w-full pl-6 p-3 ${sideBarActive} ${
                activeSection === category ? `${sideBarHover} text-black` : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </a>
          ))}
          <div
            onClick={() => navigate("/doc-css")}
            className={` ${blueButton} mt-10`}
          >
            CSS Doc
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div
          className={`w-full h-18 bg-blue-500 text-white flex justify-between items-center px-4`}
        >
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-black bg-gray-500 border-black border-2 rounded active:bg-blue-800 hover:bg-blue-700 p-2"
          >
            {isCollapsed ? (
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
            ) : (
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
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            )}
          </button>
          <TopBar onPage="documentation" />
        </div>
        <div
          className=""
          style={{ overflowY: "auto", maxHeight: "calc(100vh - 4rem)" }}
          ref={scrollContainerRef}
        >
          <div className="pr-10 pl-10">
            {/* Render blocks for each category */}
            {Object.entries(groupedBlocks).map(
              ([category, categoryBlocks], index) => (
                <div
                  key={index}
                  id={category}
                  ref={(el) => (categoryBlocksRef.current[category] = el)}
                  className="mb-8"
                >
                  <div className="text-4xl font-semibold mt-2">{category}</div>
                  {/* Render category description */}
                  <div className="mb-8 text-xl text-justify ">
                    {categoryDescriptions[category]}
                  </div>
                  {/* Map over the blocks in the category and render each one */}
                  {categoryBlocks.map((block, index) => (
                    <div
                      key={index}
                      className={`mb- ${cardColor} p-8 rounded-xl flex flex-col`}
                    >
                      <div className="mb-2 text-3xl text-gray-700 border-b-2 border-gray-200 pb-2 w-2/3">
                        {block.title}
                      </div>
                      <div className="justify-between mt-4 w-full flex">
                        <div className="w-4/6 ">
                          <div className="flex  flex-col">
                            <div className="text-xl text-gray-600 text-justify">
                              {block.description}
                            </div>
                          </div>
                        </div>

                        <div className="w-2/6 px-8">
                          <img
                            src={block.image}
                            alt={`image`}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>

          {/* footer */}
          <div className="mt-10 bg-blue-600 p-8 flex justify-center w-full">
            <p className="text-center text-white">
              © WebBlockCraft, 2024. All rights reserved.
            </p>
          </div>
        </div>

        {/* Confetti Component */}
        <Confetti
          active={confettiActive}
          config={{
            angle: 90,
            spread: 75,
            startVelocity: 45,
            elementCount: 400, // Adjust the number of confetti particles
            dragFriction: 0.1,
            duration: 2000,
            stagger: 3,
            width: "10px",
            height: "10px",
            colors: [
              "#FF0000",
              "#00FF00",
              "#0000FF",
              "#FFA500",
              "#FFC0CB",
              "#FFD700",
              "#00FFFF",
              "#FF69B4",
              "#FFFF00",
            ],
          }}
        />

        {/* Scroll to Top Button */}
        {showScroll && (
          <div
            className="mr-4"
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              cursor: "pointer",
              backgroundColor: "#202020",
              color: "white",
              padding: "10px",
              borderRadius: "50%",
            }}
          >
            <FaArrowUp size={23} />
          </div>
        )}
      </div>
    </div>
  );
}

export default HTMLDoc;
