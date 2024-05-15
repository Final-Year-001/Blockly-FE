import { useState, useEffect, useRef } from "react";
import TopBar from "./topBar";
import { FaArrowUp } from "react-icons/fa";
import { blocks } from "./htmlDocData";

function HTMLDoc() {
  // Group blocks by category
  const groupedBlocks = blocks.reduce((acc, block) => {
    acc[block.category] = acc[block.category] || [];
    acc[block.category].push(block);
    return acc;
  }, {});

  const [showScroll, setShowScroll] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // Refs for each category section
  const categoryBlocksRef = useRef({});
  const sidebarRef = useRef(null);

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
      const categorySections = Object.keys(blocksRef).map(category => ({
        category,
        offsetTop: blocksRef[category].offsetTop
      }));

      const currentScroll = window.scrollY + sidebar.offsetHeight;
      const active = categorySections.reduce((closestSection, section) => {
        const sectionTop = section.offsetTop - sidebar.offsetTop;
        if (sectionTop <= currentScroll && sectionTop > closestSection.offsetTop) {
          return section;
        }
        return closestSection;
      }, { category: null, offsetTop: -Infinity });

      // setActiveSection(active.category);
      // There is a bug with this feature not sure how to fix yet
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

  const handleCategoryClick = (category: any) => {
    const topBarHeight = document.querySelector('.bg-blue-600').offsetHeight;
    const targetSectionTop = categoryBlocksRef.current[category].offsetTop - topBarHeight + -24;
    window.scrollTo({ top: targetSectionTop, behavior: "smooth" });
    setActiveSection(category); // Update active section
  };
  
  return (
    <div className="flex h-screen">
      {/* Top Bar */}
      <div className="bg-blue-600 text-black fixed top-0 w-full ">
        <TopBar />
      </div>

      {/* Sidebar */}
      <div className="w-1/6 bg-blue-700 text-white fixed top-20 left-0 h-full" ref={sidebarRef}>
        <div className="mt-10 mb-10 flex flex-col items-center">
          <div className="mb-10 text-xl">Categories</div>
          {/* Render links for each category */}
          {Object.keys(groupedBlocks).map((category, index) => (
            <a
              key={index}
              className={`cursor-pointer w-full pl-6 p-3 hover:bg-amber-600 ${activeSection === category ? 'bg-amber-500' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-5/6 p-10 ml-auto">
        {/* Content */}
        <div className="pr-10 pl-10">
          {/* Render blocks for each category */}
          {Object.entries(groupedBlocks).map(([category, categoryBlocks], index) => (
            <div key={index} id={category} ref={(el) => (categoryBlocksRef.current[category] = el)} className="mb-8">
              <div className="text-3xl font-semibold mt-16 mb-8">{category}</div>
              {/* Map over the blocks in the category and render each one */}
              {categoryBlocks.map((block, index) => (
                <div key={index} className="mb-16">
                  <div className="flex flex-col mb-2">
                    <div className="mr-4 mb-2 text-2xl">
                      {index + 1}. {block.title}
                    </div>
                    <div>{block.description}</div>
                  </div>
                  <img src={block.image} alt={`image`} width={200} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to top button */}
      {showScroll && (
        <div
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: "10px",
            borderRadius: "50%",
          }}
        >
          <FaArrowUp size={20} />
        </div>
      )}
    </div>
  );
}

export default HTMLDoc;
