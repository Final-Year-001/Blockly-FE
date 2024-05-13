import { useState, useEffect } from "react";
import TopBar from "./topBar";
import { FaArrowUp } from "react-icons/fa";
import Confetti from "react-dom-confetti";
import './jsstyles.css';

const blocks = [
  // Get started category
  {
    title: "Script block",
    description: "Script block is a container for JavaScript code within an HTML document. It is a designated space where you can embed your scripts, enabling you to impart dynamic behaviors and functionalities to your web pages.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/1_wflwzn.png",
    category: "Get Started",
    maxWidth: { description: '50%', image: '40%' },
  },
  {
    title: "Creating a variable",
    description: "Create a custom variable using this block. Variables act as containers for storing and managing data within your code. By utilizing this block, you gain the ability to dynamically store and manipulate information.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/2_ll2o33.png",
    category: "Get Started",
    maxWidth: { description: '60%', image: '25%' },
  },
  {
    title: "Create an element ID",
    description: "Assign a unique identifier, known as an Element ID, to an HTML element using this block. Element IDs play a pivotal role in web development by providing a way to reference and manipulate specific elements within your web page.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/3_nmszsp.png",
    category: "Get Started",
    maxWidth: { description: '60%', image: '30%' },
  },
  {
    title: "Log a message to the console",
    description: "Log a message to the console. This is employed to track the execution flow, variables, and outputs of their scripts. ",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/4_zcja4m.png",
    category: "Get Started",
    maxWidth: { description: '50%', image: '40%' },
  },
  {
    title: "Print the page",
    description: "By implementing a button click event, you can provide a user-friendly feature for generating a printable version of your content.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304547/WebBlockCraft/JavaScript/5_izblyo.png",
    category: "Get Started",
    maxWidth: { description: '50%', image: '40%' },
  },
  {
    title: "Single-line comment",
    description: "Single-line comment block.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304547/WebBlockCraft/JavaScript/6_kf6lpc.png",
    category: "Get Started",
    maxWidth: { description: '60%', image: '30%' },
  },
  {
    title: "Multi-line comment",
    description: "Multiple-line comment block.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304547/WebBlockCraft/JavaScript/7_l8nwk1.png",
    category: "Get Started",
    maxWidth: { description: '60%', image: '30%' },
  },
  // DOM Manipulation category
  {
    title: "Change the content of an HTML element by ID",
    description: "This block enables you to target and modify the inner content of an element identified by its unique ID.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304547/WebBlockCraft/JavaScript/8_uoimz5.png",
    category: "Action Blocks",
    maxWidth: { description: '50%', image: '40%' },
  },
  {
    title: "Generate a custom alert",
    description: "Empowers you to create personalized alert messages that provide users with essential information or prompt specific actions.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/9_qnagoc.png",
    category: "Action Blocks",
    maxWidth: { description: '50%', image: '40%' },
  },
  {
    title: "Attach an event listener to an HTML element",
    description: "Represents event-driven programming by attaching event listeners to HTML elements within your web page. This block enables you to respond to user interactions such as clicks, mouse movements, or keyboard inputs, facilitating dynamic and interactive user experiences.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/10_lx6x5w.png",
    category: "Action Blocks",
    maxWidth: { description: '50%', image: '40%' },
  },
  {
    title: "Show or hide an HTML element",
    description: "Control the visibility of HTML elements on your web page dynamically. With this block, you can show or hide specific elements based on user actions or predefined conditions.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304547/WebBlockCraft/JavaScript/11_lgbqix.png",
    category: "Action Blocks",
    maxWidth: { description: '50%', image: '40%' },
  },
  {
    title: "Create a custom function",
    description: "Create a custom function encapsulating reusable logic. ",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304547/WebBlockCraft/JavaScript/12_c1b0yn.png",
    category: "Action Blocks",
    maxWidth: { description: '55%', image: '35%' },
  },
  // Sounds & images category
  {
    title: "Play a sound when a button is clicked",
    description: "Incorporating audio feedback into your web application. This block allows you to seamlessly integrate sound effects that play in response to button clicks.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304548/WebBlockCraft/JavaScript/13_jfljhm.png",
    category: "Sounds & Images",
    maxWidth: { description: '55%', image: '35%' },
  },
  {
    title: "Upload and display an image",
    description: "This block guides you through the process of handling image uploads and dynamically presenting them on your webpage.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304548/WebBlockCraft/JavaScript/14_fltg6o.png",
    category: "Sounds & Images",
    maxWidth: { description: '55%', image: '35%' },
  },
  {
    title: "Remove the image with a button click",
    description: "Provide users with control over displayed content by implementing the ability to remove images with a simple button click. ",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304548/WebBlockCraft/JavaScript/15_ysoabu.png",
    category: "Sounds & Images",
    maxWidth: { description: '55%', image: '35%' },
  },
  // Form manipulation category
  {
    title: "Handle form submission",
    description: "Manage form submissions and transmit data to the backend with this block. ",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304549/WebBlockCraft/JavaScript/16_fsxcs6.png",
    category: "Create A Form",
    maxWidth: { description: '50%', image: '40%' },
  },
  {
    title: "Set the form data to a variable",
    description: "Capturing user inputs and storing them in variablesfor for easy access.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304549/WebBlockCraft/JavaScript/17_n7jnsu.png",
    category: "Create A Form",
    maxWidth: { description: '55%', image: '35%' },
  },
  {
    title: "Get the data to the backend",
    description: "Sending the collected form data to the server/backend.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304549/WebBlockCraft/JavaScript/18_e9tuce.png",
    category: "Create A Form",
    maxWidth: { description: '50%', image: '40%' },
  },
  {
    title: "Clear all input fields in a form",
    description: "Clear form data using a button click.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304549/WebBlockCraft/JavaScript/19_r8ol4p.png",
    category: "Create A Form",
    maxWidth: { description: '55%', image: '35%' },
  },
   // ToDo blocks
   {
    title: "Adding a task",
    description: "Add new tasks with a simple button click. ",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1714749948/WebBlockCraft/JavaScript/20_yuzxop.png",
    category: "Create A Todo List",
    maxWidth: { description: '50%', image: '40%' },
  },
  {
    title: "Completing a task",
    description: "This block illustrates how completed tasks are visually distinguished by applying a strikethrough style when the checkbox is clicked",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304549/WebBlockCraft/JavaScript/21_fa63l6.png",
    category: "Create A Todo List",
    maxWidth: { description: '50%', image: '40%' },
  },
  {
    title: "Delete a task",
    description: "Delete unwanted tasks from the todo list. ",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304549/WebBlockCraft/JavaScript/22_fmc2vi.png",
    category: "Create A Todo List",
    maxWidth: { description: '50%', image: '40%' },
  },
];

