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

Blockly.Blocks["html_button2"] = {
    init: function () {
      this.appendDummyInput().appendField("Create an HTML button:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Call my custom JavaScript function with input.");
      this.setHelpUrl("");
    },
  };
  
  javascriptGenerator.forBlock["html_button2"] = function () {
    return `
          var button = document.createElement('button');
          button.innerHTML = 'Click Me';
          document.body.appendChild(button);
        `;
  };

  Blockly.Blocks["html_input"] = {
    init: function () {
      this.appendDummyInput().appendField("Create an HTML input field:");
      this.setOutput(true, "Element");
      this.setColour(230);
      this.setTooltip("Create an HTML input field.");
      this.setHelpUrl("");
    },
  };

  javascriptGenerator.forBlock["html_input"] = function (block: any) {
    // Generate JavaScript code for creating an HTML input field
    const code = `
    <block type="create_html_button">
    <value name="text">
      <shadow type="text">
        <field name="TEXT">Click Me</field>
      </shadow>
    </value>
  </block>
    `;
  
    return [code];
  };
  
  



// makeButton();