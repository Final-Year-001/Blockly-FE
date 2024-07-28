/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Select, Option, Typography } from "@material-tailwind/react";
import { PlayIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import LoadingIcon from "../components/loadingicon";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { sandboxAtom } from "../state/stadbox";
import { codeAtom } from "../state/code";
import CopySandBoxUrl from "./CopySandBoxUrl";
import { useRef } from "react";
import { createSandbox, getAllSandBoxes, updateCode } from "../api/sandbox";
import { tokenAtom } from "../state/auth";
import StatusNoti from "../pages/fronted/Status";

function SandboxTopBar() {
  const [sandbox, setSandbox] = useRecoilState(sandboxAtom);
  const retryRef = useRef<number>(0);

  const code = useRecoilValue(codeAtom);

  const qc = useQueryClient();

  const tokens = useRecoilValue(tokenAtom);

  const createSandboxMutation = useMutation({
    mutationFn: createSandbox.bind(null, tokens),
    onSuccess: () => {
      qc.invalidateQueries("sandbox");
    },
  });

  const sandboxQuery = useQuery({
    queryKey: ["sandbox"],
    queryFn: () => getAllSandBoxes(tokens),
    onSuccess: (data) => {
      const up = data?.data?.containers.filter((c: any) =>
        c?.status?.toLowerCase()?.includes("up")
      );

      if (up?.length === 0) {
        if (retryRef.current < 3) {
          createSandboxMutation.mutate();
          retryRef.current++;
        }
      }
    },
  });

  const containers =
    sandboxQuery.data?.data?.containers?.filter((c: any) =>
      c?.status?.toLowerCase()?.includes("up")
    ) || [];

  const codeMutation = useMutation({
    mutationFn: () => updateCode(tokens, sandbox, code),
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
          disabled={!sandbox.name}
          id="ServerRunButton"
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
      <CopySandBoxUrl />
      { codeMutation.isSuccess ? <StatusNoti message={"Code updated in the sandbox."} mode="success" /> : null }
      { codeMutation.isError ? <StatusNoti message={"Could not apply the code to the sandbox"} mode="pending"/> : null }
    </div>
  );
}

export default SandboxTopBar;
