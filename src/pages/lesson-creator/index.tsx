import { useState } from "react";
import LCStep from "../../components/LessonCreator/LCStep";
import { Button } from "@material-tailwind/react";
import _ from "lodash";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { tokenAtom } from "../../state/auth";
import { getLessonById, newProject, saveLesson } from "../../api/project";

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

  return (
    <div className="flex flex-col gap-10 p-4">
      {steps.map((value, index) => {
        return (
          <LCStep
            key={index}
            step={index}
            variant={variant}
            refresh={refreshSteps}
            state={value.workspaceState || {}}
            description={value.description}
            onDescriptionChange={(value) => {
              let newSteps = _.cloneDeep(steps);

              newSteps[index].description = value;
              setSteps(newSteps);
            }}
            onWorkspaceChange={(json) => {
              let newSteps = _.cloneDeep(steps);
              let oldState = newSteps[index].workspaceState;

              if (!_.isEqual(oldState, json) && !_.isEqual(json, {})) {
                newSteps[index].workspaceState = json;
                setSteps(newSteps);
              }
            }}
          />
        );
      })}
      <Button onClick={addStep}>+ Add Step</Button>
      <Button onClick={save}>Save</Button>
      <Button onClick={newProjectWithLesson}>New Project with lesson</Button>
    </div>
  );
}

export default LessonCreator;
export type { StepDefinition };
