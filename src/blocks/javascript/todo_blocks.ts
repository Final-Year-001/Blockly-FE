import Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";
  
//Create Task Block
Blockly.Blocks['create_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Make the button add the task");
        this.appendValueInput("button")
        .setCheck("el_id_input")
        .appendField("Name of the add button");
        this.appendValueInput("checkboxId")
      .setCheck("el_id_input")
      .appendField("Name of the checkbox");
      this.appendValueInput("deletebtn")
      .setCheck("el_id_input")
      .appendField("Name of the delete button");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('JS_Step5');
    this.setTooltip("Add a task when a button is clicked.");
  }
};

javascriptGenerator.forBlock['create_task'] = function(block:any, generator:any) {
  var buttonId = generator.valueToCode(block, 'button', Order.ATOMIC);
  var deletebtnId = generator.valueToCode(block, 'deletebtn', Order.ATOMIC);
  var checkboxId = generator.valueToCode(block, 'checkboxId', Order.ATOMIC);
  var code = `
      document.addEventListener("DOMContentLoaded", function() {
          document.getElementById(${buttonId}).addEventListener("click", function() {
              var taskInput = document.getElementById("taskInput");
              var taskList = document.getElementById("taskList");

              if (taskInput.value === "") {
                  alert("Please enter a task!");
                  return;
              }

              var li = document.createElement("li");
              var checkbox = document.createElement("input");
              checkbox.type = "checkbox";
              checkbox.id = ${checkboxId};
              var deleteButton = document.createElement("button");
              deleteButton.textContent = "Delete";
              deleteButton.id = ${deletebtnId};

              li.appendChild(checkbox);
              li.appendChild(document.createTextNode(taskInput.value + ' '));
              li.appendChild(deleteButton);
        
              taskList.appendChild(li);
              taskInput.value = "";
          });
      });
      `;
  return code;
};

//Complete Task Block
Blockly.Blocks['toggle_checkbox'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Make the box tick when clicked");
    this.appendValueInput("checkbox")
        .setCheck("el_id_input")
        .appendField("Name of the checkbox");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('JS_Step5');
    this.setTooltip("Toggle a checkbox when clicked.");
  }
};

javascriptGenerator.forBlock['toggle_checkbox'] = function(block:any, generator:any) {
  var checkboxId = generator.valueToCode(block, 'checkbox', Order.ATOMIC);

  var code =
  `document.addEventListener("change", function(event) {
    if (event.target && event.target.type === "checkbox") {
      var listItem = event.target.parentNode;
      if (event.target.checked) {
        listItem.style.textDecoration = "line-through";
      } else {
        listItem.style.textDecoration = "none";
      }
    }
  });`
  
  return code;
};

//Delete Task Block
Blockly.Blocks['delete_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Make the button erase the task");
    this.appendValueInput("button")
        .setCheck("el_id_input")
        .appendField("Name of the delete button");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('JS_Step5');
    this.setTooltip("Delete a task when a button is clicked.");
  }
};

javascriptGenerator.forBlock['delete_task'] = function(block:any, generator:any) {
  var buttonId = generator.valueToCode(block, 'button', Order.ATOMIC);

  var code = 
  `document.addEventListener("click", function(event) {
    if (event.target && event.target.id === ${buttonId}) {
      var listItem = event.target.parentNode;
      var taskList = listItem.parentNode;
      taskList.removeChild(listItem);
    }
  });`

  // var audio = new Audio('../src/sounds/delete.mp3');
  // audio.play();
return code;
};