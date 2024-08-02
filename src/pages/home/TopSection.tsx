import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoTrans from "../../assets/logoTrans.png"
import avatar from "../../assets/avatar/avatar.png"
import play from "../../assets/avatar/play.png"
import learnPng from '../../assets/home/learn.png'
import imagine from '../../assets/home/imagine.png'
import make from '../../assets/home/make.png'

function TopSection(tokenValid : any) {
 const navigate = useNavigate();

 const [isPlaying, setIsPlaying] = useState(false);

 const handlePlayButtonClick = () => {
   setIsPlaying(true);
 };

 const handleVideoEnd = () => {
  setIsPlaying(false);
  };
 
  return (
    <section className="py-12 backdrop-blur-sm">
    <div className=" container mx-auto flex flex-cols w-full h-96 mt-4 mb-0 items-center justify-center">
      <div className=" w-full flex justify-end">
        <div className=" w-4/5 bg-blue-500/10 p-4 rounded-xl">
          <div className="text-5xl mb-4 text-white">Web Block Craft</div>
          <div className="text-white text-2xl">
            Empowering Young Minds to Code Their First Web Application. Where Creativity Meets Coding!
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end mr-28">
        {tokenValid.tokenValid ? (
        <div className=" bg-gray-200  p-8 rounded-xl px-16 border-4 border-black flex flex-row gap-4">
          <div
            onClick={() => navigate("/guide-books")}
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
        ):(
        <div className="mt-16 relative" style={{ width: '350px'}}>
            {isPlaying ? (
            <video width="350" controls autoPlay onEnded={handleVideoEnd}>
              <source src="https://res.cloudinary.com/dlw1yfobn/video/upload/v1715959800/WebBlockCraft/avatar/20240517_Welcome_to-1-_1_nql7q4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            ) : (
            <div style={{ position: 'relative', width: '70%', height: '100%' }}>
              <img 
                src={avatar} 
                alt="Avatar" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <img 
                src={play} 
                alt="Play" 
                onClick={handlePlayButtonClick} 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer',
                  width: '60px', // Adjust size of the play button as needed
                  height: '60px'
                }} 
              />
            </div>
            )}</div>
        )}
      </div>
    </div>

    <div className="container mx-auto ">
      <div className="flex gap-8 mb-8 mx-4 sm:mx-32 flex flex-col sm:flex-row">
        
        <div className="border-black w-full  border-4 mx-auto bg-gradient-to-tr from-teal-300 to-green-400 rounded-2xl p-8 px-10 mt-4 text-justify">
          <div className="flex justify-center"><img src={learnPng} width={150} alt="img1" /></div>
          <span className="text-2xl">Let's Learn</span>
          <p className="text-sm text-black">
            Learn something new, and gather valuable information about web development.
          </p>
        </div>

        <div className="border-black w-full border-4 mx-auto bg-gradient-to-tr from-red-300 to-pink-400 rounded-2xl p-8 px-10 mt-4">
          <div className="flex justify-center"><img src={imagine} width={150} alt="img1" /></div>
          <span className="text-2xl">Let's Imagine</span>
          <p className="text-sm text-black">
          With imagination, there are no limits to your possibilities.
          </p>
        </div>

        <div className="border-black w-full border-4 mx-auto bg-gradient-to-tr from-amber-200 to-orange-300 rounded-2xl p-8 px-10 mt-4">
        <div className="flex justify-center"><img src={make} width={150} alt="img1" /></div>
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
