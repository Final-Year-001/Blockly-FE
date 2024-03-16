import WelcomeCard from "../../tourContent/Welcome";
import NormalCard from "../../tourContent/NormalCard";
import HaveNoIdeaImage from "../../assets/tourImages/teacher-student.png";
import BlockImg from "../../assets/tourImages/block.png";
import WsImg from "../../assets/tourImages/ws.png";
import devWorking from "../../assets/tourImages/dev-working.png";
import codePng from "../../assets/tourImages/code.png";
import launch from "../../assets/tourImages/launch.png";
import outPng from "../../assets/tourImages/out.png";
import EndImg from "../../assets/tourImages/end.png";
import GetUrl from "../../assets/tourImages/pleasant-surprise.png";

export const TourSteps = [
  {
    selector: "",
    content: <WelcomeCard />,
  },
  {
    selector: "#HaveNoIdea",
    content: (
      <NormalCard
        title={"Cannot Understand Anything?"}
        imageUrl={HaveNoIdeaImage}
        description={
          "Click this whenever you stuck at something check if there are any solutions for your problem"
        }
        size={"200px"}
      />
    ),
  },
  {
    selector: ".blocklyToolboxDiv",
    content: (
      <NormalCard
        title={"Block Inventory"}
        imageUrl={BlockImg}
        description={"You can find many blocks to play with from here."}
        size={"200px"}
      />
    ),
  },
  {
    selector: ".blocklyMainBackground",
    content: (
      <NormalCard
        title={"Playground"}
        imageUrl={WsImg}
        description={
          "This is where you get to play with your blocks drag and drop and snap and build. Your imagination is your limit. "
        }
        size={"200px"}
      />
    ),
  },
  {
    selector: "#outputSection",
    content: (
      <NormalCard
        title={"See what you did"}
        imageUrl={outPng}
        description={"This area will show the result of your block creation."}
        size={"200px"}
      />
    ),
  },
  {
    selector: "#TabBtnCode",
    content: (
      <NormalCard
        title={"See the code"}
        imageUrl={codePng}
        description={
          "You can see the actual code that you made using blocks This is the heart of your creation."
        }
        size={"200px"}
      />
    ),
  },
  {
    selector: "#ServerRunButton",
    content: (
      <NormalCard
        title={"Run your server here"}
        imageUrl={launch}
        description={
          "Once you are done with playing blocks run the code you created from here and check how it is!"
        }
        size={"200px"}
      />
    ),
  },
  {
    selector: "#TabBtnConsole",
    content: (
      <NormalCard
        title={"Real time server console"}
        imageUrl={devWorking}
        description={"See realtime outputs from your server."}
        size={"200px"}
      />
    ),
  },
  {
    selector: "#GetUrlSection",
    content: (
      <NormalCard
        title={"Base URL of your server"}
        imageUrl={GetUrl}
        description={
          "If there are no errors in your code, here you can copy the base URL of your server. take it and play with it!"
        }
        size={"200px"}
      />
    ),
  },
  {
    selector: "",
    content: (
      <NormalCard
        title={"Lets Go Make stuff"}
        imageUrl={EndImg}
        description={
          "Now you know where things are around here. Lets get building stuff!"
        }
        size={"200px"}
      />
    ),
  },
];
