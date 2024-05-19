import {
  CompressResponsesMIddleware,
  CorsMiddleware,
  DeclareJSONObjectBlock,
  ExpressJSONMiddleware,
  ExpressRawMiddleware,
  ExpressTextMiddleware,
  ExpressURLEncodedMiddleware,
  KeyChainBlock,
  ServerHelmetDescription,
  SetValueBlock,
  StatementOutputBlock,
  ValueOfBlock,
  ValueOutputBlock,
} from "./serverCreationBlocksSection/generalMiddlewareSections";

export const categoryDescriptions = {
  "Get Started":
    "Welcome to backend!,this section is designed to simplify the creation of Node.js and Express backend applications using Blockly blocks. This tool is ideal for both beginners that has some idea about basic coding, has played a little in frontend, and experienced developers who want to streamline the backend development process through an intuitive, visual programming interface. In this section, we'll provide a comprehensive overview of how to get started with the application, focusing on server creation and essential middleware setup. \n \n Overview",
  Overview:
    "Our application leverages Blockly to enable you to construct a fully-functional Node.js and Express backend using drag-and-drop blocks. Whether you're new to backend development or looking for a more efficient way to prototype and build servers, this tool has you covered. Here's a brief rundown of what you can expect in this section:",
  "Server Creation Block":
    "The server creation block is your starting point for any backend project. This block sets up an Express server, initializes essential configurations, and prepares your application to handle incoming requests. Here’s how to use it:",
  "General Middlewars":
    "Middleware functions are essential for handling various aspects of request processing in Express applications. Our application provides blocks for commonly used middleware, allowing you to easily add them to your server. Let's delve into the details of each middleware block, starting with the Helmet guard.",
  "JSON Handler Blocks":
    "Our application provides several JSON handler blocks to help you manage and manipulate JSON objects easily. These blocks allow you to declare JSON objects, extract values from them, and set values within nested objects. Here is a detailed explanation of each block for beginners:",
  "Custom Blocks":
    "In addition to the predefined blocks, our application also provides custom blocks that allow users to write and integrate their own code directly within the block-based environment. This flexibility is particularly useful for experienced coders who want to write custom logic or handle specific cases that are not covered by the existing blocks. Here’s an explanation of the two types of custom blocks:",
};

