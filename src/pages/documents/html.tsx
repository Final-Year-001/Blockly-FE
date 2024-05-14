import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
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

  return (
    <div className="">
      <div id="TopBar">
        <TopBar />
      </div>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <h1 style={{ fontSize: "1.6rem" }}>HTML Blocks</h1>
      </div>

      <div>
        {/* Render blocks for each category */}
        {Object.entries(groupedBlocks).map(
          ([category, categoryBlocks], index) => (
            <div key={index} style={{ marginBottom: "30px" }}>
              <br />
              <h2 className="ml-20" style={{ textDecoration: "underline" }}>
                {category}
              </h2>{" "}
              <br />
              <div
              className="bg-gray-100"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                }}
              >
                {/* Map over the blocks in the category and render each one */}
                {categoryBlocks.map((block: any, index: any) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div className=" flex w-full px-40">
                      <div className=" bg-gray-200 w-4/6">
                        <div>
                          <h3>
                            {index + 1}. {block.title}
                          </h3>
                          <p>{block.description}</p>
                        </div>
                      </div>
                      <div className="bg-gray-400 w-2/6 flex justify-center">
                        <img
                          src={block.image}
                          alt={`image`}
                          height={200}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>

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
