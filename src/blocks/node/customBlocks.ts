/* eslint-disable @typescript-eslint/no-explicit-any */
import Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";

Blockly.Blocks["custom_code"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Custom code");
    this.appendDummyInput()
      .appendField("Your code")
      .appendField(new Blockly.FieldMultilineInput(), "code");
    this.setHelpUrl("");
    this.setStyle("Custom_blocks");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator.forBlock["custom_code"] = function (block: any) {
  const yourCode = block.getFieldValue("code");
  // check whether the options are in expected type

  const code = `${yourCode}`;

  return code;
};

Blockly.Blocks["custom_input"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Custom input");
    this.appendDummyInput()
      .appendField("code:")
      .appendField(new Blockly.FieldTextInput(), "code");
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setStyle("Custom_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["custom_input"] = function (block: any) {
  const yourCode = block.getFieldValue("code");

  const code = `${yourCode}`;

  return [code, Order.ATOMIC];
};
