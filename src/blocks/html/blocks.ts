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
  // TODO: Assemble javascript into code variable.
  var code = "<html>" + statements_html_head + "</html>" + "<body>" + statements_html_body + "</body>";
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks["html_button"] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button block");
    this.appendValueInput("label")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Label");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, String);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_button'] = function(block : any, generator : any) {
  var value_label = generator.valueToCode(block, 'label', generator.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `<button type="submit">` + removeParentheses(value_label) + '</button>';
 
  return code;
};


//////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_name'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Enter name");
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
    this.appendDummyInput()
        .appendField("Text Input");
    this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Label");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_input_field'] = function(block : any, generator : any) {
  var value_name = generator.valueToCode(block, 'NAME', generator.ORDER_ATOMIC);
  // TODO: Assemble javascript into code variable.
  
  var code = '<label>' + removeParentheses(value_name) + '</label>' + 
  '<input type="text"><br><br>'
  ;
  return code;
};

//////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_form'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Form Block");
    this.appendValueInput("action")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Action");
    this.appendStatementInput("statement")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_form'] = function(block : any, generator : any) {
  // var statements_form_block = generator.statementToCode(block, 'form_block');
  var value_action = generator.valueToCode(block, 'action', generator.ORDER_ATOMIC);
  var statements_statement = generator.statementToCode(block, 'statement');
  // TODO: Assemble javascript into code variable.
  var code = `<form action="` + removeParentheses(value_action) + `">` + statements_statement + `</form>`
  return code;
};
