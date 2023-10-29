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

Blockly.Blocks["html_button"] = {
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

JavaScript.javascriptGenerator.forBlock['html_button'] = function(block : any, generator : any) {
  var value_html_button_name = generator.valueToCode(block, 'html_button_name', generator.ORDER_ATOMIC);
  
  var code = '<button>' + removeParentheses(value_html_button_name) + '</button>';
  console.log("this is code" + value_html_button_name);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, generator.ORDER_NONE];
};

//////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_name'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Type something");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Text"), "html_input_name");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("Use this to add text to other blocks");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_name'] = function(block : any, generator : any) {
  var text_html_input_name = block.getFieldValue('html_input_name');
  // TODO: Assemble javascript into code variable.
  var code = text_html_input_name;
 
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, generator.ORDER_NONE];
};

//////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_input_field'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Add feild name");
    this.appendDummyInput()
        .appendField("Feild");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("This block is for a input field");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_input_field'] = function(block : any, generator : any) {
  var value_name = generator.valueToCode(block, 'NAME', generator.ORDER_ATOMIC);
  
  function removeParentheses(str : any) {
    // Check if the string starts and ends with parentheses
    if (str.startsWith("(") && str.endsWith(")")) {
      str = str.substring(1, str.length - 1);
    }
    return str;
  }

  var code = '<label>' + removeParentheses(value_name) + '</label>' + 
  '<input type="text"><br><br>'
  ;
  return [code, generator.ORDER_NONE];
};

//////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_form'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Form Block");
    this.appendValueInput("action")
        .setCheck(null)
        .appendField("Action");
    this.appendValueInput("field1")
        .setCheck(null)
        .appendField("Feild");
    this.appendValueInput("field2")
        .setCheck(null)
        .appendField("Feild");
    this.appendValueInput("button")
        .setCheck(null)
        .appendField("Button");
    this.setColour(230);
 this.setTooltip("This is the form block");
 this.setHelpUrl("");
  }
};


JavaScript.javascriptGenerator.forBlock['html_form'] = function(block : any, generator : any) {
  var value_action = generator.valueToCode(block, 'action', generator.ORDER_ATOMIC);
  var value_feild1 = generator.valueToCode(block, 'field1', generator.ORDER_ATOMIC);
  var value_feild2 = generator.valueToCode(block, 'field2', generator.ORDER_ATOMIC);
  var value_button = generator.valueToCode(block, 'button', generator.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.

  var code = `<form action="` + removeParentheses(value_action) +`">` + 
  removeParentheses(value_feild1) + 
  removeParentheses(value_feild2) + 
  removeParentheses(value_button) + 
  '</form>'
  ;

  return code;
};

// JavaScript.javascriptGenerator.forBlock['html_form'] = function(block : any, generator : any) {
//   var value_action = generator.valueToCode(block, 'Action', generator.ORDER_ATOMIC);
//   var value_feild1 = generator.valueToCode(block, 'Feild1', generator.ORDER_ATOMIC);
//   var value_feild2 = generator.valueToCode(block, 'Feild2', generator.ORDER_ATOMIC);
//   var value_button = generator.valueToCode(block, 'Button', generator.ORDER_ATOMIC);

//   function removeParentheses(str : any) {
//     // Check if the string starts and ends with parentheses
//     if (str.startsWith("(") && str.endsWith(")")) {
//       str = str.substring(1, str.length - 1);
//     }
//     return str;
//   }

//   // var code = `<form action="${value_action}">` + 
//   // value_feild1 + 
//   // value_feild2 + 
//   // value_button + 
//   // '</form>'
//   // ;
//   var code = "this is a test";
//   return [code, generator.ORDER_NONE];
// };