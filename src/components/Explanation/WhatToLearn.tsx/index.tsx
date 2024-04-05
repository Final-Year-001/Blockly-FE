import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import ButtonsSet from "./ButtonsSet";
import { useRecoilState } from "recoil";
import { whatToLeanAtom } from "../../../state/explanation";
import { AwesomeButton} from 'react-awesome-button';

function WhatToLean() {
  const [whatToLearnState, setWhatToLearnState] =
    useRecoilState(whatToLeanAtom);
  console.log("what to learn", whatToLearnState);
  const handleOpen = () => {
    setWhatToLearnState((prev) => !prev);
  };
  return (
    <Dialog
      className="flex-wrap overflow-hidden"
      open={whatToLearnState}
      handler={handleOpen}
    >
      <DialogHeader className="ml-11 mt-6">
        What do you want to try? 😋
      </DialogHeader>
      <DialogBody className="max-w-full max-h-max">
        <div className="flex flex-row justify-center flex-wrap max-w-full">
          <ButtonsSet />
          <img
            src="/img/blockly/image_thinkig_children.png"
            alt="image"
            width="40%"
          />
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
              onPress={handleOpen}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
            >
               Cancel
            </AwesomeButton>

      </DialogFooter>
    </Dialog>
  );
}

export default WhatToLean;
