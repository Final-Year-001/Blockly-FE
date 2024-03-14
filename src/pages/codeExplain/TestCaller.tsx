import React from "react";
import CodeEditors from "./CodeEditor";
import BgImg from '../../assets/loginImg/ttbg.jpg'

const TestCaller: React.FC = () => {
  const sampleHtmlCode = `
  <html>
  <head>
  <style>  #table1{  border:0px solid #ff0000;
    }</style>
  <script>
    
    
    

        document.addEventListener("DOMContentLoaded", function() {
          var element = document.getElementById();
          if (element) {
            element.addEventListener("click", function() {
              alert();
            });
          }
        });

  </script>
</head>
  <body>
  <table border=1 id="table1">  <tr>  <th>  Hello</th><th>  sadfws</th><th>  efwsf</th></tr><tr>  <td>  sefsf</td><td>  wefwsf</td><td>  wsefwsef</td></tr></table>  </body>
</html>
  `;

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
    const scriptTags = doc.head.querySelectorAll("script");
    scriptTags.forEach((scriptTag) => {
      jsCode += scriptTag.textContent || "";
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
  } = extractCodeFromHtml(sampleHtmlCode);

  return (
    // <div className="w-full h-full bg-repeat " style={{ backgroundImage: `url(${BgImg})`, backgroundSize: "30%" }}>
    <div>
      <h1 className="text-3xl font-semibold">Code Editor</h1>
      <CodeEditors
        initialHtmlCode={initialHtmlCode}
        initialCssCode={initialCssCode}
        initialJsCode={initialJsCode}
      />
    </div>
  );
};

export default TestCaller;
