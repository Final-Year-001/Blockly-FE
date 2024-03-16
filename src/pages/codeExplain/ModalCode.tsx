import React, { useState } from "react";
import CodeSplitter from "./CodeSplitter";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import ProductLogo from "../../assets/LogoB&W";
import { TypeAnimation } from "react-type-animation";
import { useRecoilValue } from "recoil";
import { FEOutAtom } from "../../state/FEOutputCode";


interface ModalProps {
  setShowCodeEditor: (bool: boolean) => void;
}



const ModalCodeEdit: React.FC<ModalProps> = ({ setShowCodeEditor }) => {
    const FEoutCode = useRecoilValue(FEOutAtom);

    function createHTMLFile(fileName : any) {
        // Create a Blob with the HTML content
        const blob = new Blob([FEoutCode], { type: 'text/html' });
      
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
    <div
      className={`fixed z-50 inset-0 overflow-y-auto backdrop-blur-2xl bg-blue-800/60`}
    >
      <div className="relative mx-auto w-full  ">
        <div className="flex justify-between mx-4  mb-4">
          <div className="flex">
            <div className="mt-4">
              <ProductLogo />
            </div>
            <div className="mt-4 ml-10">
            <TypeAnimation className="Typewriter"
              sequence={[
                "Code Viewer",
                2000,
                "Code Viewer HTML",
                2000,
                "Code Viewer CSS",
                2000,
                "Code Viewer JS",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "30px", color: '#0e3b82', fontWeight: 'bold'}}
              repeat={Infinity}
            />
            </div>
          </div>
          <div className="flex mt-4">
            <div>
              <AwesomeButton
                style={{
                  "--button-primary-color": "#d600b6",
                  "--button-primary-color-dark": "#8e0079",
                  "--button-primary-color-light": "#ffffff",
                  "--button-primary-color-hover": "#c400a7",
                  "--button-primary-color-active": "#95007e",
                  "--button-default-border-radius": "8px",
                  width: "170px",
                  height: "40px",
                  marginRight: "10px",
                  fontSize: "16px",
                }}
                // onReleased={()=>{createHTMLFile("file")}}
                // onReleased={()=>{navigate("/crunchCode")}}
                onPress={() => {
                   createHTMLFile("file")
                }}
                type="primary"
              >
                Download Code
              </AwesomeButton>
            </div>
            <div>
              <AwesomeButton
                style={{
                  "--button-primary-color": "#2b57ea",
                  "--button-primary-color-dark": "#0f3ac8",
                  "--button-primary-color-light": "#ffffff",
                  "--button-primary-color-hover": "#2b57ea",
                  "--button-primary-color-active": "#0f34ac",
                  "--button-default-border-radius": "8px",
                  width: "140px",
                  height: "40px",
                  marginRight: "10px",
                  fontSize: "16px",
                }}
                // onReleased={()=>{createHTMLFile("file")}}
                // onReleased={()=>{navigate("/crunchCode")}}
                onPress={() => {
                  setShowCodeEditor(false);
                }}
                type="primary"
              >
                Go Back
              </AwesomeButton>
            </div>
          </div>
        </div>
        <div className="">
          <CodeSplitter />
        </div>
      </div>
    </div>
  );
};

export default ModalCodeEdit;
