import { Button, Select, Option, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import LoadingIcon from "../components/loadingicon";
import { useState } from "react";
import { useQuery } from "react-query";

function SandboxTopBar() {
  const [loading, setLoading] = useState<boolean>(false);
  const sandboxQuery = useQuery(["sandboxes"]);

  return (
    <div className="flex w-full justify-between items-center p-4">
      <div>
        {sandboxQuery.isFetching ? (
          <div className="flex flex-row gap-3 items-center p-2 w-72">
            <LoadingIcon className="animate-spin h-4 w-" />
            <Typography variant="small">Loading available sandboxes</Typography>
          </div>
        ) : null}
        {sandboxQuery.isSuccess ? (
          <div className="w-72">
            <Select label="Select Sandbox">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
        ) : null}
      </div>
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
