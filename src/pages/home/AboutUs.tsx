import TeamImg from "../../assets/home/team.png";

function AboutUs() {
  return (
    <div className="w-full mx-auto container">
      <div className=" mx-56 mx-30 border-black border-4 mx-auto bg-amber-200 rounded-2xl p-10 px-20 mt-4">
        <h2 className="text-3xl font-bold mb-8 flex justify-center">
          About Us
        </h2>
        <p className="text-lg mb-4 text-justify">
          Web Block Craft, is an innovative educational platform developed by a
          passionate team of four young developers from Sri Lanka Institute of Information Technology. 
          We envision in making web programming accessible
          to everyone. Our mission is simple: to empower aspiring coders of all
          ages with the knowledge and skills needed to thrive in the digital
          age.
        </p>
        <p className="text-lg mb-4 text-justify">
          We believe that learning code should be fun, engaging,
          and accessible. That's why we've created a unique learning experience
          that combines the creativity of crafting the logic of coding with the help of Google Blockly framework.
          Through our interactive tutorials and projects, learners are
          introduced to the exciting world of web development through visually appealing blocks. 
        </p>
        <p className="text-lg mb-4 text-justify">
          Whether you're a beginner or an experienced coder, Web Block Craft
          provides the tools, resources, and support you need to succeed. Join
          us on this journey of web development and unas a web programmer. 
          Together, let's build a next generation of web developers, one
          block at a time.
        </p>
        <div className="flex justify-center">
          <img src={TeamImg} width={300} alt="teamimage" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
