import { useRef, useState, useEffect } from "react";
import FrontendWorkspace from "../../workspaces/frontend/frontendWorkspace";
import { ClipboardIcon } from "@heroicons/react/24/solid";
import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import { useRecoilState } from "recoil";
import { codeAtom } from "../../state/code";
import FrontendTopBar from "../../components/FrontendTopBar";
import { useMutation, useQuery } from "react-query";
import { httpClient } from "../../helpers/axios";
import { useParams } from "react-router-dom";
import { WorkspaceSvg } from "blockly";
import Blockly from "blockly";
import { useDebounce } from "@uidotdev/usehooks";

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

function FrontendPage() {
  const [frontendCode, setFrontendCode] = useState("");
  const [tabView, setTabView] = useState("code"); // "code" or "iframe"
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [codeCopied, setCodeCopied] = useState(false);
  let [code, setCode] = useRecoilState(codeAtom);
  let [workAreaSize, setworkAreaSize] = useRecoilState(codeAtom);
  const [workSize, setWorkSize] = useState(0.7);
  const [outputSize, setOutput] = useState(0.3);
  const workspaceState = useRef<any>(null);
  const workspaceRef = useRef<any>(null);
  const debouncedWorkspace = useDebounce(workspaceState.current, 2000);

  const params = useParams();

  const saveMutation = useMutation({
    mutationFn: (json) =>
      httpClient.post("project/" + params.id || "?", { code: json }),
  });

  const getProjectQuery = useQuery({
    queryKey: ["project"],
    queryFn: () => httpClient.get("project/" + params.id || "?"),
  });

  useEffect(() => {
    console.log(workAreaSize);
    if (workAreaSize == "small") {
      setWorkSize(0.7);
      setOutput(0.3);
    } else if (workAreaSize == "large") {
      setWorkSize(0.3);
      setOutput(0.7);
    }
  }, [workAreaSize]);

  const injectCode = (code: string, workspace: WorkspaceSvg) => {
    setCode(organizeImports(code));
    setFrontendCode(code);
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.srcdoc = code;
    }

    workspaceRef.current = workspace;
    try {
      let json = Blockly.serialization.workspaces.save(workspace);
      console.log(json, "=============")
      workspaceState.current = json;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (
      getProjectQuery.isSuccess &&
      getProjectQuery.isFetched &&
      debouncedWorkspace
    ) {
      console.log(debouncedWorkspace, "fsdfdsfdsfsdf");
      saveMutation.mutate(debouncedWorkspace);
    }
  }, [debouncedWorkspace]);

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
      label: "IFrame",
      value: "iframe",
      desc: (
        <iframe
          className="bg-white pb-10 rounded-lg w-full h-full"
          ref={iframeRef}
          name="iframe1"
        />
      ),
    },
    {
      label: "Console",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  const copyCodeToClipboard = (code: string) => {
    const textField = document.createElement("textarea");
    textField.value = code; // Use 'value' instead of 'innerText'
    textField.setAttribute("readonly", ""); // Make the textarea read-only
    textField.style.position = "absolute";
    textField.style.left = "-9999px"; // Move the textarea off-screen
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    document.body.removeChild(textField);

    setCodeCopied(true);

    // Reset the code copied indicator after a short delay (e.g., 3 seconds)
    setTimeout(() => {
      setCodeCopied(false);
    }, 3000); // 3000 milliseconds (3 seconds)
  };

  return (
    <div className="flex flex-col h-full w-full ">
      <FrontendTopBar />
      <div
        className="flex flex-row flex-grow px-6 pb-4"
        style={{ height: "calc(100% - 400px)" }}
      >
        <div className={`flex-[${workSize}]`}>
          <FrontendWorkspace
            onCodeChange={injectCode}
            loaded={!getProjectQuery.isFetching}
            initialState={getProjectQuery.data?.data?.saveData}
          />
        </div>

        <div className={`flex-[${outputSize}]  pl-6 h-full `}>
          <Tabs value="html" className="h-full pb-10">
            <TabsHeader>
              {tabs.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="h-full   bg-black border rounded-xl hover:overflow-auto">
              {tabs.map(({ value, desc }) => (
                <TabPanel className="m-0 p-1 h-full" key={value} value={value}>
                  {desc}
                  {value == "html" && (
                    <button
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        padding: "4px",
                      }}
                      onClick={() => {
                        copyCodeToClipboard(frontendCode);
                      }}
                      title="Copy Code"
                    >
                      <ClipboardIcon className="w-5 h-5 text-grey-600" />
                    </button>
                  )}
                  {codeCopied && (
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        backgroundColor: "rgba(255, 255, 255, 0.8)", // Transparent background
                        padding: "4px 8px",
                        borderRadius: "4px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        zIndex: 1,
                        fontSize: "12px",
                        color: "grey",
                      }}
                    >
                      <span>Code Copied!</span>
                    </div>
                  )}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default FrontendPage;
