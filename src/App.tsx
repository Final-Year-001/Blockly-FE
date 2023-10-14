import { useState } from "react";
import "./App.css";
import { counterTest } from "./state/test";
import { useRecoilState } from "recoil";
import { BlocklyWorkspace } from "react-blockly";
import { javascriptCategory } from "./categories/javascript";

function App() {
  const [count, setCount] = useRecoilState(counterTest);
  const [xml, setXml] = useState<string>();

  const onClick = () => {
    setCount(count + 1);
  };

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [javascriptCategory],
  };

  return (
    <>
      <div>Counter - {count}</div>
      <br></br>
      <button onClick={onClick}>increase</button>
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
        // onWorkspaceChange={workspaceDidChange}
        // onXmlChange={setXml}
      />
    </>
  );
}

export default App;
