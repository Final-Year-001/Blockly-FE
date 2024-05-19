/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { BlocklyWorkspace, WorkspaceSvg } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import { Card } from "@material-tailwind/react";
import { FETheme } from "../../themes/FETheme";
import frontendToolboxCategories from "../../toolbox/frontend";
import "../../themes/renderer/CustomRender";
import CustomCategory from "../../themes/toolbox/customCats";
import { useRecoilState } from "recoil";
import { FEOutAtom } from "../../state/FEOutputCode";
import { useEffect } from "react";
import { CrossTabCopyPaste } from '@blockly/plugin-cross-tab-copy-paste'; // Import the plugin

// Renderers = minimalist /zelos / thrasos / geras

// eslint-disable-next-line react-refresh/only-export-components
export const workspaceConfiguration = {
  theme: FETheme,
  renderer: "custom_renderer",
  toolbar: CustomCategory,
  grid: {
    spacing: 20,
    length: 3,
    colour: "#a1caff",
    // colour: "#",
    snap: true,
  },
  zoom: {
    controls: true,
    wheel: true,
    startScale: 0.8,
    maxScale: 3,
    minScale: 0.1,
    scaleSpeed: 1.2,
    pinch: true,
    trashcan: true,
  },
  toolboxConfiguration: {
    hidden: true, // Hide the toolbox
  },
};

interface FrontendWorkspaceProps {
  readonly onCodeChange?: (code: string, workspace: WorkspaceSvg) => void;
  readonly initialState?: any;
  readonly loaded: boolean;
}

let pluginInitialized = false; // Static variable to track plugin initialization

function FrontendWorkspace({
  onCodeChange,
  initialState,
  loaded,
}: FrontendWorkspaceProps) {
  const workspaceWrapper = useRef<HTMLDivElement>(null);
  const [FEoutCode, SetFEoutCode] = useRecoilState(FEOutAtom);

  useEffect(() => {
    if (!pluginInitialized) {
      const options = {
        contextMenu: false,
        shortcut: true,
        typeErrorCallback: handleTypeError,
      };

      // Initialize plugin.
      const plugin = new CrossTabCopyPaste();
      plugin.init(options);
      pluginInitialized = true; // Mark plugin as initialized

      // Error handler for TypeError when pasting.
      function handleTypeError(error: TypeError) {
        console.error('TypeError occurred while pasting:', error.message);
        // You can add your custom error handling logic here.
      }
    }
  }, []); // Run only once when component mounts

  const workspaceDidChange = (workspace: WorkspaceSvg) => {
    javascriptGenerator.addReservedWords("code");
    const code = javascriptGenerator.workspaceToCode(workspace);

    // console.log("FROM FEWORKSPACE", FEoutCode)
    SetFEoutCode(code);
    onCodeChange?.(code, workspace);
  };

  return (
    <Card
      ref={workspaceWrapper}
      className="fill-height z-20 border-4 overflow-hidden border-gray-300"
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
