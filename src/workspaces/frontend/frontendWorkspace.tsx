import React, { useState, useRef } from "react";
import { BlocklyWorkspace, WorkspaceSvg } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import { javascriptCategory } from "../../categories/javascript";
import { htmlCategory } from "../../categories/html";
import { commonCategory } from "../../categories/google_blocks"
import { cssCategory } from "../../categories/css"; 
import { Experimental } from "../../categories/experimental";
import { Card } from "@material-tailwind/react";

interface FrontendWorkspaceProps {
    onCodeChange?: (code: string) => void;
}

function FrontendWorkspace({ onCodeChange }: FrontendWorkspaceProps) {
  const [xml, setXml] = useState<string>();

  const workspaceWrapper = useRef<HTMLDivElement>(null);

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [htmlCategory, cssCategory, javascriptCategory, commonCategory, Experimental],
  };

  const workspaceDidChange = (workspace: WorkspaceSvg) => {
    console.log(workspace, "workspace");
    javascriptGenerator.addReservedWords("code");
    let code = javascriptGenerator.workspaceToCode(workspace);
    console.log("backend code - ", code);
    onCodeChange?.(code);
  };

  return (
    <Card
      ref={workspaceWrapper}
      className="fill-height border rounded-lg overflow-hidden border-r-8 border-t-[20px] border-l-8 border-b-8 border-gray-200"
    >
    <BlocklyWorkspace
      toolboxConfiguration={toolboxCategories}
      initialXml={xml}
      onXmlChange={(xml) => setXml(xml)}
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
    </Card>
  );
}

export default FrontendWorkspace;