export const blocks = [
  // Get started category
  {
    title: "Server Creation Block",
    description:
      "Learn how to utilize the server creation block to set up the basic structure of your backend application. This block forms the foundation, ensuring your server is ready to handle requests and responses.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716015183/WebBlockCraft/ServerCreation/d39fdac1-32c5-46c4-8bc8-0b71e4221f7a.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "General Middleware",
    description:
      "Discover how to incorporate essential middleware into your application. Middleware such as Helmet for security, compression for performance, CORS for cross-origin requests, and Express's JSON and URL encoder functionalities will be covered. These are crucial for enhancing the security, efficiency, and usability of your server.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716015263/WebBlockCraft/ServerCreation/22df9277-5867-418e-9992-ecacbf0cbe14.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Custom Block",
    description:
      "Explore the power of custom blocks. This section will explain the two main types of custom blocks available, allowing you to extend the functionality of your application with reusable code snippets tailored to your specific needs.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716016261/WebBlockCraft/ServerCreation/96bdfc7a-7d63-422e-a3d7-5d2752bbc8c4.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "JSON Handler Blocks",
    description:
      "Understand how to manage JSON data with specialized blocks designed to parse, manipulate, and respond with JSON, making it easy to handle API requests and responses.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716015844/WebBlockCraft/ServerCreation/e37f88c3-4c98-4e86-a806-92fad71f8056.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Drag and Drop the Server Block:",
    description:
      "Begin by locating the server creation block in the toolbox and dragging it into the workspace. This block automatically includes the necessary setup code to initialize an Express application.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716018438/WebBlockCraft/ServerCreation/0029a605-ac2a-4761-911e-943cf31b6ca5.png",
    category: "Server Creation Block",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Configure the Server:",
    description:
      "Within the block, you can configure settings such as the server port, middleware stack, and initial route handlers. This ensures your server is ready to respond to requests right out of the gate. Speically the purple color blocks are always the first level of blocks and green color blocks are the secend level blocks.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716018557/WebBlockCraft/ServerCreation/242b45c7-8641-438b-a43b-12fc15ea156d.png",
    category: "Server Creation Block",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Server Helmet Guard",
    description: <ServerHelmetDescription />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716025743/WebBlockCraft/ServerCreation/1a9c3d37-1239-404e-bf3b-2d3c60789264.png",
    category: "General Middlewars",
    maxWidth: { description: "60%", image: "25%" },
  },
  {
    title: "Compress Responses Middleware",
    description: <CompressResponsesMIddleware />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716026689/WebBlockCraft/ServerCreation/0762f2c9-6689-4246-94af-9bf9b4f83825.png",
    category: "General Middlewars",
    maxWidth: { description: "60%", image: "25%" },
  },
  {
    title: "Cors Middleware",
    description: <CorsMiddleware />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716027464/WebBlockCraft/ServerCreation/ff7e2e0e-6572-4735-a4bd-4072e054e7b8.png",
    category: "General Middlewars",
    maxWidth: { description: "60%", image: "25%" },
  },
  {
    title: "Express JSON Middleware",
    description: <ExpressJSONMiddleware />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716030623/WebBlockCraft/ServerCreation/9dd98add-b4b9-47c6-b399-27f3dbae702a.png  ",
    category: "General Middlewars",
    maxWidth: { description: "60%", image: "25%" },
  },
  {
    title: "Express URL Encoded Middleware",
    description: <ExpressURLEncodedMiddleware />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716030679/WebBlockCraft/ServerCreation/897e2d2e-4dd5-4d29-93d8-4efb69e75c08.png",
    category: "General Middlewars",
    maxWidth: { description: "60%", image: "25%" },
  },
  {
    title: "Express Text Middleware",
    description: <ExpressTextMiddleware />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716030767/WebBlockCraft/ServerCreation/4630614e-3307-40cc-b5bc-3dec43855a25.png",
    category: "General Middlewars",
    maxWidth: { description: "60%", image: "25%" },
  },
  {
    title: "Express Raw Middleware",
    description: <ExpressRawMiddleware />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716030860/WebBlockCraft/ServerCreation/10396211-383d-4b84-89e5-82068401e3fe.png",
    category: "General Middlewars",
    maxWidth: { description: "60%", image: "25%" },
  },
  {
    title: "Declare JSON Object Block",
    description: <DeclareJSONObjectBlock />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716046317/WebBlockCraft/ServerCreation/a9298ddb-4140-4c3d-8836-d6e3d5628724.png",
    category: "JSON Handler Blocks",
    maxWidth: { description: "60%", image: "30%" },
  },
  {
    title: "Value Of Block",
    description: <ValueOfBlock />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716046414/WebBlockCraft/ServerCreation/9ce4d5b3-2a3c-402d-a898-57c003412bc9.png",
    category: "JSON Handler Blocks",
    maxWidth: { description: "60%", image: "30%" },
  },
  {
    title: "Set Value Block",
    description: <SetValueBlock />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716046464/WebBlockCraft/ServerCreation/42f58fbf-2ce5-4e7f-b6fe-849c7d5e67da.png",
    category: "JSON Handler Blocks",
    maxWidth: { description: "60%", image: "30%" },
  },
  {
    title: "Key Chain Block",
    description: <KeyChainBlock />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716046643/WebBlockCraft/ServerCreation/9362be75-23b1-4c84-8790-7e103869385b.png",
    category: "JSON Handler Blocks",
    maxWidth: { description: "60%", image: "30%" },
  },
  {
    title: "Statement Output Block",
    description: <StatementOutputBlock />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716050250/WebBlockCraft/ServerCreation/561d2e45-7245-4b77-9d0a-a08ee8c60a80.png",
    category: "Custom Blocks",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Value Output Block",
    description: <ValueOutputBlock />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716050489/WebBlockCraft/ServerCreation/26091291-0816-4a20-8ac2-a081380af03c.png",
    category: "Custom Blocks",
    maxWidth: { description: "50%", image: "40%" },
  },
];
