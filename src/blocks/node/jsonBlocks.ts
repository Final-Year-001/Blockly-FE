/* eslint-disable @typescript-eslint/no-explicit-any */
import Blockly, { MenuOption } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";

Blockly.Blocks["extract_value"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Value of")
      .appendField(new Blockly.FieldVariable("item"), "var");
    this.appendValueInput("Key").setCheck("String").appendField("Key chain:");
    this.setOutput(true, null);
    this.setStyle("Json_blocks");
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

  const code = `${variableName}?.${key}`;

  return [code, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks["key_chain"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Value of");
    this.appendDummyInput()
      .appendField("key:")
      .appendField(new Blockly.FieldTextInput(), "key");
    this.appendValueInput("chainKey")
      .setCheck("String")
      .appendField("Key Chain:");
    this.setOutput(true, null);
    this.setStyle("Json_blocks");
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

  const code = `${key}${chainKey && "?."}${chainKey}`;

  return [code, Order.ATOMIC];
};

Blockly.Blocks["set_value_to_key"] = {
  init: function () {
    this.appendValueInput("value").setCheck(null).appendField("Set value");
    this.appendValueInput("Key").setCheck("String").appendField("Key chain:");
    this.setTooltip(
      "By adding this compression middleware will compress responses return from the server and will provide user a faster download speed"
    );
    this.setHelpUrl("");
    this.setStyle("Json_blocks");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator.forBlock["set_value_to_key"] = function (
  block: any,
  generator: any
) {
  const value = generator.valueToCode(block, "value", 0);
  let key = generator.valueToCode(block, "Key", 0);
  if (key) {
    key = key.replace(/\?/g, "");
  }
  // check whether the options are in expected type

  const code = `${key} = ${value};\n`;

  return code;
};

Blockly.Blocks["create_json_object"] = {
  init: function () {
    const varOptions: MenuOption[] = [
      ["const", "const"],
      ["let", "let"],
      ["var", "var"],
    ];
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Declare JSON Object");
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown(varOptions),
      "varType"
    );
    this.appendDummyInput()
      .appendField("Variable name")
      .appendField(new Blockly.FieldTextInput(), "varName");
    this.setHelpUrl("");
    this.setStyle("Json_blocks");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator.forBlock["create_json_object"] = function (block: any) {
  const varType = block.getFieldValue("varType");
  const varName = block.getFieldValue("varName");
  // check whether the options are in expected type

  const code = `${varType} ${varName} = {};\n`;

  return code;
};
