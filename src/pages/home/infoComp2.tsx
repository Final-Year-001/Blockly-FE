import TeamImg from "../../assets/home/team.png";
import ss1 from "../../assets/home/ss1.png";
import ss2 from "../../assets/home/ss2.png";

function InfoComp2() {
  return (
    <div className="w-full mx-auto container">
      <div>
        <div className="text-4xl mb-4">Frontend Builder</div>
        <div>
          <div className="flex">
            <div className="w-full bg-blue-400">
              <img
                className="border-black border-4"
                src={ss1}
                alt="frontendBuilderImage"
              />
            </div>
            <div className="w-full p-10 text-2xl flex justify-center items-center text-justify">
              The Frontend Builder of Web Block Craft, is where you can bring your
              web design ideas to life. With our intuitive interface, you can
              experiment with HTML, CSS, and JS in real-time. Watch your code
              come alive as you make changes, and enjoy the visual representation to
              see exactly what's happening on your webpage. Let your creativity
              soar as you craft stunning designs effortlessly!
            </div>
          </div>
        </div>

        <div className="text-4xl flex justify-end mb-4 mt-24">
          Backend Builder
        </div>
        <div>
          <div className="flex">
            <div className="w-full pr-10 pt-10 pb-10 text-2xl  flex items-center text-justify">
              The Backend Builder of Web Block Craft, is where you can
              turn your ideas into robust and powerful web applications. With
              our user-friendly interface, you can effortlessly create servers,
              handle APIs, manage databases, and implement authentication and
              authorization features. Experience the magic of backend coding as you
              build the backbone of your web projects, and watch your creations
              come to life with ease!
            </div>
            <div className="w-full bg-blue-400">
              <img
                className="border-black border-4"
                src={ss2}
                alt="frontendBuilderImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoComp2;
