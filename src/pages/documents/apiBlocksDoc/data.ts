export const categoryDescriptions: { [key: string]: string } = {
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
    title: "API Block",
    description:
      'This block can be used inside "Routes" slot in the server creation block. This is how you will create a path that when invoked from the frontend, the logic added inside will execute. You can use database blocks, text manipulation blocks and other utility blocks to do things in the backend.',
    image: "/img/doc/api-blocks-images/api-block.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Request body access block",
    description:
      "This block can be used to assign the body of the http request to a variable. Create a variable from the toolbox and select the a name from the drop down. Supports JSON, XML, URL form encoded data types.",
    image: "/img/doc/api-blocks-images/request-body-access.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Respond with status code",
    description:
      "This block is used to respond to a request with a status code. Standard HTTP status codes can selected from the dropdown.",
    image: "/img/doc/api-blocks-images/respond-with-status.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Respond with data",
    description:
      "Use this block to send data from a variable in the body of the response. It will encode the data into JSON and send it.",
    image:
      "/img/doc/api-blocks-images/responds-with.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  }
];
