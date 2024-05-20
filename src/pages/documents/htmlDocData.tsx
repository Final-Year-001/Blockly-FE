export const categoryDescriptions = {
  "Get Started": "Embark on a creative journey delving into the foundational concepts of HTML with this comprehensive documentation. Here, you'll find a detailed guide on all available HTML blocks, providing a clear understanding of their purpose and usage. Let's dive in and unleash your creativity! ",
  "Words Category": "In the Word category, our HTML learning app introduces kids to essential text blocks for web design. They'll encounter blocks like <p> for paragraphs and <h1> through <h6> for headings. Through interactive play, children learn the importance of structuring content for readability and emphasis.",
  "Tables": "In the section dedicated to tables, children discover the importance of these structures in organizing content effectively on a web page. Here, they learn the basics of building tables, gaining insights into how rows and columns can neatly arrange information. Through simple explanations and interactive exercises, they become familiar with essential table-building blocks like <table>, <tr>, <td>, and <th>. This hands-on experience empowers them to create structured layouts that enhance the presentation of data and improve the overall user experience of their web pages.",
  "Forms": "In the Forms section, children discover the building blocks responsible for creating interactive forms. Here, they learn about essential elements like <form>, <input>, <label>, and <button>. Through simple explanations and hands-on practice, kids grasp how these blocks work together to design user-friendly forms for collecting information on websites.",
  "Lists": "Explore the essential components for crafting effective forms in this section. Dive into the building blocks that empower you to create user-friendly forms and streamline data collection on websites.",
  "Containers": "Discover the backbone of website layout with containers. Unveil the blocks responsible for structuring and organizing content, providing a cohesive framework for your web pages.",
  "Link": "Embark on a journey through the world of connectivity with links. Learn about the blocks that enable seamless navigation and interaction within web pages, empowering you to create dynamic and interconnected digital experiences.",
  "Premade": "We all need a good form. Here you get to learn what blocks are responsible for making forms.",
};

