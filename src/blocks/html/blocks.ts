import Blockly from "blockly";
import * as JavaScript from "blockly/javascript";
import { Order, javascriptGenerator } from "blockly/javascript";


function removeParentheses(str : any) {
  // Check if the string starts and ends with parentheses
  if (str.startsWith("(") && str.endsWith(")")) {
    str = str.substring(1, str.length - 1);
  }
  return str;
}


/////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_br'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Line Break");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_br'] = function(block:any, generator:any) {
  var code = '<br />';
  return code;
};

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


Blockly.Blocks['html_h'] = {
  init: function() {
    this.appendValueInput("identify")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Heading")
        .appendField(new Blockly.FieldDropdown([["Biggest","h1"], ["heading 2","h2"], ["heading 3","h3"], ["heading 4","h4"], ["heading 5","h5"], ["Smallest","h6"]]), "size")
        .appendField("Text");
    this.appendValueInput("text")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Identify");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_h'] = function(block: any, generator: any) {
  var dropdown_size = block.getFieldValue('size');
  var value_identify = generator.valueToCode(block, 'text', generator.ORDER_ATOMIC);
  var value_text = generator.valueToCode(block, 'identify', generator.ORDER_ATOMIC);
  
  var code = `<` + dropdown_size + removeParentheses(value_identify) +`> ` + removeParentheses(value_text) + ' </' + dropdown_size + '>';
  return code;
};

////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_p'] = {
  init: function() {
    this.appendValueInput("identify")
    .setCheck(null)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Paragrapgh")
    .appendField("Text");
    this.appendValueInput("text")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Identify");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_p'] = function(block: any, generator: any) {
  var value_identify = generator.valueToCode(block, 'text', generator.ORDER_ATOMIC);
  var value_text = generator.valueToCode(block, 'identify', generator.ORDER_ATOMIC);
  
  var code = `<p` + removeParentheses(value_identify) +`> ` + removeParentheses(value_text) + ' </p>';
  return code;
};

////////////////////////////////////////////////////////////////////////////////////////////


Blockly.Blocks['html_addtext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Type something")
        .appendField(new Blockly.FieldTextInput("default"), "value");
    this.setOutput(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_addtext'] = function(block: any, generator: any) {
  var text_value = block.getFieldValue('value');
  var code = text_value;
  return [code, generator.ORDER_NONE];
};

//////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button Block");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "button_id")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("default"), "id")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "button_class")
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput("default"), "class")
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Label")
        .appendField(new Blockly.FieldTextInput("default"), "label");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("This is a button block");
 this.setHelpUrl("");
  }
};



JavaScript.javascriptGenerator.forBlock['html_button'] = function(block : any, generator : any) {
  var checkbox_button_id = block.getFieldValue('button_id') === 'TRUE';
  var text_id = block.getFieldValue('id');
  var checkbox_button_class = block.getFieldValue('button_class') === 'TRUE';
  var text_class = block.getFieldValue('class');
  var text_label = block.getFieldValue('label');

  var identifier = "";
  if(checkbox_button_id){
    identifier = `id="` + text_id  + `" `
  }
  if(checkbox_button_class){
    identifier = identifier + `class="` + text_class  + `"`
  }


  var code = `<button ` + identifier + `type="submit">` + removeParentheses(text_label) + '</button>';
 
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
        .appendField("Input Box");
    this.appendEndRowInput();
    this.appendDummyInput()
        .appendField("Name")
        .appendField(new Blockly.FieldTextInput(""), "NAME");
    this.appendDummyInput()
        .appendField("Type of Input")
        .appendField(new Blockly.FieldDropdown([["Text","text"], ["Number","number"], ["Email","email"], ["Password","password"]]), "type");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("identifier");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
JavaScript.javascriptGenerator.forBlock['html_input_field'] = function(block : any, generator : any) {

  var text_name = block.getFieldValue('NAME');
  var dropdown_type = block.getFieldValue('type');
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);

  var code =`<input ` + removeParentheses(value_name) + ` name="` + removeParentheses(text_name) + `"` + ' type="'+ dropdown_type +`>` + `<br>`
  ;
  return code;
};

//////////////////////////////////////////////////////////////////////////////


  Blockly.Blocks['html_label'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Label");
      this.appendDummyInput()
          .appendField("Name")
          .appendField(new Blockly.FieldTextInput(""), "NAME");
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("Identifier");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

JavaScript.javascriptGenerator.forBlock['html_label'] = function(block : any, generator : any) {
  var text_name = block.getFieldValue('NAME');
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);

  
  var code = `<label` + value_name +`>` + removeParentheses(text_name) + `</label>`;
  return code;
};

