import { Link } from "react-router-dom";
import ProductLogo from "../assets/Logo";
import { Avatar, Button } from "@material-tailwind/react";
import WhatToLean from "./Explanation/WhatToLearn.tsx";
import { useSetRecoilState } from "recoil";
import { whatToLeanAtom } from "../state/explanation.ts";
import VideoPlayer from "./Explanation/VideoPlayerDialog.tsx/index.tsx";
import { AwesomeButton} from 'react-awesome-button';

function BackendTopBar() {
  const setWhatToLearnState = useSetRecoilState(whatToLeanAtom);
  return (
    <>
      <div className="flex w-full justify-between items-center p-4">
        <div className="flex flex-col  gap-3 px-2">
          <Link to="/my/projects">
            <ProductLogo TextSize={3} />
          </Link>
        </div>

        <div className="flex gap-2">
          <h3 className="text-2xl font-bold text-gray-800">Backend Builder</h3>
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
        className="mr-4"
        onPress={() => {setWhatToLearnState(true);}}
            id="HaveNoIdea"
        type="primary">
          Have No idea?
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
        href={'/login'}
        type="primary">
          Logout
        </AwesomeButton>
      
        </div>
      </div>
      <WhatToLean />
      <VideoPlayer />
    </>
  );
}

export default BackendTopBar;
