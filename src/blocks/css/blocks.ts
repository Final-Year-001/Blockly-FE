// import Blockly from "blockly";
import * as Blockly from 'blockly';
import * as JavaScript from "blockly/javascript";
import {FieldColourHsvSliders} from '@blockly/field-colour-hsv-sliders';


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
        .setCheck("style_block");
    this.setPreviousStatement(true, "html_css");
    this.setNextStatement(true, "html_css");
    this.setStyle('CSS_Main');
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
        .setCheck([
            "css_bg_color",
            "css_text_color",
            "css_border_color",
            "css_font_size",
            "css_font_family",
            "css_height",
            "css_width",
            "css_marginPadding",
            "css_flexbox",
            "css_flexbox_wrap",
            "css_flexbox_justify",
            "css_flexbox_align",
            "css_flexbox_align_row",
            "css_flexbox_grow",
            "css_text_align",
            "css_custom",
            "css_borderRadius",
            "css_border_color",
            "css_bloc_style",
        ])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("declarator");
    this.setPreviousStatement(true, "style_block");
    this.setNextStatement(true, "style_block");
    this.setStyle('CSS_style');
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
    code = text_selector_name + `{` + statements_css_statement + `}`;
  }
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////


Blockly.Blocks['addclassid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add Identifiers |")
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput("Class"), "classname")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("ID"), "idname");
    this.setOutput(true, null);
    this.setStyle('CSS_Main');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['addclassid'] = function(block :any, generator : any) {
  var text_classname = block.getFieldValue('classname');
  var text_idname = block.getFieldValue('idname');
  // TODO: Assemble javascript into code variable.
  var code;
  

    code = `class="${text_classname}" id="${text_idname}"`
  
  return [code, generator.ORDER_ATOMIC];
};


/////////////////////////////////////////////////

Blockly.Blocks['style_block_inline'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add Styles here");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setOutput(true, "style_block_inline");
    this.setStyle('CSS_Main');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


JavaScript.javascriptGenerator.forBlock['style_block_inline'] = function(block: any, generator: any) {
  var statements_name = generator.statementToCode(block, 'NAME');
  var code = `${statements_name} `;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, generator.ORDER_ATOMIC];
};

/////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_bg_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Background Color")
        .appendField(new FieldColourHsvSliders("#ff9900"), "bgcolor");
    this.setPreviousStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setNextStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setStyle('CSS_blocks');
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
    this.setPreviousStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setNextStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setStyle('CSS_blocks');
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

/////////////////////////////////////////////////////////////////////////


