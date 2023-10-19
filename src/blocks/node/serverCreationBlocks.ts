import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

Blockly.Blocks["express_server_creation"] = {
  init: function () {
    this.appendValueInput("PORT").setCheck("Number").appendField("Port");
    this.appendStatementInput("MIDDLEWARE")
      .setCheck(null)
      .appendField("Middleware");
    this.appendStatementInput("ROUTES").setCheck(null).appendField("Routes");
    this.appendValueInput("ERROR_HANDLER")
      .setCheck(null)
      .appendField("Error handler");
    this.appendValueInput("START_SERVER")
      .setCheck("Boolean")
      .appendField("Start server?");
    this.setColour(230);
    this.setTooltip("Creates a new Express server instance.");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["express_server_creation"] = function (
  block: any,
  generator: any
) {
  let port = generator.valueToCode(block, "PORT", 0);
  let middleware = generator.statementToCode(block, "MIDDLEWARE");
  let routes = generator.statementToCode(block, "ROUTES");
  let errorHandler = generator.valueToCode(block, "ERROR_HANDLER", 0);
  let startServer = generator.valueToCode(block, "START_SERVER", 0);

  // TODO: Assemble javascript into code variable.
  var code = `
    import express from 'express'

    const app = express();

    ${middleware}

    ${routes}

    app.use((err, req, res, next) => {
      ${errorHandler}
    });

    ${startServer ? `app.listen(${port});` : ""}
  `;
  return code;
};
