import Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";
import './beginner';

// Handle form submission
Blockly.Blocks["handle_form_submission"] = {
  init: function () {
    this.appendValueInput("form")
        .setCheck(null)
        .appendField("Add the form ID");
    this.appendStatementInput("on_submit")
        .setCheck(null)
        .appendField("Tasks to do when the form is submitted");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Handle form submission. Match it with the formId you gave for the form block");
  },
};

javascriptGenerator.forBlock['handle_form_submission'] = function (block : any, generator : any) {
  let formId = generator.valueToCode(block, 'form', Order.ATOMIC);
  let on_submit_callback = generator.statementToCode(block, 'on_submit');

    var code = `
    let form = document.getElementById(${formId});
    form.onsubmit = function(event) {
      event.preventDefault();
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
        .appendField("Set form data to this variable");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
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

//fetch the form data
Blockly.Blocks['fetch_block'] = {
  init: function() {
    this.appendValueInput("fetch")
        .setCheck(null)
        .appendField("send the data to the backend using this URL");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("with method")
        .appendField(new Blockly.FieldDropdown([["GET", "GET"], ["POST", "POST"], ["PUT", "PUT"], ["DELETE", "DELETE"]]), "method");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Add the variable we passed the form data");
    this.appendStatementInput("on_sucess")
        .setCheck(null)
        .appendField("on success what to do");
    this.appendStatementInput("on_error")
        .setCheck(null)
        .appendField("on error what to do");
    this.setColour(160);
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
        body: JSON.stringify(Object.fromEntries(${value_name})),
        headers: {
          "Content-Type": "application/json"
        }
  })
  .then(res => res.json())
  .then((res) => {
    ${statements_on_sucess}
    console.log(res);
  }).catch((error) => {
    console.log(error);
    ${statements_on_error}
  })`;
  return code;
};

