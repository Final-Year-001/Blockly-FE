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
import { AwesomeButton } from 'react-awesome-button'; 

export interface ProjectCardProps {
    readonly name: string;
    readonly description: string;
    readonly image: string;
    readonly id: string;
    readonly variant: string;
    readonly lesson?: boolean
    readonly onDelete?: (project: ProjectCardProps) => void
}

function ProjectCard(project: ProjectCardProps) {
  const navigate =  useNavigate();
  const { name, description, image, id, variant, lesson, onDelete } = project;

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
        
        <AwesomeButton
              style={{
                '--button-primary-color': '#33cc33',
                '--button-primary-color-dark': '#18a418',
                '--button-primary-color-light': '#ffffff',
                '--button-primary-color-hover': '#33cc33',
                '--button-primary-color-active': '#1aa81a',
                '--button-default-border-radius': '8px',
                width: '50px',
                height: '50px',
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
              onPress={() => {
                if(lesson) {
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
            </AwesomeButton>

        <AwesomeButton
              style={{
                '--button-primary-color': '#42A5F5',
                '--button-primary-color-dark': '#2d82c7',
                '--button-primary-color-light': '#ffffff',
                '--button-primary-color-hover': '#62b4f8',
                '--button-primary-color-active': '#2d82c7',
                '--button-default-border-radius': '8px',
                width: '50px',
                height: '50px',
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
            >
              <PlayIcon className="h-5 w-5" />
            </AwesomeButton>

        <AwesomeButton
              style={{
                '--button-primary-color': '#D22B2B',
                '--button-primary-color-dark': '#C41E3A',
                '--button-primary-color-light': '#ffffff',
                '--button-primary-color-hover': '#D22B2B',
                '--button-primary-color-active': '#D2042D',
                '--button-default-border-radius': '8px',
                width: '50px',
                height: '50px',
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
              onPress={() => onDelete?.(project)}
            >
              <TrashIcon className="h-5 w-5" />
            </AwesomeButton>

      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
