/* eslint-disable @typescript-eslint/no-explicit-any */
import Blockly from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";

Blockly.Blocks["extract_value"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Value of")
      .appendField(new Blockly.FieldVariable("item"), "var");
    this.appendValueInput("Key").setCheck("String").appendField("Key chain:");
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour(295);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["extract_value"] = function (
  block: any,
  generator: any
) {
  const variableName = generator.nameDB_.getName(
    block.getFieldValue("var"),
    "VARIABLE"
  );
  const key = generator.valueToCode(block, "Key", 0);

  const code = `${variableName}.${key}`;

  return [code, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks["key_chain"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Value of");
    this.appendDummyInput()
      .appendField("Key:")
      .appendField(new Blockly.FieldTextInput(), "key");
    this.appendValueInput("chainKey")
      .setCheck("String")
      .appendField("Key Chain:");
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour(295);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["key_chain"] = function (
  block: any,
  generator: any
) {
  const key = block.getFieldValue("key");
  const chainKey = generator.valueToCode(block, "chainKey", 0);

  const code = `${key}${chainKey && "."}${chainKey}`;

  return [code, Order.ATOMIC];
};
