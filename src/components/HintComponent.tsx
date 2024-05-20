import { useEffect, useState } from "react";
import BlocklyRender from "./BlocklyRender";
import { useAnimate, motion } from "framer-motion";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

interface HintComponentProps {
  readonly hint?: string;
  readonly step: number;
  readonly stepPreview?: object;
  readonly image?: {
    ref?: string;
    url?: string;
  };
  readonly lastStep: number;
}

function HintComponent(_props: HintComponentProps) {
  const [oldProps, setProps] = useState(_props);

  const { hint, step, stepPreview, image, lastStep } = oldProps;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  // const count = useMotionValue(1);
  const [scope, animate] = useAnimate();
  const [isLastStep, setIsLastStep] = useState<boolean>(true);

  useEffect(() => {
    const a = async () => {
      await animate([[scope.current, { opacity: 0 }]]);
      setProps(_props);
      setIsLastStep(_props.step == _props.lastStep);
      await animate([[scope.current, { opacity: 1 }]]);
    };
    a();
  }, [_props.step]);

  return (
    <>
      <motion.div
        ref={scope}
        className={`p-4 flex flex-row justify-between bg-gray-200 rounded-lg ${
          isLastStep ? "bg-green-400" : ""
        }`}
      >
        {isLastStep ? (
          <>
            <div>Success You have completed the lesson!</div>
          </>
        ) : (
          <>
            <div>
              <div>Step {step}</div>
              <div className="flex flex-row">{hint}</div>
            </div>
            {stepPreview ? (
              image ? (
                <img src={image.url} className="h-[10em] w-[10em]"></img>
              ) : (
                <BlocklyRender
                  state={stepPreview}
                  className="h-[10em] w-[10em]"
                />
              )
            ) : null}
          </>
        )}
      </motion.div>
      <div className="w-full flex justify-end">
        <Button
          onClick={handleOpen}
          variant="gradient"
          className="h-fit w-fit p-4"
        >
          Expand
        </Button>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="flex justify-center items-center">
          {stepPreview ? (
            image ? (
              <img src={image.url} className="h-[30em] w-[40em]"></img>
            ) : (
              <BlocklyRender
                state={stepPreview}
                large
                className="h-[30em] w-[40em]"
              />
            )
          ) : null}
        </DialogBody>
      </Dialog>
    </>
  );
}

export default HintComponent;
