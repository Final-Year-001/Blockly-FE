/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { BlocklyWorkspace, WorkspaceSvg } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import { Card } from "@material-tailwind/react";
import { FETheme } from "../../themes/FETheme";
import frontendToolboxCategories from "../../toolbox/frontend";
import '../../themes/renderer/CustomRender'
import CustomCategory from "../../themes/toolbox/customCats";


// Renderers = minimalist /zelos / thrasos / geras

const workspaceConfiguration = {
  theme: FETheme,
  renderer: "custom_renderer", 
  toolbar: CustomCategory,
  grid: {
    spacing: 20,
    length: 3,
    // colour: "#ffffff",
    colour: "#",
    snap: true,
  },
  zoom:{
    controls: true,
    wheel: true,
    startScale: 0.8,
    maxScale: 3,
    minScale: 0.1,
    scaleSpeed: 1.2,
    pinch: true,
    trashcan: true
    },

    toolboxConfiguration: {
      hidden: true // Hide the toolbox
    }
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
      className="fill-height z-20 rounded-lg border-8 overflow-hidden border-gray-300"
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
