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
  {
    title: "Create an element ID",
    description: "Create an element ID for a html element.",
    image: "#",
    category: "Get Started",
  },
  {
    title: "Log a message to the console",
    description: "Log a message to the console.",
    image: "#",
    category: "Get Started",
  },
  {
    title: "Print the page",
    description: "Print the page using a button click.",
    image: "#",
    category: "Get Started",
  },
  {
    title: "Single-line comment",
    description: "Single-line comment block.",
    image: "#",
    category: "Get Started",
  },
  {
    title: "Multi-line comment",
    description: "Multiple-line comment block.",
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
  {
    title: "Attach an event listener to an HTML element",
    description: "Attach an event listener to an HTML element.",
    image: "#",
    category: "DOM Manipulation",
  },
  {
    title: "Show or hide an HTML element",
    description: "Show or hide an HTML element.",
    image: "#",
    category: "DOM Manipulation",
  },
  {
    title: "Create a custom function",
    description: "Create a custom function.",
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
  {
    title: "Remove the image with a button click",
    description: "Remove the image with a button click.",
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
  {
    title: "Get the data to the backend",
    description: "Pass the data to the backend.",
    image: "#",
    category: "Form Manipulation",
  },
  {
    title: "Clear all input fields in a form",
    description: "Clear name and age fields in a form using a button click.",
    image: "#",
    category: "Form Manipulation",
  },
  {
    title: "Auto-fill name and age",
    description: "Auto fill name and age from a button click.",
    image: "#",
    category: "Form Manipulation",
  },
  {
    title: "Validate the name and age",
    description: "Validattion for the name and age.",
    image: "#",
    category: "Form Manipulation",
  },
  {
    title: "Name condition validation",
    description: "Validation condition for the name.",
    image: "#",
    category: "Form Manipulation",
  },
  {
    title: "Age condition validation",
    description: "Validation condition for the age.",
    image: "#",
    category: "Form Manipulation",
  },
  {
    title: "Change the background color of a form",
    description: "Changing the backgrounf color of the form.",
    image: "#",
    category: "Form Manipulation",
  },
  {
    title: "Show collected data in an alert",
    description: "Show collected data in an alert.",
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
  {
    title: "Show all the tasks",
    description: "Display all the tasks.",
    image: "#",
    category: "Todo blocks",
  },
  {
    title: "Completing a task",
    description: "Compeleted task will be striked through.",
    image: "#",
    category: "Todo blocks",
  },
  {
    title: "Delete a task",
    description: "The task will be deleted and a bin sound will be played.",
    image: "#",
    category: "Todo blocks",
  },
  {
    title: "Search task",
    description: "Search a task from the list.",
    image: "#",
    category: "Todo blocks",
  },
];

function JavascriptDoc() {
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
        <h1 style={{ fontSize: '1.6rem' }}>Javascript Blocks</h1>
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

export default JavascriptDoc;
