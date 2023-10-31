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

Blockly.Blocks['html_identifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Html Identifier Block ");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldCheckbox("FALSE"), "id_checkbox")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("default"), "id_name");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldCheckbox("FALSE"), "class_checkbox")
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput("default"), "class_name");
        this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_identifier'] = function(block : any, generator : any) {
  var checkbox_id_checkbox = block.getFieldValue('id_checkbox') === 'TRUE';
  var text_id_name = block.getFieldValue('id_name');
  var checkbox_class_checkbox = block.getFieldValue('class_checkbox') === 'TRUE';
  var text_class_name = block.getFieldValue('class_name');
  // TODO: Assemble javascript into code variable.
  var code = "";
  if(checkbox_id_checkbox){
    code = `id="` + text_id_name  + `" `
  }
  if(checkbox_class_checkbox){
    code = code + `class="` + text_class_name  + `"`
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, generator.ORDER_NONE];
};

////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button Block");
    this.appendValueInput("identifier")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Identifier");
    this.appendValueInput("button_label")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Label");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_button'] = function(block : any, generator : any) {
  var value_button_label = generator.valueToCode(block, 'button_label', generator.ORDER_ATOMIC);
  var value_identifier = generator.valueToCode(block, 'identifier', generator.ORDER_ATOMIC);
  var code = `<button type="submit" ` + removeParentheses(value_identifier) + `>` + removeParentheses(value_button_label) + '</button>';
 
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
        .appendField("Input Feild");
    this.appendValueInput("identifier")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Identifier");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_input_field'] = function(block : any, generator : any) {
  var value_identifier = generator.valueToCode(block, 'identifier', generator.ORDER_ATOMIC);
  var code =`<input type="text" ` + removeParentheses(value_identifier) + `>` + `<br>`
  ;
  return code;
};

//////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_label'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Label Block");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldCheckbox("TRUE"), "id")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("default"), "id_input")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "class")
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput("default"), "class_input");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Name for label")
        .appendField(new Blockly.FieldTextInput("default"), "label_name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_label'] = function(block : any, generator : any) {
  var checkbox_id = block.getFieldValue('id') === 'TRUE';
  var text_id_input = block.getFieldValue('id_input');
  var checkbox_class = block.getFieldValue('class') === 'TRUE';
  var text_class_input = block.getFieldValue('class_input');
  var text_label_name = block.getFieldValue('label_name');

  var identifiers = "";
  if(checkbox_id){
    identifiers = ` id="` + removeParentheses(text_id_input) + `"`
  }
  if(checkbox_class){
    identifiers = identifiers + ` class="` + removeParentheses(text_class_input) + `"`
  }
  
  var code = `<label` + identifiers +`>` + removeParentheses(text_label_name) + `</label>`;
  return code;
};

//////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_form'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Form Block");
    this.appendValueInput("identifier")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Identifier");
    this.appendStatementInput("statement")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_form'] = function(block : any, generator : any) {
  // var statements_form_block = generator.statementToCode(block, 'form_block');
  var value_identifier = generator.valueToCode(block, 'identifier', generator.ORDER_ATOMIC);
  var statements_statement = generator.statementToCode(block, 'statement');
  // TODO: Assemble javascript into code variable.
  var code = `<form ` + removeParentheses(value_identifier) + `>` + statements_statement + `</form>`
  return code;
};
