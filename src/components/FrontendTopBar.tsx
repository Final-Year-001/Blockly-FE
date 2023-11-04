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

  return (
    <div className="flex w-full justify-between items-center p-4">
      <div className="flex flex-row gap-3 px-2">
        <Button
          variant="filled"
          className="flex flex-row gap-3 justify-center items-center text-white"
        >
          Run
        </Button>
        
      </div>
      <CopySandBoxUrl />
      <div>
        <Avatar src="/img/cat default avatar.png" alt="avatar" size="md" />
      </div>
    </div>
  );
}

export default FrontendTopBar;
