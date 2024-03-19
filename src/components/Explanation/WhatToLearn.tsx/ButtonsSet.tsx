import { Button } from "@material-tailwind/react";
import { useSetRecoilState } from "recoil";
import { videoPlayerDialogAtom } from "../../../state/explanation";

function ButtonsSet() {
  const setVideoPlayerDialogState = useSetRecoilState(videoPlayerDialogAtom);

  return (
    <div className="flex flex-col gap-10 relative  w-60 mt-10">
      <Button
        size="md"
        variant="filled"
        color="blue"
        className="absolute rounded-full left-10"
        onClick={() => {
          setVideoPlayerDialogState({
            videoLink: "https://youtu.be/1GY3wrCKZFw",
            showPlayer: true,
          });
        }}
      >
        Server Creation
      </Button>
      <Button
        size="md"
        variant="filled"
        color="red"
        className="absolute rounded-full left-0 top-12"
        onClick={() => {
          setVideoPlayerDialogState({
            videoLink: "https://www.youtube.com/watch?v=1jHvXakt1qw",
            showPlayer: true,
          });
        }}
      >
        Api Creation
      </Button>
      <Button
        variant="filled"
        color="orange"
        size="md"
        className="absolute left-16 top-24 rounded-full text-white"
        onClick={() => {
          setVideoPlayerDialogState({
            videoLink: "https://www.youtube.com/watch?v=1jHvXakt1qw",
            showPlayer: true,
          });
        }}
      >
        Session Handling
      </Button>
      <Button
        size="md"
        variant="filled"
        color="green"
        className="absolute rounded-full left-30 top-40"
        onClick={() => {
          setVideoPlayerDialogState({
            videoLink: "https://www.youtube.com/watch?v=1jHvXakt1qw",
            showPlayer: true,
          });
        }}
      >
        JWT authentication
      </Button>
    </div>
  );
}

export default ButtonsSet;