const Badge = ({ title, image }) => (
  <div style={{ display: 'inline-block', marginRight: '10px' }}>
    <img src={image} alt={title} style={{ width: '50px', height: '50px' }} />
    <p>{title}</p>
  </div>
);

function JavascriptDoc() {
  // Group blocks by category
  const groupedBlocks = blocks.reduce((acc, block) => {
    acc[block.category] = acc[block.category] || [];
    acc[block.category].push(block);
    return acc;
  }, {});

  const [showScroll, setShowScroll] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 250) {
        setShowScroll(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000); 
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
      <h1>Javascript Blocks</h1>
      </div>

      <div>
        {/* Render blocks for each category */}
        {Object.entries(groupedBlocks).map(([category, categoryBlocks], index) => (
          <div key={index} style={{ marginBottom: '30px', marginLeft: '20%' }}>
            <br/>
            <h2>{category}</h2>
            {/* Add a sentence about the type of blocks in the category */}
            {categoryDescriptions[category] && <p>{categoryDescriptions[category]}</p>}
            <br/>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              {/* Map over the blocks in the category and render each one */}
              {categoryBlocks.map((block:any, index:any) => (
                <div key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: block.maxWidth?.description || '50%', marginRight: '20px' }}>
                    <h3>{index + 1}. {block.title}</h3>
                    <p>{block.description}</p><br/>
                  </div>
                  <img src={block.image} alt={`image`} style={{ maxWidth: block.maxWidth?.image || '50%', height: 'auto', border: '2px solid #A9A9A9'}} />
                </div>
              ))}
            </div> 
            <hr style={{ border: '1px solid #ddd', width: '85%', margin: '20px 5px 20px 5px' }} />
          </div>
        ))}
      </div>

      {/* Feedback System with Badges */}
      <h3 className="badheh3">Your Badges</h3>
      <div className="feedback-container">
    
        <div className="kid-animation">
          <img src="/img/js.gif" alt="Kid Animation" style={{ maxWidth: '250px', maxHeight: '200px' }} />
          <p className="caption" style={{ marginTop: '10px' }}>JavaScript Basics</p>
        </div>
        <div className="kid-animation">
          <img src="/img/Award.gif" alt="Kid Animation" style={{ maxWidth: '250px', maxHeight: '180px' }} />
          <p className="caption" style={{ marginTop: '28px' }}> Completion Reward</p>
        </div>
        
      </div>

      <Confetti active={showConfetti} 
      config={{
        angle: 90,
        spread: 75,
        startVelocity: 45,
        elementCount: 80, // Adjust the number of confetti particles
        dragFriction: 0.1,
        duration: 4000,
        stagger: 3,
        width: '10px',
        height: '10px',
        colors: ['#FF0000', '#00FF00', '#0000FF', '#FFA500', '#FFC0CB', '#FFD700', '#00FFFF', '#FF69B4', '#FFFF00']
      }} />
      
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

const categoryDescriptions = {
  "Get Started": "Explore foundational concepts in JavaScript to kickstart your web development journey.",
  "Action Blocks": "Learn how to dynamically manipulate the Document Object Model (DOM) for interactive web experiences.",
  "Sounds & Images": "Incorporate sounds and images into your web applications to enhance user engagement.",
  "Create A Form": "Master the art of handling forms, from submission to interact with backend components.",
  "Create A Todo List": "Create interactive todo blocks to manage tasks efficiently.",
};

export default JavascriptDoc;
