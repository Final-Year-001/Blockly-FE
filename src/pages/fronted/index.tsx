import { useRef, useState } from 'react';
import FrontendWorkspace from '../../workspaces/frontend/frontendWorkspace';
import { ClipboardIcon  } from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

function FrontendPage() {
  const [frontendCode, setFrontendCode] = useState('');
  const [tabView, setTabView] = useState('code'); // "code" or "iframe"
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [codeCopied, setCodeCopied] = useState(false);

  const injectCode = (code: string) => {
    setFrontendCode(code);
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.srcdoc = code;
    }
  };

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
    <>
      <h1 className="text-3xl font-bold mt-6 mb-4 text-indigo-400">
        Frontend workspace
      </h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
          whiteSpace: 'pre-line',
        }}
      >
        <div style={{ flex: 0.7, padding: '0 10px' }}>
          <FrontendWorkspace onCodeChange={injectCode} />
        </div>

        <div style={{ flex: 0.3, backgroundColor: '#EDEDED', padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
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
          </div>
          <br />
          {tabView === 'code' && (
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
          )}
          {tabView === 'iframe' && (
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
          )}
        </div>
      </div>
    </>
  );
}

export default FrontendPage;
