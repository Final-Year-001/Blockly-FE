import { PlayIcon } from "@heroicons/react/20/solid";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import homeBG from "../../assets/home/homeBG.jpg";
import ProductLogo from "../../assets/Logo";
import TeamImg from "../../assets/home/team.png";
import InfoComp1 from "./InfoComp1";

function MainPage() {
  return (
    <div className="min-h-screen bg-cover bg-center relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0  bg-gray-200/70 z-20 backdrop-filter backdrop-blur-sm ">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <div>
            <ProductLogo />
            {/* Example: <img src="your-logo-url.png" alt="Logo" className="h-12" /> */}
          </div>
          {/* Logout Button */}
          <div className="flex gap-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg border-black border-2">
              Documentation
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg border-black border-2">
              Logout
            </button>
          </div>
        </div>
      </header>
      {/* <div className="mb-16"></div> */}

      <section className="py-16">
        <div className="flex flex-cols w-full  h-96 mt-10 mb-2 items-center justify-center">
          <div className=" w-full flex justify-center">
            <div className=" w-1/2">
              <div className="text-5xl mb-4">Welcome to Web Block Craft</div>
              <div>
                Empowering Young Minds to Code Their Dreams: Web Block Craft,
                Where Creativity Meets Coding.
              </div>
            </div>
          </div>
          <div className="g  w-full flex justify-center">
            <div className=" bg-blue-300 mr-20 p-6 rounded-xl px-20 border-4 border-black flex flex-row gap-4">
              <div className="w-44 bg-red-300 border-2 border-black rounded-lg py-3 text-xl flex justify-center hover:bg-red-500 active:red-700">
                Lets Create!
              </div>
              <div className="w-44 bg-amber-300 border-2 border-black rounded-lg py-3 text-xl flex justify-center hover:bg-amber-500 active:amber-700">
                My Projects
              </div>
            </div>
          </div>
        </div>

        <div className="mx-32 flex gap-10 mb-8 mx-4 sm:mx-32 flex flex-col sm:flex-row">
          <div className="border-black w-full  border-4 mx-auto bg-blue-200 rounded-2xl p-8 px-10 mt-4 text-justify">
            <span className="text-2xl">Lets Learn</span>
            <p className="text-sm">
              Learn something new explore whats out there and gather all that
              knowledge.
            </p>
          </div>
          <div className="border-black w-full border-4 mx-auto bg-pink-200 rounded-2xl p-8 px-10 mt-4">
            <span className="text-2xl">Lets Imagine</span>
            <p className="text-sm">
              Imaging with your imagination there are endless possibilities for
              you to imaging.
            </p>
          </div>
          <div className="border-black w-full border-4 mx-auto bg-purple-200 rounded-2xl p-8 px-10 mt-4">
            <span className="text-2xl">Lets Create</span>
            <p className="text-sm">
              With the knowledge and support, lets create something remarkeble.
              Your imagination is the limit
            </p>
          </div>
        </div>

        <div className="mx-32 border-black border-4 mx-auto bg-amber-200 rounded-2xl p-10 px-20 mt-4">
          <h2 className="text-3xl font-bold mb-8 flex justify-center">
            About Us
          </h2>
          <p className="text-lg mb-4 text-justify">
            Welcome to Web Block Craft, an innovative platform developed by a
            passionate team of four dedicated to making web programming
            accessible to everyone. Our mission is simple: to empower aspiring
            coders of all ages with the knowledge and skills needed to thrive in
            the digital age.
          </p>
          <p className="text-lg mb-4 text-justify">
            At Web Block Craft, we believe that learning should be fun,
            engaging, and accessible. That's why we've created a unique learning
            experience that combines the creativity of crafting with the logic
            of coding. Through our interactive tutorials and projects, learners
            are introduced to the exciting world of web development in a
            hands-on and immersive way.
          </p>
          <p className="text-lg mb-4 text-justify">
            Whether you're a beginner or an experienced coder, Web Block Craft
            provides the tools, resources, and support you need to succeed. Join
            us on this journey of discovery and unleash your potential in the
            world of web programming. Together, let's build a brighter future,
            one block at a time."
          </p>
          <div className="flex justify-center">
            <img src={TeamImg} width={300} alt="teamimage" />
          </div>
        </div>
      </section>

      <InfoComp1 />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <p className="text-center text-amber-500/80">
            © 2024 The dog ate my homework corp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