Blockly.Blocks['css_border_color'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Border color")
          .appendField(new Blockly.FieldColour("#ff0000"), "color")
          .appendField("size")
          .appendField(new Blockly.FieldNumber(0, 0, 100), "size");
      this.setPreviousStatement(true, [
        "css_bg_color",
        "css_text_color",
        "css_border_color",
        "css_font_size",
        "css_font_family",
        "css_height",
        "css_width",
        "css_marginPadding",
        "css_flexbox",
        "css_flexbox_wrap",
        "css_flexbox_justify",
        "css_flexbox_align",
        "css_flexbox_align_row",
        "css_flexbox_grow",
        "css_text_align",
        "css_custom",
        "css_borderRadius",
        "css_border_color",
        "css_bloc_style",
    ]);
      this.setNextStatement(true, [
        "css_bg_color",
        "css_text_color",
        "css_border_color",
        "css_font_size",
        "css_font_family",
        "css_height",
        "css_width",
        "css_marginPadding",
        "css_flexbox",
        "css_flexbox_wrap",
        "css_flexbox_justify",
        "css_flexbox_align",
        "css_flexbox_align_row",
        "css_flexbox_grow",
        "css_text_align",
        "css_custom",
        "css_borderRadius",
        "css_border_color",
        "css_bloc_style",
    ]);
      this.setStyle('CSS_blocks');
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

JavaScript.javascriptGenerator.forBlock['css_border_color'] = function(block : any, generator : any) {
var colour_color = block.getFieldValue('color');
  var number_size = block.getFieldValue('size');
  // TODO: Assemble javascript into code variable.
  var code = `border:${number_size}px solid ${colour_color};\n`;
  return code;
};

////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_font_size'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Font Size")
        .appendField(new Blockly.FieldNumber(0, 1, 1000, 1), "size");
    this.setPreviousStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setNextStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setStyle('CSS_blocks');
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
    this.setPreviousStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setNextStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setStyle('CSS_blocks');
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
    this.setPreviousStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setNextStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setStyle('CSS_blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_height'] = function(block : any, generator : any) {
  var dropdown_type = block.getFieldValue('type');
  var number_number = block.getFieldValue('number');

  var code = `height:${number_number}${dropdown_type} `;
  return code;
};




///////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_width'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Width")
        .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "type")
        .appendField(new Blockly.FieldNumber(0, 0), "number");
    this.setPreviousStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setNextStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setStyle('CSS_blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_width'] = function(block : any, generator : any) {
  var dropdown_type = block.getFieldValue('type');
  var number_number = block.getFieldValue('number');

  var code = `width: ` + number_number + dropdown_type + '; ';
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////

// Blockly.Blocks['css_padding'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("Padding");
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldCheckbox("TRUE"), "topCheck")
//         .appendField("Top")
//         .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "topType")
//         .appendField(new Blockly.FieldNumber(0, 0), "topNumber");
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldCheckbox("TRUE"), "bottomCheck")
//         .appendField("Bottom")
//         .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "bottomType")
//         .appendField(new Blockly.FieldNumber(0, 0), "bottomNumber");
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldCheckbox("TRUE"), "leftCheck")
//         .appendField("Left")
//         .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "leftType")
//         .appendField(new Blockly.FieldNumber(0, 0), "leftNumber");
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldCheckbox("TRUE"), "rightCheck")
//         .appendField("Right")
//         .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "rightType")
//         .appendField(new Blockly.FieldNumber(0, 0), "rightNumber");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setStyle('CSS_blocks');
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

// JavaScript.javascriptGenerator.forBlock['css_padding'] = function(block : any, generator : any) {
//   var checkbox_topcheck = block.getFieldValue('topCheck') === 'TRUE';
//   var dropdown_toptype = block.getFieldValue('topType');
//   var number_topnumber = block.getFieldValue('topNumber');
//   var checkbox_bottomcheck = block.getFieldValue('bottomCheck') === 'TRUE';
//   var dropdown_bottomtype = block.getFieldValue('bottomType');
//   var number_bottomnumber = block.getFieldValue('bottomNumber');
//   var checkbox_leftcheck = block.getFieldValue('leftCheck') === 'TRUE';
//   var dropdown_lefttype = block.getFieldValue('leftType');
//   var number_leftnumber = block.getFieldValue('leftNumber');
//   var checkbox_rightcheck = block.getFieldValue('rightCheck') === 'TRUE';
//   var dropdown_righttype = block.getFieldValue('rightType');
//   var number_rightnumber = block.getFieldValue('rightNumber');
  
//   var padding = '';
//   if(checkbox_topcheck){
//     padding = `padding-top:` + number_topnumber + dropdown_toptype + '; ' 
//   }
//   if(checkbox_bottomcheck){
//     padding = padding + `padding-bottom:` + number_bottomnumber + dropdown_bottomtype + '; ' 
//   }
//   if(checkbox_leftcheck){
//     padding = padding +  `padding-left:` + number_leftnumber + dropdown_lefttype + '; ' 
//   }
//   if(checkbox_rightcheck){
//     padding = padding +  `padding-right:` + number_rightnumber + dropdown_righttype + '; ' 
//   }

//   var code = padding;
//   return code;
// };

