import Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";
  
//Create Task Block
Blockly.Blocks['create_task'] = {
  init: function() {
    this.appendValueInput("task_name")
        .setCheck("String")
        .appendField("Add Task to Todo List");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Add a new task to the todo list.");
  }
};

javascriptGenerator.forBlock['create_task'] = function(block:any, generator:any) {
  var taskName = generator.valueToCode(block, 'task_name', Order.ATOMIC);
  var code = ` 
  // Logic to add task to the todo list to backend: ${taskName}
  var audio = new Audio('../src/sounds/add.wav');
  audio.play();
  `;
  return code;
};

//Read Tasks Block
Blockly.Blocks['read_tasks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read Tasks");
    this.setOutput(true, "Array");
    this.setColour(0);
    this.setTooltip("Read all tasks.");
  }
};

javascriptGenerator.forBlock['read_tasks'] = function(block:any, generator:any) {
  var code = ` // Logic to read tasks and return an array of tasks`;
  return code;
};

//Complete Task Block
Blockly.Blocks['update_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Complete Task");
    this.appendStatementInput("TASK")
        .setCheck(null)
        .appendField("Task");
    this.setColour(110);
    this.setTooltip("Complete a task by ticking the checkbox.");
  }
};

javascriptGenerator.forBlock['update_task'] = function(block:any, generator:any) {
  var statements_task = generator.statementToCode(block, 'TASK');
  return `
  <span style="text-decoration: line-through;">${statements_task}</span>
  `;
};

//Delete Task Block
Blockly.Blocks['delete_task'] = {
  init: function() {
    this.appendValueInput("task_id")
        .setCheck(null)
        .appendField("Delete Task with name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Delete a task with the specified ID.");
  }
};

javascriptGenerator.forBlock['delete_task'] = function(block:any, generator:any) {
  var takeName = generator.valueToCode(block, 'task_id', Order.ATOMIC);
  var code = `// Logic to delete task with ID ${takeName}
  var audio = new Audio('../src/sounds/delete.wav');
  audio.play();
  `;
  return code;
};

//Search Task Block
Blockly.Blocks['search_task'] = {
  init: function() {
    this.appendValueInput("search_term")
        .setCheck("String")
        .appendField("Search Task with Term");
    this.setOutput(true, "Array");
    this.setColour(0);
    this.setTooltip("Search for tasks with the specified term.");
  }
};

javascriptGenerator.forBlock['search_task'] = function(block:any, generator:any) {
  var searchTerm = generator.valueToCode(block, 'search_term', Order.ATOMIC);
  return `// Logic to search for tasks with the term: ${searchTerm}`;
};