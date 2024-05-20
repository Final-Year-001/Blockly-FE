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
import feImg from "../assets/projectSelector/fe.png";
import beImg from "../assets/projectSelector/be.png";
import logoImg from "../assets/logoTrans.png";

export interface ProjectCardProps {
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly id: string;
  readonly variant: string;
  readonly lesson?: boolean;
  readonly onDelete?: (project: ProjectCardProps) => void;
}

function ProjectCard(project: ProjectCardProps) {
  const navigate = useNavigate();
  const { name, description, image, id, variant, lesson, onDelete } = project;

  return (
    <Card className="mt-12 w-96">
      <CardHeader
        color="blue-gray"
        className="relative h-56 justify-center items-center flex p-12"
      >
        {/* <div className=" bg-gradient-to-tl from-pink-200 to-amber-200 rounded-t-xl justify-center items-center flex p-12"> */}
        {/* <div
        className={`${
          description == "New backend project" ? "bg-orange-200" : "bg-blue-200"
        } ${
          description == "New frontend project"
            ? "bg-orange-200"
            : "bg-blue-200"
        }  rounded-t-xl gap-1 justify-center items-center flex p-12`}
      > */}
        {/* <div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {description == "New backend project" && <span><span className="text-4xl">BE</span> <span>Project</span></span>}
            {description == "New frontend project" && <span><span className="text-4xl">FE</span> <span>Project</span></span>}
            {description == "New backend lesson" && <span><span className="text-4xl">BE</span> <span>Lesson</span></span>}
            {description == "New frontend lesson" && <span><span className="text-4xl">FE</span> <span>Lesson</span></span>}
          </Typography>
        </div> */}
        <div>
          <img
            src={image || "/img/blockly/logo_built_with_knockout.svg"}
            alt="card-image"
          />
        </div>
        {/* </div> */}
      </CardHeader>
      <div className="rounded-b-xl">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography
            className={`${
              description == "New backend project"
                ? "bg-orange-200 rounded-lg w-44 p-2 border-2 border-black"
                : "bg-blue-200 rounded-lg w-44 p-2 border-2 border-black"
            }`}
          >
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex gap-3">
          {/* <AwesomeButton
          style={{
            "--button-primary-color": "#33cc33",
            "--button-primary-color-dark": "#18a418",
            "--button-primary-color-light": "#ffffff",
            "--button-primary-color-hover": "#33cc33",
            "--button-primary-color-active": "#1aa81a",
            "--button-default-border-radius": "8px",
            width: "50px",
            height: "50px",
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          className="h-12 flex gap-3 justify-center items-center"
          type="primary"
          onPress={() => {
            if (lesson) {
              navigate("/lesson-creator/" + id);
              return;
            }

            if (variant == "frontend") {
              navigate("/frontend/" + id);
              return;
            }

            navigate("/backend/" + id);
          }}
        >
          <PencilSquareIcon className="h-5 w-5" />
        </AwesomeButton> */}

          {/* <AwesomeButton
          style={{
            "--button-primary-color": "#42A5F5",
            "--button-primary-color-dark": "#2d82c7",
            "--button-primary-color-light": "#ffffff",
            "--button-primary-color-hover": "#62b4f8",
            "--button-primary-color-active": "#2d82c7",
            "--button-default-border-radius": "8px",
            width: "50px",
            height: "50px",
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          className="h-12 flex gap-3 justify-center items-center"
          type="primary"
        >
          <PlayIcon className="h-5 w-5" />
        </AwesomeButton> */}

          {/* <AwesomeButton
          style={{
            "--button-primary-color": "#D22B2B",
            "--button-primary-color-dark": "#C41E3A",
            "--button-primary-color-light": "#ffffff",
            "--button-primary-color-hover": "#D22B2B",
            "--button-primary-color-active": "#D2042D",
            "--button-default-border-radius": "8px",
            width: "50px",
            height: "50px",
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          className="h-12 flex gap-3 justify-center items-center"
          type="primary"
          onPress={() => onDelete?.(project)}
        >
          <TrashIcon className="h-5 w-5" />
        </AwesomeButton> */}
          <div
            className="bg-amber-300 p-4 rounded-lg hover:bg-amber-500 active:bg-amber-700 border-black border-2"
            onClick={() => {
              if (lesson) {
                navigate("/lesson-creator/" + id);
                return;
              }

              if (variant == "frontend") {
                navigate("/frontend/" + id);
                return;
              }

              navigate("/backend/" + id);
            }}
          >
            <PencilSquareIcon className="h-5 w-5 text-black" />
          </div>
          {/* Commented for now since both this and next icons are delete operations  */}
          {/* <div
            onClick={() => onDelete?.(project)}
            className="bg-blue-300 p-4 rounded-lg hover:bg-blue-500 active:bg-blue-700 border-black border-2"
          >
            <PlayIcon className="h-5 w-5 text-black" />
          </div> */}
          <div
            onClick={() => onDelete?.(project)}
            className="bg-red-300 p-4 rounded-lg hover:bg-red-500 active:bg-red-700 border-black border-2"
          >
            <TrashIcon className="h-5 w-5 text-black" />
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}

export default ProjectCard;