///////////////////////////////////////////////////////////////////////////////////////

  
  // Blockly.Blocks['css_margin'] = {
  //   init: function() {
  //     this.appendDummyInput()
  //         .appendField("Margin");
  //     this.appendDummyInput()
  //         .appendField(new Blockly.FieldCheckbox("TRUE"), "topCheck")
  //         .appendField("Top")
  //         .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "topType")
  //         .appendField(new Blockly.FieldNumber(0, 0), "topNumber");
  //     this.appendDummyInput()
  //         .appendField(new Blockly.FieldCheckbox("TRUE"), "bottomCheck")
  //         .appendField("Bottom")
  //         .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "bottomType")
  //         .appendField(new Blockly.FieldNumber(0, 0), "bottomNumber");
  //     this.appendDummyInput()
  //         .appendField(new Blockly.FieldCheckbox("TRUE"), "leftCheck")
  //         .appendField("Left")
  //         .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "leftType")
  //         .appendField(new Blockly.FieldNumber(0, 0), "leftNumber");
  //     this.appendDummyInput()
  //         .appendField(new Blockly.FieldCheckbox("TRUE"), "rightCheck")
  //         .appendField("Right")
  //         .appendField(new Blockly.FieldDropdown([["pixels","px"], ["Percentage","%"], ["em","em"]]), "rightType")
  //         .appendField(new Blockly.FieldNumber(0, 0), "rightNumber");
  //     this.setPreviousStatement(true, null);
  //     this.setNextStatement(true, null);
  //     this.setStyle('CSS_blocks');
  //  this.setTooltip("");
  //  this.setHelpUrl("");
  //   }
  // };
  
  
  // JavaScript.javascriptGenerator.forBlock['css_margin'] = function(block : any, generator : any) {
  //   var checkbox_topcheck = block.getFieldValue('topCheck') === 'TRUE';
  //   var dropdown_toptype = block.getFieldValue('topType');
  //   var number_topnumber = block.getFieldValue('topNumber');
  //   var checkbox_bottomcheck = block.getFieldValue('bottomCheck') === 'TRUE';
  //   var dropdown_bottomtype = block.getFieldValue('bottomType');
  //   var number_bottomnumber = block.getFieldValue('bottomNumber');
  //   var checkbox_leftcheck = block.getFieldValue('leftCheck') === 'TRUE';
  //   var dropdown_lefttype = block.getFieldValue('leftType');
  //   var number_leftnumber = block.getFieldValue('leftNumber');
  //   var checkbox_rightcheck = block.getFieldValue('rightCheck') === 'TRUE';
  //   var dropdown_righttype = block.getFieldValue('rightType');
  //   var number_rightnumber = block.getFieldValue('rightNumber');
    
  //   var margin = '';
  //   if(checkbox_topcheck){
  //     margin = `margin-top:` + number_topnumber + dropdown_toptype + '; ' 
  //   }
  //   if(checkbox_bottomcheck){
  //     margin = margin + `margin-bottom:` + number_bottomnumber + dropdown_bottomtype + '; ' 
  //   }
  //   if(checkbox_leftcheck){
  //     margin = margin +  `margin-left:` + number_leftnumber + dropdown_lefttype + '; ' 
  //   }
  //   if(checkbox_rightcheck){
  //     margin = margin +  `margin-right:` + number_rightnumber + dropdown_righttype + '; ' 
  //   }
  
  //   var code = margin;
  //   return code;
  // };

/////////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_marginPadding'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Add Padding","padding"], ["Add Margin","margin"]]), "selectType")
        .appendField("To")
        .appendField(new Blockly.FieldDropdown([["All",""], ["top","-top"], ["bottom","-bottom"], ["left","-left"], ["right","-right"]]),  "selectSide")
        .appendField("Side")
        .appendField(new Blockly.FieldNumber(0, 0, 100), "num")
        .appendField(new Blockly.FieldDropdown([["Pixels","px"], ["Percentage","%"], ["em","em"]]), "selectNum")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "Auto")
    this.setPreviousStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setNextStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setStyle('CSS_blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_marginPadding'] = function(block : any, generator : any) {
  let dropdown_selecttype = block.getFieldValue('selectType');
  let dropdown_selectside = block.getFieldValue('selectSide');
  let number_num = block.getFieldValue('num');
  let dropdown_selectnum = block.getFieldValue('selectNum');
  let Auto = block.getFieldValue('Auto') === 'TRUE';
  // TODO: Assemble javascript into code variable.
  let code = `${dropdown_selecttype}${dropdown_selectside}: ${number_num}${dropdown_selectnum}`;
  if(Auto){
    code = code + " auto ;"
  }else{
    code = code + ";"
  }
  return code;
};

