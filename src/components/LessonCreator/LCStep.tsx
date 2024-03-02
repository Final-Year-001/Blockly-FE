import { BlocklyWorkspace } from "react-blockly";
import toolboxConfig from "../../toolbox/toolbox";
import Blockly from "blockly";
import { Button, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";

interface LCStepProps {
  readonly step: number;
  readonly state?: object;
  readonly onWorkspaceChange?: (json: object, step: number) => void;
  readonly description?: string;
  readonly onDescriptionChange?: (description: string, step: number) => void;
}

function LCStep({
  step,
  state,
  onWorkspaceChange,
  description,
  onDescriptionChange,
}: LCStepProps) {
  const _onWorkspaceChanged = (workspace: Blockly.WorkspaceSvg) => {
    let json = Blockly.serialization.workspaces.save(workspace);
    onWorkspaceChange?.(json, step);
  };

  const [reload, setReload] = useState(false);

  useEffect(() => {
    reloadWorkspace();
  }, [state]);

  const reloadWorkspace = () => {
    setReload(false);
    setReload(true);
    console.log(state);
  }

  return (
    <div className="flex flex-col">
      <h2>Step {step + 1}</h2>
      <div className="flex flex-row h-[20em]">
        {reload ? (
          <BlocklyWorkspace
            toolboxConfiguration={toolboxConfig}
            initialJson={state}
            className="fill-height flex-[0.5]"
            workspaceConfiguration={{
              grid: {
                spacing: 20,
                length: 3,
                colour: "#fff",
                snap: true,
              },
            }}
            onWorkspaceChange={_onWorkspaceChanged}
          />
        ) : (
          "null"
        )}
        <div className="flex-[0.5]">
          <Textarea
            label="Description"
            value={description}
            onChange={(e) => onDescriptionChange?.(e.target.value, step)}
          />
          {/* <Button onClick={reloadWorkspace}>Reload</Button> */}
        </div>
      </div>
    </div>
  );
}

export default LCStep;
