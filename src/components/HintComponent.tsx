import BlocklyRender from "./BlocklyRender";

interface HintComponentProps {
  readonly hint?: string;
  readonly step?: number;
  readonly stepPreview?: object;
}

function HintComponent({ hint, step, stepPreview }: HintComponentProps) {
  return (
    <div className="p-4 flex flex-row justify-between bg-gray-200 rounded-lg">
      <div>
        <div>Step {step}</div>
        <div className="flex flex-row">{hint}</div>
      </div>
      {stepPreview ? (
        <BlocklyRender state={stepPreview} className="h-[10em] w-[10em]" />
      ) : null}
    </div>
  );
}

export default HintComponent;
