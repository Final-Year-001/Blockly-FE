import Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";
import './beginner';

// Handle form submission
Blockly.Blocks["handle_form_submission"] = {
  init: function () {
    this.appendValueInput("form")
        .setCheck("el_id_input")
        .appendField("Give the form name:");
    this.appendStatementInput("on_submit")
        .setCheck(null)
        .appendField("What to do when the form is finished");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('JS_Step4');
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
    };
    `;

    return code;
};

//set the form data
Blockly.Blocks['set_form_data_to'] = {
  init: function() {
    this.appendStatementInput("var")
        .setCheck("variable_input")
        .appendField("Pass form data to a label");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('JS_Step4');
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
        .setCheck("String")
        .appendField("Send the data to the backend using this link");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        this.appendDummyInput()
        .appendField("How to send the data")
        .appendField(new Blockly.FieldDropdown([["GET", "GET"], ["POST", "POST"], ["PUT", "PUT"], ["DELETE", "DELETE"]]), "method");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Add the label we passed the form data to");
    this.appendStatementInput("on_sucess")
        .setCheck(null)
        .appendField("On success what to do");
    this.appendStatementInput("on_error")
        .setCheck(null)
        .appendField("On error what to do");
        this.setStyle('JS_Step4');
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
  });
  `;
  return code;
};

//clear form data
Blockly.Blocks["clear_form_fields"] = {
  init: function () {
    this.appendValueInput("form")
      .setCheck("el_id_input")
      .appendField("Clear the form data in this form");
    this.appendValueInput("rest_button_id")
      .setCheck("el_id_input")
      .appendField("Give the button name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('JS_Step4');
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