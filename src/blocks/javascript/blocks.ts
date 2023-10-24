import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

//submit form data
Blockly.Blocks["submit_form_data"] = {
  init: function () {
    this.appendValueInput("form")
      .setCheck("Element")
      .appendField("Submit form data from");
    this.appendValueInput("callback")
      .setCheck(null)
      .appendField("and execute callback function");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
    this.setTooltip("Submit form data and execute a callback function.");
  },
};

javascriptGenerator.forBlock["submit_form_data"] = function (
  block: any,
  generator: any
) {
  var formElement = generator.valueToCode(block, "form", 0);
  var callbackFunction = generator.valueToCode(block, "callback", 0);

  //replace '/your-server-endpoint' with the actual endpoint in Express
  var code = `
   
    var form = ${formElement};

    var formData = new FormData(form);
    
    fetch('/your-server-endpoint', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      ${callbackFunction}(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  `;

  return code;
};

//clear form data
Blockly.Blocks["clear_form_fields"] = {
  init: function () {
    this.appendValueInput("form")
      .setCheck("Element")
      .appendField("Clear form fields in");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
    this.setTooltip("Clear all input fields in a form.");
  },
};

javascriptGenerator.forBlock["clear_form_fields"] = function (
  block: any,
  generator: any
) {
  var formElement = generator.valueToCode(block, "form", 0);

  var code = `

    var form = ${formElement};

    var inputElements = form.getElementsByTagName('input');

    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].value = '';
    }
  `;

  return code;
};

//Text Input Field Validation
Blockly.Blocks['validate_text_input'] = {
  init: function() {
    this.appendValueInput('input')
        .setCheck('Element')
        .appendField('Validate text input in');
    this.appendStatementInput('callback')
        .setCheck(null)
        .appendField('when validation fails, do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
    this.setTooltip('Validate a text input field and execute a custom callback when validation fails.');
  }
};

javascriptGenerator.forBlock['validate_text_input'] = function (
  block: any,
  generator: any) {
  var inputElement = generator.valueToCode(block, 'input', 0);
  var callbackFunction = generator.statementToCode(block, 'callback');

  var code = `
    var input = ${inputElement};
    var value = input.value;
    if (!value || value.trim() === '') {
      ${callbackFunction}
    }
  `;

  return code;
};

//Enable/Disable Form Fields
Blockly.Blocks['enable_disable_form_fields'] = {
  init: function() {
    this.appendValueInput('form')
        .setCheck('Element')
        .appendField(new Blockly.FieldDropdown([
          ['Enable', 'enable'],
          ['Disable', 'disable']
        ]), 'action')
        .appendField('form fields in');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
    this.setTooltip('Enable or disable form fields within a form.');
  }
};

javascriptGenerator.forBlock['enable_disable_form_fields'] = function (
  block: any,
  generator: any) {
  var formElement = generator.valueToCode(block, 'form', 0);
  var action = block.getFieldValue('action');

  var code = `
    var form = ${formElement};
    var inputElements = form.getElementsByTagName('input');
    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].disabled = ${action === 'disable'};
    }
  `;

  return code;
};

//connect to a button click, to allow users to switch between hidden and visible password characters.
Blockly.Blocks['toggle_password_visibility'] = {
  init: function() {
    this.appendValueInput('passwordField')
        .setCheck('Element')
        .appendField('Toggle password visibility for');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
    this.setTooltip('Toggle visibility of the password in a password input field.');
  }
};

javascriptGenerator.forBlock['toggle_password_visibility'] = function (
  block: any,
  generator: any
  ) {
  var passwordField = generator.valueToCode(block, 'passwordField', 0);

  var code = `
    var passwordField = ${passwordField};
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  `;

  return code;
};

