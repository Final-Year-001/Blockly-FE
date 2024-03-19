/* eslint-disable @typescript-eslint/no-explicit-any */
import Blockly, { MenuOption } from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";

Blockly.Blocks["api_method"] = {
  init: function () {
    this.appendStatementInput("NAME")
      .setCheck(null)
      .appendField(new Blockly.FieldLabelSerializable("API Method"), "Method")
      .appendField(
        new Blockly.FieldDropdown([
          ["get", "get"],
          ["post", "post"],
          ["patch", "patch"],
          ["delete", "delete"],
        ]),
        "api_method_name"
      );
    this.appendDummyInput()
      .appendField("Path")
      .appendField(new Blockly.FieldTextInput("/"), "path");
    this.setPreviousStatement(true, "route");
    this.setNextStatement(true, "route");
    this.setStyle("General_Middlewares_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["api_method"] = function (
  block: any,
  generator: any
) {
  const dropdown_method = block.getFieldValue("api_method_name");
  const path = block.getFieldValue("path");
  const statements_name = generator.statementToCode(block, "NAME");

  const code = `
    app.${dropdown_method}("${path}",async (req, res) => {
      try {
        ${statements_name}
      }catch(e){
        res.status(500).json(e)
        console.error(e);
      }
res.end(); 
    });
  `;
  return code;
};

Blockly.Blocks["get_request"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Set request body to")
      .appendField(new Blockly.FieldVariable("item"), "var")
      .appendField("of type")
      .appendField(
        new Blockly.FieldDropdown([
          ["JSON", "json"],
          ["XML", "xml"],
          ["URL Form encoded", "url_from_encoded"],
        ]),
        "NAME"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("Backend_Components_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["get_request"] = function (
  block: any,
  generator: any
) {
  const variable_name = generator.nameDB_.getName(
    block.getFieldValue("var"),
    "VARIABLE"
  );
  const dropdown_name = block.getFieldValue("NAME");

  let code = "";
  switch (dropdown_name) {
    case "JSON":
      code = `${variable_name} = req.body;\n`;
      break;
    default:
      code = `${variable_name} = req.body;\n`;
  }
  return code;
};

Blockly.Blocks["respond_json"] = {
  init: function () {
    this.appendValueInput("var").setCheck(null).appendField("respond with");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("Backend_Components_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["respond_json"] = function (
  block: any,
  generator: any
) {
  const value_var = generator.valueToCode(block, "var", Order.ATOMIC);
  return `res.json(${value_var});\n`;
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
    this.setStyle("Backend_Components_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["respond_with_status"] = function (block: any) {
  const dropdown_name = block.getFieldValue("status");
  const code = `res.status(${dropdown_name});\n`;
  return code;
};
