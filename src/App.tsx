import { useEffect, useRef, useState } from "react";
import "./App.css";
import { counterTest } from "./state/test";
import { useRecoilState } from "recoil";
import BackendWorkspace from "./workspaces/backend/backendWorkspace";
import FrontendWorkspace from "./workspaces/frontend/frontendWorkspace";

// TODO: this function will be improved
function organizeImports(code: string) {
  // Split the code into lines
  const lines = code.split("\n");

  // Extract import statements and other code
  const importStatements = [];
  const otherCode = [];

  for (const line of lines) {
    if (line.trim().startsWith("import ")) {
      importStatements.push(line);
    } else {
      otherCode.push(line);
    }
  }

  // Combine import statements and other code
  const organizedCode =
    importStatements.join("\n") + "\n" + otherCode.join("\n");

  return organizedCode;
}

function App() {
  const [count, setCount] = useRecoilState(counterTest);
  const [frontendCode, setFrontendCode] = useState("");
  const [backendCode, setBackendCode] = useState("");
  const [tabView, setTabView] = useState("code"); // "code" or "iframe"
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const onClick = () => {
    setCount(count + 1);
  };

  const injectCode = (code: string) => {
    setFrontendCode(code);
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.srcdoc = code;
    }
  };

  return (
    <>
      {/* <div>
        <div>Counter - {count}</div>
        <br></br>
        <button onClick={onClick}>increase</button>
      </div> */}

      <h1 className="text-3xl font-bold mt-6 mb-4 text-indigo-400">Frontend workspace</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          whiteSpace: "pre-line",
        }}
      >
        <div style={{ flex: 0.7, padding: "0 10px" }}>
          <FrontendWorkspace onCodeChange={injectCode} />
        </div>

        <div style={{ flex: 0.3, backgroundColor: "#EDEDED", padding: 20 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={() => setTabView("code")}
              style={{
                marginRight: "8px", // Add spacing between buttons
                border: "1px solid #ccc", // Add borders
                borderRadius: "4px", // Add rounded corners
                backgroundColor: tabView === "code" ? "lightgreen" : "white", // Change background color for active tab
              }}
            >
              Code
            </button>
            <button
              onClick={() => setTabView("iframe")}
              style={{
                border: "1px solid #ccc", // Add borders
                borderRadius: "4px", // Add rounded corners
                backgroundColor: tabView === "iframe" ? "lightgreen" : "white", // Change background color for active tab
              }}
            >
              IFrame
            </button>
          </div>
          <br /> {/* Add a line break here */}
          {tabView === "code" && (
            <div style={{ minHeight: "450px", maxHeight: "500px", overflowY: "auto", border: "1px solid #ccc", borderRadius: "4px", padding: "8px" }}>
              <code>{frontendCode}</code>
            </div>
          )}
          {tabView === "iframe" && (
            <div style={{ minHeight: "450px", border: "1px solid #ccc", borderRadius: "4px", padding: "8px" }}>
              <iframe ref={iframeRef} name="iframe1" />
            </div>
          )}
        </div>
      </div>

      <h1 className="text-3xl font-bold mt-6 mb-4 text-indigo-400">Frontend workspace</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
        }}
      >
        <div style={{ flex: 0.8 }}>
          <BackendWorkspace
            onCodeChange={(code) => {
              setBackendCode(organizeImports(code));
            }}
          />
        </div>
        <div
          style={{
            flex: 0.2,
            backgroundColor: "#EDEDED",
            padding: 20,
            whiteSpace: "pre-line",
          }}
        >
          <code>{backendCode}</code>
        </div>
      </div>
    </>
  );
}

export default App;
