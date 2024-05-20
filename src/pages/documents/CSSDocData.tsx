export const categoryDescriptions = {
  "Get Started": "With HTML you made a skeleton or a structure. Basically you added content to your web page. But it looks pretty bland and boring right? Well CSS is the other part we gonna talk about. CSS or Cascading Style Sheets helps us to add styles to our boring html components. This will give the much needed color it needs.",
  "Colors": "Adding color to your web page. This section will include blocks that are used to include colors to your website.",
  "Text": "This section will include blocks that talks about texts and fonts",
  "size and gaps" : "This section will talk about adding padding, margin to your components. This section also includes blocks that are needed to add height and width to components",
  "Border" : "This section talks about the border related blocks",
  "Flexbox" : "This section will talk about Flexboxes. This is pretty important as this will help with positioning content",
  "More": "This section will include more blocks which doesnt have a specific category"

};

export const blocks = [
  {
    title: "CSS Block",
    description:
      "So there are 3 main ways to add css to a web page. Inline, Internal and External Css. Basically it just means the location where you put the css. We'll talk about others later but for this section we'll talk about internal css. This simply means adding css inside of the HTML page file. So to do that first you need to use this block. This will wrap every css into one single nice tag.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715874984/WebBlockCraft/HTML/570ecaf2-6521-4b06-97c9-d72b19fc58a9.png",
    category: "Get Started",
  },
  {
    title: "CSS Style Block",
    description:
      "Rememeber in HTML we used something called ID and Class? Well this is where it becomes relavent again. This block will use that ID name of class name help us add styles to it. So imagine you have a button with ID as btn1. Then you can add color to that btn1.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875120/WebBlockCraft/HTML/fb26823c-121d-4959-a6b2-fb63bb7f8f1c.png",
    category: "Get Started",
  },
  {
    title: "Add Style Dirrectly",
    description:
      "Remember we talked about three ways to add CSS? This is another way this is called INLINE CSS. Basically instead of adding css to the HTML page now we will add CSS dirrectly to the line of the html code. so think of a button. We use button tags to make a button. On to that same button we add CSS dirrectly. Now you might be wondering what if you add internal and inline styles both? in that case what happens is the priority is given to inline css. External css gets least priority.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875145/WebBlockCraft/HTML/06bd2d03-8e8e-4eec-9f70-39d2429195af.png",
    category: "Get Started",
  },


  {
    title: "Background Color",
    description:
      "This block will allow you to add background colors to components. You can click on the color icon and get a color picker to pick whatever color you want to pick.",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875170/WebBlockCraft/HTML/695a77d2-6f40-438d-8c65-141446b82f12.png",
    category: "Colors",
  },
  {
    title: "Text color",
    description:
      "This block will allow you to add colors to text. Just like with the previous color block, you can click on the color icon to get a color picker",
    image:
      "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875198/WebBlockCraft/HTML/517861b1-3e9a-4451-a532-3bfdaa10184d.png",
    category: "Colors",
  },

  {
    title: "Border Color",
    description: "This block will allow you to add colors to borders. Just like with the previous color block, you can click on the color icon to get a color picker",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875224/WebBlockCraft/HTML/6a00dc62-b40d-49dc-86e0-514a92a0fcce.png",
    category: "Colors",
  },
  {
    title: "Font Size",
    description: "This is a simple block. You add it to change the size of the text. Bigger the number bigger the text",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875264/WebBlockCraft/HTML/ac0616de-d33e-47d1-b493-c7498121870f.png",
    category: "Text",
  },
  {
    title: "Font Family",
    description: "This block is used when you want to change the font of the text you are using. There is a dropdown to pick some font options but you can also add other fonts as well. first tick the checkbox this will tell that you are using you own font styles. Then add the font name to the input box",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875330/WebBlockCraft/HTML/fe4b0ef7-5a1d-4a8d-b537-d926fb56ba3e.png",
    category: "Text",
  },
  {
    title: "Text Align",
    description: "This is for text alignement. Click on the dropdown and change the posision of the text",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875355/WebBlockCraft/HTML/3d48b4c0-ff90-451b-9674-237a47102a4c.png",
    category: "Text",
  },
  // Form 
  {
    title: "Height and Width",
    description: "If you want to change the size of something like a box or a button then you can use this block to do that. You also have a dropdown to select the type you want to use.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875407/WebBlockCraft/HTML/e4ced879-e85d-4f0e-ad66-22753b61c3ae.png",
    category: "size and gaps",
  },
  {
    title: "Padding and Margin",
    description: "To add Padding or margin you can use this block. You can select between padding and marging. If you want to add both passing and marging then duplicate the block. You can select the sides to add and size and type.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875434/WebBlockCraft/HTML/a8e59b2f-5576-4485-9822-30b393e8a6a2.png",
    category: "size and gaps",
  },
  {
    title: "Border Styles",
    description: "You can add borders to many things. Use this block to add a border. There is a dropdown to choose the style. The default is a solid line",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875563/WebBlockCraft/HTML/b138aa09-70e7-4a38-8baf-8327233121a5.png",
    category: "Border",
  },
  {
    title: "Border Corner",
    description: "To change the border radius you can use this. Here all you need to do is type the border size and thats it..",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875588/WebBlockCraft/HTML/d17724e1-d4a4-4d5b-8bad-42736452b896.png",
    category: "Border",
  },
  {
    title: "Border Color",
    description: "We already talked about this this is to change the border color when you add one.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875610/WebBlockCraft/HTML/0b867a18-5398-43ba-a594-378968708e8a.png",
    category: "Border",
  },
  {
    title: "Flexbox",
    description: "Flexbox, also known as Flexible Box Layout, is a CSS model for designing responsive web layouts. It provides efficient alignment and distribution of space within containers, simplifying the creation of dynamic designs across different screen sizes.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875647/WebBlockCraft/HTML/055a91f4-0a49-4a68-97bd-0b13e1643be0.png",
    category: "Flexbox",
  },
  {
    title: "Wrap box",
    description: "The Wrap Box, an extension of Flexbox, allows items to wrap onto multiple lines within a container when there's not enough space. It's a useful CSS tool for creating flexible and responsive layouts.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875670/WebBlockCraft/HTML/e4edad4f-47d0-404e-b076-e268b53d1aac.png",
    category: "Flexbox",
  },
  {
    title: "Justify boxes",
    description: "Justify Boxes is a proposed CSS feature aimed at evenly distributing flex items within a flex container along the main axis, even if there's extra space or not enough space. This enhances layout flexibility and alignment options in web design.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875690/WebBlockCraft/HTML/e8232e89-1df5-46a1-93b9-134189fdc47b.png",
    category: "Flexbox",
  },
  {
    title: "Align Boxes",
    description: "Align Boxes is a CSS feature that controls how flex items are aligned within a flex container along the cross axis. It offers options such as aligning items to the start, end, center, or stretching them to fill the container.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875719/WebBlockCraft/HTML/88df11ec-e700-4c80-9581-5786adb6d26d.png",
    category: "Flexbox",
  },
  {
    title: "Align rows",
    description: "Align Rows is not a specific term in CSS, but it could refer to aligning items within rows in a grid layout or flex container. This alignment typically involves properties like align-items or align-self in flexbox, or align-content in grid layout, ensuring consistent positioning of elements within rows.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875746/WebBlockCraft/HTML/2c1c3fe4-f6fe-4c7e-a972-240b03dc7957.png",
    category: "Flexbox",
  },
  {
    title: "box grow size",
    description: "ability of a flexbox item to grow in size within its container. In flexbox, this behavior is controlled by the flex-grow property, which determines how much an item should grow relative to the other items in the flex container.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875778/WebBlockCraft/HTML/53316a05-55d4-44d2-adfc-4fec7acdfa61.png",
    category: "Flexbox",
  },
  {
    title: "Custom Styles",
    description: "This is a special block and its a bit advanced. So with other blocks you can do all sorts of things right. With this one you cant do anything this is just an empty block. Wait what thats not right? yeah you heard me correct. This is empty which means its up to you to add whatever styles you want. You can even copy paste the styles you get from some other place too.",
    image: "https://res.cloudinary.com/dlw1yfobn/image/upload/v1715875803/WebBlockCraft/HTML/755e0096-ec93-4892-9e22-d043bc179bf5.png",
    category: "More",
  },
];
