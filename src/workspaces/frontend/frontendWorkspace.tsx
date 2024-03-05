import React, { useRef } from "react";
import { BlocklyWorkspace, WorkspaceSvg } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import { Card } from "@material-tailwind/react";
import BlocklyThemes from "blockly"; 
import { FETheme } from "../../themes/FETheme";
import frontendToolboxCategories from "../../toolbox/frontend";

// Renderers = minimalist /zelos / thrasos / geras

const workspaceConfiguration = {
  theme: FETheme,
  // theme : "zelos",
  renderer: "minimalist", 
            grid: {
              spacing: 20,
              length: 3,
              // colour: "#ffffff",
              colour: "#",
              snap: true,
            },
};


interface FrontendWorkspaceProps {
  readonly onCodeChange?: (code: string, workspace: WorkspaceSvg) => void;
  readonly initialState?: any;
  readonly loaded: boolean;
}

function FrontendWorkspace({
  onCodeChange,
  initialState,
  loaded,
}: FrontendWorkspaceProps) {
  const workspaceWrapper = useRef<HTMLDivElement>(null);

  const workspaceDidChange = (workspace: WorkspaceSvg) => {
    javascriptGenerator.addReservedWords("code");
    let code = javascriptGenerator.workspaceToCode(workspace);
    onCodeChange?.(code, workspace);
  };

  return (
    <Card
      ref={workspaceWrapper}
      className="fill-height border rounded-lg overflow-hidden border-r-8 border-t-[20px] border-l-8 border-b-8 border-gray-200"
    >
      {loaded ? (
        <BlocklyWorkspace
          toolboxConfiguration={frontendToolboxCategories}
          initialJson={initialState}
          className="fill-height"
          workspaceConfiguration={workspaceConfiguration}
          onWorkspaceChange={workspaceDidChange}
        />
      ) : null}
    </Card>
  );
}

export default FrontendWorkspace;