export const blocks = [
  // Get started category
  {
    title: "HTML Block",
    description:
      "This HTML block represents the essential structure of a web page, divided into the head and body sections. The head section contains metadata and links to external resources, helping browsers understand how to process and display the page correctly. The body section includes all the visible content, such as text, images, and interactive elements, making it the core of user interaction and engagement.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715143556/WebBlockCraft/HTML/80f8337d-d479-4181-a674-406986fd091a.png",
    category: "Get Started",
  },
  {
    title: "ID Class Block",
    description:
      "This block is used to add an ID or a Class name to other Blocks. They will help us to identify them. It's similar to giving them a name so we know which one we are talking about.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715149744/WebBlockCraft/HTML/5bce9e3e-b8d2-4da3-8982-f24570df02e8.png",
    category: "Get Started",
  },

  
  {
    title: "Adding Text",
    description:
      "These are for adding text. You can use this block to type what you want.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715150355/WebBlockCraft/HTML/3f70ff6d-2d76-4657-8eb1-9d8d2820959c.png",
    category: "Words Category",
  },
  {
    title: "Text size",
    description:
      "This is a text heading block. You can use also use this to change the heading font size. Heading dropdown will show the available heading sizes, by selecting one you can set the font size.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715150641/WebBlockCraft/HTML/dd560e63-748e-4bdc-9604-81da25f92c77.png",
    category: "Words Category",
  },
  {
    title: "Line break",
    description:
      "This is to add a line break. you can use this with statement blocks to add line breaks to them.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715151163/WebBlockCraft/HTML/f49963eb-e959-45e6-9caa-4938976fdbf1.png",
    category: "Words Category",
  },

  // Tables
  {
    title: "Table Block",
    description: "This is the table block. if you want to make a table then this is the first block to use. You can set the border of the tabel by giving a number. Higher the number means thicker it will be",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715152757/WebBlockCraft/HTML/6d88de2c-e8c3-4d6b-a7e8-847c5d5920b0.png",
    category: "Tables",
  },
  {
    title: "Add a table row",
    description: "You can add this inside the table block to add a new row to the table",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715153049/WebBlockCraft/HTML/681b9828-a7ac-48e8-9cd7-c5f5f7fcdbc6.png",
    category: "Tables",
  },
  {
    title: "Add table heading cell",
    description: "To add a table heading you can use this block. This goes inside of the table row block",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715153132/WebBlockCraft/HTML/e8e73427-cb10-4b5d-ae49-190618bf8113.png",
    category: "Tables",
  },
  {
    title: "Add table normal cell",
    description: "This is a normal cell. You put these inside of row blocks",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715153224/WebBlockCraft/HTML/35f78298-0c19-446e-abc6-946f72f7f749.png",
    category: "Tables",
  },
  // Form 
  {
    title: "Form Block",
    description: "If you want to add a form to your page, then this is the first block to use. This will include all the form related things",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715153270/WebBlockCraft/HTML/0aba540a-e8d5-4846-ab81-00e08a693e00.png",
    category: "Forms",
  },
  {
    title: "Add an input feild",
    description: "The first block is used to add a label to the text feild. Second block will add a text feild",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715153356/WebBlockCraft/HTML/3e389a89-c9c6-4d23-b4ce-4d9ba3a50a28.png",
    category: "Forms",
  },
  {
    title: "Add a checkbox",
    description: "You can add a checkbox with this one. You will also have to use the label block as well if you want to add some text",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715153679/WebBlockCraft/HTML/a8c7be2e-4f9f-43d4-8c8e-ad2863c76ed3.png",
    category: "Forms",
  },
  {
    title: "Add a button",
    description: "This is a button block. Yes you CAN use this to add a button. By default the type is set to submit. But you can change this later.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715153792/WebBlockCraft/HTML/fe4311b1-87d0-4c76-a615-428124d5fc1c.png",
    category: "Forms",
  },
  {
    title: "Ordered List",
    description: "This is a button block. Yes you CAN use this to add a button. By default the type is set to submit. But you can change this later.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715871438/WebBlockCraft/HTML/97fffc16-d915-48e6-9bcb-7b1275515446.png",
    category: "Lists",
  },
  {
    title: "Unordered List",
    description: "This is a button block. Yes you CAN use this to add a button. By default the type is set to submit. But you can change this later.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715871467/WebBlockCraft/HTML/5eabfe64-b580-46c0-a0db-d7b519f4d568.png",
    category: "Lists",
  },
  {
    title: "List Item",
    description: "This is a button block. Yes you CAN use this to add a button. By default the type is set to submit. But you can change this later.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715871493/WebBlockCraft/HTML/d136c741-629f-4139-8285-bd01cf9691d8.png",
    category: "Lists",
  },
  {
    title: "Containers",
    description: "This is a button block. Yes you CAN use this to add a button. By default the type is set to submit. But you can change this later.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715871516/WebBlockCraft/HTML/476797b8-691e-470d-a3b4-9706cf273dc6.png",
    category: "Containers",
  },
  {
    title: "Image Block",
    description: "This is a button block. Yes you CAN use this to add a button. By default the type is set to submit. But you can change this later.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715871550/WebBlockCraft/HTML/2bf62e51-f1d9-466a-8b0b-9a448440fab8.png",
    category: "Link",
  },
  {
    title: "Link Block",
    description: "This is a button block. Yes you CAN use this to add a button. By default the type is set to submit. But you can change this later.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715871567/WebBlockCraft/HTML/f1a8d752-3359-44e8-8d6d-272c1797eb81.png",
    category: "Link",
  },
  {
    title: "Premade",
    description: "This is a button block. Yes you CAN use this to add a button. By default the type is set to submit. But you can change this later.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715153792/WebBlockCraft/HTML/fe4311b1-87d0-4c76-a615-428124d5fc1c.png",
    category: "Premade",
  },
];
