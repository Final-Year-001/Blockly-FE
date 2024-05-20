import { useEffect, useState } from "react";
import { BlocklyWorkspace } from "react-blockly";

interface BlocklyRenderProps {
  readonly state?: object;
  readonly className?: string;
  readonly large?: boolean;
}

function BlocklyRender({ state, className, large }: BlocklyRenderProps) {
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
      workspaceConfiguration={{
        readOnly: true,
        zoom: {
          startScale: large ? 1 : 0.45,
        },
      }}
    />
  ) : (
    <div className={className}></div>
  );
}

export default BlocklyRender;
