import TeamImg from "../../assets/home/team.png";

function AboutUs() {
  return (
    <div className="w-full mx-auto container">
      <div className=" mx-32 border-black border-4 mx-auto bg-amber-200 rounded-2xl p-10 px-20 mt-4">
        <h2 className="text-3xl font-bold mb-8 flex justify-center">
          About Us
        </h2>
        <p className="text-lg mb-4 text-justify">
          Welcome to Web Block Craft, an innovative platform developed by a
          passionate team of four dedicated to making web programming accessible
          to everyone. Our mission is simple: to empower aspiring coders of all
          ages with the knowledge and skills needed to thrive in the digital
          age.
        </p>
        <p className="text-lg mb-4 text-justify">
          At Web Block Craft, we believe that learning should be fun, engaging,
          and accessible. That's why we've created a unique learning experience
          that combines the creativity of crafting with the logic of coding.
          Through our interactive tutorials and projects, learners are
          introduced to the exciting world of web development in a hands-on and
          immersive way.
        </p>
        <p className="text-lg mb-4 text-justify">
          Whether you're a beginner or an experienced coder, Web Block Craft
          provides the tools, resources, and support you need to succeed. Join
          us on this journey of discovery and unleash your potential in the
          world of web programming. Together, let's build a brighter future, one
          block at a time."
        </p>
        <div className="flex justify-center">
          <img src={TeamImg} width={300} alt="teamimage" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
