import React, { useState, useEffect, useRef } from "react";
import TopBar from "./topBar";
import { FaArrowUp } from "react-icons/fa";
import { blocks, categoryDescriptions } from "./htmlDocData";
import DocumentationFile from "./Documentation";
import { FaAngleDoubleRight } from "react-icons/fa";

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
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
    className={`h-full w-64 bg-gray-400 text-black ${
      isCollapsed ? "hidden" : "block"
    }`}
  >
    <div className="mt-10 mb-10 flex flex-col items-center">
      <div className="mb-10 text-xl">HTML Categories</div>
      <button onClick={toggleSidebar} className="text-black bg-gray-400 rounded active:bg-blue-500 hover:bg-blue-400 px-4 py-2 mb-10">
        Hide bar
      </button>
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

  {/* Button to toggle sidebar */}
  <button
    className={`h-full w-10 bg-blue-400 text-white flex justify-center items-center ${
      isCollapsed ? "block" : "hidden"
    }`}
    onClick={toggleSidebar}
  >
    {isCollapsed ? <FaAngleDoubleRight /> : <FaArrowUp />}
  </button>

  <div className="flex flex-col w-full">
    <div className="w-full h-18 bg-blue-400 text-white flex justify-between items-center px-4">
      <TopBar />
    </div>
    <div
      className="p-4"
      style={{ overflowY: "auto", maxHeight: "calc(100vh - 4rem)" }}
    >
      <div className="pr-10 pl-10">
        {/* Render blocks for each category */}
        {Object.entries(groupedBlocks).map(([category, categoryBlocks], index) => (
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
              <div key={index} className="mb-16 bg-gray-100 justify-between p-8 rounded-xl flex">
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
        ))}
      </div>
    </div>
  </div>
</div>

  );
}

export default HTMLDoc;
