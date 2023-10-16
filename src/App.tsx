import { useState } from "react";
import "./App.css";
import { BlocklyWorkspace } from "react-blockly";
import { javascriptCategory } from "./categories/javascript";

function App() {
  const [xml, setXml] = useState<string>();

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [javascriptCategory],
  };

  return (
    <>
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
      />
    </>
  );
}

export default App;
