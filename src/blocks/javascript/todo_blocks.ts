import Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";
  
//Create Task Block
Blockly.Blocks['create_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add Task on Button Click");
        this.appendValueInput("button")
        .setCheck("el_id_input")
        .appendField("Add Button ID");
        this.appendValueInput("checkboxId")
      .setCheck("el_id_input")
      .appendField("Checkbox ID");
      this.appendValueInput("deletebtn")
      .setCheck("el_id_input")
      .appendField("Delete Button ID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
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

              var audio = new Audio('../src/sounds/add.wav');
              audio.play();
          });
      });
      `;
  return code;
};

//Complete Task Block
Blockly.Blocks['toggle_checkbox'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Toggle Checkbox on Click");
    this.appendValueInput("checkbox")
        .setCheck("el_id_input")
        .appendField("Checkbox ID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Toggle a checkbox when clicked.");
  }
};

javascriptGenerator.forBlock['toggle_checkbox'] = function(block:any, generator:any) {
  var checkboxId = generator.valueToCode(block, 'checkbox', Order.ATOMIC);

  // var code = `
  //   var listItem = document.getElementById(${checkboxId}).parentNode;
  //   if (document.getElementById(${checkboxId}).checked) {
  //     listItem.style.textDecoration = "line-through";
  //   } else {
  //     listItem.style.textDecoration = "none";
  //   }
  // `;

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
        .appendField("Delete Task on Button Click");
    this.appendValueInput("button")
        .setCheck("el_id_input")
        .appendField("Button ID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Delete a task when a button is clicked.");
  }
};

javascriptGenerator.forBlock['delete_task'] = function(block:any, generator:any) {
  var buttonId = generator.valueToCode(block, 'button', Order.ATOMIC);

//   var code = `
//   var listItem = document.getElementById(${buttonId}).parentNode;
//   var taskList = listItem.parentNode;
//   taskList.removeChild(listItem);

//   var audio = new Audio('../src/sounds/delete.wav');
//   audio.play();
// `;

var code = 
`document.addEventListener("click", function(event) {
  if (event.target && event.target.id === ${buttonId}) {
    var listItem = event.target.parentNode;
    var taskList = listItem.parentNode;
    taskList.removeChild(listItem);

    var audio = new Audio('../src/sounds/delete.wav');
    audio.play();
  }
});`

return code;
};