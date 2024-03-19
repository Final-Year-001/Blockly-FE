import { Dialog, DialogBody } from "@material-tailwind/react";
import ReactPlayer from "react-player";
import { useRecoilState } from "recoil";
import { videoPlayerDialogAtom } from "../../../state/explanation";

function VideoPlayer() {
  const [videoPlayerDialogState, setVideoPlayerDialogState] = useRecoilState(
    videoPlayerDialogAtom
  );
  const handleOpen = () =>
    setVideoPlayerDialogState((prev) => ({
      ...prev,
      showPlayer: !prev.showPlayer,
    }));
  return (
    <Dialog
      className="flex flex-wrap justify-center bg-transparent flex-row 2xl:min-w-[850px]"
      open={videoPlayerDialogState.showPlayer}
      handler={handleOpen}
    >
      <DialogBody>
        <ReactPlayer
          width="900px"
          height="500px"
          url={videoPlayerDialogState.videoLink}
          playbackRate={1.3}
        />
      </DialogBody>
    </Dialog>
  );
}

export default VideoPlayer;
