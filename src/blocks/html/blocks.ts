import Blockly from "blockly";
import * as JavaScript from "blockly/javascript";


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
    this.appendDummyInput()
        .appendField("Heading")
        .appendField(new Blockly.FieldDropdown([["Biggest","h1"], ["heading 2","h2"], ["heading 3","h3"], ["heading 4","h4"], ["heading 5","h5"], ["Smallest","h6"]]), "h");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "id")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("default"), "hid")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "class")
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput("default"), "hclass");
    this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Add Text");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_h'] = function(block: any, generator: any) {
  var dropdown_h = block.getFieldValue('h');
  var checkbox_id = block.getFieldValue('id') === 'TRUE';
  var text_hid = block.getFieldValue('hid');
  var checkbox_class = block.getFieldValue('class') === 'TRUE';
  var text_hclass = block.getFieldValue('hclass');
  var value_name = generator.valueToCode(block, 'NAME', generator.ORDER_ATOMIC);
  
  var selector = '';
  if(checkbox_id){
    selector = ` id="` + text_hid  + `" `
  }
  if(checkbox_class){
    selector = selector + ` class="` + text_hclass  + `"`
  }

  var code = `<` + dropdown_h + selector +`>` + removeParentheses(value_name) + '</' + dropdown_h + '>';
  return code;
};

////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_p'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Paragraph")
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "id")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("default"), "hid")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "class")
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput("default"), "hclass");
    this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Add Text");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_p'] = function(block: any, generator: any) {
  var checkbox_id = block.getFieldValue('id') === 'TRUE';
  var text_hid = block.getFieldValue('hid');
  var checkbox_class = block.getFieldValue('class') === 'TRUE';
  var text_hclass = block.getFieldValue('hclass');
  var value_name = generator.valueToCode(block, 'NAME', generator.ORDER_ATOMIC);
  
  var selector = '';
  if(checkbox_id){
    selector = ` id="` + text_hid  + `" `
  }
  if(checkbox_class){
    selector = selector + ` class="` + text_hclass  + `"`
  }

  var code = `<p` + selector +`>` + removeParentheses(value_name) + '</p>';
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
        .appendField("Input Feild");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "input_id")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("default"), "id")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "input_class")
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput("default"), "class");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Type of input")
        .appendField(new Blockly.FieldDropdown([["text","text"],["email","email"], ["password","password"], ["number","number"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
JavaScript.javascriptGenerator.forBlock['html_input_field'] = function(block : any, generator : any) {

  var checkbox_input_id = block.getFieldValue('input_id') === 'TRUE';
  var text_id = block.getFieldValue('id');
  var checkbox_input_class = block.getFieldValue('input_class') === 'TRUE';
  var text_class = block.getFieldValue('class');
  var dropdown_name = block.getFieldValue('NAME');

  var identifier = "";
  if(checkbox_input_id){
    identifier = `id="` + text_id  + `" `
  }
  if(checkbox_input_class){
    identifier = identifier + `class="` + text_class  + `"`
  }
  if(dropdown_name){
    identifier = identifier + `type="` + dropdown_name + `"`
  }

  var code =`<input type="text" ` + removeParentheses(identifier) + `>` + `<br>`
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
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("TRUE"), "form_id")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("default"), "id")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "form_class")
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput("default"), "class");
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

  var checkbox_form_id = block.getFieldValue('form_id') === 'TRUE';
  var text_id = block.getFieldValue('id');
  var checkbox_form_class = block.getFieldValue('form_class') === 'TRUE';
  var text_class = block.getFieldValue('class');
  var statements_statement = generator.statementToCode(block, 'statement');

  var identifiers = "";
  if(checkbox_form_id){
    identifiers = ` id="` + removeParentheses(text_id) + `"`
  }
  if(checkbox_form_class){
    identifiers = identifiers + ` class="` + removeParentheses(text_class) + `"`
  }
  // TODO: Assemble javascript into code variable.
  var code = `<form ` + identifiers + `>` + statements_statement + `</form>`
  return code;
};


/////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_table'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table Block");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "id")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("default"), "id_value")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "class")
        .appendField("Class")
        .appendField(new Blockly.FieldTextInput("default"), "class_value");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Border")
        .appendField(new Blockly.FieldNumber(0, 0, 10), "border");
    this.appendStatementInput("rows")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Rows");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['html_table'] = function(block: any, generator: any) {
  var checkbox_id = block.getFieldValue('id') === 'TRUE';
  var text_id_value = block.getFieldValue('id_value');
  var checkbox_class = block.getFieldValue('class') === 'TRUE';
  var text_class_value = block.getFieldValue('class_value');
  var number_border = block.getFieldValue('border');
  var statements_rows = generator.statementToCode(block, 'rows');
  
  var identifiers = "";
  if(checkbox_id){
    identifiers = ` id="` + removeParentheses(text_id_value) + `"`
  }
  if(checkbox_class){
    identifiers = identifiers + ` class="` + removeParentheses(text_class_value) + `"`
  }

  var code = '<table ' + 'border=' + number_border + identifiers + '>' + statements_rows + '</table>';
  return code;
};

///////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['table_headings'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table Heading");
    this.appendStatementInput("data")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['table_headings'] = function(block : any, generator: any) {
  var statements_data = generator.statementToCode(block, 'data');
  var code = '<th>' + statements_data + '</th>';
  return code;
};

///////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['table_rows'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table Row");
    this.appendStatementInput("data")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['table_rows'] = function(block : any, generator: any) {
  var statements_data = generator.statementToCode(block, 'data');
  var code = '<tr>' + statements_data + '</tr>';
  return code;
};

/////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['table_data'] = {
  init: function() {
    this.appendStatementInput("data")
        .setCheck(null)
        .appendField("Table Data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

JavaScript.javascriptGenerator.forBlock['table_data'] = function(block : any, generator: any) {
  var statements_data = generator.statementToCode(block, 'data');
  // TODO: Assemble javascript into code variable.
  var code = '<td>' + statements_data + '</td>'
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