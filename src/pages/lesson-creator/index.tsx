import { useEffect, useState } from "react";
import LCStep from "../../components/LessonCreator/LCStep";
import { Button } from "@material-tailwind/react";
import _ from "lodash";

interface StepDefinition {
  description: string;
  workspaceState: object;
}

interface StepDefinitionWithState extends StepDefinition {}

interface LessonDefinition {}

function LessonCreator() {
  const [steps, setSteps] = useState<StepDefinition[]>([
    {
      description: "",
      workspaceState: {},
    },
  ]);

  const addStep = () => {
    let newSteps = _.cloneDeep(steps);
    let lastStep = _.cloneDeep(newSteps[steps.length - 1]);

    newSteps.push(lastStep);
    setSteps(newSteps);
  };

  const save = () => {
    console.log(steps);
    // For testing
    localStorage.setItem("lesson", JSON.stringify(steps));
  };

  useEffect(() => {
    let s = localStorage.getItem("lesson");
    if (s) {
        setSteps(JSON.parse(s));
    }
  }, []);

  return (
    <div className="flex flex-col gap-10 p-4">
      {steps.map((value, index) => {
        return (
          <LCStep
            key={index}
            step={index}
            state={value.workspaceState}
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
    </div>
  );
}

export default LessonCreator;
export type { StepDefinition }