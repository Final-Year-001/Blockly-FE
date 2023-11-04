import { useRef, useState } from 'react';
import FrontendWorkspace from '../../workspaces/frontend/frontendWorkspace';
import { ClipboardIcon  } from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
  Avatar,
} from "@material-tailwind/react";
import { useRecoilState } from "recoil";
import { codeAtom } from "../../state/code";
import FrontendTopBar from '../../components/FrontendTopBar';

function organizeImports(code: string) {
  // Split the code into lines
  const lines = code.split("\n");

  // Extract import statements and other code
  const importStatements = [];
  const otherCode = [];

  for (const line of lines) {
    if (line.trim().startsWith("import ")) {
      importStatements.push(line);
    } else {
      otherCode.push(line);
    }
  }

  // Combine import statements and other code
  const organizedCode =
    importStatements.join("\n") + "\n" + otherCode.join("\n");

  return organizedCode;
}

function FrontendPage() {
  const [frontendCode, setFrontendCode] = useState('');
  const [tabView, setTabView] = useState('code'); // "code" or "iframe"
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [codeCopied, setCodeCopied] = useState(false);
  let [code, setCode] = useRecoilState(codeAtom);

  const injectCode = (code: string) => {
    setCode(organizeImports(code))
    setFrontendCode(code);
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.srcdoc = code;
    }
  };

  const tabs = [
    {
      label: "Code",
      value: "html",
      desc: (
        <div className="whitespace-pre-line w-full h-full p-2 text-white">
          <code>{code}</code>
        </div>
      ),
    },
    {
      label: "IFrame",
      value: "iframe",
      desc:   <iframe className='bg-white w-full h-full' ref={iframeRef} name="iframe1" />
    },
    {
      label: "Console",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  


  const copyCodeToClipboard = (code: string) => {
    const textField = document.createElement('textarea');
    textField.value = code; // Use 'value' instead of 'innerText'
    textField.setAttribute('readonly', ''); // Make the textarea read-only
    textField.style.position = 'absolute';
    textField.style.left = '-9999px'; // Move the textarea off-screen
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    document.body.removeChild(textField);

    setCodeCopied(true);

    // Reset the code copied indicator after a short delay (e.g., 3 seconds)
    setTimeout(() => {
      setCodeCopied(false);
    }, 3000); // 3000 milliseconds (3 seconds)
  };

  return (
    <div className="flex flex-col h-full w-full ">
      {/* <h1 className="text-3xl font-bold mt-6 mb-4 text-indigo-400">
        Frontend workspace
      </h1> */}
<FrontendTopBar />
      <div
        className="flex flex-row flex-grow px-6 pb-4"
        style={{ height: "calc(100% - 400px)" }}
      >

        <div className="flex-[0.7]">
          <FrontendWorkspace onCodeChange={injectCode} />
        </div>
        {/* <div style={{ flex: 0.7, padding: '0 10px' }}>
          <FrontendWorkspace onCodeChange={injectCode} />
        </div> */}

        {/* <div style={{ flex: 0.3, backgroundColor: '#EDEDED', padding: 20 }}> */}
          {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={() => setTabView('code')}
              style={{
                marginRight: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                backgroundColor: tabView === 'code' ? 'lightgreen' : 'white',
              }}
            >
              Code
            </button>
            <button
              onClick={() => setTabView('iframe')}
              style={{
                border: '1px solid #ccc',
                borderRadius: '4px',
                backgroundColor: tabView === 'iframe' ? 'lightgreen' : 'white',
              }}
            >
              IFrame
            </button>
          </div> */}

          
          <div className="flex-[0.3] pl-6 h-full ">
          <Tabs value="html" className="h-full pb-10">
            <TabsHeader>
              {tabs.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="h-full pb-10  bg-black border rounded-xl hover:overflow-auto">
              {tabs.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                  {value == 'html' && 
                  <button
                style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '4px',}}
                onClick={() => { copyCodeToClipboard(frontendCode);}}  
                title="Copy Code"
              >
                <ClipboardIcon  className="w-5 h-5 text-indigo-600" />
              </button>
              }
              {codeCopied && (
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent background
                    padding: '4px 8px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    zIndex: 1,
                    fontSize: '12px', 
                    color: 'grey', 
                  }}
                >
                  <span>Code Copied!</span>
                </div>
              )}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        {/* </div> */}


          {/* {tabView === 'code' && (
            <div
              style={{
                minHeight: '450px',
                maxHeight: '500px',
                overflowY: 'auto',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '8px',
                position: 'relative',
              }}
            >
              <code>{frontendCode}</code>
              <button
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px',
                }}
                onClick={() => {
                  copyCodeToClipboard(frontendCode);
                }}  title="Copy Code"
              >
                <ClipboardIcon  className="w-5 h-5 text-indigo-600" />
              </button>
              {codeCopied && (
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent background
                    padding: '4px 8px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    zIndex: 1,
                    fontSize: '12px', 
                    color: 'grey', 
                  }}
                >
                  <span>Code Copied!</span>
                </div>
              )}
            </div>
          )} */}

          {/* {tabView === 'iframe' && (
            <div
              style={{
                minHeight: '450px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '8px',
              }}
            >
              <iframe ref={iframeRef} name="iframe1" />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default FrontendPage;
