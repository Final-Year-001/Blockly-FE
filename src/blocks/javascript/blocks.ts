import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

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

javascriptGenerator.forBlock["myFunction"] = function (block, generator) {
  var inputValue = block.getFieldValue('inputValue');
  var statements = generator.statementToCode(block, 'statements');

  //need to write the custom function 
  var code = `
    function myFunction(input) {
      // Your custom JavaScript code here
      console.log("Called myFunction with input: " + input);
      ${statements}
    }
    
    var input = ${inputValue};
    myFunction(input);
  `;
  return code;
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

javascriptGenerator.forBlock["add_event_listener"] = function (block, generator) {
  var valueElement = generator.valueToCode(block, 'element', 0);
  var dropdownEvent = block.getFieldValue('event');
  // This part contains the actions to be executed when the event occurs
  var statementsCallback = generator.statementToCode(block, 'callback');

  var code = `
    ${valueElement}.addEventListener('${dropdownEvent}', function(event) {
      ${statementsCallback} 
    });
  `;
  return code;
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

javascriptGenerator.forBlock["remove_element"] = function (block, generator) {
  var valueElement = generator.valueToCode(block, 'element', 0);
//checks if the provided HTML element exists and removes it from its parent node if it does
  var code = `
    if (${valueElement}) {
      ${valueElement}.parentNode.removeChild(${valueElement});
    }
  `;
  return code;
};

//show or hide an HTML element
Blockly.Blocks['show_hidden_element'] = {
  init: function() {
    this.appendStatementInput('name')
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([
          ['Show', 'show'],
          ['Hide', 'hide']
        ]), 'action')
        .appendField('element');
    this.setColour(160);
    this.setTooltip('Show or hide an HTML element.');
  }
};

javascriptGenerator.forBlock["show_hidden_element"] = function (block, generator) {
  let dropdown_method = block.getFieldValue("action");
  let statements_name = generator.statementToCode(block, "name");

  // Define the HTML element ID (you can change "myElement" to your desired element ID)
  let elementId = "myElement";

  //elementId to match the ID of the HTML element
  var code = `
    function showOrHideElement(action, elementId) {
      var element = document.getElementById(elementId);

      if (element) {
        if (action === 'show') {
          element.style.display = 'block';
        } else if (action === 'hide') {
          element.style.display = 'none';
        }
      }
    }

    showOrHideElement('${dropdown_method}', '${elementId}');
  `;

  return code;
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

javascriptGenerator.forBlock["submit_form_data"] = function (block, generator) {
  var formElement = generator.valueToCode(block, 'form', 0);
  var callbackFunction = generator.valueToCode(block, 'callback', 0);

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

javascriptGenerator.forBlock["clear_form_fields"] = function (block, generator) {
  var formElement = generator.valueToCode(block, 'form', 0);

  var code = `

    var form = ${formElement};

    var inputElements = form.getElementsByTagName('input');

    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].value = '';
    }
  `;

  return code;
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

javascriptGenerator.forBlock["fetch_api_data"] = function (block, generator) {
  var apiUrl = generator.valueToCode(block, 'url', 0);
  var callbackFunction = generator.statementToCode(block, 'callback');

  var code = `

    var url = ${apiUrl};
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        ${callbackFunction}
      })
      .catch(error => {
        console.error('Error:', error);
      });
  `;

  return code;
};
