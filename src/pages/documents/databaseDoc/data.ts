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
  // Get started categorynpm run
  {
    title: "Insert Data Block",
    description:
      "This block can be used inside the api method block to insert given data in a variable into database. Later with find or update blocks can be used to manipulate data in the database.",
    image: "/img/doc/api-blocks-images/insert-data.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Find Data Block",
    description:
      "This block can be used to retrieve specific data from the database based on a query. It is useful for fetching data to be displayed or used in subsequent operations.",
    image: "/img/doc/api-blocks-images/find-in-collection.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Update Data Block",
    description:
      "This block allows for updating existing data in the database. Use it to modify records based on specific criteria, ensuring data integrity and consistency.",
    image: "/img/doc/api-blocks-images/respond-with-status.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
  {
    title: "Delete Data Block",
    description:
      "This block enables the deletion of data from the database. It is useful for removing obsolete or incorrect records, ensuring the database remains clean and efficient.",
    image: "/img/doc/api-blocks-images/delete-in-collection.png",
    category: "Overview",
    maxWidth: { description: "50%", image: "40%" },
  },
];