//////////////////////////////////////////////////////////////////////////////


Blockly.Blocks['block_identifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput(""), "id")
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput(""), "class");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['block_identifier'] = function(block : any, generator : any) {
  var text_id = block.getFieldValue('id');
  var text_class = block.getFieldValue('class');
  // TODO: Assemble javascript into code variable.
  var code = "";
  if(text_id){
    code = ` id="${text_id}"`;
  }
  if(text_class){
    code = code + ` class="${text_class}"`;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, generator.ORDER_ATOMIC];
};


//////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_form'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Form Block")
        .appendField("|")
        .appendField("Identifer");
    this.appendStatementInput("State")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_form'] = function(block : any, generator : any) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  var statements_state = generator.statementToCode(block, 'State');

  var code = `<form ` + value_name + `>` + statements_state + `</form>`
  return code;
};


/////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_table'] = {
  init: function() {
    this.appendEndRowInput()
        .appendField("Table Block");
    this.appendDummyInput()
        .appendField("Border size")
        .appendField(new Blockly.FieldNumber(0, 0, 100, 1), "NAME");
    this.appendValueInput("identify")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("identify");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_table'] = function(block: any, generator: any) {
  var num = block.getFieldValue('NAME');
  var value_identify = generator.valueToCode(block, 'identify', Order.ATOMIC);
  var statement = generator.statementToCode(block, 'NAME');
  

  var code = '<table ' + 'border=' + num + value_identify + '>' + statement + '</table>';
  return code;
};

///////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['table_headings'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Heading cell")
        .appendField("|")
        .appendField("Identifer");
    this.appendStatementInput("State")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['table_headings'] = function(block : any, generator: any) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  var statements_state = generator.statementToCode(block, 'State');
  var code = '<th' + value_name + '>' + statements_state + '</th>';
  return code;
};

///////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['table_rows'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("New Row")
        .appendField("|")
        .appendField("Identifer");
    this.appendStatementInput("State")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
JavaScript.javascriptGenerator.forBlock['table_rows'] = function(block : any, generator: any) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  var statements_state = generator.statementToCode(block, 'State');
  var code = '<tr' + value_name + '>' + statements_state + '</tr>';
  return code;
};

/////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['table_data'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Normal cell")
        .appendField("|")
        .appendField("Identifer");
    this.appendStatementInput("State")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['table_data'] = function(block : any, generator: any) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  var statements_state = generator.statementToCode(block, 'State');
  var code = '<td' + value_name + '>' + statements_state + '</td>';
  return code;
};


///////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_textadd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add Text")
        .appendField(new Blockly.FieldTextInput("default"), "data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_textadd'] = function(block : any, generator : any) {
  var text_data = block.getFieldValue('data');
  var code = removeParentheses(text_data);
  return code;
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_div'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Box (div)");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checkID")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("default"), "id")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checkClass")
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput("default"), "class");
    this.appendStatementInput("div")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_div'] = function(block: any, generator: any) {
  var checkbox_checkid = block.getFieldValue('checkID') === 'TRUE';
  var text_id = block.getFieldValue('id');
  var checkbox_checkclass = block.getFieldValue('checkClass') === 'TRUE';
  var text_class = block.getFieldValue('class');
  var statements_div = generator.statementToCode(block, 'div');
 
  var identifiers = "";
  if(checkbox_checkid){
    identifiers = ` id="` + removeParentheses(text_id) + `"`
  }
  if(checkbox_checkclass){
    identifiers = identifiers + ` class="` + removeParentheses(text_class) + `"`
  }

  var code = `<div ` + identifiers + '>' + statements_div + '</div>'
  return code;
};


