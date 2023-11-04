import {
  Button,
  Select,
  Option,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { PlayIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import LoadingIcon from "../components/loadingicon";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { httpClient } from "../helpers/axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { sandboxAtom } from "../state/stadbox";
import { codeAtom } from "../state/code";

function SandboxTopBar() {
  const [sandbox, setSandbox] = useRecoilState(sandboxAtom);
  const code = useRecoilValue(codeAtom);

  const qc = useQueryClient();

  const createSandboxMutation = useMutation({
    mutationFn: async () => {
      httpClient.post("sandbox/");
    },
    onSuccess: () => {
      qc.invalidateQueries("sandbox");
    },
  });

  const sandboxQuery = useQuery({
    queryKey: ["sandbox"],
    queryFn: () => httpClient.get("sandbox/all"),
    onSuccess: (data) => {
      let up = data?.data?.containers.filter((c: any) =>
        c.status.toLowerCase().includes("up")
      );

      if (up?.length === 0) {
        createSandboxMutation.mutate();
      }
    },
  });

  const containers =
    sandboxQuery.data?.data?.containers.filter((c: any) =>
      c.status.toLowerCase().includes("up")
    ) || [];

  const codeMutation = useMutation({
    mutationFn: async () => {
      let c = `
          const express = require('express')
          const app = express();
          ${code}
          app.get("/health", (req, res) => {
              res.json({ hello: "Hello world!" });
          })
          
          app.listen("8999", () => {
              console.log("listen on 8999")
          })
      `;
      httpClient.post("sandbox/" + sandbox.name, c, {
        headers: { "Content-Type": "text/plain" },
      });
    },
  });

  return (
    <div className="flex w-full justify-between items-center p-4">
      <div className="flex flex-row gap-3 px-2">
        <Button
          variant="filled"
          className="flex flex-row gap-3 justify-center items-center text-white"
          onClick={() => {
            codeMutation.mutate();
          }}
        >
          {codeMutation.isLoading ? (
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
            <Select
              label="Select Sandbox"
              value={sandbox.name}
              onChange={(s) =>
                setSandbox((prev) => {
                  return { ...prev, name: s };
                })
              }
            >
              {containers.map((c: { name: string }) => (
                <Option value={c.name}>{c.name}</Option>
              ))}
            </Select>
          </div>
        ) : null}
      </div>
      <div></div>
      <div>
        <Avatar src="/img/cat default avatar.png" alt="avatar" size="md" />
      </div>
    </div>
  );
}

export default SandboxTopBar;
