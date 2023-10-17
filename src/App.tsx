import { useState } from "react";
import "./App.css";
import { counterTest } from "./state/test";
import { useRecoilState } from "recoil";
import BackendWorkspace from "./workspaces/backend/backendWorkspace";
import FrontendWorkspace from "./workspaces/frontend/frontendWorkspace";

function App() {
  const [count, setCount] = useRecoilState(counterTest);
  const [frontendCode, setFrontendCode] = useState("");
  const [backendCode, setBackendCode] = useState("");

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>Counter - {count}</div>
      <br></br>
      <button onClick={onClick}>increase</button>
      {/* <BlocklyWorkspace
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
      /> */}
      <h1>Frontend workspace</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
        }}
      >
        <div
          style={{
            flex: 0.8,
          }}
        >
          <FrontendWorkspace onCodeChange={setFrontendCode} />
        </div>
        <div
          style={{
            flex: 0.2,
            backgroundColor: "#EDEDED",
            padding: 20
          }}
        >
          <code
          >
            {frontendCode}
          </code>
        </div>
      </div>
      <h1>Backend workspace</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
        }}
      >
        <div
          style={{
            flex: 0.8,
          }}
        >
          <BackendWorkspace onCodeChange={setBackendCode} />
        </div>
        <div
          style={{
            flex: 0.2,
            backgroundColor: "#EDEDED",
            padding: 20,
            whiteSpace: "pre-line"
          }}
        >
          <code
          >
            {backendCode}
          </code>
        </div>
      </div>
    </>
  );
}

export default App;
