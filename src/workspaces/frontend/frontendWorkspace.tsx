import React, { useState } from "react";
import { BlocklyWorkspace, WorkspaceSvg } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import { javascriptCategory } from "../../categories/javascript";
import { commonCategory } from "../../categories/google_blocks"

interface FrontendWorkspaceProps {
    onCodeChange?: (code: string) => void;
}

function FrontendWorkspace({ onCodeChange }: FrontendWorkspaceProps) {
  const [xml, setXml] = useState<string>();

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [javascriptCategory, commonCategory],
  };

  const workspaceDidChange = (workspace: WorkspaceSvg) => {
    console.log(workspace, "workspace");
    javascriptGenerator.addReservedWords("code");
    let code = javascriptGenerator.workspaceToCode(workspace);
    console.log("backend code - ", code);
    onCodeChange?.(code);
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

export default FrontendWorkspace;
