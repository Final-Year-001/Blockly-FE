import BackendWorkspace from "../../workspaces/backend/backendWorkspace";
import SandboxTopBar from "../../components/sandboxTopBar";
import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { codeAtom } from "../../state/code";
import SandboxConsole from "../../components/SandboxConsole";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { useDebounce } from "@uidotdev/usehooks";
import Blockly, { WorkspaceSvg } from "blockly";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import _ from "lodash";
import { getLessonById, getProjectById, saveProject } from "../../api/project";
import { tokenAtom } from "../../state/auth";
import HintComponent from "../../components/HintComponent";
import { StepDefinition } from "../lesson-creator";
import { stripId } from "../../helpers/blockly";

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

type PageMode = "default" | "lesson";

function BackendPage() {
  let [code, setCode] = useRecoilState(codeAtom);
  const [isExpanded, setIsExpanded] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{
    message: string;
    show: boolean;
    loading: boolean;
  }>({ message: "", show: false, loading: false });

  const [currentStepNumber, setCurrentStepNumber] = useState<number>(0);

  const workspaceState = useRef<any>(null);
  const workspaceRef = useRef<any>(null);

  const debouncedWorkspace = useDebounce(workspaceState.current, 2000);
  const params = useParams();
  const tokens = useRecoilValue(tokenAtom);

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
        message: "All the changes are saved.",
        loading: false,
      });
    },
  });

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

  const onCodeChange = (code: string, workspace: WorkspaceSvg) => {
    setCode(organizeCode(code));
    workspaceRef.current = workspace;
    try {
      let json = Blockly.serialization.workspaces.save(workspace);
      if (!_.isEqual(json, workspaceState.current)) {
        if (mode == "lesson") checkIfStepComplete(json);
        
        setSaveMessage({
          show: true,
          message: "New unsaved changes",
          loading: false,
        });
        workspaceState.current = json;
      }
    } catch (e) {
      console.error(e);
    }
  };

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

  return (
    <div className="flex flex-col h-full w-full ">
      <SandboxTopBar />
      <div
        className="flex flex-row flex-grow px-6 pb-4"
        style={{ height: "calc(100% - 400px)" }}
      >
        <div
          className={`flex flex-col gap-4 ${
            isExpanded ? "flex-[0.3]" : "flex-[0.7]"
          } duration-300 ease-in-out transition-all`}
        >
          <BackendWorkspace
            onCodeChange={onCodeChange}
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
      <div className="flex flex-row px-6 pb-1">
        {saveMessage.show ? <span>{saveMessage.message}</span> : <div>...</div>}
      </div>
    </div>
  );
}

export default BackendPage;
