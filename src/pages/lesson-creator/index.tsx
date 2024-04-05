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
import { uploadImage } from "../../helpers/firebase";
import { AwesomeButton } from 'react-awesome-button'; 

interface StepDefinition {
  description: string;
  workspaceState: object;
  image?: {
    url?: string,
    ref?: string
  }
  imageFile?: File
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
    mutationFn: (steps) => saveLesson(tokens, params.id ?? "", steps),
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

  const save = async () => {
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
          
          <AwesomeButton
              style={{
                '--button-primary-color': '#D70040',
                '--button-primary-color-dark': '#C41E3A',
                '--button-primary-color-light': '#ffffff',
                '--button-primary-color-hover': '#D70040',
                '--button-primary-color-active': '#D2042D',
                '--button-default-border-radius': '8px',
                width: '80px',
                height: '40px',
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onPress={undo}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
            >
               Undo
            </AwesomeButton>

          <AwesomeButton
              style={{
                '--button-primary-color': '#343434',
                '--button-primary-color-dark': '#353935',
                '--button-primary-color-light': '#ffffff',
                '--button-primary-color-hover': '#343434',
                '--button-primary-color-active': '#1aa81a',
                '--button-default-border-radius': '8px',
                width: '80px',
                height: '40px',
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onPress={redo}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
            >
               Redo
            </AwesomeButton>

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
              image={value.image?.url}
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
              onImageSet={(image) => {
                console.log(image)
                let newSteps = _.cloneDeep(steps);

                newSteps[index].imageFile = image;
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
        {/* <Button onClick={addStep} disabled={saveMutation.isLoading}>+ Add Step</Button> */}
        {/* <Button onClick={save} disabled={saveMutation.isLoading}>Save</Button> */}
        {/* <Button onClick={newProjectWithLesson} disabled={saveMutation.isLoading}>New Project with lesson</Button> */}

        <AwesomeButton 
        style={{ 
          '--button-primary-color': '#33cc33',
          '--button-primary-color-dark': '#18a418',
          '--button-primary-color-light': '#ffffff',
          '--button-primary-color-hover': '#33cc33',
          '--button-primary-color-active': '#1aa81a',
          '--button-default-border-radius': '8px',
           width: '140px',
           height: '37px',   
           marginRight: '10px'        
        }} 
        onPress={addStep}
        disabled={saveMutation.isLoading}
        type="primary">
          + Add Step
        </AwesomeButton>

        <AwesomeButton 
        style={{ 
          '--button-primary-color': '#42A5F5',
          '--button-primary-color-dark': '#2d82c7',
          '--button-primary-color-light': '#ffffff',
          '--button-primary-color-hover': '#62b4f8',
          '--button-primary-color-active': '#2d82c7',
          '--button-default-border-radius': '8px',
           width: '120px',
           height: '37px',
           marginRight: '10px' 
        }} 
        onPress={save}
        disabled={saveMutation.isLoading}
        type="primary">
          Save
        </AwesomeButton>

        <AwesomeButton 
        style={{ 
          '--button-primary-color': '#FFA726',
          '--button-primary-color-dark': '#e29520',
          '--button-primary-color-light': '#ffffff',
          '--button-primary-color-hover': '#ffb03a',
          '--button-primary-color-active': '#e29520',
          '--button-default-border-radius': '8px',
           width: '250px',
           height: '37px' ,
           marginRight: '10px' 
        }} 
        onPress={newProjectWithLesson}
        disabled={saveMutation.isLoading}
        type="primary">
          New Project with lesson
        </AwesomeButton>

      </div>
    </>
  );
}

export default LessonCreator;
export type { StepDefinition };
