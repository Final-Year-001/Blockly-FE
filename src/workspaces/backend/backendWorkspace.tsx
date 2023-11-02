import React, { useEffect, useRef, useState } from "react";
import { BlocklyWorkspace, WorkspaceSvg } from "react-blockly";
import { nodeCategory } from "../../categories/node";
import { javascriptGenerator } from "blockly/javascript";
import { mathCategory } from "../../categories/math";
import { commonCategory } from "../../categories/google_blocks";
import { databaseCategory } from "../../categories/database";

interface BackendWorkspaceProps {
  onCodeChange?: (code: string) => void;
}

function BackendWorkspace({ onCodeChange }: BackendWorkspaceProps) {
  const [xml, setXml] = useState<string>();
  const workspaceWrapper  = useRef<HTMLDivElement>(null);

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [nodeCategory, databaseCategory, mathCategory, commonCategory],
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

  /*useEffect(() => {
    if(workspaceWrapper.current && !workspaceWrapper.current.shadowRoot){
      workspaceWrapper.current.attachShadow({ mode: "open" });
    }
  }, [])*/
  return (
    <div ref={workspaceWrapper} className="fill-height">
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
    </div>
  )
}

export default BackendWorkspace;
