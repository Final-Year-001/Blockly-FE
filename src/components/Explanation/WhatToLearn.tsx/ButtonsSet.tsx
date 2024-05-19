import { useSetRecoilState } from "recoil";
import { videoPlayerDialogAtom } from "../../../state/explanation";
import { AwesomeButton } from "react-awesome-button";

function ButtonsSet() {
  const setVideoPlayerDialogState = useSetRecoilState(videoPlayerDialogAtom);

  return (
    <div className="flex flex-col gap-10 relative  w-60 mt-10">
      <AwesomeButton
        style={{
          "--button-primary-color": "#E35335",
          "--button-primary-color-dark": "#8B4000",
          "--button-primary-color-light": "#ffffff",
          "--button-primary-color-hover": "#E35335",
          "--button-primary-color-active": "#FF4433",
          "--button-default-border-radius": "8px",
          width: "180px",
          height: "50px",
          //marginRight: '10px',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onPress={() => {
          setVideoPlayerDialogState({
            videoLink: "https://youtu.be/1GY3wrCKZFw",
            showPlayer: true,
          });
        }}
        className="h-12 flex gap-3 justify-center items-center"
        type="primary"
      >
        Server Creation
      </AwesomeButton>

      <AwesomeButton
        style={{
          "--button-primary-color": "#33cc33",
          "--button-primary-color-dark": "#18a418",
          "--button-primary-color-light": "#ffffff",
          "--button-primary-color-hover": "#33cc33",
          "--button-primary-color-active": "#1aa81a",
          "--button-default-border-radius": "8px",
          width: "180px",
          height: "50px",
          //marginRight: '10px',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onPress={() => {
          setVideoPlayerDialogState({
            videoLink: "https://youtu.be/QleCS8Gu700",
            showPlayer: true,
          });
        }}
        className="h-12 flex gap-3 justify-center items-center"
        type="primary"
      >
        Api Creation and database hanlding
      </AwesomeButton>

      <AwesomeButton
        style={{
          "--button-primary-color": "#42A5F5",
          "--button-primary-color-dark": "#2d82c7",
          "--button-primary-color-light": "#ffffff",
          "--button-primary-color-hover": "#62b4f8",
          "--button-primary-color-active": "#2d82c7",
          "--button-default-border-radius": "8px",
          width: "180px",
          height: "50px",
          //marginRight: '10px',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onPress={() => {
          setVideoPlayerDialogState({
            videoLink: "https://youtu.be/OZQ57lwxx_0",
            showPlayer: true,
          });
        }}
        className="h-12 flex gap-3 justify-center items-center"
        type="primary"
      >
        Session Handling
      </AwesomeButton>

      <AwesomeButton
        style={{
          "--button-primary-color": "#FFA726",
          "--button-primary-color-dark": "#e29520",
          "--button-primary-color-light": "#ffffff",
          "--button-primary-color-hover": "#ffb03a",
          "--button-primary-color-active": "#e29520",
          "--button-default-border-radius": "8px",
          width: "180px",
          height: "50px",
          //marginRight: '10px',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onPress={() => {
          setVideoPlayerDialogState({
            videoLink: "https://youtu.be/0OtyNyB88Ms",
            showPlayer: true,
          });
        }}
        className="h-12 flex gap-3 justify-center items-center"
        type="primary"
      >
        JWT authentication
      </AwesomeButton>
    </div>
  );
}

export default ButtonsSet;
