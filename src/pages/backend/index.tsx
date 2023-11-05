import BackendWorkspace from "../../workspaces/backend/backendWorkspace";
import SandboxTopBar from "../../components/sandboxTopBar";
import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import { useRecoilState } from "recoil";
import { codeAtom } from "../../state/code";
import { useEffect, useState } from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { is } from "@babel/types";

function organizeCode(code: string) {
  // Split the code into lines
  const lines = code.split("\n");

  // Extract import statements and other code
  const importStatements: any = [];
  const otherCode = [];

  let emptyLineCount = 0; // Count consecutive empty linea

  for (const line of lines) {
    if (line.trim().startsWith("import ")) {
      if (!importStatements.includes(line)) {
        importStatements.push(line);
      }
    } else if (line.trim() === "") {
      emptyLineCount++;
      if (emptyLineCount <= 1) {
        otherCode.push(line);
      }
    } else {
      emptyLineCount = 0;
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
  const [isExpanded, setIsExpanded] = useState(false);

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
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <div className="flex flex-col h-full w-full ">
      <SandboxTopBar />
      <div
        className="flex flex-row flex-grow px-6 pb-4"
        style={{ height: "calc(100% - 400px)" }}
      >
        <div
          className={
            isExpanded
              ? "flex-[0.3] duration-300 ease-in-out transition-all"
              : "flex-[0.7] duration-300 ease-in-out transition-all"
          }
        >
          <BackendWorkspace
            onCodeChange={(code) => {
              setCode(organizeCode(code));
            }}
          />
        </div>
        <div
          className={
            "flex-[0.3] pl-6 h-full relative transition-all duration-300 ease-in-out " +
            `${isExpanded ? "flex-[0.7]" : "flex-[0.3]"}`
          }
        >
          <div
            className="absolute p-2 top-20 left-0  w-10 z-10 bg-black rounded-l-lg text-white"
            onClick={() => {
              setIsExpanded((prev) => !prev);
            }}
          >
            {isExpanded ? (
              <ChevronDoubleRightIcon />
            ) : (
              <ChevronDoubleLeftIcon />
            )}
          </div>
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
