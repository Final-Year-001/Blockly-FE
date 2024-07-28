/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { BlocklyWorkspace, WorkspaceSvg } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import CustomCategory from "../../themes/toolbox/customCats";
import { Card } from "@material-tailwind/react";
import toolboxConfig from "../../toolbox/toolbox";
import { BETheme } from "../../themes/BETheme";
import { BEOutAtom } from "../../state/BEOutputCode";
import { useRecoilState } from "recoil";
import { CrossTabCopyPaste } from "@blockly/plugin-cross-tab-copy-paste";

// eslint-disable-next-line react-refresh/only-export-components
export const workspaceConfiguration = {
  theme: BETheme,
  renderer: "custom_renderer",
  toolbar: CustomCategory,
  grid: {
    spacing: 20,
    length: 3,
    colour: "#a1caff",
    //colour: "#",
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
interface BackendWorkspaceProps {
  readonly onCodeChange?: (code: string, workspace: WorkspaceSvg) => void;
  readonly initialState?: any;
  readonly loaded: boolean;
}

let pluginInitialized = false; // Static variable to track plugin initialization

function BackendWorkspace({
  onCodeChange,
  initialState,
  loaded,
}: BackendWorkspaceProps) {
  // const [xml, setXml] = useState<string>();
  // const [json, setJson] = useState<string>();

  const workspaceWrapper = useRef<HTMLDivElement>(null);
  const [BEoutCode, SetBEoutCode] = useRecoilState(BEOutAtom);

  useEffect(() => {
    // Error handler for TypeError when pasting.
    function handleTypeError(error: TypeError) {
      console.error("TypeError occurred while pasting:", error.message);
      // You can add your custom error handling logic here.
    }
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
    }
  }, []); // Run only once when component mounts

  const workspaceDidChange = (workspace: WorkspaceSvg) => {
    javascriptGenerator.addReservedWords("code");
    const code = javascriptGenerator.workspaceToCode(workspace);
    SetBEoutCode(code);
    onCodeChange?.(code, workspace);
  };

  return (
    <Card
      ref={workspaceWrapper}
      className="fill-height border rounded-lg overflow-hidden border-r-8 border-t-[20px] border-l-8 border-b-8 border-gray-200"
    >
      {loaded ? (
        <BlocklyWorkspace
          toolboxConfiguration={toolboxConfig}
          initialJson={initialState}
          className="fill-height"
          onWorkspaceChange={workspaceDidChange}
          workspaceConfiguration={workspaceConfiguration}
        />
      ) : null}
    </Card>
  );
}

export default BackendWorkspace;
