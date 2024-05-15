import Image from "../../assets/home/build.png";

const text =
  "Learning coding opens up a world of endless possibilities. It's not just about mastering programming languages; it's about developing problem-solving skills, logical thinking, and creativity. Whether you're building a website, developing a mobile app, or diving into data science, coding empowers you to turn your ideas into reality. With dedication and perseverance, anyone can learn to code and unlock the doors to innovation and opportunity. So, roll up your sleeves, embrace the challenges, and embark on an exciting journey of continuous learning and growth in the ever-evolving world of technology.";

function IntroToWBC() {
  return (
    <div className="w-full">
    <div className=" mx-auto container p-4 pb-10 ">
      <div className="flex justify-center text-4xl mt-16">
        What is Web Block Craft?
      </div>
      <div className="flex w-full p-10 items-center">
        {" "}
        <div className="w-full text-xl p-10 text-justify">{text}</div>
        <div className="w-full flex justify-center">
          <img src={Image} width={500} alt="blockImage" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default IntroToWBC;
