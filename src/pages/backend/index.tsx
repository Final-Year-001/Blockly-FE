import { useState } from "react";
import BackendWorkspace from "../../workspaces/backend/backendWorkspace";
import { Button } from "@material-tailwind/react";

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
    <div className="flex flex-col h-full">
      <div> 
        <Button variant="filled">Text</Button>
      </div>
      <div className="flex flex-row flex-grow">
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
      d</div>
    </div>
  );
}

export default BackendPage;