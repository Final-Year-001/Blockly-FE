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

interface ProjectCardProps {
    readonly name: string;
    readonly description: string;
    readonly image: string;
    readonly id: string;
    readonly variant: string;
    readonly lesson?: boolean
}

function ProjectCard({ name, description, image, id, variant, lesson }: ProjectCardProps) {
  const navigate =  useNavigate();

  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56 justify-center items-center flex p-12">
        <img
          src={image || "/img/blockly/logo_built_with_knockout.svg"}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex gap-3">
        <Button onClick={() => {
          if(lesson) {
            navigate("/lesson-creator/" + id);
            return;
          } 

          if (variant == "frontend") {
            navigate("/frontend/" + id);
            return;
          }
    
          navigate("/backend/" + id);
        }}><PencilSquareIcon className="w-5 h-5"/></Button>
        <Button><PlayIcon className="w-5 h-5"/></Button>
        <Button><TrashIcon className="w-5 h-5" /></Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
