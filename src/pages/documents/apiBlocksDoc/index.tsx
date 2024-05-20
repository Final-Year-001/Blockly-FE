/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../topBar";
import { FaArrowUp } from "react-icons/fa";
import Confetti from "react-dom-confetti";
import "./apiBlocksDoc.css";
import { blocks, categoryDescriptions } from "./data";
import avatar from "../../../assets/avatar/avatarW.png";
import play from "../../../assets/avatar/play.png";

// const Badge = ({ title, image }) => (
//   <div style={{ display: "inline-block", marginRight: "10px" }}>
//     <img src={image} alt={title} style={{ width: "50px", height: "50px" }} />
//     <p>{title}</p>
//   </div>
// );

const sideBarColor = "bg-gray-200";
const sideBarHover = "bg-blue-500";
const sideBarActive = "hover:bg-blue-600";
const blueButton =
  "bg-blue-400 hover:bg-blue-500 cursor-pointer active:bg-blue-700 mb-10 p-2 rounded-lg border-black border-2";

function APIBlocksDocPage(): JSX.Element {
  const navigate = useNavigate();

  // Group blocks by category
  const groupedBlocks: {
    [key: string]: any[];
  } = blocks.reduce((acc, block, index) => {
    if (index === 0) {
      // @ts-expect-error - TODO: try to fix this later
      acc["Get Started"] = [];
      // @ts-expect-error - TODO: try to fix this later
      acc["Overview"] = [];
    }

    // @ts-expect-error - TODO: try to fix this later
    acc[block.category] = acc[block.category] || [];
    // @ts-expect-error - TODO: try to fix this later
    acc[block.category].push(block);

    return acc;
  }, {});

  const [showScroll, setShowScroll] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(
    "Get Started"
  );

  // Refs for each category section
  const categoryBlocksRef = useRef<{ [key: string]: HTMLDivElement | null }>(
    {}
  );
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

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
    const categoryBlock = categoryBlocksRef.current["Get Started"];
    if (categoryBlock) {
      categoryBlock.scrollIntoView({ behavior: "smooth", block: "start" });
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
          <div className="mb-10 text-xl ml-4">API Handling categories</div>
          <div
            onClick={() => navigate("/doc-server-creation")}
            className={` ${blueButton} mt-1`}
          >
            Server Creation Doc
          </div>
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
          <div onClick={() => navigate("/doc-database-blocks")} className={` ${blueButton} mt-6`}>
          Database Handling Doc
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div
          className={`w-full h-18 bg-blue-500 text-white flex justify-between items-center px-4`}
        >
          <button
            onClick={toggleSidebar}
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
                  style={{ marginBottom: "30px", marginLeft: "5%" }}
                  id={category}
                  ref={(el) => (categoryBlocksRef.current[category] = el)}
                  className="mb-8"
                >
                  <br />
                  <h2>{category}</h2>
                  {/* Add a sentence about the type of blocks in the category */}
                  {categoryDescriptions[category] && (
                    <p>{categoryDescriptions[category]}</p>
                  )}
                  <br />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "left",
                    }}
                  >
                    {/* Map over the blocks in the category and render each one */}
                    {categoryBlocks.length !== 0 &&
                      categoryBlocks.map((block, index) => (
                        <div
                          key={index}
                          style={{
                            marginBottom: "20px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <div style={{ width: "50%", marginRight: "20px" }}>
                            <h3>
                              {index + 1}. {block.title}
                            </h3>
                            <p>{block.description}</p>
                            <br />
                          </div>
                          <img
                            src={block.image}
                            alt={`icon`}
                            style={{
                              maxWidth: "50%",
                              height: "auto",
                              border: "2px solid #A9A9A9",
                            }}
                          />
                        </div>
                      ))}
                  </div>
                  <hr
                    style={{
                      border: "1px solid #ddd",
                      width: "85%",
                      margin: "20px 5px 20px 5px",
                    }}
                  />
                </div>
              )
            )}
          </div>

          {/* Feedback System with Badges */}
          <h3
            className="badheh3"
            style={{ fontFamily: "Arial, sans-serif", fontSize: "1.5rem" }}
          >
            Your Badges
          </h3>
          <div className="feedback-container">
            <div className="kid-animation">
              <img
                src="/img/Award.gif"
                alt="Kid Animation"
                style={{
                  maxWidth: "250px",
                  maxHeight: "180px",
                  marginLeft: "-70px",
                  marginTop: "10px",
                }}
              />
              <p
                className="caption"
                style={{
                  marginTop: "28px",
                  marginLeft: "-70px",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "1.3rem",
                }}
              >
                {" "}
                Completion Reward
              </p>
            </div>
            <div
              className="mt-16 relative"
              style={{
                width: "250px",
                marginTop: "2px",
                marginLeft: "80px",
                transform: "translateY(-25px)",
              }}
            >
              {isPlaying ? (
                <video width="350" controls autoPlay onEnded={handleVideoEnd}>
                  <source
                    src="https://res.cloudinary.com/dlw1yfobn/video/upload/v1716008459/WebBlockCraft/avatar/20240518_Congratula_1_dsqcmv.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div
                  style={{ position: "relative", width: "70%", height: "100%" }}
                >
                  <img
                    src={avatar}
                    alt="Avatar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <img
                    src={play}
                    alt="Play"
                    onClick={handlePlayButtonClick}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      cursor: "pointer",
                      width: "60px", // Adjust size of the play button as needed
                      height: "60px",
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* footer */}
          <div className="mt-10 bg-blue-600 p-8 flex justify-center w-full">
            <p className="text-center text-white">
              © WebBlockCraft, 2024. All rights reserved.
            </p>
          </div>
        </div>
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
      </div>

      {showScroll && (
        <button
          className="mr-4"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            borderRadius: "50%",
          }}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default APIBlocksDocPage;
