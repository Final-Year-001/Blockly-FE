import { Button, Select, Option, Typography, Avatar } from "@material-tailwind/react";
import { PlayIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import LoadingIcon from "../components/loadingicon";
import { useState } from "react";
import { useQuery } from "react-query";
import { httpClient } from "../helpers/axios";

function SandboxTopBar() {
  const [loading, setLoading] = useState<boolean>(false);
  const sandboxQuery = useQuery(["sandboxes"], () => httpClient.get("sandbox/all"));
  const containers = sandboxQuery.data?.data?.containers || [];

  return (
    <div className="flex w-full justify-between items-center p-4">
      <div className="flex flex-row gap-3 px-2">
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
        {sandboxQuery.isError ? (
          <div className="flex flex-row gap-3 items-center p-2 w-72 text-red-100">
            <ExclamationCircleIcon className="h-6 w-6" />
            <Typography variant="small">Error loading sandboxes</Typography>
          </div>
        ) : null}
        {sandboxQuery.isFetching ? (
          <div className="flex flex-row gap-3 items-center p-2 w-72">
            <LoadingIcon className="animate-spin h-4 w-4" />
            <Typography variant="small">Loading available sandboxes</Typography>
          </div>
        ) : null}
        {sandboxQuery.isSuccess && !sandboxQuery.isFetching ? (
          <div className="w-[30em]">
            <Select label="Select Sandbox" defaultValue={containers[0]?.name}>
              {containers.map((c: {name:string}) => <Option>{c.name}</Option>)}
            </Select>
          </div>
        ) : null}
      </div>
      <div>
        
      </div>
      <div>
      <Avatar src="/img/cat default avatar.png" alt="avatar" size="md" />

      </div>
    </div>
  );
}

export default SandboxTopBar;
