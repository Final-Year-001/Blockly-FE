import Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";

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

//generate id
Blockly.Blocks["generate_form_id"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Form ID:")
      .appendField(new Blockly.FieldTextInput("formId"), "formId");
    this.setOutput(true, "form_id_input");
    this.setColour(0);
    this.setTooltip("Enter the form ID.");
    this.setTooltip('Add your formId');
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

// Handle form submission
Blockly.Blocks["handle_form_submission"] = {
  init: function () {
    this.appendValueInput("form")
        .setCheck(null)
        .appendField("Form controller ID");
    this.appendStatementInput("on_submit")
        .setCheck(null)
        .appendField("on submit");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
    this.setTooltip("Handle form submission. Match it with the formId you gave for the form block");
  },
};

javascriptGenerator.forBlock['handle_form_submission'] = function (block : any, generator : any) {
  let formId = generator.valueToCode(block, 'form', Order.ATOMIC);
  let on_submit_callback = generator.statementToCode(block, 'on_submit');

    var code = `
    let form = document.getElementById(${formId});
    form.onsubmit = function(event) {
      ${on_submit_callback}
    }
    `;

    return code;
};

//set the form data
Blockly.Blocks['set_form_data_to'] = {
  init: function() {
    this.appendStatementInput("var")
        .setCheck("Variable")
        .appendField("Set form data to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setTooltip('Set the form data to a variable');
  }
};

javascriptGenerator.forBlock['set_form_data_to'] = function(block: any, generator: any) {
  var value_name = generator.statementToCode(block, 'var', Order.ATOMIC);
  var code = `let ${value_name} = new FormData(form)\n`;
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
    this.setColour(230);
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

//fetch the form data
Blockly.Blocks['fetch_block'] = {
  init: function() {
    this.appendValueInput("fetch")
        .setCheck(null)
        .appendField("fetch url");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("with method")
        .appendField(new Blockly.FieldDropdown([["GET", "GET"], ["POST", "POST"], ["PUT", "PUT"], ["DELETE", "DELETE"]]), "method");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("data from");
    this.appendStatementInput("on_sucess")
        .setCheck(null)
        .appendField("on success");
    this.appendStatementInput("on_error")
        .setCheck(null)
        .appendField("on error");
    this.setColour(230);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setTooltip('Copy the url from backend. Select a method from the dropdown. Add the form varaible. For alerts add your customized messages');
  }
};

javascriptGenerator.forBlock['fetch_block'] = function(block: any, generator: any) {
  let value_fetch = generator.valueToCode(block, 'fetch', Order.ATOMIC);
  let dropdown_name = block.getFieldValue('method');
  let value_name = generator.statementToCode(block, 'NAME', Order.ATOMIC);
  let statements_on_sucess = generator.statementToCode(block, 'on_sucess');
  let statements_on_error = generator.statementToCode(block, 'on_error');
 
  var code = `fetch(${value_fetch},{
    method: "${dropdown_name}",
        body: JSON.stringify(${value_name}),
        headers: {
          "Content-Type": "application/json"
        }
  })
  .then(res => res.json())
  .then((res) => {
    ${statements_on_sucess}
  }).catch((error) => {
    console.log(error);
    ${statements_on_error}
  })`;
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


//clear form data
Blockly.Blocks["clear_form_fields"] = {
  init: function () {
    this.appendValueInput("form")
      .setCheck("form_id_input")
      .appendField("Clear form fields in, ID");
    this.appendValueInput("rest_button_id")
      .setCheck("el_id_input")
      .appendField("Reset From Button ID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
    this.setTooltip("Clear all input fields in a form. Remember to match the formId you gave for the form block");
  },
};

javascriptGenerator.forBlock["clear_form_fields"] = function (
  block: any,
  generator: any
) {
  var formElement = generator.valueToCode(block, "form", 0);
  var buttonElementId = generator.valueToCode(block, 'rest_button_id', 0)

  var code = `
    document.addEventListener("DOMContentLoaded", function() {
      var form = document.getElementById(${formElement});
      var Button = document.getElementById(${buttonElementId});
      Button.addEventListener("click", function() {
        var inputElements = form.getElementsByTagName('input');
        for (var i = 0; i < inputElements.length; i++) {
          inputElements[i].value = '';
        }
      });
    });
  `;

  return code;
};

//block to auto fill the form
Blockly.Blocks['auto_fill_form_fields'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Auto fill");

      this.appendValueInput("form")
          .setCheck("form_id_input")
          .appendField("Add auto input to the form, ID");

      this.appendValueInput("name_element_id")
          .setCheck("el_id_input")
          .appendField("Name Input Element ID");

      this.appendValueInput("age_element_id")
          .setCheck("el_id_input")
          .appendField("Age Input Element ID");
      
      this.appendValueInput("auto_button_id")
          .setCheck("el_id_input")
          .appendField("Auto Add Button Element ID");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip("Add the form id, element ids of age and name then a button id for auto-add button. Then click on the button to fill the form data automatically.");
  }
};

javascriptGenerator.forBlock['auto_fill_form_fields'] = function(block: any, generator:any) {
  var formElementId = generator.valueToCode(block, 'form', 0);
  var nameId = generator.valueToCode(block, 'name_element_id', 0);
  var ageId = generator.valueToCode(block, 'age_element_id', 0);
  var buttonElementId = generator.valueToCode(block, 'auto_button_id', 0)

  var code = `
    document.addEventListener("DOMContentLoaded", function() {
      var form = document.getElementById(${formElementId});
      var Button = document.getElementById(${buttonElementId});
      var nameElement = document.getElementById(${nameId});
      var ageElement = document.getElementById(${ageId});
      
      if (Button) {
        Button.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent form submission
          if (Button.id === ${buttonElementId}) {
            nameElement.value = "John Doe";
            ageElement.value = "30";
          }
        });
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
    this.setTooltip('Validate an input field based on a predefined condition');
  }
};

javascriptGenerator.forBlock['validate_and_handle_error'] = function (
  block: any,
  generator: any) {
    var nameElementId = generator.valueToCode(block, 'input', 0);
    var condition = generator.valueToCode(block, 'condition', 0);
    var errorMessage = block.getFieldValue('error_message');
  
    var code = `
    function clearInputFields(elementId) {
      var element = document.getElementById(elementId);
      if (element) {
        element.value = '';
      }
    }

    document.addEventListener("DOMContentLoaded", function() {
      var nameElement = document.getElementById(${nameElementId});
      if (nameElement) {
        nameElement.addEventListener("input", function() {
          var input = nameElement.value;
          if (${condition}) {
            console.log(input);
          } else {
            window.alert('${errorMessage}');
            clearInputFields(${nameElementId});
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
    this.setTooltip('Predefined condition: name length should be greater than 2 and less than 20');
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
      
      this.appendValueInput("submit_button_id")
          .setCheck("el_id_input")
          .appendField("Submit Button Element ID");

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(850);
      this.setTooltip("Show collected data in an alert.");
  }
};

javascriptGenerator.forBlock['show_data_in_alert_custom'] = function(block: any, generator: any) {
  var nameElementId = generator.valueToCode(block, 'name_element_id', 0);
  var ageElementId = generator.valueToCode(block, 'age_element_id', 0);
  var buttonElementId = generator.valueToCode(block, 'submit_button_id', 0)

  var code = `
    document.addEventListener("DOMContentLoaded", function() {
      var nameElement = document.getElementById(${nameElementId});
      var ageElement = document.getElementById(${ageElementId});
      var submitButton = document.getElementById(${buttonElementId});

      submitButton.addEventListener("click", function() {
        var name = nameElement.value;
        var age = ageElement.value;
  
        window.alert("Name: " + name + "\\nAge: " + age);
      });
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