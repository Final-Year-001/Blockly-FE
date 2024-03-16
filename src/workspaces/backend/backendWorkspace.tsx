/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { BlocklyWorkspace, WorkspaceSvg } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import CustomCategory from "../../themes/toolbox/customCats";
import { Card } from "@material-tailwind/react";
import toolboxConfig from "../../toolbox/toolbox";
import { BETheme } from "../../themes/BETheme";

// eslint-disable-next-line react-refresh/only-export-components
export const workspaceConfiguration = {
  theme: BETheme,
  renderer: "custom_renderer",
  toolbar: CustomCategory,
  grid: {
    spacing: 20,
    length: 3,
    // colour: "#ffffff",
    colour: "#",
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
  onCodeChange?: (code: string, workspace: WorkspaceSvg) => void;
  initialState?: any;
  loaded: boolean;
}

function BackendWorkspace({
  onCodeChange,
  initialState,
  loaded,
}: BackendWorkspaceProps) {
  // const [xml, setXml] = useState<string>();
  // const [json, setJson] = useState<string>();

  const workspaceWrapper = useRef<HTMLDivElement>(null);

  const workspaceDidChange = (workspace: WorkspaceSvg) => {
    javascriptGenerator.addReservedWords("code");
    const code = javascriptGenerator.workspaceToCode(workspace);
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
