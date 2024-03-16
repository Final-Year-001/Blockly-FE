import React from "react";
import CodeEditors from "./CodeEditor";
import { FEOutAtom } from "../../state/FEOutputCode";
import { useRecoilValue } from "recoil";

const CodeSplitter: React.FC = () => {

 const FEoutCode = useRecoilValue(FEOutAtom);

  // Function to extract HTML, CSS, and JavaScript code from the provided HTML code
  const extractCodeFromHtml = (
    htmlCode: string
  ): { html: string; css: string; js: string } => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlCode, "text/html");

    let cssCode = "";
    const styleTags = doc.head.querySelectorAll("style");
    styleTags.forEach((styleTag) => {
      cssCode += styleTag.textContent || "";
    });

 
    let jsCode = "";
    const scriptTags = doc.querySelectorAll("script"); // Select all script tags
    
    scriptTags.forEach((scriptTag) => {
      // Check if the script tag is inside the head or body
      if (scriptTag.parentElement === doc.head || scriptTag.parentElement === doc.body) {
        jsCode += scriptTag.textContent || "";
      }
    });

    // Remove extracted CSS and JavaScript code from the HTML code
    let cleanedHtmlCode = htmlCode;
    styleTags.forEach((styleTag) => {
      cleanedHtmlCode = cleanedHtmlCode.replace(styleTag.outerHTML, "");
    });
    scriptTags.forEach((scriptTag) => {
      cleanedHtmlCode = cleanedHtmlCode.replace(scriptTag.outerHTML, "");
    });

    return {
      html: cleanedHtmlCode.trim(),
      css: cssCode.trim(),
      js: jsCode.trim(),
    };
  };

  // Extract HTML, CSS, and JavaScript code from the sample HTML code
  const {
    html: initialHtmlCode,
    css: initialCssCode,
    js: initialJsCode,
  } = extractCodeFromHtml(FEoutCode);

  return (
    // <div className="w-full h-full bg-repeat " style={{ backgroundImage: `url(${BgImg})`, backgroundSize: "30%" }}>
    <div>
      <CodeEditors
        initialHtmlCode={initialHtmlCode}
        initialCssCode={initialCssCode}
        initialJsCode={initialJsCode}
      />
    </div>
  );
};

export default CodeSplitter;