//clear form data
Blockly.Blocks["clear_form_fields"] = {
  init: function () {
    this.appendValueInput("form")
      .setCheck("el_id_input")
      .appendField("Clear the form data in, form ID");
    this.appendValueInput("rest_button_id")
      .setCheck("el_id_input")
      .appendField("Reset form button ID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
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

// //block to auto fill the form
// Blockly.Blocks['auto_fill_form_fields'] = {
//   init: function() {
//       this.appendDummyInput()
//           .appendField("Auto fill");

//       this.appendValueInput("form")
//           .setCheck("el_id_input")
//           .appendField("Add auto input to the form, ID");

//       this.appendValueInput("name_element_id")
//           .setCheck("el_id_input")
//           .appendField("Name Input Element ID");

//       this.appendValueInput("age_element_id")
//           .setCheck("el_id_input")
//           .appendField("Age Input Element ID");
      
//       this.appendValueInput("auto_button_id")
//           .setCheck("el_id_input")
//           .appendField("Auto Add Button Element ID");

//       this.setPreviousStatement(true, null);
//       this.setNextStatement(true, null);
//       this.setColour(160);
//       this.setTooltip("Add the form id, element ids of age and name then a button id for auto-add button. Then click on the button to fill the form data automatically.");
//   }
// };

// javascriptGenerator.forBlock['auto_fill_form_fields'] = function(block: any, generator:any) {
//   var formElementId = generator.valueToCode(block, 'form', 0);
//   var nameId = generator.valueToCode(block, 'name_element_id', 0);
//   var ageId = generator.valueToCode(block, 'age_element_id', 0);
//   var buttonElementId = generator.valueToCode(block, 'auto_button_id', 0)

//   var code = `
//     document.addEventListener("DOMContentLoaded", function() {
//       var form = document.getElementById(${formElementId});
//       var Button = document.getElementById(${buttonElementId});
//       var nameElement = document.getElementById(${nameId});
//       var ageElement = document.getElementById(${ageId});
      
//       if (Button) {
//         Button.addEventListener("click", function(event) {
//           event.preventDefault(); // Prevent form submission
//           if (Button.id === ${buttonElementId}) {
//             nameElement.value = "John Doe";
//             ageElement.value = "30";
//           }
//         });
//       }
//     });
//   `;

//   return code;
// };

// General-Purpose Validation and Error Handling Block
Blockly.Blocks['validate_and_handle_error'] = {
  init: function() {
    this.appendValueInput("auto_button_id")
    .setCheck("el_id_input")
    .appendField("Add the form submit button ID");
    this.appendValueInput('input')
        .setCheck("el_id_input")
        .appendField('Add the input field id for validation');
    this.appendValueInput('condition')
        .setCheck('Boolean')
        .appendField('Pass if the condition is');
    this.appendDummyInput()
        .appendField('Else, handle errors with message');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(''), 'error_message');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40); // Adjust the color as needed
    this.setTooltip('Validate an input field based on a predefined condition');
  }
};

javascriptGenerator.forBlock['validate_and_handle_error'] = function (
  block: any,
  generator: any) {
    var inputElementId = generator.valueToCode(block, 'input', 0);
    var condition = generator.valueToCode(block, 'condition', 0);
    var errorMessage = block.getFieldValue('error_message');
    var buttonElementId = generator.valueToCode(block, 'auto_button_id', 0)
  
    var code = `
    function clearInputFields(elementId) {
      var element = document.getElementById(elementId);
      if (element) {
        element.value = '';
      }
    }

    document.addEventListener("DOMContentLoaded", function() {
      var buttonElement = document.getElementById(${buttonElementId});

      if(buttonElement){
        buttonElement.addEventListener("click", function () {
          var inputElement = document.getElementById(${inputElementId});
          if (inputElement) {
            var input = inputElement.value;
            if (${condition}) {
              console.log(input);
            } else {
              window.alert('${errorMessage}');
              clearInputFields(${inputElementId});
            }
          }
        })
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

// Custom Condition Block
Blockly.Blocks['custom_condition_age'] = {
  init: function() {
    this.appendDummyInput()
    .appendField('Age is greater than 0 and less than 100');
    this.setOutput(true, 'Boolean');
    this.setColour(40);
    this.setTooltip('Predefined condition: age should be greater than 0 and less than 100');
  }
};

// Define a code generation function for the 'custom_condition_input_length' block
javascriptGenerator.forBlock['custom_condition_age'] = function (block: any, generator: any) {
  return ['input > 0 && input < 100', generator.ORDER_ATOMIC];
};

// Change Form Background Color Block
Blockly.Blocks['change_form_background_color'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Change the background color");
      this.appendValueInput("form")
          .setCheck("el_id_input")
          .appendField("of the form");
      this.appendDummyInput()
          .appendField('to color')
        .appendField(new Blockly.FieldTextInput(''), 'color');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
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

// // Show Data in Alert Block with Custom Element IDs
// Blockly.Blocks['show_data_in_alert_custom'] = {
//   init: function() {
//       this.appendDummyInput()
//           .appendField("Show Data in Alert");

//       this.appendValueInput("name_element_id")
//           .setCheck("el_id_input")
//           .appendField("Name Input Element ID");

//       this.appendValueInput("age_element_id")
//           .setCheck("el_id_input")
//           .appendField("Age Input Element ID");
      
//       this.appendValueInput("submit_button_id")
//           .setCheck("el_id_input")
//           .appendField("Submit Button Element ID");

//       this.setPreviousStatement(true, null);
//       this.setNextStatement(true, null);
//       this.setColour(40);
//       this.setTooltip("Show collected data in an alert.");
//   }
// };

// javascriptGenerator.forBlock['show_data_in_alert_custom'] = function(block: any, generator: any) {
//   var nameElementId = generator.valueToCode(block, 'name_element_id', 0);
//   var ageElementId = generator.valueToCode(block, 'age_element_id', 0);
//   var buttonElementId = generator.valueToCode(block, 'submit_button_id', 0)

//   var code = `
//     document.addEventListener("DOMContentLoaded", function() {
//       var nameElement = document.getElementById(${nameElementId});
//       var ageElement = document.getElementById(${ageElementId});
//       var submitButton = document.getElementById(${buttonElementId});

//       submitButton.addEventListener("click", function() {
//         var name = nameElement.value;
//         var age = ageElement.value;
  
//         window.alert("Name: " + name + "\\nAge: " + age);
//       });
//     });
//   `;
//   return code;
// }



