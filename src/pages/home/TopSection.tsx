import { useNavigate } from "react-router-dom";
import logoTrans from "../../assets/logoTrans.png"

function TopSection(tokenValid : any) {
 const navigate = useNavigate();
  return (
    <section className="py-16">
    <div className=" container mx-auto flex flex-cols w-full h-96 mt-10 mb-2 items-center justify-center">
      <div className=" w-full  flex justify-center">
        <div className=" w-1/2">
          <div className="text-5xl mb-4">Welcome to Web Block Craft</div>
          <div>
            Empowering Young Minds to Code Their Dreams: Web Block Craft,
            Where Creativity Meets Coding.
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mr-28">
        {tokenValid.tokenValid ?
        <div className=" bg-gray-400  p-8 rounded-xl px-16 border-4 border-black flex flex-row gap-4">
          <div
            onClick={() => navigate("/get-started")}
            className="cursor-pointer w-40 bg-red-300 border-2 border-black rounded-lg py-2 text-lg flex justify-center hover:bg-red-500 active:red-700"
          >
            Lets Create!
          </div>
          <div
            onClick={() => navigate("/my/projects")}
            className="cursor-pointer w-40 bg-amber-300 border-2 border-black rounded-lg py-2 text-lg flex justify-center hover:bg-amber-500 active:amber-700"
          >
            My Projects
          </div>
        </div>
        :
        <div>
            <img width={350} src={logoTrans} alt="logo" />
        </div>
        }
      </div>
    </div>

    <div className="container mx-auto">
      <div className=" mx-32 flex gap-10 mb-8 mx-4 sm:mx-32 flex flex-col sm:flex-row">
        <div className="border-black w-full  border-4 mx-auto bg-green-300 rounded-2xl p-8 px-10 mt-4 text-justify">
          <span className="text-2xl">Lets Learn</span>
          <p className="text-sm text-black">
            Learn something new explore whats out there and gather all that
            knowledge.
          </p>
        </div>
        <div className="border-black w-full border-4 mx-auto bg-pink-300 rounded-2xl p-8 px-10 mt-4">
          <span className="text-2xl">Lets Imagine</span>
          <p className="text-sm text-black">
            Imaging with your imagination there are endless possibilities
            for you to imaging.
          </p>
        </div>
        <div className="border-black w-full border-4 mx-auto bg-orange-300 rounded-2xl p-8 px-10 mt-4">
          <span className="text-2xl">Lets Create</span>
          <p className="text-sm text-black">
            With the knowledge and support, lets create something
            remarkeble. Your imagination is the limit
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}

export default TopSection;
