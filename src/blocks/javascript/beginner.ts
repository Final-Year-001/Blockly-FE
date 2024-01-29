import Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";

//script tag
Blockly.Blocks['javascript'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Javascript");
    this.appendStatementInput("script")
        .setCheck(null);
    this.setColour(230);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setTooltip('Define the script tag. JavaScipt code should be wrapped in this tag');
  }
};

javascriptGenerator.forBlock['javascript'] = function(
  block: any,
  generator: any
) {
  var statements_script = generator.statementToCode(block, 'script');
  var code = `<script>\n${statements_script}\n</script>`;
  return code;
};

//create a custom variable
Blockly.Blocks['create_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create variable:")
        .appendField(new Blockly.FieldTextInput("myVariable"), "VAR_NAME");
        this.setPreviousStatement(true, null); 
        this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("create a custome variable");
  }
};

javascriptGenerator.forBlock['create_variable'] = function(block:any, generator:any) {
  var variableName = block.getFieldValue('VAR_NAME');
  var code = '';
  code += '' + variableName + '\n';
  return code;
};

//generate id for input fields
Blockly.Blocks["generate_id"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Element ID:")
      .appendField(new Blockly.FieldTextInput("elId"), "elId");
    this.setOutput(true, "el_id_input");
    this.setColour(0);
    this.setTooltip("Create an element ID.");
  },
};

javascriptGenerator.forBlock["generate_id"] = function (
  block: any,
  generator: any
) {
  var elId = block.getFieldValue("elId"); // Get the form ID value
  var code = `\"${elId}\"`; // Wrap the formId in quotes to make it a string in the generated code
  return [code, generator.ORDER_ATOMIC]; // Return the code and precedence
};

//getElementById() and changes the element content (innerHTML) 
Blockly.Blocks['chnage_innerHTML'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change Element Content");
        this.appendValueInput("elementId")
            .setCheck("el_id_input")
            .appendField("Element ID:");
        this.appendValueInput("newContent")
            .setCheck("String")
            .appendField("New Content:");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip('Change the content of an HTML element by ID');
    }
};

javascriptGenerator.forBlock['chnage_innerHTML'] = function(
    block: any,
    generator: any
  ) {
    var value_elementId = generator.valueToCode(block, 'elementId', Order.ATOMIC);
    var value_newContent = generator.valueToCode(block, 'newContent', Order.ATOMIC);

    if (!value_elementId || !value_newContent) {
        return '';
    }

    var code = `document.getElementById(${value_elementId}).innerHTML = ${value_newContent};\n`;
    return code;
  };

  // Console Log Block
Blockly.Blocks['console_log'] = {
  init: function () {
    this.appendValueInput('text')
      .setCheck(null) // Allow any value to be logged
      .appendField('Console Log');
    this.setPreviousStatement(true, null); // Previous block can be of any type
    this.setNextStatement(true, null); // Next block can be of any type
    this.setColour(110); // Color for visual distinction
    this.setTooltip('Log a message to the console.');
  }
};

javascriptGenerator.forBlock['console_log'] = function (block:any, generator: any) {
  var text = generator.valueToCode(block, 'text', generator.ORDER_ATOMIC);
  var code = `console.log(${text})\n`;
return code;
};

//showing an alert
Blockly.Blocks['alert_block'] = {
  init: function() {
    this.appendValueInput("message")
        .setCheck(null)
        .appendField("Show alert");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(640);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setTooltip('Generate custom alerts using this block');
  }
};

javascriptGenerator.forBlock['alert_block'] = function(block: any, generator: any) {
  var message = generator.valueToCode(block, 'message', Order.ATOMIC);
  var code = `alert(${message})\n`;
  return code;
};

//event listener to an HTML element
Blockly.Blocks['event_listener'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Add Event Listener to the button")
      .appendField(new Blockly.FieldDropdown([
        ["click", "click"],
        ["mouseover", "mouseover"],
        ["keydown", "keydown"]
      ]), "event");
    this.appendValueInput("element")
      .setCheck("el_id_input")
      .appendField("to element ID");
    this.appendStatementInput("handler")
      .setCheck(null)
      .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Attach an event listener to an HTML element.');
  }
};

javascriptGenerator.forBlock['event_listener'] = function (block:any, generator: any) {
  const event = block.getFieldValue('event');
  const element = generator.valueToCode(block, 'element', generator.ORDER_ATOMIC);
  const handler = generator.statementToCode(block, 'handler');

  return `document.getElementById(${element}).addEventListener('${event}', function(event) {\n${handler}});\n`;
};

//show or hide an HTML element
Blockly.Blocks["show_hidden_element"] = {
init: function () {
  this.appendDummyInput()
      .appendField("Show or Hide element")
  this.appendValueInput("element_id")
  .setCheck("el_id_input")
    .appendField(
      new Blockly.FieldDropdown([
        ["Show", "show"],
        ["Hide", "hide"],
      ]),
      "action"
    )
    .appendField("element with ID");
  this.setColour(40);
  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  this.setTooltip('Show or hide an HTML element with a specified ID.');
},
};

javascriptGenerator.forBlock["show_hidden_element"] = function (
block: any,
generator: any
) {
var dropdown_action = block.getFieldValue('action');
var elementId = generator.valueToCode(block, 'element_id', generator.ORDER_ATOMIC);

var code = `
  var element = document.getElementById(${elementId});
  if (element) {
    if ('${dropdown_action}' === 'show') {
      element.style.display = 'block';
    } else if ('${dropdown_action}' === 'hide') {
      element.style.display = 'none';
    }
  }
`;

return code;
};