/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useEffect, useMemo, useRef, useState } from "react";
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
import { stripId } from "../../helpers/blockly";
import BackendTopBar from "../../components/BackendTopBar";
import Tour from "reactour";
import { TourSteps } from "./TourSteps";
import AceEditor from "react-ace";
import { js_beautify } from "js-beautify";

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
  const [showTour, setShowTour] = useState<boolean>(true);
  const [code, setCode] = useRecoilState(codeAtom);
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

  const formattedCode = useMemo(
    () =>
      js_beautify(code, {
        indent_size: 1,
        indent_char: " ",
        indent_with_tabs: false,
        editorconfig: false,
        eol: "\n",
        end_with_newline: false,
        indent_level: 0,
        preserve_newlines: true,
        max_preserve_newlines: 10,
        space_in_paren: false,
        space_in_empty_paren: false,
        jslint_happy: false,
        space_after_anon_function: false,
        space_after_named_function: false,
        brace_style: "collapse",
        unindent_chained_methods: false,
        break_chained_methods: false,
        keep_array_indentation: false,
        unescape_strings: false,
        wrap_line_length: 0,
        e4x: false,
        comma_first: false,
        operator_position: "before-newline",
        indent_empty_lines: false,
        templating: ["auto"],
      }),
    [code]
  );

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

  const getProjectQuery = useQuery({
    queryKey: ["project"],
    queryFn: () => getProjectById(tokens, params.id ?? "?"),
  });

  const getLessonQuery = useQuery({
    queryKey: ["lesson", getProjectQuery.data?.data?.lessonId],
    queryFn: ({ queryKey }) => getLessonById(tokens, queryKey?.[1] ?? "?"),
  });

  let _steps = getLessonQuery.data?.data?.steps || [];

  let steps = _steps.concat({});

  const currentStep = steps?.[currentStepNumber];

  const mode = getProjectQuery.data?.data?.mode ?? ("default" as PageMode);

  const onCodeChange = (code: string, workspace: WorkspaceSvg) => {
    setCode(organizeCode(code));
    workspaceRef.current = workspace;
    try {
      const json = Blockly.serialization.workspaces.save(workspace);
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
    const lessonStepState = stripId(
      _.cloneDeep(curentStepToComplete?.workspaceState)
    );
    const currentWorkspace = stripId(_.cloneDeep(workspace));

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
          <AceEditor
            height="100%"
            width="100%"
            value={formattedCode}
            mode="javascript"
            theme="monokai"
            fontSize="20px"
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
      <Tour
        steps={TourSteps}
        isOpen={showTour}
        onRequestClose={() => {
          setShowTour(false);
        }}
      />
      <div id="TopBar">
        <BackendTopBar />
      </div>
      <SandboxTopBar />
      <div
        className="flex flex-row flex-grow px-1 pb-0"
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
          {mode == "lesson" && getLessonQuery.isSuccess ? (
            <HintComponent
              stepPreview={currentStep.workspaceState}
              step={currentStepNumber + 1}
              hint={currentStep.description}
              image={currentStep.image}
              lastStep={steps.length}
              frontend={false}
            />
          ) : null}
        </div>
        <div
          className={
            "flex-[0.3] pl-4 h-full relative transition-all duration-300 ease-in-out " +
            `${isExpanded ? "flex-[0.7]" : "flex-[0.3]"}`
          }
        >
          <div
            className="absolute p-2 top-20 left-10  w-10 z-10 bg-black rounded-l-lg text-white"
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
            <TabsBody className="h-full  bg-black border rounded-xl hover:overflow-auto">
              {tabs.map(({ value, desc }) => (
                <TabPanel className="m-0 p-0 h-full" key={value} value={value}>
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
