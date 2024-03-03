import { useEffect, useRef, useState } from "react";
import LCStep from "../../components/LessonCreator/LCStep";
import { Button } from "@material-tailwind/react";
import _ from "lodash";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { tokenAtom } from "../../state/auth";
import { getLessonById, newProject, saveLesson } from "../../api/project";
import ProductLogo from "../../assets/Logo";

interface StepDefinition {
  description: string;
  workspaceState: object;
}

function LessonCreator() {
  const [steps, setSteps] = useState<StepDefinition[]>([
    {
      description: "",
      workspaceState: {},
    },
  ]);

  const [undoHistory, setUndoHistory] = useState<StepDefinition[][]>([]);

  const currentUndoStepIndex = useRef<number>(-1);
  const [undoStateLock, setUndoSateLock] = useState<boolean>(false);

  const tokens = useRecoilValue(tokenAtom);
  const params = useParams();

  let lessonQuery = useQuery({
    queryKey: ["lesson"],
    queryFn: () => getLessonById(tokens, params.id ?? "?"),
    onSuccess: (data) => {
      setSteps(data?.data?.steps || []);
      setRefreshSteps((prev) => !prev);
    },
  });

  const [saveMessage, setSaveMessage] = useState<{
    message: string;
    show: boolean;
    loading: boolean;
  }>({ message: "", show: false, loading: false });

  const [refreshSteps, setRefreshSteps] = useState<boolean>(false);

  const saveMutation = useMutation({
    mutationFn: (json) => saveLesson(tokens, params.id ?? "", json),
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

  const navigate = useNavigate();

  const qc = useQueryClient();

  const newProjectMutation = useMutation({
    mutationFn: (json: any) => newProject(tokens, json),
    onSuccess: async (res) => {
      await qc.invalidateQueries("project");
      const id = res.data._id;
      if (res.data.variant == "frontend") {
        navigate("/frontend/" + id);
        return;
      }

      navigate("/backend/" + id);
    },
  });

  const variant = lessonQuery.data?.data?.variant;
  const lessonId = lessonQuery.data?.data?._id;

  const newProjectWithLesson = () => {
    newProjectMutation.mutate({
      name: "name",
      variant: variant,
      desc: `New ${variant} project`,
      mode: "lesson",
      lessonId,
      saveData: {},
    });
  };

  const addStep = () => {
    let newSteps = _.cloneDeep(steps);
    let lastStep = _.cloneDeep(newSteps[steps.length - 1]);

    newSteps.push(lastStep);
    setSteps(newSteps);
  };

  const save = () => {
    console.log(steps);
    saveMutation.mutate(steps as any);
  };

  const undo = () => {
    setUndoSateLock(true);
    console.log("uundo", currentUndoStepIndex.current);
    currentUndoStepIndex.current =
      currentUndoStepIndex.current > 1 ? currentUndoStepIndex.current - 1 : 0;
    setSteps(_.cloneDeep(undoHistory[currentUndoStepIndex.current]));
    setRefreshSteps((prev) => !prev);
    console.log("uundopp", currentUndoStepIndex.current);

    // setUndoSateLock(false);
  };

  const redo = () => {
    setUndoSateLock(true);
    console.log("uundo", currentUndoStepIndex.current, undoHistory.length);
    currentUndoStepIndex.current =
      currentUndoStepIndex.current == undoHistory.length - 1
        ? undoHistory.length - 1
        : currentUndoStepIndex.current + 1;
    setSteps(_.cloneDeep(undoHistory[currentUndoStepIndex.current]));
    setRefreshSteps((prev) => !prev);

    console.log("uundo", currentUndoStepIndex.current);
    // setUndoSateLock(false);
  };

  useEffect(() => {
    if (!undoStateLock) {
      setUndoHistory((prev) => {
        let newPrev = _.cloneDeep(prev);
        newPrev.splice(currentUndoStepIndex.current, newPrev.length);
        newPrev.push(_.cloneDeep(steps));
        return newPrev;
      });
      currentUndoStepIndex.current++;
      console.log("History updated ", currentUndoStepIndex.current);
    }
  }, [steps]);

  return (
    <>
      <div className="flex w-full justify-between items-center p-4 sticky top-0 z-[99] bg-white">
        <div className="flex flex-col  gap-3 px-2">
          <Link to="/my/projects">
            <ProductLogo TextSize={3} />
          </Link>
        </div>

        <div className="flex gap-2">
          <h3 className="text-2xl font-bold text-gray-800">Lesson Creator</h3>
        </div>

        {/* <div> */}
        {/* <Button className="mr-4" onClick={()=>{createHTMLFile("file")}}>Download Code</Button> */}
        {/* <Link to="/get-started"><Avatar src="/img/cat default avatar.png" alt="avatar" size="md" /></Link> */}
        {/* </div> */}
        <div className="flex gap-3">
          <Button onClick={undo}>Undo</Button>
          <Button onClick={redo}>Redo</Button>
        </div>
      </div>
      <div className="flex flex-col gap-10 p-4">
        {steps.map((value, index) => {
          return (
            <LCStep
              key={index}
              step={index}
              onMouseOver={() => {
                setUndoSateLock(false);
              }}
              variant={variant}
              refresh={refreshSteps}
              state={value.workspaceState || {}}
              description={value.description}
              onDescriptionChange={(value) => {
                let newSteps = _.cloneDeep(steps);

                newSteps[index].description = value;
                // setUndoSateLock(false);
                setSteps(newSteps);
              }}
              onWorkspaceChange={(json) => {
                let newSteps = _.cloneDeep(steps);
                let oldState = newSteps[index].workspaceState;

                if (!_.isEqual(oldState, json) && !_.isEqual(json, {})) {
                  newSteps[index].workspaceState = json;
                  // setUndoSateLock(false);
                  setSteps(newSteps);
                }
              }}
            />
          );
        })}
      </div>
      <div className="flex flex-row gap-3 w-full justify-center p-4">
        <Button onClick={addStep}>+ Add Step</Button>
        <Button onClick={save}>Save</Button>
        <Button onClick={newProjectWithLesson}>New Project with lesson</Button>
      </div>
    </>
  );
}

export default LessonCreator;
export type { StepDefinition };
