import Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";
  
// Blockly block definition for adding ToDo tasks
Blockly.Blocks["add_todo_task"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Add ToDo Task");
      this.appendValueInput("task_description")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Task Description:");
      this.setOutput(true, "String");
      this.setColour(230);
      this.setTooltip('Add a ToDo task to the list and generate code for displaying it as a rectangle box.');
    },
  };
  
  // JavaScript code generator for the block
  javascriptGenerator.forBlock["add_todo_task"] = function (
    block: any,
    generator: any
  ) {
    var taskDescription = generator.valueToCode(block, 'task_description', generator.ORDER_ATOMIC);
  
    var code = `
      
      var taskDescription = ${taskDescription};
      addTask(taskDescription);
  
      var taskBox = document.createElement('div');
      taskBox.style.border = '1px solid #000';
      taskBox.style.padding = '10px';
      taskBox.style.margin = '5px';
      taskBox.textContent = taskDescription;
      document.body.appendChild(taskBox);
    `;
  
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  
  
  