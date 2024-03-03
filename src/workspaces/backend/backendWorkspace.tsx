/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { BlocklyWorkspace, WorkspaceSvg } from "react-blockly";
import { nodeCategory } from "../../categories/node";
import { javascriptGenerator } from "blockly/javascript";

import { Card } from "@material-tailwind/react";
import toolboxConfig from "../../toolbox/toolbox";
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

export default BackendWorkspace;
