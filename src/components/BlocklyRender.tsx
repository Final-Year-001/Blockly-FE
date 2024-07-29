import { useEffect, useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import { workspaceConfiguration as frontendWorkspaceConfiguration } from "../workspaces/frontend/frontendWorkspace";
import { workspaceConfiguration as backendWorkspaceConfiguration } from "../workspaces/backend/backendWorkspace";

interface BlocklyRenderProps {
  readonly state?: object;
  readonly className?: string;
  readonly frontend: boolean;
}

function BlocklyRender({ state, className, frontend }: BlocklyRenderProps) {
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setReload(false);
    setTimeout(() => {
      setReload(true);
    }, 100);
  }, [state]);

  return reload ? (
    <BlocklyWorkspace
      initialJson={state}
      className={className}
      workspaceConfiguration={
        frontend
          ? frontendWorkspaceConfiguration
          : backendWorkspaceConfiguration
      }
    />
  ) : (
    <div className={className}></div>
  );
}

export default BlocklyRender;
