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
        What do you want to Try? 😋
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
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default WhatToLean;
