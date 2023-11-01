import Blockly, { MenuOption } from "blockly";
import { javascriptGenerator, Order } from "blockly/javascript";

Blockly.Blocks["insert_db"] = {
  init: function () {
    this.appendValueInput("collection")
      .setCheck(null)
      .appendField("Insert data from ")
      .appendField(new Blockly.FieldVariable("item"), "var")
      .appendField("to collection");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["insert_db"] = function (
  block: any,
  generator: any
) {
  let collection_name = generator.nameDB_.getName(
    block.getFieldValue("var"),
    "VARIABLE"
  );

  let value_name = generator.valueToCode(block, "collection", Order.ATOMIC);

  var code = `
  import database from "./lib/database/database.js";
  await database.add(${value_name},${collection_name}1);\n`;
  return code;
};

Blockly.Blocks["respond_with_status"] = {
  init: function () {
    const statusOptions: MenuOption[] = [
      ["OK (200)", "200"],
      ["Created (201)", "201"],
      ["Accepted (202)", "202"],
      ["No Content (204)", "204"],
      ["Bad Request (400)", "400"],
      ["Unauthorized (401)", "401"],
      ["Forbidden (403)", "403"],
      ["Not Found (404)", "404"],
      ["Internal Server Error (500)", "500"],
    ];
    this.appendDummyInput()
      .appendField("respond with")
      .appendField(new Blockly.FieldDropdown(statusOptions), "status");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["respond_with_status"] = function (
  block: any,
  generator: any
) {
  let dropdown_name = block.getFieldValue("status");
  let code = `res.status(${dropdown_name});\n`;
  return code;
};
