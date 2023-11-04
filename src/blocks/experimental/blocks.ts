import Blockly from "blockly";
import * as JavaScript from "blockly/javascript";


function removeParentheses(str : any) {
  // Check if the string starts and ends with parentheses
  if (str.startsWith("(") && str.endsWith(")")) {
    str = str.substring(1, str.length - 1);
  }
  return str;
}

//////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_html'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Html Block");
    this.appendStatementInput("html_head")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("head");
    this.appendStatementInput("html_body")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("body");
    this.setColour(230);
 this.setTooltip("This is the very first tag used");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_html'] = function(block : any, generator : any) {
  var statements_html_head = generator.statementToCode(block, 'html_head');
  var statements_html_body = generator.statementToCode(block, 'html_body');
  // note to senal - changed the order cause html should wrap everything and added line breaks
  var code = "<html>\n" +
             "  <head>\n" + statements_html_head + "  \n</head>\n" +
             "  <body>\n" + statements_html_body + "  </body>\n" +
             "</html>";
  return code;
};


