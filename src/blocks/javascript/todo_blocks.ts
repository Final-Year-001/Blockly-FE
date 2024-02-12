import Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";
  
//Create Task Block
Blockly.Blocks['create_task'] = {
  init: function() {
    this.appendValueInput("task_name")
        .setCheck("String")
        .appendField("Create Task with Name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Create a new task with the specified name.");
  }
};

javascriptGenerator.forBlock['create_task'] = function(block:any, generator:any) {
  var taskName = generator.valueToCode(block, 'task_name', Order.ATOMIC);
  return ` ${taskName}`;
};

//Read Tasks Block
Blockly.Blocks['read_tasks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read Tasks");
    this.setOutput(true, "Array");
    this.setColour(230);
    this.setTooltip("Read all tasks.");
  }
};

javascriptGenerator.forBlock['read_tasks'] = function(block:any, generator:any) {
  return `// Logic to read tasks and return an array of tasks`;
};

//Update Task Block
Blockly.Blocks['update_task'] = {
  init: function() {
    this.appendValueInput("task_id")
        .setCheck(null)
        .appendField("Update Task with ID");
    this.appendValueInput("new_name")
        .setCheck("String")
        .appendField("New Name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Update the task's name with a new one.");
  }
};

javascriptGenerator.forBlock['update_task'] = function(block:any, generator:any) {
  var taskId = generator.valueToCode(block, 'task_id', Order.ATOMIC);
  var newName = generator.valueToCode(block, 'new_name', Order.ATOMIC);
  return `// Logic to update task with ID ${taskId} to have the new name: ${newName}`;
};

//Delete Task Block
Blockly.Blocks['delete_task'] = {
  init: function() {
    this.appendValueInput("task_id")
        .setCheck(null)
        .appendField("Delete Task with ID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Delete a task with the specified ID.");
  }
};

javascriptGenerator.forBlock['delete_task'] = function(block:any, generator:any) {
  var taskId = generator.valueToCode(block, 'task_id', Order.ATOMIC);
  return `// Logic to delete task with ID ${taskId}`;
};

//Search Task Block
Blockly.Blocks['search_task'] = {
  init: function() {
    this.appendValueInput("search_term")
        .setCheck("String")
        .appendField("Search Task with Term");
    this.setOutput(true, "Array");
    this.setColour(230);
    this.setTooltip("Search for tasks with the specified term.");
  }
};

javascriptGenerator.forBlock['search_task'] = function(block:any, generator:any) {
  var searchTerm = generator.valueToCode(block, 'search_term', Order.ATOMIC);
  return `// Logic to search for tasks with the term: ${searchTerm}`;
};
