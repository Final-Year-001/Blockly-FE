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


/////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_font_family'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Font Family")
        .appendField(new Blockly.FieldDropdown([["Times New Roman","Times New Roman"], ["Verdana","Verdana"], ["Courier New","Courier New"], ["Brush Script MT","Brush Script MT"]]), "defaultFont");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldCheckbox("FALSE"), "NAME")
        .appendField("Add other font")
        .appendField(new Blockly.FieldTextInput("default"), "customFont");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_font_family'] = function(block : any, generator: any) {
  var dropdown_defaultfont = block.getFieldValue('defaultFont');
  var checkbox_name = block.getFieldValue('NAME') === 'TRUE';
  var text_customfont = block.getFieldValue('customFont');
  
  var font = "";
  if(checkbox_name){
    font = text_customfont;
  }else{
    font = dropdown_defaultfont;
  }
  
  var code = `font-family: "` + font + '" ;';
  return code;
};


///////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_height'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Height")
        .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "type")
        .appendField(new Blockly.FieldNumber(0, 0), "number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_height'] = function(block : any, generator : any) {
  var dropdown_type = block.getFieldValue('type');
  var number_number = block.getFieldValue('number');

  var code = `height: "` + number_number + dropdown_type + '"; ';
  return code;
};

///////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_width'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Width")
        .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "type")
        .appendField(new Blockly.FieldNumber(0, 0), "number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_width'] = function(block : any, generator : any) {
  var dropdown_type = block.getFieldValue('type');
  var number_number = block.getFieldValue('number');

  var code = `width: "` + number_number + dropdown_type + '"; ';
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_padding'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Padding");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "topCheck")
        .appendField("Top")
        .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "topType")
        .appendField(new Blockly.FieldNumber(0, 0), "topNumber");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "bottomCheck")
        .appendField("Bottom")
        .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "bottomType")
        .appendField(new Blockly.FieldNumber(0, 0), "bottomNumber");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "leftCheck")
        .appendField("Left")
        .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "leftType")
        .appendField(new Blockly.FieldNumber(0, 0), "leftNumber");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "rightCheck")
        .appendField("Right")
        .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "rightType")
        .appendField(new Blockly.FieldNumber(0, 0), "rightNumber");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_padding'] = function(block : any, generator : any) {
  var checkbox_topcheck = block.getFieldValue('topCheck') === 'TRUE';
  var dropdown_toptype = block.getFieldValue('topType');
  var number_topnumber = block.getFieldValue('topNumber');
  var checkbox_bottomcheck = block.getFieldValue('bottomCheck') === 'TRUE';
  var dropdown_bottomtype = block.getFieldValue('bottomType');
  var number_bottomnumber = block.getFieldValue('bottomNumber');
  var checkbox_leftcheck = block.getFieldValue('leftCheck') === 'TRUE';
  var dropdown_lefttype = block.getFieldValue('leftType');
  var number_leftnumber = block.getFieldValue('leftNumber');
  var checkbox_rightcheck = block.getFieldValue('rightCheck') === 'TRUE';
  var dropdown_righttype = block.getFieldValue('rightType');
  var number_rightnumber = block.getFieldValue('rightNumber');
  
  var padding = '';
  if(checkbox_topcheck){
    padding = `padding-top:` + number_topnumber + dropdown_toptype + '; ' 
  }
  if(checkbox_bottomcheck){
    padding = padding + `padding-bottom:` + number_bottomnumber + dropdown_bottomtype + '; ' 
  }
  if(checkbox_leftcheck){
    padding = padding +  `padding-left:` + number_leftnumber + dropdown_lefttype + '; ' 
  }
  if(checkbox_rightcheck){
    padding = padding +  `padding-right:` + number_rightnumber + dropdown_righttype + '; ' 
  }

  var code = padding;
  return code;
};

///////////////////////////////////////////////////////////////////////////////////////

  
  Blockly.Blocks['css_margin'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Margin");
      this.appendDummyInput()
          .appendField(new Blockly.FieldCheckbox("TRUE"), "topCheck")
          .appendField("Top")
          .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "topType")
          .appendField(new Blockly.FieldNumber(0, 0), "topNumber");
      this.appendDummyInput()
          .appendField(new Blockly.FieldCheckbox("TRUE"), "bottomCheck")
          .appendField("Bottom")
          .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "bottomType")
          .appendField(new Blockly.FieldNumber(0, 0), "bottomNumber");
      this.appendDummyInput()
          .appendField(new Blockly.FieldCheckbox("TRUE"), "leftCheck")
          .appendField("Left")
          .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "leftType")
          .appendField(new Blockly.FieldNumber(0, 0), "leftNumber");
      this.appendDummyInput()
          .appendField(new Blockly.FieldCheckbox("TRUE"), "rightCheck")
          .appendField("Right")
          .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "rightType")
          .appendField(new Blockly.FieldNumber(0, 0), "rightNumber");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  
  JavaScript.javascriptGenerator.forBlock['css_margin'] = function(block : any, generator : any) {
    var checkbox_topcheck = block.getFieldValue('topCheck') === 'TRUE';
    var dropdown_toptype = block.getFieldValue('topType');
    var number_topnumber = block.getFieldValue('topNumber');
    var checkbox_bottomcheck = block.getFieldValue('bottomCheck') === 'TRUE';
    var dropdown_bottomtype = block.getFieldValue('bottomType');
    var number_bottomnumber = block.getFieldValue('bottomNumber');
    var checkbox_leftcheck = block.getFieldValue('leftCheck') === 'TRUE';
    var dropdown_lefttype = block.getFieldValue('leftType');
    var number_leftnumber = block.getFieldValue('leftNumber');
    var checkbox_rightcheck = block.getFieldValue('rightCheck') === 'TRUE';
    var dropdown_righttype = block.getFieldValue('rightType');
    var number_rightnumber = block.getFieldValue('rightNumber');
    
    var margin = '';
    if(checkbox_topcheck){
      margin = `margin-top:` + number_topnumber + dropdown_toptype + '; ' 
    }
    if(checkbox_bottomcheck){
      margin = margin + `margin-bottom:` + number_bottomnumber + dropdown_bottomtype + '; ' 
    }
    if(checkbox_leftcheck){
      margin = margin +  `margin-left:` + number_leftnumber + dropdown_lefttype + '; ' 
    }
    if(checkbox_rightcheck){
      margin = margin +  `margin-right:` + number_rightnumber + dropdown_righttype + '; ' 
    }
  
    var code = margin;
    return code;
  };

//////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_text_align'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text Align")
        .appendField(new Blockly.FieldDropdown([["Left","left"], ["Center","center"], ["Right","right"], ["Justify","justify"]]), "align");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_text_align'] = function(block : any, generator : any) {
  var dropdown_align = block.getFieldValue('align');
  // TODO: Assemble javascript into code variable.
  var code = 'text-align: '+ dropdown_align + '; ' 
  return code;
};