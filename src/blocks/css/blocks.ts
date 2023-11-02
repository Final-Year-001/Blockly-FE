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

Blockly.Blocks['html_css'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CSS Block");
    this.appendStatementInput("css_statement")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("This is the CSS tag block where you include the css styling");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_css'] = function(block : any, generator : any) {
  var statements_css_statement = generator.statementToCode(block, 'css_statement');
  // TODO: Assemble javascript into code variable.
  var code = '<style>' + removeParentheses(statements_css_statement) + '</style>'
  return code;
};
//////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['style_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CSS Style Block");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("selector")
        .appendField(new Blockly.FieldDropdown([["ID","id"], ["Class","class"], ["Tag","tag"]]), "selector_type")
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("default"), "selector_name");
    this.appendStatementInput("css_statement")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("declarator");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['style_block'] = function(block : any, generator : any) {
  var dropdown_selector_type = block.getFieldValue('selector_type');
  var text_selector_name = block.getFieldValue('selector_name');
  var statements_css_statement = generator.statementToCode(block, 'css_statement');
  
  var code = "";

  if(dropdown_selector_type == 'id'){
    code = `#` + text_selector_name + `{` + statements_css_statement + `}`;
  }else if (dropdown_selector_type == 'class'){
    code = `.` + text_selector_name + `{` + statements_css_statement + `}`;
  }else if (dropdown_selector_type == 'tag'){
    text_selector_name + `{` + statements_css_statement + `}`;
  }
  return code;
};

/////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_bg_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Background Color")
        .appendField(new Blockly.FieldColour("#ff9900"), "bgcolor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_bg_color'] = function(block : any, generator : any) {
  var colour_bgcolor = block.getFieldValue('bgcolor');
  // TODO: Assemble javascript into code variable.
  var code = `background-color:` + colour_bgcolor + ';';
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_text_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text Color")
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_text_color'] = function(block : any, generator : any) {
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble javascript into code variable.
  var code = `color:` + colour_color + ';';
  return code;
};

////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_font_size'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Font Size")
        .appendField(new Blockly.FieldNumber(0, 1, 1000, 1), "size");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_font_size'] = function(block :any, generator : any) {
  var number_size = block.getFieldValue('size');
  // TODO: Assemble javascript into code variable.
  var code = `font-size:` + number_size + ';';
  return code;
};