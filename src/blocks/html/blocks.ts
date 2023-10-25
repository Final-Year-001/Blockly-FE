import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

Blockly.Blocks["html_button"] = {
  init: function () {
    this.appendDummyInput().appendField("Create an HTML button:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Call my custom JavaScript function with input.");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["html_button"] = function () {
  return `
        var button = document.createElement('button');
        button.innerHTML = 'Click Me';
        document.body.appendChild(button);
      `;
};
// makeButton();