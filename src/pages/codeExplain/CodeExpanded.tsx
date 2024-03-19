import { Dialog, DialogBody } from "@material-tailwind/react";
import Editor from "@monaco-editor/react";

interface props {
  closeDialod: (value: boolean) => void;
  code: string;
  onChangeCode:  (val : string) => void;
  color?: string;
  language: string;
}

function CodeExpanded({
  closeDialod,
  code,
  onChangeCode,
  color,
  language
}: props) {

  const handleClose = () => {
    closeDialod(false);
  };

  return (
    <Dialog
      className={`justify-center ${color} p-3`}
      open={true}
      handler={handleClose}
      size="xl"
    >
        <Editor
          height="90vh"
          width="full"
          theme="light"
          defaultLanguage={language}
          defaultValue={code}
          onChange={(value) => onChangeCode(value || "")}
        />
    </Dialog>
  );
}

export default CodeExpanded;
