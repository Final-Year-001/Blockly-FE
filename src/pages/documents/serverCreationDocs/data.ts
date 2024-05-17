export const categoryDescriptions = {
  "Get Started":
    "Welcome to backend!,this section is designed to simplify the creation of Node.js and Express backend applications using Blockly blocks. This tool is ideal for both beginners that has some idea about basic coding, has played a little in frontend, and experienced developers who want to streamline the backend development process through an intuitive, visual programming interface. In this section, we'll provide a comprehensive overview of how to get started with the application, focusing on server creation and essential middleware setup. \n \n Overview",
  Overview:
    "Our application leverages Blockly to enable you to construct a fully-functional Node.js and Express backend using drag-and-drop blocks. Whether you're new to backend development or looking for a more efficient way to prototype and build servers, this tool has you covered. Here's a brief rundown of what you can expect in this section:",
  "Sounds & Images":
    "Incorporate sounds and images into your web applications to enhance user engagement.",
  "Create A Form":
    "Master the art of handling forms, from submission to interact with backend components.",
  "Create A Todo List":
    "Create interactive todo blocks to manage tasks efficiently.",
};

export const blocks = [
  // Get started category
  {
    title: "Server Creation Block",
    description:
      "Learn how to utilize the server creation block to set up the basic structure of your backend application. This block forms the foundation, ensuring your server is ready to handle requests and responses.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/1_wflwzn.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "General Middleware",
    description:
      "Discover how to incorporate essential middleware into your application. Middleware such as Helmet for security, compression for performance, CORS for cross-origin requests, and Express's JSON and URL encoder functionalities will be covered. These are crucial for enhancing the security, efficiency, and usability of your server.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/1_wflwzn.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "JSON Handler Blocks",
    description:
      "Understand how to manage JSON data with specialized blocks designed to parse, manipulate, and respond with JSON, making it easy to handle API requests and responses.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/1_wflwzn.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Custom Block",
    description:
      "Explore the power of custom blocks. This section will explain the two main types of custom blocks available, allowing you to extend the functionality of your application with reusable code snippets tailored to your specific needs.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/1_wflwzn.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "JSON Handler Blocks",
    description:
      "Script block is a container for JavaScript code within an HTML document. It is a designated space where you can embed your scripts, enabling you to impart dynamic behaviors and functionalities to your web pages.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/1_wflwzn.png",
    category: "Server Creation Block",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Custom Block",
    description:
      "Script block is a container for JavaScript code within an HTML document. It is a designated space where you can embed your scripts, enabling you to impart dynamic behaviors and functionalities to your web pages.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/1_wflwzn.png",
    category: "Server Creation Block",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Custom Blocks",
    description:
      "Create a custom variable using this block. Variables act as containers for storing and managing data within your code. By utilizing this block, you gain the ability to dynamically store and manipulate information.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/2_ll2o33.png",
    category: "General Middlewars",
    maxWidth: { description: "60%", image: "25%" },
  },
  {
    title: "Create an element ID",
    description:
      "Assign a unique identifier, known as an Element ID, to an HTML element using this block. Element IDs play a pivotal role in web development by providing a way to reference and manipulate specific elements within your web page.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/3_nmszsp.png",
    category: "JSON Handler Blocks",
    maxWidth: { description: "60%", image: "30%" },
  },
  {
    title: "Log a message to the console",
    description:
      "Log a message to the console. This is employed to track the execution flow, variables, and outputs of their scripts. ",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1712304546/WebBlockCraft/JavaScript/4_zcja4m.png",
    category: "Custom Blocks",
    maxWidth: { description: "50%", image: "40%" },
  },
];
