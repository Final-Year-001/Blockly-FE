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
import ProductLogo from "../assets/Logo";
import { Link } from "react-router-dom";

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
      <div className="flex flex-col  gap-3 px-2">
      <Link to="/my/projects">
        <ProductLogo TextSize={3}/>
        </Link>
      </div>

      <div className="flex gap-2">
      <h3 className="text-2xl font-bold text-gray-800">
        Frontend Builder
      </h3>
      </div>

      <div>
        <Button className="mr-4" onClick={()=>{createHTMLFile("file")}}>Download Code</Button>
        <Link to="/get-started"><Avatar src="/img/cat default avatar.png" alt="avatar" size="md" /></Link>
      </div>

    </div>
  );
}

export default FrontendTopBar;
