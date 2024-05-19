import {
  EndSession,
  IsSessionAvailable,
  SaveSession,
  SessionCerate,
  SessionMiddleware,
  SessionSetToAVariable,
} from "./authenticationBlocksSections/sessionHandling";

export const categoryDescriptions = {
  "Get Started":
    "To get started with authentication in your application, you will need to use session handling and JWT authentication blocks. These blocks allow you to manage user sessions and secure your application. This section will focus on session handling, detailing each block and its functionality.",
  Overview:
    "Session handling is a method of tracking user interactions with your application. It allows you to store user-specific data across different requests. This can include user authentication status, preferences, and other session-related information. Our session handling blocks make it easy to implement and manage sessions in your Express application.",
  "Session handling":
    "Session handling in our application is facilitated through several blocks, each designed to handle different aspects of session management. Here are the detailed descriptions of each block:",
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
    title: "Session Middleware",
    description: <SessionMiddleware />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716097618/WebBlockCraft/Auth/1c55b825-1294-48e6-bbf3-07d42076a45a.png",
    category: "Session handling",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Session Create",
    description: <SessionCerate />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716098037/WebBlockCraft/Auth/auth_WBC_2_l0nqzi.png",
    category: "Session handling",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Session Set to a Variable",
    description: <SessionSetToAVariable />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716098201/WebBlockCraft/Auth/6999b6f6-3da7-4a9f-82d7-af66e8482a67.png",
    category: "Session handling",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Save Session",
    description: <SaveSession />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716098258/WebBlockCraft/Auth/f792e01a-3fe2-4a15-88f2-67b1b5b7ab7d.png",
    category: "Session handling",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "End Session",
    description: <EndSession />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716098371/WebBlockCraft/Auth/62999c41-93f3-4567-be60-16cf3cee6585.png",
    category: "Session handling",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Is Session Available",
    description: <IsSessionAvailable />,
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716098440/WebBlockCraft/Auth/1fa5bf5e-512f-431e-a031-255a49ab0fdc.png",
    category: "Session handling",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Authenticate JWT Middleware",
    description:
      "Understand how to manage JSON data with specialized blocks designed to parse, manipulate, and respond with JSON, making it easy to handle API requests and responses.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716100877/WebBlockCraft/Auth/71f8a944-2ce6-47ea-9b9f-aa627d9b9423.png",
    category: "JWT handling",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Create and get jwt token",
    description:
      "Begin by locating the server creation block in the toolbox and dragging it into the workspace. This block automatically includes the necessary setup code to initialize an Express application.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716100775/WebBlockCraft/Auth/ab7e35c1-242b-4c2f-9119-edd32f234552.png",
    category: "JWT handling",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Hash password",
    description:
      "Within the block, you can configure settings such as the server port, middleware stack, and initial route handlers. This ensures your server is ready to respond to requests right out of the gate. Speically the purple color blocks are always the first level of blocks and green color blocks are the secend level blocks.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716100959/WebBlockCraft/Auth/3ea9b4b7-8281-4963-af2f-13d70554bfc2.png",
    category: "JWT handling",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Compare hashed password",
    description:
      "Within the block, you can configure settings such as the server port, middleware stack, and initial route handlers. This ensures your server is ready to respond to requests right out of the gate. Speically the purple color blocks are always the first level of blocks and green color blocks are the secend level blocks.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716101037/WebBlockCraft/Auth/80de1d23-6cfa-4384-9e8f-566beeb7e063.png",
    category: "JWT handling",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "JWT auth object",
    description:
      "Within the block, you can configure settings such as the server port, middleware stack, and initial route handlers. This ensures your server is ready to respond to requests right out of the gate. Speically the purple color blocks are always the first level of blocks and green color blocks are the secend level blocks.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716101265/WebBlockCraft/Auth/df245681-9a2b-4d8a-a9c1-0f015da0cbcb.png",
    category: "JWT handling",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Generate salt value",
    description:
      "Within the block, you can configure settings such as the server port, middleware stack, and initial route handlers. This ensures your server is ready to respond to requests right out of the gate. Speically the purple color blocks are always the first level of blocks and green color blocks are the secend level blocks.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1716101321/WebBlockCraft/Auth/2ed616f0-076b-4b5c-848a-bd9db9d9b0da.png",
    category: "JWT handling",
    maxWidth: { description: "50%", image: "40%" },
  },
];
