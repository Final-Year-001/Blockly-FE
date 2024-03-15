import { useState, useEffect } from "react";
import TopBar from "./topBar";
import { FaArrowUp } from "react-icons/fa";

const blocks = [
  // Get started category
  {
    title: "Script block",
    description: "JavaScript code should be wrapped in this tag.",
    image: "#",
    category: "Get Started",
  },
  {
    title: "Creating a variable",
    description: "Create a custom variable using this block.",
    image: "#",
    category: "Get Started",
  },

  // DOM Manipulation category
  {
    title: "Change the content of an HTML element by ID",
    description: "Change the content of an HTML element by ID.",
    image: "#",
    category: "DOM Manipulation",
  },
  {
    title: "Generate a custom alert",
    description: "Generate a custom alert.",
    image: "#",
    category: "DOM Manipulation",
  },
  
  // Sounds & images category
  {
    title: "Play a sound when a button is clicked",
    description: "Play a sound when a button is clicked.",
    image: "#",
    category: "Sounds & Images",
  },
  {
    title: "Upload and display an image",
    description: "Upload and display an image.",
    image: "#",
    category: "Sounds & Images",
  },
  // Form manipulation category
  {
    title: "Handle form submission",
    description: "Handle form submission and send the data to the backend.",
    image: "#",
    category: "Form Manipulation",
  },
  {
    title: "Set the form data to a variable",
    description: "Set the form data to a variable for easy access.",
    image: "#",
    category: "Form Manipulation",
  },
   // ToDo blocks
   {
    title: "Adding a task",
    description: "Create a new task, a bell sound will be played when the task is added.",
    image: "#",
    category: "Todo blocks",
  },
];

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
    <div style={{ paddingLeft: '10px' }}>
      <div id="TopBar">
        <TopBar />
      </div>

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <h1 style={{ fontSize: '1.6rem' }}>HTML Blocks</h1>
      </div>

      <div>
        {/* Render blocks for each category */}
        {Object.entries(groupedBlocks).map(([category, categoryBlocks], index) => (
          <div key={index} style={{ marginBottom: '30px', marginLeft: '20%' }}>
            <br/>
            <h2 style={{ textDecoration: 'underline' }}>{category}</h2> <br/>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              {/* Map over the blocks in the category and render each one */}
              {categoryBlocks.map((block:any, index:any) => (
                <div key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '20px' }}>
                    <h3>{index + 1}. {block.title}</h3>
                    <p>{block.description}</p>
                  </div>
                  <img src={block.image} alt={`image`} style={{ maxWidth: '100px', marginLeft:'10px' }} />
                </div>
              ))}
            </div>
          </div>
        ))}
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
