import { BlocklyWorkspace } from "react-blockly";
import toolboxConfig from "../../toolbox/toolbox";
import Blockly from "blockly";
import { Button, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import frontendToolboxCategories from "../../toolbox/frontend";

interface LCStepProps {
  readonly step: number;
  readonly state?: object;
  readonly refresh?: boolean
  readonly onWorkspaceChange?: (json: object, step: number) => void;
  readonly description?: string;
  readonly onDescriptionChange?: (description: string, step: number) => void;
  readonly variant?: "frontend" | "backend" 
  readonly onMouseOver?: () => void;
}

function LCStep({
  step,
  state,
  onWorkspaceChange,
  description,
  onDescriptionChange,
  refresh,
  variant,
  onMouseOver
}: LCStepProps) {
  const _onWorkspaceChanged = (workspace: Blockly.WorkspaceSvg) => {
    let json = Blockly.serialization.workspaces.save(workspace);
    onWorkspaceChange?.(json, step);
  };

  const [reload, setReload] = useState(false);

  useEffect(() => {
    reloadWorkspace();
  }, [refresh]);

  const reloadWorkspace = () => {
    setReload(false);
    setTimeout(() => setReload(true), 1);
    console.log("state lcx", state);
  };

  return (
    <div className="flex flex-col" onMouseOver={onMouseOver}>
      <h2>Step {step + 1}</h2>
      <div className="flex flex-row h-[20em]">
        {reload ? (
          <BlocklyWorkspace
            toolboxConfiguration={variant == "backend" ? toolboxConfig : frontendToolboxCategories}
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
