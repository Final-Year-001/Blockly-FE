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

Blockly.Blocks["html_buttonCSS"] = {
  init: function() {
    this.appendValueInput("html_button_name")
        .setCheck(null)
        .appendField("Button");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_buttonCSS'] = function(block : any, generator : any) {
  var value_html_button_name = generator.valueToCode(block, 'html_button_name', generator.ORDER_ATOMIC);
  
  var code = '<button>' + removeParentheses(value_html_button_name) + '</button>';
  console.log("this is code" + value_html_button_name);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, generator.ORDER_NONE];
};

//////////////////////////////////////////////////////////////////////////////////////////

