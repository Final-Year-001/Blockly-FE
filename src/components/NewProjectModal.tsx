import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogProps,
  Step,
  Stepper,
  Input,
  step,
  Typography,
} from "@material-tailwind/react";
import NewProjectVariantCard from "./NewProjectVarientCard";
import { useEffect, useState } from "react";

interface NewProjectModalProps {
  readonly open: boolean;
  readonly handler: () => any;
  readonly onClick?: (variant: string, name: string) => any;
}
function NewProjectModal({ open, handler, onClick }: NewProjectModalProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const [text, setText] = useState("");

  const _onClick = (varient: string) => {
    onClick?.(varient, text);
  }

  return (
    <Dialog open={open} handler={handler} size="lg">
      <DialogHeader className="px-10 pt-8">New project</DialogHeader>
      <DialogBody>
        <div className="px-10">
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            <Step onClick={() => setActiveStep(0)}>1</Step>
            <Step onClick={() => setActiveStep(1)}>2</Step>
            <Step onClick={() => setActiveStep(1)}>3</Step>
          </Stepper>
          {activeStep == 1 ? (
            <div className="flex gap-6 justify-center items-center">
              <NewProjectVariantCard
                title="Get started with a Backed"
                desc="Get started with making a real working backend for your frontend."
                onClick={() => _onClick?.("backend")}
              />
              <NewProjectVariantCard
                title="Get started with a Frontend"
                desc="Get started with a making a cool fronted to show your friends!"
                onClick={() => _onClick?.("frontend")}
              />
            </div>
          ) : null}
          {activeStep == 0 ? (
            <div className="flex justify-center items-center flex-col px-14 pt-8">
              {" "}
              <Input label="Project Name" onChange={(e) => setText(e.target.value)} crossOrigin={undefined} />
              <Typography className="pt-2">Enter a Name</Typography>
              <Button variant="filled" onClick={handleNext}>
                <span>Next</span>
              </Button>
            </div>
          ) : null}
          {activeStep == 2 ? <div className="h-full w-full flex flex-col justify-center items-center"></div> : null}
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handler} className="mr-1">
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default NewProjectModal;