///////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_flexbox'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Flexbox");
    this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Arange Boxes as a")
        .appendField(new Blockly.FieldDropdown([["Row","row"], ["Column","column"]]), "NAME");
    this.setPreviousStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setNextStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setStyle('CSS_blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_flexbox'] = function(block : any, generator : any) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = removeParentheses(generator.valueToCode(block, 'NAME', generator.ORDER_ATOMIC));
  // TODO: Assemble javascript into code variable.
  var code = `display: flex; flex-direction: ${dropdown_name}; ${value_name}`;

  return code;
};

////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_flexbox_wrap'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("wrap boxes")
        .appendField(new Blockly.FieldDropdown([["wrap","wrap"], ["no wrap","nowrap"], ["wrap reverse","wrap-reverse"], ["row wrap","row wrap"]]), "NAME");
    this.setOutput(true, null);
    this.setStyle('CSS_blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_flexbox_wrap'] =  function(block : any, generator : any) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = removeParentheses(generator.valueToCode(block, 'NAME', generator.ORDER_ATOMIC));
  // TODO: Assemble javascript into code variable.
  var code = `flex-wrap: ${dropdown_name}; ${value_name}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, generator.ORDER_NONE];
};


///////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_flexbox_justify'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Justify boxes")
        .appendField(new Blockly.FieldDropdown([["Beginning","flex-start"], ["Middle","center"], ["At the end","flex-end"], ["Space around","space-around"], ["Space between","space-between"]]), "NAME");
    this.setOutput(true, null);
    this.setStyle('CSS_blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_flexbox_justify'] =  function(block : any, generator : any) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = removeParentheses(generator.valueToCode(block, 'NAME', generator.ORDER_ATOMIC));
  // TODO: Assemble javascript into code variable.
  var code = `justify-content: ${dropdown_name}; ${value_name}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, generator.ORDER_NONE];
};

////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_flexbox_align'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Align boxes")
        .appendField(new Blockly.FieldDropdown([["Stretch","stretch"], ["Top","flex-start"], ["Middle","center"], ["Bottom","flex-end"]]), "NAME");
    this.setOutput(true, null);
    this.setStyle('CSS_blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_flexbox_align'] =  function(block : any, generator : any) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = removeParentheses(generator.valueToCode(block, 'NAME', generator.ORDER_ATOMIC));
  // TODO: Assemble javascript into code variable.
  var code = `align-items: ${dropdown_name}; ${value_name}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, generator.ORDER_NONE];
};

//////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_flexbox_align_row'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Align rows")
        .appendField(new Blockly.FieldDropdown([["space-between","space-between"], ["space-around","space-around"], ["stretch","stretch"], ["center","center"], ["flex-start","flex-start"], ["flex-end","flex-end"]]), "NAME");
    this.setOutput(true, null);
    this.setStyle('CSS_blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_flexbox_align_row'] =  function(block : any, generator : any) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = removeParentheses(generator.valueToCode(block, 'NAME', generator.ORDER_ATOMIC));
  // TODO: Assemble javascript into code variable.
  var code = `align-items: ${dropdown_name}; ${value_name}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, generator.ORDER_NONE];
};


///////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_flexbox_grow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Box grow size")
        .appendField(new Blockly.FieldNumber(0, 0, 200), "NAME");
    this.setPreviousStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setNextStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_flexbox_grow'] = function(block: any, generator: any) {
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble javascript into code variable.
  var code = `flex-grow: ${number_name}; `;
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_text_align'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text Align")
        .appendField(new Blockly.FieldDropdown([["Left","left"], ["Center","center"], ["Right","right"], ["Justify","justify"]]), "align");
    this.setPreviousStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setNextStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setStyle('CSS_blocks');
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

//////////////////////////////////////////////


