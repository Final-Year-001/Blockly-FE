import React, { useState } from "react";
import CodeSplitter from "./CodeSplitter";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import ProductLogo from "../../assets/LogoB&W";

interface ModalProps {
  setShowCodeEditor: (bool: boolean) => void;
}

const ModalCodeEdit: React.FC<ModalProps> = ({ setShowCodeEditor }) => {
  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto backdrop-blur-2xl bg-blue-900/40`}
    >
      <div className="relative mx-auto w-full  ">
        <div className="flex justify-between mx-4 mt-4 mb-4">
          <div className="flex">
            <div >
              <ProductLogo />
            </div>
            <div>
              <h1 className="text-3xl flex text-center mt-1 ml-4 text-blue-900 font-semibold">
                //Code Editor
              </h1>
            </div>
          </div>
          <div></div>
          <div className="flex">
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
                  setShowCodeEditor(false);
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
