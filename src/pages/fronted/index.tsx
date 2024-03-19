import { useRef, useState, useEffect } from "react";
import FrontendWorkspace from "../../workspaces/frontend/frontendWorkspace";
import { ClipboardIcon } from "@heroicons/react/24/solid";
import Editor from "@monaco-editor/react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { codeAtom } from "../../state/code";
import FrontendTopBar from "../../components/FrontendTopBar";
import { useMutation, useQuery } from "react-query";
import { httpClient } from "../../helpers/axios";
import { useParams } from "react-router-dom";
import { WorkspaceSvg } from "blockly";
import Blockly from "blockly";
import { useDebounce } from "@uidotdev/usehooks";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import Tour from "reactour";
import _ from "lodash";
import { TourSteps } from "./TourSteps";
import { getLessonById, getProjectById, saveProject } from "../../api/project";
import { tokenAtom } from "../../state/auth";
import { stripId } from "../../helpers/blockly";
import HintComponent from "../../components/HintComponent";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StatusNoti from "./Status";

import { useChildEvents } from "../../lib/iframe-communication/iframe-communication";
import { ConsoleLogger, LogEvent } from "../../components/ConsoleLogger";


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

function injectIframeCommunicator(cleanCode: string) {
  let index = cleanCode.indexOf("<head>");
  let dividePoint = index + "<head>".length;

  if (index >= 0) {
    let top = cleanCode.slice(0, dividePoint);
    let bottom = cleanCode.slice(dividePoint, cleanCode.length);

    return `
      ${top}
        <script src="/js/iframe.js"></script>
        <script>
          console.log("Hello from the IFrame previewer. Your console.logs will appear here!")
          console.warn("Hello from the IFrame previewer. Your console.warn will appear here!")
          console.error("Hello from the IFrame previewer. Your console.error will appear here!")
        </script>
      ${bottom}
    `;
  }

  return cleanCode;
}

