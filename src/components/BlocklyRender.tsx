import { useEffect, useState } from "react";
import { BlocklyWorkspace } from "react-blockly";

interface BlocklyRenderProps {
  readonly state?: object;
  readonly className?: string;
}

function BlocklyRender({ state, className }: BlocklyRenderProps) {
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
          startScale: 0.45,
        },
      }}
    />
  ) : (
    <div className={className}></div>
  );
}

export default BlocklyRender;
