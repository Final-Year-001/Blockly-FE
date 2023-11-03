import { Button } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import LoadingIcon from "../components/loadingicon";
import { useState } from "react";

function SandboxTopBar() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="flex w-full justify-between items-center p-4">
      <div></div>
      <div>
        <Button
          variant="filled"
          className="flex flex-row gap-3 justify-center items-center text-white"
          onClick={() => setLoading(!loading)}
        >
          {loading ? (
            <LoadingIcon className="animate-spin h-4 w-" />
          ) : (
            <PlayIcon className="h-4 w-4" />
          )}
          Run
        </Button>
      </div>
      <div></div>
    </div>
  );
}

export default SandboxTopBar;
