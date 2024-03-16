import { Link } from "react-router-dom";
import ProductLogo from "../assets/Logo";
import { Avatar, Button } from "@material-tailwind/react";
import WhatToLean from "./Explanation/WhatToLearn.tsx";
import { useSetRecoilState } from "recoil";
import { whatToLeanAtom } from "../state/explanation.ts";
import VideoPlayer from "./Explanation/VideoPlayerDialog.tsx/index.tsx";

function BackendTopBar() {
  const setWhatToLearnState = useSetRecoilState(whatToLeanAtom);
  return (
    <>
      <div className="flex w-full justify-between items-center p-4">
        <div className="flex flex-col  gap-3 px-2">
          <Link to="/my/projects">
            <ProductLogo TextSize={3} />
          </Link>
        </div>

        <div className="flex gap-2">
          <h3 className="text-2xl font-bold text-gray-800">Backend Builder</h3>
        </div>

        <div>
          <Button
            className="mr-4"
            onClick={() => {
              setWhatToLearnState(true);
            }}
            id="HaveNoIdea"
          >
            Have No idea?
          </Button>
          <Link to="/get-started">
            <Avatar src="/img/cat default avatar.png" alt="avatar" size="md" />
          </Link>
        </div>
      </div>
      <WhatToLean />
      <VideoPlayer />
    </>
  );
}

export default BackendTopBar;