///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_ol_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ordered List")
        .appendField("Type")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["a","a"], ["A","A"], ["i","i"], ["I","I"]]), "type");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checkID")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("default"), "idVal")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checkClass")
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput("default"), "idClass");
    this.appendStatementInput("statement")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_ol_list'] = function(block : any, generator : any) {
  var dropdown_type = block.getFieldValue('type');
  var checkbox_checkid = block.getFieldValue('checkID') === 'TRUE';
  var text_idval = block.getFieldValue('idVal');
  var checkbox_checkclass = block.getFieldValue('checkClass') === 'TRUE';
  var text_idclass = block.getFieldValue('idClass');
  var statements_statement = generator.statementToCode(block, 'statement');

  var identifiers = "";
  if(checkbox_checkid){
    identifiers = ` id="` + removeParentheses(text_idval) + `"`
  }
  if(checkbox_checkclass){
    identifiers = identifiers + ` class="` + removeParentheses(text_idclass) + `"`
  }

  var code = `<ol type="` + dropdown_type + `" ` + identifiers + ">" + statements_statement + `</ol>` ;
  return code;
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_ul_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Unordered List")
        .appendField("Type")
        .appendField(new Blockly.FieldDropdown([["disc","disc"], ["circle","circle"], ["square","square"], ["none","none"]]), "type");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checkID")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("default"), "idVal")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checkClass")
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput("default"), "idClass");
    this.appendStatementInput("statement")
        // .setCheck(null);
        this.setPreviousStatement(true, ['li']);
        this.setNextStatement(true, ['li']);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_ul_list'] = function(block : any, generator : any) {
  var dropdown_type = block.getFieldValue('type');
  var checkbox_checkid = block.getFieldValue('checkID') === 'TRUE';
  var text_idval = block.getFieldValue('idVal');
  var checkbox_checkclass = block.getFieldValue('checkClass') === 'TRUE';
  var text_idclass = block.getFieldValue('idClass');
  var statements_statement = generator.statementToCode(block, 'statement');

  var identifiers = "";
  if(checkbox_checkid){
    identifiers = ` id="` + removeParentheses(text_idval) + `"`
  }
  if(checkbox_checkclass){
    identifiers = identifiers + ` class="` + removeParentheses(text_idclass) + `"`
  }

  var code = `<ul type="` + dropdown_type + `" ` + identifiers + ">" + statements_statement + `</ul>` ;
  return code;
};

////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_li'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("List Item");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "checkID")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("default"), "idVal")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "checkClass")
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput("default"), "idClass");
    this.appendStatementInput("statement")
        .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_li'] = function(block : any, generator : any) {
  var checkbox_checkid = block.getFieldValue('checkID') === 'TRUE';
  var text_idval = block.getFieldValue('idVal');
  var checkbox_checkclass = block.getFieldValue('checkClass') === 'TRUE';
  var text_idclass = block.getFieldValue('idClass');
  var statements_statement = generator.statementToCode(block, 'statement');
  
  var identifiers = "";
  if(checkbox_checkid){
    identifiers = ` id="` + removeParentheses(text_idval) + `"`
  }
  if(checkbox_checkclass){
    identifiers = identifiers + ` class="` + removeParentheses(text_idclass) + `"`
  }

  var code = `<li` + identifiers + ">" + statements_statement + `</li>` ;
  return code;
};


////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_img'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Image Block");
    this.appendDummyInput()
        // .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("url:")
        .appendField(new Blockly.FieldTextInput("add url here"), "imageUrl");
    this.appendDummyInput()
        // .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("name:")
        .appendField(new Blockly.FieldTextInput("add image name"), "imageName");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("This is the image block");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_img'] = function(block : any, generator : any) {
  var text_imageurl = block.getFieldValue('imageUrl');
  var text_imagename = block.getFieldValue('imageName');
  // TODO: Assemble javascript into code variable.
  var code = `<img src='` + text_imageurl + "'"  + `alt="` +  text_imagename + `" ` +  `>` ;
  return code;
};

////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_a'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Link Block");
    this.appendDummyInput()
        .appendField("Add link")
        .appendField(new Blockly.FieldTextInput("Add link here"), "link");
    this.appendStatementInput("data")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_a'] = function(block : any, generator : any) {
  var text_link = block.getFieldValue('link');
  var statements_data = generator.statementToCode(block, 'data');
  var code = `<a href='` + text_link + "'" + `>` +  statements_data + '</a>';
  return code;
};


//////////////////////////////////////////////////////////////////////////////////////////////


Blockly.Blocks['html_checkbox'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Checkbox");
    this.appendDummyInput()
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("default"), "id")
        .appendField("Name")
        .appendField(new Blockly.FieldTextInput("default"), "name")
        .appendField("Value")
        .appendField(new Blockly.FieldTextInput("default"), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_checkbox'] = function(block : any, generator : any) {
  var text_id = block.getFieldValue('id');
  var text_name = block.getFieldValue('name');
  var text_value = block.getFieldValue('value');
  // TODO: Assemble javascript into code variable.
  // var code = "s"
  var code = `<input type="checkbox" id="` + text_id  + `" name=" ` + text_name + `" value="`+ text_value +`">`;
  return code;
};