import { useNavigate } from "react-router-dom";
import logoTrans from "../../assets/logoTrans.png"

function TopSection(tokenValid : any) {
 const navigate = useNavigate();
  return (
    <section className="py-12">
    <div className=" container mx-auto flex flex-cols w-full h-96 mt-4 mb-0 items-center justify-center">
      <div className=" w-full  flex justify-center">
        <div className=" w-1/2">
          <div className="text-4xl mb-4">Web Block Craft</div>
          <div>
            Empowering Young Minds to Code Their First Web Application. Where Creativity Meets Coding!
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mr-28">
        {tokenValid.tokenValid ?
        <div className=" bg-gray-200  p-8 rounded-xl px-16 border-4 border-black flex flex-row gap-4">
          <div
            onClick={() => navigate("/get-started")}
            className="cursor-pointer w-40 bg-green-500 border-2 border-black rounded-lg py-2 text-lg flex justify-center hover:bg-green-600 active:green-800"
          >
            Learn
          </div>
          <div
            onClick={() => navigate("/my/projects")}
            className="cursor-pointer w-40 bg-amber-500 border-2 border-black rounded-lg py-2 text-lg flex justify-center hover:bg-amber-600 active:amber-800"
          >
            My Projects
          </div>
        </div>
        :
        <div className="mt-16">
            <img width={350} src={logoTrans} alt="logo" />
        </div>
        }
      </div>
    </div>

    <div className="container mx-auto mt-10">
      <div className=" mx-32 flex gap-12 mb-8 mx-4 sm:mx-32 flex flex-col sm:flex-row">
        <div className="border-black w-full  border-4 mx-auto bg-green-300 rounded-2xl p-8 px-10 mt-4 text-justify">
          <span className="text-2xl">Let's Learn</span>
          <p className="text-sm text-black">
            Learn something new, and gather valuable information about web development.
          </p>
        </div>
        <div className="border-black w-full border-4 mx-auto bg-pink-300 rounded-2xl p-8 px-10 mt-4">
          <span className="text-2xl">Let's Imagine</span>
          <p className="text-sm text-black">
          With imagination, there are no limits to your possibilities.
          </p>
        </div>
        <div className="border-black w-full border-4 mx-auto bg-orange-300 rounded-2xl p-8 px-10 mt-4">
          <span className="text-2xl">Let's Create</span>
          <p className="text-sm text-black">
            With the knowledge and support, let's create 
            remarkeble web applications.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}

export default TopSection;
