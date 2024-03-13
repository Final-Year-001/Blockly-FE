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

function logout(){
  console.log("Works");
  // localStorage.removeItem('tokens');
  window.location.href = '/login'; 
}

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
        {/* <Button className="mr-4" onClick={()=>{createHTMLFile("file")}}>Preview Code</Button> */}
        {/* <Link to="/get-started"><Button className="mr-4">Tutorial Guide</Button> </Link> */}
        {/* <Button className="mr-4" onClick={()=>logout()} >Logout</Button> */}
        <AwesomeButton 
        style={{ 
          '--button-primary-color': '#494949',
          '--button-primary-color-dark': '#0d0d0d',
          '--button-primary-color-light': '#ffffff',
          '--button-primary-color-hover': '#787878',
          '--button-primary-color-active': '#323232',
          '--button-default-border-radius': '8px',
           width: '140px',
           height: '37px',   
           marginRight: '10px'        
        }} 
        onReleased={()=>{createHTMLFile("file")}}
        type="primary">
          Preview Code
        </AwesomeButton>

        <AwesomeButton 
        style={{ 
          '--button-primary-color': '#ff605d',
          '--button-primary-color-dark': '#d44643',
          '--button-primary-color-light': '#ffffff',
          '--button-primary-color-hover': '#fd6e6b',
          '--button-primary-color-active': '#d44643',
          '--button-default-border-radius': '8px',
           width: '140px',
           height: '37px',   
           marginRight: '10px'        
        }} 
        onReleased={()=>{createHTMLFile("file")}}
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
    </div>
  );
}

export default FrontendTopBar;
