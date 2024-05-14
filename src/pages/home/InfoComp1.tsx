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

function InfoComp1() {
  return (
    <div className="">
      <div className="mx-32 flex flex-col gap-10 mb-8 mx-4 sm:mx-32 ">
        <div className="">
          <div className="flex gap-10 mb-4">
            <div className="border-black w-3/12 h-44 flex border-4 bg-red-200 rounded-2xl p-8 px-10 justify-center">
              <span className="text-2xl">HTML JS CSS</span>
            </div>
            <div className="border-2 border-black p-10 text-justify rounded-2xl w-9/12 py-8 text-2xl flex justify-center items-center">
              Learning coding opens up a world of endless possibilities. It's
              not just about mastering programming languages; it's about
              developing problem-solving skills, logical thinking, and
              creativity.
            </div>
          </div>
          <div className="flex gap-10 mb-4">
            <div className="border-black w-3/12 h-44 flex border-4 bg-teal-200 rounded-2xl p-8 px-10justify-center">
              <span className="text-2xl">Server Creation</span>
            </div>
            <div className="border-2 border-black p-10 text-justify rounded-2xl w-9/12 py-8 text-2xl flex justify-center items-center">
              Learning coding opens up a world of endless possibilities. It's
              not just about mastering programming languages; it's about
              developing problem-solving skills, logical thinking, and
              creativity.
            </div>
          </div>
          <div className="flex gap-10">
            <div className="border-black w-3/12 h-44 flex border-4 bg-amber-200 rounded-2xl p-8 px-10 justify-center">
              <span className="text-2xl">Connectivity</span>
            </div>
            <div className="border-2 border-black p-10 text-justify rounded-xl w-9/12 h-44 text-2xl flex justify-center items-center">
              Learning coding opens up a world of endless possibilities. It's
              not just about mastering programming languages; it's about
              developing problem-solving skills, logical thinking, and
              creativity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoComp1;
