import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

Blockly.Blocks["api_method"] = {
  init: function () {
    this.appendStatementInput("NAME")
      .setCheck(null)
      .appendField(
        new Blockly.FieldDropdown([
          ["GET", "get"],
          ["POST", "post"],
          ["PATCH", "patch"],
        ]),
        "Method"
      );
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["api_method"] = function (
  block: any,
  generator: any
) {
  let dropdown_method = block.getFieldValue("Method");
  let statements_name = generator.statementToCode(block, "NAME");

  // TODO: Assemble javascript into code variable.
  var code = `
    app.${dropdown_method}((req, res) => {
        
    })
  `;
  return code;
};
