import React, { useState, useRef } from "react";
import { BlocklyWorkspace, WorkspaceSvg } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import { javascriptCategory } from "../../categories/javascript";
import { htmlCategory } from "../../categories/html";
import { commonCategory } from "../../categories/google_blocks"; 
import { loopsCategory } from "../../categories/google_blocks";
import { variablesCategory } from "../../categories/google_blocks";
import { textCategory } from "../../categories/google_blocks";
import { mathCategory } from "../../categories/math";
import { cssCategory } from "../../categories/css";
import { Experimental } from "../../categories/experimental";
import { Card } from "@material-tailwind/react";

interface FrontendWorkspaceProps {
  onCodeChange?: (code: string, workspace: WorkspaceSvg) => void;
  initialState?: any;
  loaded: boolean;
}

function FrontendWorkspace({
  onCodeChange,
  initialState,
  loaded,
}: FrontendWorkspaceProps) {

  const workspaceWrapper = useRef<HTMLDivElement>(null);

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      htmlCategory,
      cssCategory,
      javascriptCategory,
      commonCategory,
      loopsCategory,
      variablesCategory,
      textCategory,
      mathCategory,
      Experimental,
    ],
  };

  const workspaceDidChange = (workspace: WorkspaceSvg) => {
    console.log(workspace, "workspace");
    javascriptGenerator.addReservedWords("code");
    let code = javascriptGenerator.workspaceToCode(workspace);
    console.log("backend code - ", code);
    onCodeChange?.(code, workspace);
  };

  return (
    <Card
      ref={workspaceWrapper}
      className="fill-height border rounded-lg overflow-hidden border-r-8 border-t-[20px] border-l-8 border-b-8 border-gray-200"
    >
      {loaded ? (
        <BlocklyWorkspace
          toolboxConfiguration={toolboxCategories}
          initialJson={initialState}
          className="fill-height"
          workspaceConfiguration={{
            grid: {
              spacing: 20,
              length: 3,
              colour: "#fff",
              snap: true,
            },
          }}
          onWorkspaceChange={workspaceDidChange}
        />
      ) : null}
    </Card>
  );
}

export default FrontendWorkspace;
