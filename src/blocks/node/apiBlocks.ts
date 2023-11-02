import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["api_method"] = function (
  block: any,
  generator: any
) {
  let dropdown_method = block.getFieldValue("api_method_name");
  let path = block.getFieldValue("path");
  let statements_name = generator.statementToCode(block, "NAME");

  // TODO: Assemble javascript into code variable.
  var code = `
    app.${dropdown_method}("${path}",(req, res) => {
      try {
        ${statements_name}
      }catch(e){
        console.error(e);
      }
    });
  `;
  return code;
};

Blockly.Blocks['get_request'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set request body to")
        .appendField(new Blockly.FieldVariable("item"), "var")
        .appendField("of type")
        .appendField(new Blockly.FieldDropdown([["JSON","json"], ["XML","xml"], ["URL Form encoded","url_from_encoded"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascriptGenerator.forBlock['get_request'] = function(block: any, generator: any) {
  let variable_name = generator.nameDB_.getName(block.getFieldValue('var'), 'VARIABLE');
  let dropdown_name = block.getFieldValue('NAME');

  let code = ""
  switch(dropdown_name) {
    case "JSON":
      code = `let ${variable_name}1 = res.body;\n`;
      break;
    default:
      code = `let ${variable_name}1 = res.body;\n`
  }
  return code;
};


Blockly.Blocks['respond_json'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("respond with JSON")
        .appendField(new Blockly.FieldVariable("item"), "var");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascriptGenerator.forBlock['respond_json'] = function(block: any, generator: any) {
  var variable_name = generator.nameDB_.getName(block.getFieldValue('var'), 'VARIABLE');

  return `res.json(${variable_name}1);\n`;
};