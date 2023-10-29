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
  let statements_name = generator.statementToCode(block, "NAME");

  // TODO: Assemble javascript into code variable.
  var code = `
    app.${dropdown_method}((req, res) => {
        
    })
  `;
  return code;
};

Blockly.Blocks['get_request'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set request body to")
        .appendField(new Blockly.FieldVariable("item"), "NAME")
        .appendField("of type")
        .appendField(new Blockly.FieldDropdown([["JSON","json"], ["XML","xml"], ["URL Form encoded","url_from_encoded"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascriptGenerator.forBlock['get_request'] = function(block, generator) {
  var variable_name = generator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_name = block.getFieldValue('NAME');
  
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};


Blockly.Blocks['respond_json'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("respond with JSON")
        .appendField(new Blockly.FieldVariable("item"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

javascriptGenerator.forBlock['respond_json'] = function(block, generator) {
  var variable_name = generator.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};