Blockly.Blocks['css_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add Custom CSS to here.");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "css");
    this.setPreviousStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setNextStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setStyle('CSS_blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_custom'] = function(block : any, generator : any) {
  var text_css = block.getFieldValue('css');
  // TODO: Assemble javascript into code variable.
  var code = text_css;
  return code;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['css_borderRadius'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Border Corners")
        .appendField(new Blockly.FieldNumber(0, 0, 100), "borderCorner");
    this.setPreviousStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setNextStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setStyle('CSS_blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_borderRadius'] = function(block: any, generator: any) {
  var number_bordercorner = block.getFieldValue('borderCorner');
  // TODO: Assemble javascript into code variable.
  var code = `border-radius: ${number_bordercorner}px;\n`;
  return code;
};

/////////////////////////////////////////////////////////////

Blockly.Blocks['css_border_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Border Color")
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setPreviousStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setNextStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setStyle('CSS_blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_border_color'] = function(block: any, generator: any) {
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble javascript into code variable.
  var code = `border-color: ${colour_color};\n`;
  return code;
};

/////////////////////////////////

Blockly.Blocks['css_bloc_style'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Border Style")
        .appendField(new Blockly.FieldDropdown([["double","double"], ["solid","solid"], ["none","none"], ["outset","outset"], ["option","option"], ["groove","groove"], ["hidden","hidden"], ["inherit","inherit"], ["inset","inset"]]), "borderstyle");
    this.setPreviousStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setNextStatement(true, [
      "css_bg_color",
      "css_text_color",
      "css_border_color",
      "css_font_size",
      "css_font_family",
      "css_height",
      "css_width",
      "css_marginPadding",
      "css_flexbox",
      "css_flexbox_wrap",
      "css_flexbox_justify",
      "css_flexbox_align",
      "css_flexbox_align_row",
      "css_flexbox_grow",
      "css_text_align",
      "css_custom",
      "css_borderRadius",
      "css_border_color",
      "css_bloc_style",
  ]);
    this.setStyle('CSS_blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['css_bloc_style'] = function(block: any, generator:any) {
  var dropdown_borderstyle = block.getFieldValue('borderstyle');
  // TODO: Assemble javascript into code variable.
  var code = `border-style: ${dropdown_borderstyle};\n`;
  return code;
};



/////////////////////////////////


Blockly.Blocks['style_block_Position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Position")
        .appendField(new Blockly.FieldDropdown([["static","static"], ["relative","relative"], ["fixed","fixed"], ["absolute","absolute"], ["sticky","sticky"]]), "position");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "top")
        .appendField("Top")
        .appendField(new Blockly.FieldNumber(0), "topNum")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "bottom")
        .appendField("Bottom")
        .appendField(new Blockly.FieldNumber(0), "botnum")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "left")
        .appendField("Left")
        .appendField(new Blockly.FieldNumber(0), "leftNum")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "right")
        .appendField("Right")
        .appendField(new Blockly.FieldNumber(0), "rightNum");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['style_block_Position'] = function(block : any, generator : any) {
  var dropdown_position = block.getFieldValue('position');
  var checkbox_top = block.getFieldValue('top') === 'TRUE';
  var number_topnum = block.getFieldValue('topNum');
  var checkbox_bottom = block.getFieldValue('bottom') === 'TRUE';
  var number_botnum = block.getFieldValue('botnum');
  var checkbox_left = block.getFieldValue('left') === 'TRUE';
  var number_leftnum = block.getFieldValue('leftNum');
  var checkbox_right = block.getFieldValue('right') === 'TRUE';
  var number_rightnum = block.getFieldValue('rightNum');
  // TODO: Assemble javascript into code variable.
  var temp = '';

  if(checkbox_top){
    temp = temp + `top:${number_topnum}; `
  }
  if(checkbox_bottom){
    temp = temp + `bottom:${number_botnum}; `
  }
  if(checkbox_left){
    temp = temp + `left:${number_leftnum}; `
  }
  if(checkbox_right){
    temp = temp + `right:${number_rightnum}; `
  }

  var code = `position:${dropdown_position}; ${temp}\n`;
  return code;
};


////////////////

