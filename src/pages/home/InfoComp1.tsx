import htmlIcon from "../../assets/home/html.png";
import cssIcon from "../../assets/home/css.png";
import jsIcon from "../../assets/home/js.png";
import serverIcon from "../../assets/home/server.png";
import securityIcon from "../../assets/home/se.png";
import dbIcon from "../../assets/home/db.png";

function InfoComp1() {
  return (
    <div className="w-full mx-auto container">
      <div className=" flex flex-col gap-10 mb-8 mx-4 sm:mx-32 mb-20">
        <div className="flex justify-center text-3xl mb-10">
          What Can You Learn From Web Block Craft?
        </div>
        <div className="">
          <div className="flex gap-10 mb-10 transform hover:scale-110 transition duration-300">
            <div className="border-black w-3/12 h-56 flex border-4 bg-gradient-to-br from-blue-200 to-teal-300 rounded-2xl p-8 px-10 justify-center">
              <img src={htmlIcon} alt="htmlIcon" />
            </div>
            <div className=" bg-gray-200 p-10 text-justify rounded-2xl w-9/12 py-8 text-2xl flex justify-center items-center">
              <div>
                <p className="text-2xl text-black font-bold">HTML</p>
                <span>
                HTML (HyperText Markup Language) is like the blueprint for web pages. 
                It helps us create content, such as text, images. Essentially making the skelaton of the page.
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-10 mb-10 transform hover:scale-110 transition duration-300">
            <div className="border-black w-3/12 h-56 flex border-4 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl p-8 px-10 justify-center">
              <img src={cssIcon} alt="cssIcon" />
            </div>
            <div className=" bg-gray-200 p-10 text-justify rounded-2xl w-9/12 py-8 text-2xl flex justify-center items-center">
              <div>
                <p className="text-2xl text-black font-bold">CSS</p>
                <span>
                  CSS (Cascading Style Sheets) is like a magic paint for web
                  pages. It makes everything colorful and fun by telling the
                  computer how things should look!
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-10 mb-10 transform hover:scale-110 transition duration-300">
            <div className="border-black w-3/12 h-56 flex border-4 bg-gradient-to-br from-red-200 to-red-300 rounded-2xl p-8 px-10 justify-center">
              <img src={jsIcon} alt="jsIcon" />
            </div>
            <div className=" bg-gray-200 p-10 text-justify rounded-xl w-9/12 h-56 text-2xl flex justify-center items-center">
              <div>
                <p className="text-2xl text-black font-bold">JavaScript</p>
                <span>
                  JS (JavaScript) is the secret sauce of the web, giving websites the
                  power to do amazing dynamic things like games, animations, and
                  interactive features!
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-10 mb-10 transform hover:scale-110 transition duration-300">
            <div className="border-black w-3/12 h-56 flex border-4 bg-gradient-to-br from-lime-200 to-lime-400 rounded-2xl p-8 px-10 justify-center">
              <img src={serverIcon} alt="serverIcon" />
            </div>
            <div className=" bg-gray-200 p-10 text-justify rounded-xl w-9/12 h-56 text-2xl flex justify-center items-center">
              <div>
                <p className="text-2xl text-black font-bold">Servers and API</p>
                <span>
                  Creating a server and handling APIs is like building a bridge
                  between different parts of the internet. It lets computers
                  talk to each other and share information!
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-10 mb-10 transform hover:scale-110 transition duration-300">
            <div className="border-black w-3/12 h-56 flex border-4 bg-gradient-to-br from-orange-200 to-orange-400 rounded-2xl p-8 px-10 justify-center">
              <img src={dbIcon} alt="dbIcon" />
            </div>
            <div className=" bg-gray-200 p-10 text-justify rounded-xl w-9/12 h-56 text-2xl flex justify-center items-center">
              <div>
                <p className="text-2xl text-black font-bold">Database</p>
                <span>
                  Database is like having a super organized library
                  where you can store and retrieve information. It helps
                  websites store data, making sure
                  everything is in the right place when you need it!
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-10 mb-10 transform hover:scale-110 transition duration-300">
            <div className="border-black w-3/12 h-56 flex border-4 bg-gradient-to-br from-green-200 to-green-400 rounded-2xl p-8 px-10 justify-center">
              <img src={securityIcon} alt="securityIcon" />
            </div>
            <div className=" bg-gray-200 p-10 text-justify rounded-xl w-9/12 h-56 text-2xl flex justify-center items-center">
              <div>
                <p className="text-2xl text-black font-bold">Security</p>
                <span>
                Authentication and authorization are like the gates and access passes of an event. 
                They ensure that only approved individuals can enter the event (your website), maintaining safety 
                and security by controlling who has permission to access certain areas or functions!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoComp1;
