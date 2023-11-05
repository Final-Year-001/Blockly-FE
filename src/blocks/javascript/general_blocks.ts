import Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";
import './blocks';

// Console Log Block
Blockly.Blocks['console_log'] = {
    init: function () {
      this.appendValueInput('text')
        .setCheck(null) // Allow any value to be logged
        .appendField('Console Log');
      this.setPreviousStatement(true, null); // Previous block can be of any type
      this.setNextStatement(true, null); // Next block can be of any type
      this.setColour(110); // Color for visual distinction
      this.setTooltip('Log a message to the console.');
    }
  };
  
javascriptGenerator.forBlock['console_log'] = function (block:any, generator: any) {
    var text = generator.valueToCode(block, 'text', generator.ORDER_ATOMIC);
    var code = `console.log(${text})\n`;
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

//event listener to an HTML element
Blockly.Blocks['event_listener'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Add Event Listener to the button")
        .appendField(new Blockly.FieldDropdown([
          ["click", "click"],
          ["mouseover", "mouseover"],
          ["keydown", "keydown"]
        ]), "event");
      this.appendValueInput("element")
        .setCheck("el_id_input")
        .appendField("to element ID");
      this.appendStatementInput("handler")
        .setCheck(null)
        .appendField("do");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip('Attach an event listener to an HTML element.');
    }
};

javascriptGenerator.forBlock['event_listener'] = function (block:any, generator: any) {
    const event = block.getFieldValue('event');
    const element = generator.valueToCode(block, 'element', generator.ORDER_ATOMIC);
    const handler = generator.statementToCode(block, 'handler');
  
    return `document.getElementById(${element}).addEventListener('${event}', function(event) {\n${handler}});\n`;
};
  