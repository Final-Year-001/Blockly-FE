import { useState } from "react";
import { BlocklyWorkspace, WorkspaceSvg } from "react-blockly";
import { nodeCategory } from "../../categories/node";
import { javascriptGenerator } from "blockly/javascript";
import { mathCategory } from "../../categories/math";

interface BackendWorkspaceProps {
  onCodeChange?: (code: string) => void;
}

function BackendWorkspace({ onCodeChange }: BackendWorkspaceProps) {
  const [xml, setXml] = useState<string>();

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [nodeCategory, mathCategory],
  };

  const workspaceDidChange = (workspace: WorkspaceSvg) => {
    console.log(workspace, "workspace");
    javascriptGenerator.addReservedWords("code");
    let code = javascriptGenerator.workspaceToCode(workspace);
    console.log(code, "Dfafd");
    onCodeChange?.(code);
    // const code = generator.
    // console.log(code, "code");
  };

  return (
    <BlocklyWorkspace
      toolboxConfiguration={toolboxCategories}
      initialXml={xml}
      onXmlChange={(xml) => setXml(xml)}
      className="fill-height"
      workspaceConfiguration={{
        grid: {
          spacing: 20,
          length: 3,
          colour: "#ccc",
          snap: true,
        },
      }}
      onWorkspaceChange={workspaceDidChange}
    />
  );
}

export default BackendWorkspace;
