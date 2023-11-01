import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

// Head Block
Blockly.Blocks['head_tag'] = {
  init: function () {
      this.appendStatementInput('content')
          .setCheck(null) // Allow any type of block to be nested
          .appendField('Header');
      this.setPreviousStatement(true, 'head_tag');
      this.setColour(160);
      this.setTooltip('Define the head section of the HTML document.');
  }
};

javascriptGenerator.forBlock['head_tag'] = function (block : any, generator : any) {
  var content = generator.statementToCode(block, 'content');
  return '<head>\n' + content + '\n</head>';
};

//script tag
Blockly.Blocks['javascript'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Javascript");
    this.appendStatementInput("script")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  // Allow connection to 'head_tag'
  this.setPreviousStatement(true, 'head_tag');
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

//generate id
Blockly.Blocks["generate_form_id"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Form ID:")
      .appendField(new Blockly.FieldTextInput("formId"), "formId");
    this.setOutput(true, "form_id_input");
    this.setColour(0);
    this.setTooltip("Enter the form ID.");
  },
};

javascriptGenerator.forBlock["generate_form_id"] = function (
  block: any,
  generator: any
) {
  var formId = block.getFieldValue("formId"); // Get the form ID value
  var code = `\"${formId}\"`; // Wrap the formId in quotes to make it a string in the generated code
  return [code, generator.ORDER_ATOMIC]; // Return the code and precedence
};

//submit form data
Blockly.Blocks["submit_form_data"] = {
  init: function () {
    this.appendValueInput("form")
      .setCheck("form_id_input")
      .appendField("Submit form data from");
    this.appendValueInput("callback")
      .setCheck("Function")
      .appendField("and execute callback function");
    this.appendValueInput("endpoint")
      .setCheck("String")
      .appendField("to server endpoint");
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
  var formElement = generator.valueToCode(block, "form", generator.ORDER_ATOMIC);
  var callbackFunction = generator.valueToCode(block, "callback", generator.ORDER_ATOMIC);
  var endpoint = generator.valueToCode(block, "endpoint", generator.ORDER_ATOMIC);

  var code = `
    document.addEventListener("DOMContentLoaded", function() {
      var form = document.getElementById(${formElement});
      if (form) {
        var formData = new FormData(form);

        fetch(${endpoint}, {
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
      } else {
        console.error('Form not found with ID: ${formElement}');
      }
    });
  `;
  
  return code;
};

// Define the "callback_function" block
Blockly.Blocks["callback_function"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Callback function");
    this.appendDummyInput()
      .appendField("Function name:")
      .appendField(new Blockly.FieldTextInput("myCallback"), "functionName");
    this.setOutput(true, "Function"); // Set the output type to "Function"
    this.setColour(370);
    this.setTooltip("Define a callback function.");
  },
};

// Generate code for the "callback_function" block
javascriptGenerator.forBlock["callback_function"] = function (
  block: any,
  generator: any
) {
  var functionName = block.getFieldValue("functionName");

  // Generate JavaScript code for the callback function
  var code = `
    function ${functionName}(data) {
      // Your callback function code here
    }
  `;

  return [code, generator.ORDER_FUNCTION_CALL]; // Return a tuple containing the code and the precedence
};

// Server Endpoint
Blockly.Blocks["server_endpoint"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Server endpoint:")
      .appendField(new Blockly.FieldTextInput("/your-server-endpoint"), "endpoint");
    this.setOutput(true, "String"); // Set the output type to String
    this.setColour(540);
    this.setTooltip("Specify the server endpoint.");
  },
};

javascriptGenerator.forBlock["server_endpoint"] = function (
  block: any,
  generator: any
) {
  var endpoint = block.getFieldValue("endpoint");

  // Return the server endpoint as a JavaScript string
  return [endpoint, generator.ORDER_ATOMIC];
};

//clear form data
Blockly.Blocks["clear_form_fields"] = {
  init: function () {
    this.appendValueInput("form")
      .setCheck("form_id_input")
      .appendField("Clear form fields in");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
    this.setTooltip("Clear all input fields in a form.");
  },
};

