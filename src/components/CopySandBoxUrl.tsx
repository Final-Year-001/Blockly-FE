import React, { useState } from "react";
import { Button, Card } from "@material-tailwind/react";
import { ClipboardIcon } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
import { sandboxAtom } from "../state/stadbox";

function CopySandBoxUrl() {
  const [sandbox] = useRecoilState(sandboxAtom);
  const [copied, setCopied] = useState(false);

  const getUrl = () => {
    return sandbox.name
      ? `${import.meta.env.VITE_API_ENDPOINT}/sandbox/proxy/${sandbox.name}`
      : "environment is not selected";
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getUrl());
    if (copied) {
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <div
      id="GetUrlSection"
      className="px-1 py-2 bg flex justify-between items-center"
    >
      <Button
        onClick={handleCopy}
        variant="filled"
        className="flex flex-row gap-3 justify-center items-center text-white mr-3"
        disabled={!sandbox.name}
      >
        <ClipboardIcon className="w-4 h-4 text-white" />
        {copied ? "Copied!" : "Copy URL"}
      </Button>
      <Card className=" w-[500px] border border-gray-200">
        <p className="text-s py-2 text-gray-500 px-4 truncate">{getUrl()}</p>
      </Card>
    </div>
  );
}

export default CopySandBoxUrl;
