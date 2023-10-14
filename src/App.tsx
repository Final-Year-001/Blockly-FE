import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { counterTest } from "./state/test";
import { useRecoilState } from "recoil";
import { BlocklyWorkspace } from "react-blockly";
// import { nodeCategory } from "./categories/node";
import { javascriptCategory } from "./categories/javascript";
import { htmlCssCategory } from "./categories/html_css";
import javascriptBlocks from "./blocks/javascript/blocks";

function App() {
  const [count, setCount] = useRecoilState(counterTest);
  const [xml, setXml] = useState<string>();

  const onClick = () => {
    setCount(count + 1);
  };

  console.log(xml);
  console.log(javascriptBlocks);

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