javascriptGenerator.forBlock["clear_form_fields"] = function (
  block: any,
  generator: any
) {
  var formElement = generator.valueToCode(block, "form", 0);

  var code = `
    document.addEventListener("DOMContentLoaded", function() {
      var form = ${formElement};
      var inputElements = form.getElementsByTagName('input');
      for (var i = 0; i < inputElements.length; i++) {
        inputElements[i].value = '';
      }
    });
  `;

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
    this.setTooltip("Enter the element ID.");
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

// General-Purpose Validation and Error Handling Block
Blockly.Blocks['validate_and_handle_error'] = {
  init: function() {
    this.appendValueInput('input')
        .setCheck("el_id_input")
        .appendField('Validate input in');
    this.appendValueInput('condition')
        .setCheck('Boolean')
        .appendField('Pass if the condition is');
    this.appendDummyInput()
        .appendField('Else, handle errors with message');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(''), 'error_message');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260); // Adjust the color as needed
    this.setTooltip('Validate an input field based on a predefined condition and either allow adding input or handle errors with a custom message.');
  }
};

javascriptGenerator.forBlock['validate_and_handle_error'] = function (
  block: any,
  generator: any) {
    var condition = generator.valueToCode(block, 'condition', 0);
    var errorMessage = block.getFieldValue('error_message');
  
    var code = `
    document.addEventListener("DOMContentLoaded", function() {
      var inputElement = document.getElementById("nameId");
      if (inputElement) {
        inputElement.addEventListener("input", function() {
          var input = inputElement.value;
          if (${condition}) {
            // Valid input, perform any additional actions here.
            console.log(input);
          } else {
            window.alert('${errorMessage}');
          }
        });
      }
    });
  `;  
  
    return code;
};

// Custom Condition Block
Blockly.Blocks['custom_condition_input_length'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Name is less than 20 characters and more than 2');
    this.setOutput(true, 'Boolean');
    this.setColour(160);
    this.setTooltip('Predefined condition: input.length <= 20');
  }
};

// Define a code generation function for the 'custom_condition_input_length' block
javascriptGenerator.forBlock['custom_condition_input_length'] = function (block: any, generator: any) {
  // Generate JavaScript code for the predefined condition
  return ['input.length <= 20 && input.length > 2', generator.ORDER_ATOMIC];
};


// Change Form Background Color Block
Blockly.Blocks['change_form_background_color'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Change the background color");
      this.appendValueInput("form")
          .setCheck("form_id_input")
          .appendField("of the form");
      this.appendDummyInput()
          .appendField('to color')
        .appendField(new Blockly.FieldTextInput(''), 'color');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(700);
      this.setTooltip("Change the background color of a form element.");
  }
};

javascriptGenerator.forBlock['change_form_background_color'] = function(block: any, generator: any) {
  var formId = generator.valueToCode(block, 'form', 0);
  var color = block.getFieldValue('color');

  var code = `
    document.addEventListener("DOMContentLoaded", function() {
        var form = document.getElementById(${formId});
        if (form) {
            form.style.backgroundColor = "${color}";
        }
    });
  `;
  return code;
};

// Show Data in Alert Block with Custom Element IDs
Blockly.Blocks['show_data_in_alert_custom'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Show Data in Alert");

      this.appendValueInput("name_element_id")
          .setCheck("el_id_input")
          .appendField("Name Input Element ID");

      this.appendValueInput("age_element_id")
          .setCheck("el_id_input")
          .appendField("Age Input Element ID");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(850);
      this.setTooltip("Show collected data in an alert.");
  }
};

javascriptGenerator.forBlock['show_data_in_alert_custom'] = function(block: any, generator: any) {
  var nameElementId = generator.valueToCode(block, 'name_element_id', 0);
  var ageElementId = generator.valueToCode(block, 'age_element_id', 0);

  var code = `
  document.addEventListener("DOMContentLoaded", function() {
    
    var name = document.getElementById(${nameElementId}).value;
    var age = document.getElementById(${ageElementId}).value;

    
    alert("Name: " + name + "\\nAge: " + age);
  });
  `;
  return code;
}

