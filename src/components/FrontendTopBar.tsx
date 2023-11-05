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
import CopySandBoxUrl from "./CopySandBoxUrl";

function FrontendTopBar() {
  let [workAreaSize, setworkAreaSize] = useRecoilState(codeAtom);
  let [code, setCode] = useRecoilState(codeAtom);

  function createHTMLFile(fileName : any) {
    // Create a Blob with the HTML content
    const blob = new Blob([code], { type: 'text/html' });
  
    // Create an object URL for the Blob
    const url = URL.createObjectURL(blob);
  
    // Create an anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
  
    // Simulate a click on the anchor to trigger the download
    a.click();
  
    // Revoke the object URL to free up resources
    // URL.revokeObjectURL(url);
  }

  return (
    <div className="flex w-full justify-between items-center p-4">
      <div className="flex flex-row gap-3 px-2">
          <h1 className="text-3xl font-bold text-indigo-400">
        Frontend workspace
      </h1>
        
      </div>
      <div className="flex gap-2">
        <Button onClick={()=>{setworkAreaSize("small")}}>Small</Button>
        <Button onClick={()=>{setworkAreaSize("large")}}>Large</Button>
        <Button onClick={()=>{createHTMLFile("file")}}>Export</Button>
      </div>
      <div>
        <Avatar src="/img/cat default avatar.png" alt="avatar" size="md" />
      </div>
    </div>
  );
}

export default FrontendTopBar;
