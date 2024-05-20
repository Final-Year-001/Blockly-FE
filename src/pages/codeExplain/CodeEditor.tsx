import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { splitCodeAtom } from "../../state/splitCode";
import { useRecoilState } from "recoil";
import CodeExpanded from "./CodeExpanded";
import LargeIframe from "./LargeIframe";
import htmlBeautify from 'html-beautify'
import { js_beautify } from "js-beautify";

// these are the splitted code.
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
  const [splitCodesAtom, setSplitCodeData] = useRecoilState(splitCodeAtom);
  const [showJSMod, setShowJSMod] = useState(false);
  const [showCSSMod, setShowCSSMod] = useState(false);
  const [showHTMLMod, setShowHTMLMod] = useState(false);
  const [showPrevMod, setShowPrevMod] = useState(false);

  const updateCode = (html: string, css: string, js: string) => {
    setSplitCodeData((prevData) => ({
      ...prevData,
      html: html,
      css: css,
      js: js,
    }));
  };

  useEffect(() => {
    updateCode(htmlCode, cssCode, jsCode);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/3 px-4 ">
        <h2 className="text-lg font-semibold cursor-pointer hover:text-red-400" onClick={() => setShowHTMLMod(true)}>HTML</h2>
        {/* <textarea className="w-full h-32 border rounded-md p-2" value={htmlCode} onChange={handleHtmlChange} /> */}
        <Editor
          height="45vh"
          theme="light"
          defaultLanguage="html"
          defaultValue={htmlBeautify(htmlCode)}
          onChange={(value) => setHtmlCode(value || "")}
        />
      </div>
      <div className="w-full md:w-1/3 px-4">
        <h2 className="text-lg font-semibold cursor-pointer hover:text-blue-300" onClick={() => setShowCSSMod(true)}>CSS</h2>
        {/* <textarea className="w-full h-32 border rounded-md p-2" value={cssCode} onChange={handleCssChange} /> */}
        <Editor
          height="45vh"
          theme="light"
          defaultLanguage="css"
          defaultValue={htmlBeautify(cssCode)}
          onChange={(value) => setCssCode(value || "")}
        />
      </div>
      <div className="w-full md:w-1/3 px-4">
        <h2
          className="text-lg font-semibold cursor-pointer hover:text-amber-400"
          onClick={() => setShowJSMod(true)}
        >
          JavaScript
        </h2>
        {/* <textarea className="w-full h-32 border rounded-md p-2" value={jsCode} onChange={handleJsChange} /> */}
        <Editor
          height="45vh"
          theme="light"
          defaultLanguage="javascript"
          defaultValue={js_beautify(jsCode)}
          onChange={(value) => setJsCode(value || "")}
        />
      </div>
      <div className="w-full px-4 mt-4">
        <h2 className="text-lg font-semibold cursor-pointer hover:text-lime-300" onClick={() => setShowPrevMod(true)}>Preview</h2>
        <iframe
          title="Preview"
          className="w-full bg-white h-64 border rounded-md mt-2"
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
      {showJSMod && (
        <CodeExpanded
          closeDialod={setShowJSMod}
          code={jsCode}
          onChangeCode={setJsCode}
          color="bg-amber-400"
          language="javascript"
        />
      )}
      {showCSSMod && (
        <CodeExpanded
          closeDialod={setShowCSSMod}
          code={cssCode}
          onChangeCode={setCssCode}
          color="bg-blue-400"
          language="css"
        />
      )}
      {showHTMLMod && (
        <CodeExpanded
          closeDialod={setShowHTMLMod}
          code={htmlCode}
          onChangeCode={setHtmlCode}
          color="bg-red-400"
          language="html"
        />
      )}
      {showPrevMod && (
        <LargeIframe
          closeDialod={setShowPrevMod}
          html={htmlCode}
          css={cssCode}
          js={jsCode}
          color="bg-lime-400"
        />
      )}
    </div>
  );
};

export default CodeEditors;
