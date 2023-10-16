import Blockly from "blockly";

//takes an input (a string), allows you to define the function's body
Blockly.Blocks["myFunction"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Call my function with input:");
    this.appendValueInput("input")
      .setCheck("String")
      .appendField(new Blockly.FieldTextInput("defaultInput"), "inputValue");
    this.appendStatementInput("statements")
      .setCheck(null)
      .appendField("Do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Call my custom JavaScript function with input.");
    this.setHelpUrl("");
  }
};

//add an event listener to an HTML element, such as a click event
Blockly.Blocks['add_event_listener'] = {
  init: function() {
    this.appendValueInput('element')
        .setCheck('Element')
        .appendField('Add event listener to');
    this.appendDummyInput()
        .appendField('on event')
        .appendField(new Blockly.FieldDropdown([
          ['click', 'click'],
          ['mouseover', 'mouseover'],
          ['change', 'change']
        ]), 'event');
    this.appendStatementInput('callback')
        .setCheck(null)
        .appendField('do');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Add an event listener to an HTML element.');
  }
};

//set the text content of an HTML element
Blockly.Blocks['set_text_content'] = {
  init: function() {
    this.appendValueInput('element')
        .setCheck('Element')
        .appendField('Set text content of');
    this.appendValueInput('text')
        .setCheck('String')
        .appendField('to');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Set the text content of an HTML element.');
  }
};

// removing an HTML element from the DOM
Blockly.Blocks['remove_element'] = {
  init: function() {
    this.appendValueInput('element')
        .setCheck('Element')
        .appendField('Remove element');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Remove an HTML element from the DOM.');
  }
};

//show or hide an HTML element
Blockly.Blocks['show_hidden_element'] = {
  init: function() {
    this.appendValueInput('element')
        .setCheck('Element')
        .appendField(new Blockly.FieldDropdown([
          ['Show', 'show'],
          ['Hide', 'hide']
        ]), 'action')
        .appendField('element');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Show or hide an HTML element.');
  }
};

//submit form data
Blockly.Blocks['submit_form_data'] = {
  init: function() {
    this.appendValueInput('form')
        .setCheck('Element')
        .appendField('Submit form data from');
    this.appendValueInput('callback')
        .setCheck(null)
        .appendField('and execute callback function');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
    this.setTooltip('Submit form data and execute a callback function.');
  }
};

//clear form data
Blockly.Blocks['clear_form_fields'] = {
  init: function() {
    this.appendValueInput('form')
        .setCheck('Element')
        .appendField('Clear form fields in');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
    this.setTooltip('Clear all input fields in a form.');
  }
};

// fetch data from a REST API at a specified URL 
// and execute a custom callback when the data is received
Blockly.Blocks['fetch_api_data'] = {
  init: function() {
    this.appendValueInput('url')
        .setCheck('String')
        .appendField('Fetch data from API at URL');
    this.appendStatementInput('callback')
        .setCheck(null)
        .appendField('when data is received, do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Fetch data from a REST API and execute a custom callback when data is received.');
  }
};

const javascriptBlocks = {};

export default javascriptBlocks;