//other blocks - not form related

//Enable/Disable Form Fields
Blockly.Blocks['enable_disable_form_fields'] = {
  init: function() {
    this.appendValueInput('form')
        .setCheck("form_id_input")
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

//takes an input (a string), allows you to define the function's body
Blockly.Blocks["myFunction"] = {
  init: function () {
    this.appendDummyInput().appendField("Call my function with input:");
    this.appendValueInput("input")
      .setCheck("String")
      .appendField(new Blockly.FieldTextInput("defaultInput"), "inputValue");
    this.appendStatementInput("statements").setCheck(null).appendField("Do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Call my custom JavaScript function with input.");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["myFunction"] = function (
  block: any,
  generator: any
) {
  var inputValue = block.getFieldValue("inputValue");
  var statements = generator.statementToCode(block, "statements");

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
Blockly.Blocks["add_event_listener"] = {
  init: function () {
    this.appendValueInput("element")
      .setCheck("Element")
      .appendField("Add event listener to");
    this.appendDummyInput()
      .appendField("on event")
      .appendField(
        new Blockly.FieldDropdown([
          ["click", "click"],
          ["mouseover", "mouseover"],
          ["change", "change"],
        ]),
        "event"
      );
    this.appendStatementInput("callback").setCheck(null).appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Add an event listener to an HTML element.");
  },
};

javascriptGenerator.forBlock["add_event_listener"] = function (
  block: any,
  generator: any
) {
  var valueElement = generator.valueToCode(block, "element", 0);
  var dropdownEvent = block.getFieldValue("event");
  // This part contains the actions to be executed when the event occurs
  var statementsCallback = generator.statementToCode(block, "callback");

  var code = `
    ${valueElement}.addEventListener('${dropdownEvent}', function(event) {
      ${statementsCallback} 
    });
  `;
  return code;
};

// removing an HTML element from the DOM
Blockly.Blocks["remove_element"] = {
  init: function () {
    this.appendValueInput("element")
      .setCheck("Element")
      .appendField("Remove element");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Remove an HTML element from the DOM.");
  },
};

javascriptGenerator.forBlock["remove_element"] = function (
  block: any,
  generator: any
) {
  var valueElement = generator.valueToCode(block, "element", 0);
  //checks if the provided HTML element exists and removes it from its parent node if it does
  var code = `
    if (${valueElement}) {
      ${valueElement}.parentNode.removeChild(${valueElement});
    }
  `;
  return code;
};

//show or hide an HTML element
Blockly.Blocks["show_hidden_element"] = {
  init: function () {
    this.appendStatementInput("name")
      .setCheck(null)
      .appendField(
        new Blockly.FieldDropdown([
          ["Show", "show"],
          ["Hide", "hide"],
        ]),
        "action"
      )
      .appendField("element");
    this.setColour(160);
    this.setTooltip("Show or hide an HTML element.");
  },
};

javascriptGenerator.forBlock["show_hidden_element"] = function (
  block: any,
  generator: any
) {
  let dropdown_method = block.getFieldValue("action");
  let statements_name = generator.statementToCode(block, "name");

  // Define the HTML element ID (you can change "myElement" to your desired element ID)
  let elementId = statements_name || "myElement";

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

// fetch data from a REST API at a specified URL
// and execute a custom callback when the data is received
Blockly.Blocks["fetch_api_data"] = {
  init: function () {
    this.appendValueInput("url")
      .setCheck("String")
      .appendField("Fetch data from API at URL");
    this.appendStatementInput("callback")
      .setCheck(null)
      .appendField("when data is received, do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip(
      "Fetch data from a REST API and execute a custom callback when data is received."
    );
  },
};

javascriptGenerator.forBlock["fetch_api_data"] = function (
  block: any,
  generator: any
) {
  var apiUrl = generator.valueToCode(block, "url", 0);
  var callbackFunction = generator.statementToCode(block, "callback");

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