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
import { AwesomeButton } from 'react-awesome-button'; 

interface NewProjectModalProps {
  readonly open: boolean;
  readonly handler: () => any;
  readonly onClick?: (variant: string, name: string) => any;
}

function NewLessonModal({ open, handler, onClick }: NewProjectModalProps) {
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
      <DialogHeader className="px-10 pt-8">New Lesson</DialogHeader>
      <DialogBody>
        <div className="px-10">
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            <Step onClick={() => setActiveStep(0)} style={{ background: '#33cc33', borderRadius: '50%', color: 'white' }}>1</Step>
            <Step onClick={() => setActiveStep(1)} style={{ background: '#42A5F5', borderRadius: '50%', color: 'white' }}>2</Step>
            <Step onClick={() => setActiveStep(1)} style={{ background: '#FFA726', borderRadius: '50%', color: 'white' }}>3</Step>
          </Stepper>
          {activeStep == 1 ? (
            <div className="flex gap-6 justify-center items-center">
              <NewProjectVariantCard
                title="Create a backend lesson"
                desc="Create a lesson for students"
                onClick={() => _onClick?.("backend")}
              />
              <NewProjectVariantCard
                title="Get started with a fronted lesson"
                desc="Create a frontend lesson for students"
                onClick={() => _onClick?.("frontend")}
              />
            </div>
          ) : null}
          {activeStep == 0 ? (
            <div className="flex justify-center items-center flex-col px-14 pt-8">
              {" "}
              <Input label="Lesson Name" onChange={(e) => setText(e.target.value)} crossOrigin={undefined} />
              <Typography className="pt-2">Enter a Name</Typography>
              
              <AwesomeButton
              style={{
                '--button-primary-color': '#343434',
                '--button-primary-color-dark': '#353935',
                '--button-primary-color-light': '#ffffff',
                '--button-primary-color-hover': '#343434',
                '--button-primary-color-active': '#2d82c7',
                '--button-default-border-radius': '8px',
                width: '80px',
                height: '40px',
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onPress={handleNext}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
            >
               Next
            </AwesomeButton>

            </div>
          ) : null}
          {activeStep == 2 ? <div className="h-full w-full flex flex-col justify-center items-center"></div> : null}
        </div>
      </DialogBody>
      <DialogFooter>

      <AwesomeButton
              style={{
                '--button-primary-color': '#D70040',
                '--button-primary-color-dark': '#C41E3A',
                '--button-primary-color-light': '#ffffff',
                '--button-primary-color-hover': '#D70040',
                '--button-primary-color-active': '#D2042D',
                '--button-default-border-radius': '8px',
                width: '80px',
                height: '40px',
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onPress={handler}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
            >
               Cancel
            </AwesomeButton>
      </DialogFooter>
    </Dialog>
  );
}

export default NewLessonModal;
