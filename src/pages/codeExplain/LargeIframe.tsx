import { Dialog, DialogBody } from "@material-tailwind/react";
import Editor from "@monaco-editor/react";

interface props {
  closeDialod: (value: boolean) => void;
  color?: string;
  html: string;
  js: string;
  css: string;
}

function LargeIframe({
  closeDialod,
  html,
  css,
  color,
  js
}: props) {

  const handleClose = () => {
    closeDialod(false);
  };

  return (
    <Dialog
      className={`justify-center w-full h-full p-4 ${color}`}
      open={true}
      handler={handleClose}
      size="xl"
      
    >
      <iframe
          title="Preview"
          className="w-full h-full bg-white h-64 border rounded-md"
          srcDoc={`
            <html>
              <head>
                <style>${css}</style>
              </head>
              <body>${html}</body>
              <script>${js}</script>
            </html>
          `}
          sandbox="allow-scripts"
        />
    </Dialog>
  );
}

export default LargeIframe;
