import { useRef, useState } from "react";
import { BlocklyWorkspace, WorkspaceSvg } from "react-blockly";
import { nodeCategory } from "../../categories/node";
import { javascriptGenerator } from "blockly/javascript";
import { mathCategory } from "../../categories/math";
import { commonCategory } from "../../categories/google_blocks";
import { databaseCategory } from "../../categories/database";
import { Card } from "@material-tailwind/react";
import { sessionHandlingCategory } from "../../categories/sessionHandling";
import { generalMiddlewareCategory } from "../../categories/middlewares";
interface BackendWorkspaceProps {
  onCodeChange?: (code: string) => void;
}

function BackendWorkspace({ onCodeChange }: BackendWorkspaceProps) {
  // const [xml, setXml] = useState<string>();
  // const [json, setJson] = useState<string>();

  const workspaceWrapper = useRef<HTMLDivElement>(null);

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      nodeCategory,
      generalMiddlewareCategory,
      sessionHandlingCategory,
      databaseCategory,
      mathCategory,
      commonCategory,
    ],
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

  const onJsonChange = (json: object) => {
    // Blockly.
  };

  /*useEffect(() => {
    if(workspaceWrapper.current && !workspaceWrapper.current.shadowRoot){
      workspaceWrapper.current.attachShadow({ mode: "open" });
    }
  }, [])*/
  return (
    <Card
      ref={workspaceWrapper}
      className="fill-height border rounded-lg overflow-hidden border-r-8 border-t-[20px] border-l-8 border-b-8 border-gray-200"
    >
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        // initialXml={xml}
        // onXmlChange={(xml) => setXml(xml)}
        onJsonChange={onJsonChange}
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

export default BackendWorkspace;
