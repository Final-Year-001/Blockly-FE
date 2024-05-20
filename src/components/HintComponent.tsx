import { useEffect, useState } from "react";
import BlocklyRender from "./BlocklyRender";
import { useAnimate, motion } from "framer-motion";

interface HintComponentProps {
  readonly hint?: string;
  readonly step: number;
  readonly stepPreview?: object;
  readonly image?: {
    ref?: string;
    url?: string;
  };
  readonly lastStep: number;
  readonly frontend: boolean;
}

function HintComponent(_props: HintComponentProps) {
  const [oldProps, setProps] = useState(_props);

  const { hint, step, stepPreview, image } = oldProps;
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
                frontend={_props.frontend}
              />
            )
          ) : null}
        </>
      )}
    </motion.div>
  );
}

export default HintComponent;
