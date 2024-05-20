import Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";
  
//Create Task Block
// Blockly.Blocks['create_task'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("Make the button add the task");
//     this.appendValueInput("button")
//         .setCheck("el_id_input")
//         .appendField("Name of the add button");
//     this.appendDummyInput()
//         .appendField("Match the input-box id")
//         .appendField(new Blockly.FieldTextInput('taskInputId'), 'taskInputId');
//     this.appendDummyInput()
//         .appendField("Match the list id")
//         .appendField(new Blockly.FieldTextInput('taskListId'), 'taskListId'); 
//     this.appendDummyInput()
//         .appendField("Name of the checkbox")
//         .appendField(new Blockly.FieldTextInput('checkboxId'), 'checkboxId');
//     this.appendDummyInput()
//         .appendField("Name of the delete button")
//         .appendField(new Blockly.FieldTextInput('deleteButtonId'), 'deletebtn');
//     this.appendValueInput('endpointUrl')
//         .setCheck("String")
//         .appendField("Add the link to send the task list to backend")
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setStyle('JS_Step5');
//     this.setTooltip("Add a task when a button is clicked.");
//   }
// };

// javascriptGenerator.forBlock['create_task'] = function(block:any, generator:any) {
//   var buttonId = generator.valueToCode(block, 'button', Order.ATOMIC);
//   var taskInputId = block.getFieldValue('taskInputId');
//   var taskListId = block.getFieldValue('taskListId');
//   var checkboxId = block.getFieldValue('checkboxId');
//   var deletebtnId = block.getFieldValue('deletebtn');
//   var endpointUrl = block.getFieldValue('endpointUrl');

//   var code = `
//       document.addEventListener("DOMContentLoaded", function() {
//           document.getElementById(${buttonId}).addEventListener("click", function() {
//               var taskInput = document.getElementById('${taskInputId}');
//               var taskList = document.getElementById('${taskListId}');

//               if (taskInput.value === "") {
//                   alert("Please enter a task!");
//                   return;
//               }

//               var taskData = {
//                 task: taskInput.value,
//                 checked: document.getElementById('${checkboxId}').checked
//             };

//             var fetchOptions = {
//                 method: "POST",
//                 body: JSON.stringify(taskData),
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//             };

//             fetch("${endpointUrl}", fetchOptions)
//                 .then(res => res.json())
//                 .then((res) => {
//                   alert("Task added successfully!");
//                     console.log(res);
//                 })
//                 .catch((error) => {
//                   alert("Error adding task. Please try again.");
//                     console.log(error);
//                 });


//               var li = document.createElement("li");
//               var checkbox = document.createElement("input");
//               checkbox.type = "checkbox";
//               checkbox.id = '${checkboxId}';
//               var deleteButton = document.createElement("button");
//               deleteButton.textContent = "Delete";
//               deleteButton.id = '${deletebtnId}';

//               li.appendChild(checkbox);
//               li.appendChild(document.createTextNode(taskInput.value + ' '));
//               li.appendChild(deleteButton);
        
//               taskList.appendChild(li);
//               taskInput.value = "";
//           });
//       });
//       `;
//   return code;
// };

Blockly.Blocks['create_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Make the button add the task");
    this.appendValueInput("button")
        .setCheck("el_id_input")
        .appendField("Name of the add button");
    this.appendDummyInput()
        .appendField("Match the input-box id")
        .appendField(new Blockly.FieldTextInput('taskInputId'), 'taskInputId');
    this.appendDummyInput()
        .appendField("Match the list id")
        .appendField(new Blockly.FieldTextInput('taskListId'), 'taskListId'); 
    this.appendDummyInput()
        .appendField("Name of the checkbox")
        .appendField(new Blockly.FieldTextInput('checkboxId'), 'checkboxId');
    this.appendDummyInput()
        .appendField("Name of the delete button")
        .appendField(new Blockly.FieldTextInput('deleteButtonId'), 'deletebtn');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "create_task");
    this.setStyle('JS_Step5');
    this.setTooltip("Add a task when a button is clicked.");
  }
};

javascriptGenerator.forBlock['create_task'] = function(block:any, generator:any) {
  var buttonId = generator.valueToCode(block, 'button', Order.ATOMIC);
  var taskInputId = block.getFieldValue('taskInputId');
  var taskListId = block.getFieldValue('taskListId');
  var checkboxId = block.getFieldValue('checkboxId');
  var deletebtnId = block.getFieldValue('deletebtn');

  var code = `
      document.addEventListener("DOMContentLoaded", function() {
          document.getElementById(${buttonId}).addEventListener("click", function() {
              var taskInput = document.getElementById('${taskInputId}');
              var taskList = document.getElementById('${taskListId}');

              if (taskInput.value === "") {
                  alert("Please enter a task!");
                  return;
              }

              var li = document.createElement("li");
              var checkbox = document.createElement("input");
              checkbox.type = "checkbox";
              checkbox.id = '${checkboxId}';
              var deleteButton = document.createElement("button");
              deleteButton.textContent = "Delete";
              deleteButton.id = '${deletebtnId}';

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
        .appendField("Match the checkbox name");
    this.setPreviousStatement(true, "create_task");
    this.setNextStatement(true, "toggle_checkbox");
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
  });
  `;
  
  return code;
};

//Delete Task Block
Blockly.Blocks['delete_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Make the button erase the task");
    this.appendValueInput("button")
        .setCheck("el_id_input")
        .appendField("Match the delete button name");
    this.setPreviousStatement(true, "toggle_checkbox");
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
  });
  `;

return code;
};