/* eslint-disable @typescript-eslint/no-explicit-any */
import Blockly from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";

Blockly.Blocks["insert_to_collection"] = {
  init: function () {
    this.appendValueInput("data").setCheck(null).appendField("Insert data to");
    this.appendDummyInput();
    this.appendValueInput("collection")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("from");
    this.setOutput(true, null);
    this.setStyle("Database_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["insert_to_collection"] = function (
  block: any,
  generator: any
) {
  const value_collection = generator.valueToCode(
    block,
    "collection",
    Order.ATOMIC
  );
  const value_id = generator.valueToCode(block, "data", Order.ATOMIC);

  const code = `await database.add(${value_id},${value_collection})\n`;
  return [code, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks["find_by_id_db"] = {
  init: function () {
    this.appendValueInput("collection")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("Find data from collection");
    this.appendDummyInput().appendField("with id");
    this.appendValueInput("id").setCheck(null).setAlign(Blockly.ALIGN_CENTRE);
    this.setOutput(true, null);
    this.setStyle("Database_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["find_by_id_db"] = function (
  block: any,
  generator: any
) {
  const value_collection = generator.valueToCode(
    block,
    "collection",
    Order.ATOMIC
  );
  const value_id = generator.valueToCode(block, "id", Order.ATOMIC);

  const code = `await database.get(${value_collection},${value_id})`;
  return [code, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks["find_with_filter"] = {
  init: function () {
    this.appendDummyInput().appendField("Find in database");
    this.appendStatementInput("filter").setCheck(null).appendField("Filter");
    this.setOutput(true, null);
    this.setStyle("Database_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["find_with_filter"] = function (
  block: any,
  generator: any
) {
  const statements_filter = generator.statementToCode(block, "filter");
  const code = "...";
  return [code, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks["find_in_database_filter"] = {
  init: function () {
    this.appendValueInput("key")
      .setCheck(null)
      .appendField("find filter")
      .appendField("key");
    this.appendDummyInput().appendField("value");
    this.appendValueInput("value").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("Database_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["find_in_database_filter"] = function (
  block: any,
  generator: any
) {
  const value_key = generator.valueToCode(block, "key", Order.ATOMIC);
  const value_value = generator.valueToCode(block, "value", Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  const code = "...\n";
  return code;
};
