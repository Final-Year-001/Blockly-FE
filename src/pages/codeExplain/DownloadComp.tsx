import { Dialog, DialogBody } from "@material-tailwind/react";
import codeImg from '../../assets/code.png'
import { AwesomeButton } from "react-awesome-button";

const singleFileContent = 'Download everything in just one file! It grabs all the words, colors, and actions from the webpage and puts them together neatly in a single box for you to keep.'
const multipleFileContent = `This will separates all the words, colors, and actions into different files, so you can have them organized just the way you like! But how will the files connect with each other? Ah for that I added below code within html page's <head> </head> tags`
const singlTitle = 'Download as Sigle File'
const multipleTitle = 'Download as Multiple File'

interface DownloadFilesProps {
  downloadAll: () => void; // Function to handle close event
  downloadSingle: () => void; // Function passed from parent component for download
  closeDialod: (value: boolean) => void;
}

function DownloadFiles({
  downloadAll,
  downloadSingle,
  closeDialod,
}: DownloadFilesProps) {
  const handleClose = () => {
    closeDialod(false);
  };

  return (
    <Dialog
      className="flex flex-wrap justify-center bg-transparent flex-row 2xl:min-w-[850px]"
      open={true}
      handler={handleClose}
    >
      <DialogBody className="bg-white w-full">
        <div className="">
          <div >
            <AwesomeButton
              style={{
                "--button-primary-color": "#2b57ea",
                "--button-primary-color-dark": "#0f3ac8",
                "--button-primary-color-light": "#ffffff",
                "--button-primary-color-hover": "#2b57ea",
                "--button-primary-color-active": "#0f34ac",
                "--button-default-border-radius": "8px",
                width: "140px",
                height: "40px",
                marginRight: "10px",
                fontSize: "16px",
              }}
              // onReleased={()=>{createHTMLFile("file")}}
              // onReleased={()=>{navigate("/crunchCode")}}
              onPress={() => {
                handleClose();
              }}
              type="primary"
            >
              Go Back
            </AwesomeButton>
          </div>
          <div className="flex  mt-4">
            <div className="flex flex-col w-1/2 border-r-4 border-black p-4">
              <div className="flex justify-center text-2xl mb-4">{singlTitle}</div>
              <div>{singleFileContent}</div>
              <div className="flex justify-center items-end mt-8">
                <AwesomeButton
                  style={{
                    "--button-primary-color": "#d600b6",
                    "--button-primary-color-dark": "#8e0079",
                    "--button-primary-color-light": "#ffffff",
                    "--button-primary-color-hover": "#c400a7",
                    "--button-primary-color-active": "#95007e",
                    "--button-default-border-radius": "8px",
                    width: "170px",
                    height: "40px",
                    marginRight: "10px",
                    fontSize: "16px",
                  }}
                  onPress={() => {
                    downloadSingle();
                  }}
                  type="primary"
                >
                  Download file
                </AwesomeButton>
              </div>
            </div>
            <div className="w-1/2 p-4">
              <div className="flex justify-center text-2xl mb-4">
                {multipleTitle}
              </div>
              <div>{multipleFileContent}</div>
              <div>
                <img src={codeImg} alt="code image" />
              </div>
              <div className="flex justify-center mt-8">
                <AwesomeButton
                  style={{
                    "--button-primary-color": "#d600b6",
                    "--button-primary-color-dark": "#8e0079",
                    "--button-primary-color-light": "#ffffff",
                    "--button-primary-color-hover": "#c400a7",
                    "--button-primary-color-active": "#95007e",
                    "--button-default-border-radius": "8px",
                    width: "170px",
                    height: "40px",
                    marginRight: "10px",
                    fontSize: "16px",
                  }}
                  onPress={() => {
                    downloadAll();
                  }}
                  type="primary"
                >
                  Download files
                </AwesomeButton>
              </div>
            </div>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
}

export default DownloadFiles;
