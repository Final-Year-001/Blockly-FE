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
import { AwesomeButton, AwesomeButtonProgress} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { useNavigate } from "react-router-dom";
import ModalCodeEdit from "../pages/codeExplain/ModalCode";
import { useState } from "react";

function logout(){
  console.log("Works");
  localStorage.removeItem('tokens');
  window.location.href = '/login'; 
}

function FrontendTopBar() {
  let [workAreaSize, setworkAreaSize] = useRecoilState(codeAtom);
  let [code, setCode] = useRecoilState(codeAtom);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-between items-center p-3">
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
        <AwesomeButton 
        style={{ 
          '--button-primary-color': '#33cc33',
          '--button-primary-color-dark': '#18a418',
          '--button-primary-color-light': '#ffffff',
          '--button-primary-color-hover': '#33cc33',
          '--button-primary-color-active': '#1aa81a',
          '--button-default-border-radius': '8px',
           width: '140px',
           height: '37px',   
           marginRight: '10px'        
        }} 
        // onReleased={()=>{createHTMLFile("file")}}
        // onReleased={()=>{navigate("/crunchCode")}}
        onPress={()=>{setShowCodeEditor(true)}}
        type="primary">
          Preview Code
        </AwesomeButton>

        <AwesomeButton 
        style={{ 
          '--button-primary-color': '#42A5F5',
          '--button-primary-color-dark': '#2d82c7',
          '--button-primary-color-light': '#ffffff',
          '--button-primary-color-hover': '#62b4f8',
          '--button-primary-color-active': '#2d82c7',
          '--button-default-border-radius': '8px',
           width: '140px',
           height: '37px',
           marginRight: '10px' 
        }} 
        href={'/get-started'}
        type="primary">
          Tutorial Guide
        </AwesomeButton>

        <AwesomeButton 
        style={{ 
          '--button-primary-color': '#FFA726',
          '--button-primary-color-dark': '#e29520',
          '--button-primary-color-light': '#ffffff',
          '--button-primary-color-hover': '#ffb03a',
          '--button-primary-color-active': '#e29520',
          '--button-default-border-radius': '8px',
           width: '90px',
           height: '37px' ,
           marginRight: '10px' 
        }} 
        onReleased={()=>logout()}
        type="primary">
          Logout
        </AwesomeButton>
      </div>
      {showCodeEditor && <ModalCodeEdit setShowCodeEditor={setShowCodeEditor}/>}
    </div>
  );
}

export default FrontendTopBar;
