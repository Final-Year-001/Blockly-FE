import { useState } from "react";
import BackendWorkspace from "../../workspaces/backend/backendWorkspace";

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

function BackendPage() {
  const [backendCode, setBackendCode] = useState("");

  return (
    <>
      <h1 className="text-3xl font-bold mt-6 mb-4 text-indigo-400">
        Backend workspace
      </h1>

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

export default BackendPage;