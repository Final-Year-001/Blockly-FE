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
 

  return (
    <div className="flex w-full justify-between items-center p-4">
      <div className="flex flex-row gap-3 px-2">
          <h1 className="text-3xl font-bold text-indigo-400">
        Frontend workspace
      </h1>
        
      </div>
      <div className="flex gap-2">
        <Button onClick={()=>{setworkAreaSize("small")}}>Small</Button>
        <Button onClick={()=>{setworkAreaSize("medium")}}>Medium</Button>
        <Button onClick={()=>{setworkAreaSize("large")}}>Large</Button>
      </div>
      <div>
        <Avatar src="/img/cat default avatar.png" alt="avatar" size="md" />
      </div>
    </div>
  );
}

export default FrontendTopBar;