type PageMode = "default" | "lesson";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const debouncedWorkspace = useDebounce(workspaceState.current, 2000);
  const [saveStatus, setSaveStatus] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [saveMessage, setSaveMessage] = useState<{
    message: string;
    show: boolean;
    loading: boolean;
  }>({ message: "", show: false, loading: false });
  const [showTour, setShowTour] = useState<boolean>(true);
  const [logs, setLogs] = useState<LogEvent[]>([]);

  const params = useParams();
  const tokens = useRecoilValue(tokenAtom);

  const [currentStepNumber, setCurrentStepNumber] = useState<number>(0);

  const saveMutation = useMutation({
    mutationFn: ({ code, stepNumber }: { code: any; stepNumber: number }) =>
      saveProject(tokens, params.id ?? "", code, stepNumber),
    onMutate: () => {
      setSaveMessage({
        show: true,
        message: "Your changes are being saved...",
        loading: true,
      });
    },
    onSuccess: () => {
      setSaveMessage({
        show: true,
        message: "All changes are saved.",
        loading: false,
      });
    },
  });

  useEffect(() => {
    setIsVisible(true);
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [saveMessage]);

  const getProjectQuery = useQuery({
    queryKey: ["project"],
    queryFn: () => getProjectById(tokens, params.id ?? "?"),
  });

  const getLessonQuery = useQuery({
    queryKey: ["lesson", getProjectQuery.data?.data?.lessonId],
    queryFn: ({ queryKey }) => getLessonById(tokens, queryKey?.[1] ?? "?"),
  });

  const steps = getLessonQuery.data?.data?.steps || [];

  const currentStep = getLessonQuery.data?.data?.steps?.[currentStepNumber];

  const mode = getProjectQuery.data?.data?.mode ?? ("default" as PageMode);

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

  const checkIfStepComplete = (workspace: object) => {
    const curentStepToComplete = steps[currentStepNumber];
    let lessonStepState = stripId(
      _.cloneDeep(curentStepToComplete.workspaceState)
    );
    let currentWorkspace = stripId(_.cloneDeep(workspace));

    console.log(
      _.isEqual(lessonStepState, currentWorkspace),
      lessonStepState,
      currentWorkspace
    );
    if (_.isEqual(lessonStepState, currentWorkspace)) {
      if (currentStepNumber < steps.length - 1) {
        setCurrentStepNumber((prev) => {
          return prev + 1;
        });
      }
    }
  };

  const injectCode = (code: string, workspace: WorkspaceSvg) => {
    let json = Blockly.serialization.workspaces.save(workspace);

    if (_.isEqual(stripId(json), stripId(workspaceState.current))) return;

    setLogs([])

    // Exclude comments starting with "//" from the code
    const cleanCode = code.replace(/\/\/(.*)/g, "");
    setCode(organizeImports(code));
    setFrontendCode(cleanCode);
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.srcdoc = injectIframeCommunicator(cleanCode);
    }

    workspaceRef.current = workspace;
    try {
      if (mode == "lesson") checkIfStepComplete(json);

      setSaveMessage({
        show: true,
        message: "New unsaved changes",
        loading: false,
      });
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
      saveMutation.mutate({
        code: debouncedWorkspace,
        stepNumber: currentStepNumber,
      });
    }
  }, [debouncedWorkspace]);

  const tabs = [
    {
      label: "Code",
      value: "html",
      desc: (
        <div className="whitespace-pre-line w-full h-full p-2">
          {/* <code>{code}</code> */}

          <AceEditor
            height="100%"
            width="100%"
            value={code}
            mode="html"
            theme="monokai"
            fontSize="20px"
            highlightActiveLine={true}
            setOptions={{
              enableLiveAutocompletion: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </div>
      ),
    },
    {
      label: "IFrame",
      value: "iframe",
      desc: (
        <iframe
          title="preview"
          className="bg-white pb-10 rounded-lg w-full h-full"
          ref={iframeRef}
          name="iframe1"
        />
      ),
    },
    {
      label: "Console",
      value: "react",
      desc: <ConsoleLogger logs={logs} />,
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

  useChildEvents<any, LogEvent>(iframeRef, (event) => {
    setLogs((prev) => [...prev, event]);
  });

  return (
    <div className="flex -200 flex-col h-full w-full ">
      <Tour
        steps={TourSteps}
        isOpen={showTour}
        onRequestClose={() => {
          setShowTour(false);
        }}
      />

      <div id="TopBar">
        <FrontendTopBar />
      </div>

      <div
        className="flex flex-row flex-grow px-3 pb-3"
        style={{ height: "calc(100% - 400px)" }}
      >
        <div
          className={`flex  border-none flex-col gap-4 ${
            isExpanded ? "flex-[0.3]" : "flex-[0.7]"
          } duration-300 ease-in-out transition-all`}
        >
          <FrontendWorkspace
            onCodeChange={injectCode}
            loaded={!getProjectQuery.isFetching}
            initialState={getProjectQuery.data?.data?.saveData}
          />
          {mode == "lesson" && currentStep ? (
            <HintComponent
              stepPreview={currentStep.workspaceState}
              step={currentStepNumber + 1}
              hint={currentStep.description}
            />
          ) : null}
        </div>

        <div
          className={
            "flex-[0.3] pl-6 h-full relative transition-all duration-300 ease-in-out " +
            `${isExpanded ? "flex-[0.7]" : "flex-[0.3]"}`
          }
        >
          <div
            className="absolute p-2 top-20 left-0 w-10 z-10 bg-black rounded-l-lg text-white"
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
          <Tabs id="outputSection" value="html" className="h-full pb-10">
            <TabsHeader>
              {tabs.map(({ label, value }) => (
                <Tab id={`TabBtn${label}`} key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            {/* <TabsBody className="h-full   bg-black border rounded-xl hover:overflow-auto"> */}
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

        {/* <div className={`flex-[${outputSize}]  pl-6 h-full `}>
          
        </div> */}
      </div>
      <div className="flex flex-row px-6 pb-1">
        {saveMessage.show ? <StatusNoti message={saveMessage.message} /> : ""}
      </div>
    </div>
  );
}

export default FrontendPage;
