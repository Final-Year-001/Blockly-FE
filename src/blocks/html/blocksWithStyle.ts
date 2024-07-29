/* eslint-disable @typescript-eslint/no-explicit-any */
import Blockly from "blockly";
import * as JavaScript from "blockly/javascript";
import { Order } from "blockly/javascript";

function removeParentheses(str: any) {
  // Check if the string starts and ends with parentheses
  if (str.startsWith("(") && str.endsWith(")")) {
    str = str.substring(1, str.length - 1);
  }
  return str;
}


Blockly.Blocks["premade_dropdown"] = {
    init: function () {
      this.appendValueInput("classIDs")
        .appendField("Drop Down Box");
      this.appendValueInput("css")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["Default CSS","defaultcss"], ["Add CSS","addcss"], ["Override CSS","overridecss"], ["Class / ID","classID"]]), "cssSelect");
      this.appendStatementInput("NAME")
        .setCheck("premade_option")
        .appendField("options");
      this.setPreviousStatement(true, [
        "html_h",
        "html_p",
        "html_addtext",
        "html_button",
        "html_name",
        "html_input_field",
        "html_label",
        "html_form",
        "html_table",
        "table_headings",
        "html_div1",
        "table_data",
        "html_ol_list",
        "html_ul_list",
        "html_img",
        "html_a",
        "html_checkbox",
        "premade_dropdown",
        "premade_option",
        "premade_button",
        "html_textadd",
      ]);
      this.setNextStatement(true, [
        "html_h",
        "html_p",
        "html_addtext",
        "html_button",
        "html_name",
        "html_input_field",
        "html_label",
        "html_form",
        "html_table",
        "table_headings",
        "html_div1",
        "table_data",
        "html_ol_list",
        "html_ul_list",
        "html_img",
        "html_a",
        "html_checkbox",
        "premade_dropdown",
        "premade_option",
        "premade_button",
        "html_textadd",
      ]);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
      this.setStyle("HTML_premade");
    },
  };
  
  JavaScript.javascriptGenerator.forBlock["premade_dropdown"] = function (
    block: any,
    generator: any
  ) {
    var statements_name = generator.statementToCode(block, "NAME");
    var dropdown_cssselect = block.getFieldValue('cssSelect');
    var value_css = generator.valueToCode(block, 'css', JavaScript.Order.ATOMIC);
    var classID = generator.valueToCode(block, 'classIDs', JavaScript.Order.ATOMIC);
  
    const cssTika = `style="padding: 10px; border: 1px solid #ccc; border-radius: 5px; cursor: pointer; `
    // TODO: Assemble javascript into code variable.
    if(dropdown_cssselect == 'defaultcss'){
      return `<select ${classID} ${cssTika}">${statements_name}</select>\n`;
    }else if (dropdown_cssselect == 'addcss'){
      return `<select ${classID} ${cssTika} ${value_css}" >${statements_name}</select>\n`;
    }else if(dropdown_cssselect == 'overridecss'){
      return `<select ${classID} style="${value_css}" >${statements_name}</select>\n`;
    }else if(dropdown_cssselect == 'classID'){
      return `<select ${classID}>${statements_name}</select>\n`;
    }
  };
  
  /////////////////////////////////////////////////////////////////////////////////////////////
  
  Blockly.Blocks["premade_option"] = {
    init: function () {
      this.appendValueInput("classIDs")
        .appendField("option")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
      this.setPreviousStatement(true, "premade_option");
      this.setNextStatement(true, "premade_option");
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
      this.setStyle("HTML_premade");
    },
  };
  
  JavaScript.javascriptGenerator.forBlock["premade_option"] = function (
    block: any,
    generator: any
  ) {
    var text_name = block.getFieldValue("NAME");
    var classID = generator.valueToCode(block, 'classIDs', JavaScript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = `<option ${classID} value="volvo">${text_name}</option> \n`;
    return code;
  };
  
  ///////////////////////////////////////
  
  
  Blockly.Blocks['preBlock_input'] = {
    init: function() {
      this.appendValueInput("classIDs")
          .appendField("Input Feild")
          .appendField("Type")
          .appendField(new Blockly.FieldDropdown([
            ["Text", "text"],
            ["Number", "number"],
            ["Email", "email"],
            ["Password", "password"],
          ]), "dropdown")
          .appendField("Name")
          .appendField(new Blockly.FieldTextInput(""), "name");
          this.appendValueInput("css")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldDropdown([["Default CSS","defaultcss"], ["Add CSS","addcss"], ["Override CSS","overridecss"], ["Class / ID","classID"]]), "cssSelect");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("HTML_premade");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  JavaScript.javascriptGenerator.forBlock["preBlock_input"] = function (
    block: any,
    generator: any
  ) {
    var dropdown_dropdown = block.getFieldValue('dropdown');
    var text_name = block.getFieldValue('name');
    var dropdown_cssselect = block.getFieldValue('cssSelect');
    var value_css = generator.valueToCode(block, 'css', JavaScript.Order.ATOMIC);
    var classID = generator.valueToCode(block, 'classIDs', JavaScript.Order.ATOMIC);
  
    const cssTika = `style="width: 200px; padding: 10px; border: 1px solid #ccc; border-radius: 5px; `
    // TODO: Assemble javascript into code variable.
    if(dropdown_cssselect == 'defaultcss'){
      return `<input ${classID} type="${dropdown_dropdown}" name="${text_name}" ${cssTika}">\n`;
    }else if (dropdown_cssselect == 'addcss'){
      return `<input ${classID} type="${dropdown_dropdown}" name="${text_name}" ${cssTika} ${value_css}">\n`;
    }else if(dropdown_cssselect == 'overridecss'){
      return `<input ${classID} type="${dropdown_dropdown}" name="${text_name}" style="${value_css}">\n`;
    }else if(dropdown_cssselect == 'classID'){
      return `<input ${classID} type="${dropdown_dropdown}" name="${text_name}">\n`;
    }
  };
  
  
  ////////////////////////
  
  
  Blockly.Blocks['preBlock_button'] = {
    init: function() {
      this.appendValueInput("classIDs")
          .appendField("Button")
          .appendField(new Blockly.FieldDropdown([["red" , "red"], ["green" , "green"], ["blue" , "blue"], ["orange" , "orange"]]), "color")
          .appendField("Name")
          .appendField(new Blockly.FieldTextInput("default"), "NAME1");
          this.appendValueInput("css")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldDropdown([["Default CSS","defaultcss"], ["Add CSS","addcss"], ["Override CSS","overridecss"], ["Class / ID","classID"]]), "cssSelect");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("HTML_premade");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  JavaScript.javascriptGenerator.forBlock["preBlock_button"] = function (
    block: any,
    generator: any
  ) {
    var dropdown_color = block.getFieldValue('color');
    var text_name = block.getFieldValue('NAME1');
    var dropdown_cssselect = block.getFieldValue('cssSelect');
    var value_css = generator.valueToCode(block, 'css', JavaScript.Order.ATOMIC);
    var classID = generator.valueToCode(block, 'classIDs', JavaScript.Order.ATOMIC);
  
    const cssTika = `style="padding: 10px 20px; background-color: ${dropdown_color}; color: #fff; border: none; border-radius: 5px; cursor: pointer;`
  
    if(dropdown_cssselect == 'defaultcss'){
      return `<button ${classID} ${cssTika}">${text_name}</button>\n`;
    }else if (dropdown_cssselect == 'addcss'){
      return `<button ${classID} ${cssTika} ${value_css}">${text_name}</button>\n`;
    }else if(dropdown_cssselect == 'overridecss'){
      return `<button ${classID} style="${value_css}">${text_name}</button>\n`;
    }else if(dropdown_cssselect == 'classID'){
      return `<button ${classID}>${text_name}</button>\n`;
    }
  };
  
  ///////////////////////////////////
  
  
  Blockly.Blocks['preBlock_Card'] = {
    init: function() {
      this.appendValueInput("classIDs")
          .appendField("Card");
      this.appendValueInput("css")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldDropdown([["Default CSS","defaultcss"], ["Add CSS","addcss"], ["Override CSS","overridecss"], ["Class / ID","classID"]]), "cssSelect");
      this.appendStatementInput("cardStatement")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("HTML_premade");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  
  JavaScript.javascriptGenerator.forBlock["preBlock_Card"] = function (
    block: any,
    generator: any
  ) {
    var dropdown_cssselect = block.getFieldValue('cssSelect');
    var value_css = generator.valueToCode(block, 'css', JavaScript.Order.ATOMIC);
    var classID = generator.valueToCode(block, 'classIDs', JavaScript.Order.ATOMIC);
    var statements_cardstatement = generator.statementToCode(block, 'cardStatement');
    var classID = generator.valueToCode(block, 'classIDs', JavaScript.Order.ATOMIC);
  
    const cssTika = `style="min-height: 200px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); padding: 20px; `
    // TODO: Assemble javascript into code variable.
    if(dropdown_cssselect == 'defaultcss'){
      return `<div ${classID} ${cssTika}">${statements_cardstatement}</div>\n`;
    }else if (dropdown_cssselect == 'addcss'){
      return `<div ${classID} ${cssTika} ${value_css}" >${statements_cardstatement}</div>\n`;
    }else if(dropdown_cssselect == 'overridecss'){
      return `<div ${classID} style="${value_css}" >${statements_cardstatement}</div>\n`;
    }else if(dropdown_cssselect == 'classID'){
      return `<div ${classID} >${statements_cardstatement}</div>\n`;
    }
  };
  
  //////////////////////////////////////////////////////////////////////
  
  
  Blockly.Blocks['preBlock_div'] = {
    init: function() {
      this.appendValueInput("classIDs")
          .appendField("Box")
          .appendField("|")
          .appendField("Guide Border")
          .appendField(new Blockly.FieldCheckbox("TRUE"), "guideBox")
          .appendField("Justify")
          .appendField(new Blockly.FieldDropdown([["normal",""], ["start","display: flex; justify-content: start;"], ["center","display: flex; justify-content: center;"], ["end","display: flex; justify-content: end;"]]), "justify")
          .appendField("Gap")
          .appendField(new Blockly.FieldNumber(0, 0), "gap")
          .appendField("");
          this.appendValueInput("css")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldDropdown([["Default CSS","defaultcss"], ["Add CSS","addcss"], ["Override CSS","overridecss"], ["Class / ID","classID"]]), "cssSelect");
      this.appendStatementInput("statementName")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("HTML_premade");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  
  JavaScript.javascriptGenerator.forBlock["preBlock_div"] = function (
    block: any,
    generator: any
  ) {
    var checkbox_guidebox = block.getFieldValue('guideBox') === 'TRUE';
    var dropdown_justify = block.getFieldValue('justify');
    var number_gap = block.getFieldValue('gap');
    var dropdown_cssselect = block.getFieldValue('cssSelect');
    var value_css = generator.valueToCode(block, 'css', JavaScript.Order.ATOMIC);
    var statements_statementname = generator.statementToCode(block, 'statementName');
    var classID = generator.valueToCode(block, 'classIDs', JavaScript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    const cssTika = `style="${number_gap > 0 ? `gap: ${number_gap}px;`:''} ${dropdown_justify} ${checkbox_guidebox ? 'border: 2px solid #000000;':''}`
    
    if(dropdown_cssselect == 'defaultcss'){
      return `<div ${classID} ${cssTika}">${statements_statementname}</div>\n`;
    }else if (dropdown_cssselect == 'addcss'){
      return `<div ${classID} ${cssTika} ${value_css}" >${statements_statementname}</div>\n`;
    }else if(dropdown_cssselect == 'overridecss'){
      return `<div ${classID} style="${value_css}" >${statements_statementname}</div>\n`;
    }else if(dropdown_cssselect == 'classID'){
      return `<div ${classID}>${statements_statementname}</div>\n`;
    }
  };
  
  
  ///////////////////////////////////////////////////////////////////////////
  
  Blockly.Blocks['preBlock_TableMain'] = {
    init: function() {
      this.appendValueInput("classIDs")
          .appendField("Table Main");
      this.appendValueInput("css")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldDropdown([["Default CSS","defaultcss"], ["Add CSS","addcss"], ["Override CSS","overridecss"], ["Class / ID","classID"]]), "cssSelect");
      this.appendStatementInput("statementName")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("HTML_premade");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  JavaScript.javascriptGenerator.forBlock["preBlock_TableMain"] = function (
    block: any,
    generator: any
  ) {
    var dropdown_cssselect = block.getFieldValue('cssSelect');
    var value_css = generator.valueToCode(block, 'css', JavaScript.Order.ATOMIC);
    var statements_statementname = generator.statementToCode(block, 'statementName');
    var classID = generator.valueToCode(block, 'classIDs', JavaScript.Order.ATOMIC);
   
    const cssTika = `style="border-collapse: collapse; width: 100%; text-align: left; `
    
    if(dropdown_cssselect == 'defaultcss'){
      return `<table ${classID} border="1" ${cssTika}">${statements_statementname}</table>\n`;
    }else if (dropdown_cssselect == 'addcss'){
      return `<table ${classID} border="1"  ${cssTika} ${value_css}" >${statements_statementname}</table>\n`;
    }else if(dropdown_cssselect == 'overridecss'){
      return `<table ${classID} border="1" style="${value_css}" >${statements_statementname}</table>\n`;
    }else if(dropdown_cssselect == 'classID'){
      return `<table ${classID} border="1">${statements_statementname}</table>\n`;
    }
    
  };
  
  /////////////////////////////////////////////////////////
  
  Blockly.Blocks['preBlock_TableNewRow'] = {
    init: function() {
      this.appendValueInput("classIDs")
          .appendField("New Row");
      this.appendValueInput("css")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldDropdown([["Default CSS","defaultcss"], ["Add CSS","addcss"], ["Override CSS","overridecss"], ["Class / ID","classID"]]), "cssSelect");
      this.appendStatementInput("statementName")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("HTML_premade");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  JavaScript.javascriptGenerator.forBlock["preBlock_TableNewRow"] = function (
    block: any,
    generator: any
  ) {
  
    var dropdown_cssselect = block.getFieldValue('cssSelect');
    var value_css = generator.valueToCode(block, 'css', JavaScript.Order.ATOMIC);
    var statements_statementname = generator.statementToCode(block, 'statementName');
    var classID = generator.valueToCode(block, 'classIDs', JavaScript.Order.ATOMIC);
   
    const cssTika = ``
  
    if(dropdown_cssselect == 'defaultcss'){
      return `<tr ${classID} ${cssTika}">${statements_statementname}</tr>\n`;
    }else if (dropdown_cssselect == 'addcss'){
      return `<tr ${classID} style="${value_css}" >${statements_statementname}</tr>\n`;
    }else if(dropdown_cssselect == 'overridecss'){
      return `<tr ${classID} style="${value_css}" >${statements_statementname}</tr>\n`;
    }else if(dropdown_cssselect == 'classID'){
      return `<tr ${classID}>${statements_statementname}</tr>\n`;
    }
  };
  
  /////////////////////////////////////////////////////////
  
  Blockly.Blocks['preBlock_TableHeadingCell'] = {
    init: function() {
      this.appendValueInput("classIDs")
          .appendField("Heading Cell");
      this.appendValueInput("css")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldDropdown([["Default CSS","defaultcss"], ["Add CSS","addcss"], ["Override CSS","overridecss"], ["Class / ID","classID"]]), "cssSelect");
      this.appendStatementInput("statementName")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("HTML_premade");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  JavaScript.javascriptGenerator.forBlock["preBlock_TableHeadingCell"] = function (
    block: any,
    generator: any
  ) {
  
    var dropdown_cssselect = block.getFieldValue('cssSelect');
    var value_css = generator.valueToCode(block, 'css', JavaScript.Order.ATOMIC);
    var statements_statementname = generator.statementToCode(block, 'statementName');
    var classID = generator.valueToCode(block, 'classIDs', JavaScript.Order.ATOMIC);
   
    const cssTika = `style="padding: 10px; border: 1px solid #ddd; background-color: #e3e3e3; `
  
    if(dropdown_cssselect == 'defaultcss'){
      return `<th ${classID} ${cssTika}">${statements_statementname}</th>\n`;
    }else if (dropdown_cssselect == 'addcss'){
      return `<th ${classID} ${cssTika} ${value_css}" >${statements_statementname}</th>\n`;
    }else if(dropdown_cssselect == 'overridecss'){
      return `<th ${classID} style="${value_css}" >${statements_statementname}</th>\n`;
    }else if(dropdown_cssselect == 'classID'){
      return `<th ${classID}>${statements_statementname}</th>\n`;
    }
  };
  
  /////////////////////////////////////////////////////////
  
  Blockly.Blocks['preBlock_TableNormalCell'] = {
    init: function() {
      this.appendValueInput("classIDs")
          .appendField("Normal Cell");
      this.appendValueInput("css")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldDropdown([["Default CSS","defaultcss"], ["Add CSS","addcss"], ["Override CSS","overridecss"], ["Class / ID","classID"]]), "cssSelect");
      this.appendStatementInput("statementName")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("HTML_premade");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  JavaScript.javascriptGenerator.forBlock["preBlock_TableNormalCell"] = function (
    block: any,
    generator: any
  ) {
  
    var dropdown_cssselect = block.getFieldValue('cssSelect');
    var value_css = generator.valueToCode(block, 'css', JavaScript.Order.ATOMIC);
    var statements_statementname = generator.statementToCode(block, 'statementName');
    var classID = generator.valueToCode(block, 'classIDs', JavaScript.Order.ATOMIC);
   
    const cssTika = `style="padding: 10px; border: 1px solid #ddd;`
  
    if(dropdown_cssselect == 'defaultcss'){
      return `<td ${classID} ${cssTika}">${statements_statementname}</td>\n`;
    }else if (dropdown_cssselect == 'addcss'){
      return `<td ${classID} ${cssTika} ${value_css}" >${statements_statementname}</td>\n`;
    }else if(dropdown_cssselect == 'overridecss'){
      return `<td ${classID} style="${value_css}" >${statements_statementname}</td>\n`;
    }else if(dropdown_cssselect == 'classID'){
      return `<td ${classID}>${statements_statementname}</td>\n`;
    }
  };


  ///////////////////////////// ADD IMAGE BLOCK

  Blockly.Blocks['add_image_block'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Add picture URL")
          .appendField(new Blockly.FieldTextInput("url"), "url");
      this.appendDummyInput()
          .appendField("Alt name for picture")
          .appendField(new Blockly.FieldTextInput("url"), "alt");
      this.appendDummyInput()
          .appendField("height")
          .appendField(new Blockly.FieldNumber(0), "height")
          .appendField("width")
          .appendField(new Blockly.FieldNumber(0), "width");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  JavaScript.javascriptGenerator.forBlock['add_image_block'] = function(block : any, generator: any) {
    var text_url = block.getFieldValue('url');
    var text_alt = block.getFieldValue('alt');
    var number_height = block.getFieldValue('height');
    var number_width = block.getFieldValue('width');
    // TODO: Assemble javascript into code variable.
    var temp = '';
    if(number_height > 0){
        temp = temp + `height=${number_height}px `
    }
    if(number_width > 0){
        temp = temp + `width=${number_width}px `
    }
    var code = `<img src="${text_url}" alt="${text_alt}" ${temp}/>  `;
    return code;
  };