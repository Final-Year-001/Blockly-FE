import { BlocklyWorkspace } from "react-blockly";
import toolboxConfig from "../../toolbox/toolbox";
import Blockly from "blockly";
import { Checkbox, Input, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import frontendToolboxCategories from "../../toolbox/frontend";
import { removeSearch } from "../../helpers/blockly";
import { workspaceConfiguration as workspaceConfigurationBackend } from "../../workspaces/backend/backendWorkspace";
import { workspaceConfiguration as workspaceConfigurationFrontend } from "../../workspaces/frontend/frontendWorkspace";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { ScreenCapture } from 'react-screen-capture';

interface LCStepProps {
  readonly step: number;
  readonly state?: object;
  readonly refresh?: boolean;
  readonly onWorkspaceChange?: (json: object, step: number) => void;
  readonly description?: string;
  readonly onDescriptionChange?: (description: string, step: number) => void;
  readonly variant?: "frontend" | "backend";
  readonly onMouseOver?: () => void;
  readonly onImageSet?: (imageFile?: File) => void;
  readonly image?: string;
}

function LCStep({
  step,
  state,
  onWorkspaceChange,
  description,
  onDescriptionChange,
  refresh,
  variant,
  onMouseOver,
  image,
  onImageSet,
}: LCStepProps) {
  const _onWorkspaceChanged = (workspace: Blockly.WorkspaceSvg) => {
    let json = Blockly.serialization.workspaces.save(workspace);
    onWorkspaceChange?.(json, step);
  };

  const [altImageURL, setAltImageURL] = useState("");
  const [screenCapture, setScreenCapture] = useState<string>('');

  const _onImageSet = (img?: File) => {
    console.log(img, "ssdsda")
    if (!img) {
      setAltImageURL("");
      onImageSet?.(undefined);
      return;
    }
    setAltImageURL(URL.createObjectURL(img));
    onImageSet?.(img);
  };

  const handleScreenCapture = (screenCapture: string) => {
    // _onImageSet(screenCapture);
    // onImageSet?.(screenCapture)
    alert(screenCapture);
    console.log(screenCapture)
  };

  const [altImage, setAltImage] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    reloadWorkspace();
  }, [refresh]);

  useEffect(() => {
    if (image){
      setAltImageURL(image)
      setAltImage(true);
    }
  }, [image]);

  const reloadWorkspace = () => {
    setReload(false);
    setTimeout(() => setReload(true), 1);
    console.log("state lcx", state);
  };

  return (
    <ScreenCapture onEndCapture={handleScreenCapture}>
      {({ onStartCapture }) => (
    <div className="flex flex-col h-[23em]" onMouseOver={onMouseOver}>
      <h2>Step {step + 1}</h2>
      <PanelGroup direction="horizontal">
        <Panel id="workspace" minSize={50} order={1}>
          {reload ? (
            <BlocklyWorkspace
              toolboxConfiguration={
                variant == "backend"
                  ? removeSearch(toolboxConfig)
                  : removeSearch(frontendToolboxCategories)
              }
              initialJson={state}
              className="fill-height"
              workspaceConfiguration={
                variant == "backend"
                  ? workspaceConfigurationBackend
                  : workspaceConfigurationFrontend
              }
              onWorkspaceChange={_onWorkspaceChanged}
            />
          ) : (
            <div className="fill-height"></div>
          )}
          <PanelResizeHandle />
        </Panel>
        <Panel id="sidebar" minSize={25} order={2}>
          <div className="p-3">
            <Textarea
              label="Description"
              value={description}
              onChange={(e) => onDescriptionChange?.(e.target.value, step)}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />

            <div className="flex flex-row items-center">
              <Checkbox
                color="blue"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
                checked={altImage}
                onChange={(e) => setAltImage(e.target.checked)}
              />{" "}
              Select an alternative preview image for this step
            </div>
            <button onClick={onStartCapture}>Capture</button>
            {altImage ? (
              <>
                <Input
                  label="Alternative Image"
                  accept="image/*"
                  type="file"
                  onChange={(e) => _onImageSet?.(e.target?.files?.[0])}
                  multiple={false}
                  crossOrigin={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
                <img
                  src={altImageURL}
                  alt="Preview Image"
                  className="w-[10em] h-[10em] object-cover"
                ></img>
              </>
            ) : null}
            {/* <Button onClick={reloadWorkspace}>Reload</Button> */}
          </div>
        </Panel>
      </PanelGroup>
    </div>
    )}
    </ScreenCapture>
  );
}

export default LCStep;
