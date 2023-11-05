import { useState } from "react";
import BackendWorkspace from "../../workspaces/backend/backendWorkspace";
import SandboxTopBar from "../../components/sandboxTopBar";
import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
  Avatar,
} from "@material-tailwind/react";
import { useRecoilState } from "recoil";
import { codeAtom } from "../../state/code";
import CopySandBoxUrl from "../../components/CopySandBoxUrl";
import SandboxConsole from "../../components/SandboxConsole";

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
  let [code, setCode] = useRecoilState(codeAtom);

  const tabs = [
    {
      label: "Code",
      value: "html",
      desc: (
        <div className="whitespace-pre-line w-full h-full p-2 text-white">
          <code>{code}</code>
        </div>
      ),
    },
    {
      label: "Console",
      value: "react",
      desc: <SandboxConsole />,
    },
  ];

  return (
    <div className="flex flex-col h-full w-full ">
      <SandboxTopBar />
      <div
        className="flex flex-row flex-grow px-6 pb-4"
        style={{ height: "calc(100% - 400px)" }}
      >
        <div className="flex-[0.7]">
          <BackendWorkspace
            onCodeChange={(code) => {
              setCode(organizeImports(code));
            }}
          />
        </div>
        <div className="flex-[0.3] pl-6 h-full ">
          <Tabs value="html" className="h-full pb-10">
            <TabsHeader>
              {tabs.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="h-full pb-10  bg-black border rounded-xl hover:overflow-auto">
              {tabs.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default BackendPage;
