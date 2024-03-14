import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Monaco } from '@monaco-editor/react';

interface CodeEditorProps {
    initialHtmlCode: string;
    initialCssCode: string;
    initialJsCode: string;
}

const CodeEditors: React.FC<CodeEditorProps> = ({
    initialHtmlCode,
    initialCssCode,
    initialJsCode,
  }) => {
  const [htmlCode, setHtmlCode] = useState(initialHtmlCode);
  const [cssCode, setCssCode] = useState(initialCssCode);
  const [jsCode, setJsCode] = useState(initialJsCode);

  const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlCode(e.target.value);
  };

  const handleCssChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCssCode(e.target.value);
  };

  const handleJsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsCode(e.target.value);
  };


  return (
    <div className="flex flex-wrap">
      <div className="w-full bg-red-300 md:w-1/3 px-4">
        <h2 className="text-lg font-semibold">HTML</h2>
        {/* <textarea className="w-full h-32 border rounded-md p-2" value={htmlCode} onChange={handleHtmlChange} /> */}
        <Editor  height="50vh" theme='vs-dark' defaultLanguage="html" defaultValue={htmlCode} />
      
      
      </div>
      <div className="w-full md:w-1/3 px-4">
        <h2 className="text-lg font-semibold">CSS</h2>
        {/* <textarea className="w-full h-32 border rounded-md p-2" value={cssCode} onChange={handleCssChange} /> */}
        <Editor  height="50vh" theme='vs-dark' defaultLanguage="css" defaultValue={cssCode} />
      </div>
      <div className="w-full md:w-1/3 px-4">
        <h2 className="text-lg font-semibold">JavaScript</h2>
        {/* <textarea className="w-full h-32 border rounded-md p-2" value={jsCode} onChange={handleJsChange} /> */}
        <Editor  height="50vh" theme='vs-dark' defaultLanguage="javascript" defaultValue={jsCode} />
      </div>
      <div className="w-full px-4 mt-4">
        <h2 className="text-lg font-semibold">Preview</h2>
        <iframe
          title="Preview"
          className="w-full h-64 border rounded-md mt-2"
          srcDoc={`
            <html>
              <head>
                <style>${cssCode}</style>
              </head>
              <body>${htmlCode}</body>
              <script>${jsCode}</script>
            </html>
          `}
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
};

export default CodeEditors;
