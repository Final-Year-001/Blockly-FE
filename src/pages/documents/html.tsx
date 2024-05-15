import React, { useState, useEffect, useRef } from "react";
import TopBar from "./topBar";
import { FaArrowUp } from "react-icons/fa";
import { blocks, categoryDescriptions } from "./htmlDocData";
import DocumentationFile from "./Documentation";
import { FaAngleDoubleRight } from "react-icons/fa";

const cardColor = "bg-gray-100"
const topBarColor = "bg-blue-400"
const sideBarColor = "bg-gray-400"

interface Block {
  category: string;
  title: string;
  description: string;
  image: string;
}

interface CategoryDescriptions {
  [key: string]: string;
}

function HTMLDoc(): JSX.Element {
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

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [showScroll, setShowScroll] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(
    "Get Started"
  );

  // Refs for each category section
  const categoryBlocksRef = useRef<{ [key: string]: HTMLDivElement | null }>(
    {}
  );
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }

      // Find the active section based on scroll position
      const { current: sidebar } = sidebarRef;
      const { current: blocksRef } = categoryBlocksRef;
      const categorySections = Object.keys(blocksRef).map((category) => ({
        category,
        offsetTop: blocksRef[category]!.offsetTop,
      }));

      const currentScroll = window.scrollY + sidebar!.offsetHeight;
      const active = categorySections.reduce(
        (closestSection, section) => {
          const sectionTop = section.offsetTop - sidebar!.offsetTop;
          if (
            sectionTop <= currentScroll &&
            sectionTop > closestSection.offsetTop
          ) {
            return section;
          }
          return closestSection;
        },
        { category: null, offsetTop: -Infinity }
      );

      // setActiveSection(active.category);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        <div className={`mt-10 mb-10 flex flex-col items-center transition delay-300  ${isCollapsed ? 'hidden': 'block'} `}>
          <div className="mb-20 text-xl">HTML Categories</div>
          {/* Render links for each category */}
          {Object.keys(groupedBlocks).map((category, index) => (
            <a
              key={index}
              className={`cursor-pointer w-full pl-6 p-3 hover:bg-amber-600 ${
                activeSection === category ? "bg-amber-500 text-black" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </a>
          ))}
        </div>
      </div>

    

      <div className="flex flex-col w-full">
        <div className={`w-full h-18 ${topBarColor} text-white flex justify-between items-center px-4`}>
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
          <TopBar />
        </div>
        <div
          className="p-4"
          style={{ overflowY: "auto", maxHeight: "calc(100vh - 4rem)" }}
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
                  <div className="text-3xl font-semibold mt-16">{category}</div>
                  {/* Render category description */}
                  <div className="mb-8">{categoryDescriptions[category]}</div>
                  {/* Map over the blocks in the category and render each one */}
                  {categoryBlocks.map((block, index) => (
                    <div
                      key={index}
                      className={`mb-8 ${cardColor} justify-between p-8 rounded-xl flex`}
                    >
                      <div className="">
                        <div className="flex  flex-col mb-2">
                          <div className="mb-2 text-2xl">
                            {index + 1}. {block.title}
                          </div>
                          <div>{block.description}</div>
                        </div>
                      </div>

                      <div className=" w-2/6  flex justify-end">
                        <img src={block.image} alt={`image`} width={300} />
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {showScroll && (
        <div
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            backgroundColor: "#C70039",
            color: "white",
            padding: "10px",
            borderRadius: "50%",
          }}
        >
          <FaArrowUp size={23} />
        </div>
      )}
    </div>
  );
}

export default HTMLDoc;
