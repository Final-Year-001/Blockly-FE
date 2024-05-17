/* eslint-disable @typescript-eslint/no-explicit-any */
import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

Blockly.Blocks["express_server_creation"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.RIGHT)
      .appendField("Create Server");
    this.appendDummyInput()
      .appendField("Maximum Body Size in MB (Optional):")
      .appendField(new Blockly.FieldTextInput(), "maxBodySize");
    this.appendValueInput("PORT")
      .setCheck("Number")
      .appendField("Port (Optional)");
    this.appendStatementInput("MIDDLEWARE")
      .setCheck("middleware")
      .appendField("Middleware (Optional)");
    this.appendStatementInput("ROUTES").setCheck("route").appendField("Routes");
    this.setTooltip("Creates a new Express server instance.");
    this.setHelpUrl("");
    this.setStyle("Backend_Components_blocks");
  },
};

javascriptGenerator.forBlock["express_server_creation"] = function (
  block: any,
  generator: any
) {
  const port = generator.valueToCode(block, "PORT", 0);
  let maxBodySize = block.getFieldValue("maxBodySize");

  if (isNaN(maxBodySize) || maxBodySize <= 0) {
    maxBodySize = null; // Set default to 1MB
    block.setFieldValue(undefined, "maxBodySize");
  }

  const middleware = generator.statementToCode(block, "MIDDLEWARE");
  const routes = generator.statementToCode(block, "ROUTES");
  const errorHandler = generator.valueToCode(block, "ERROR_HANDLER", 0);

  // TODO: Assemble javascript into code variable.
  const code = `
    import express from 'express'
    import database from './lib/database/database.js';
    const app = express();

    app.use(express.json({ limit: '${
      maxBodySize ? maxBodySize + "mb" : "1mb"
    }' }))
    
    ${middleware}

    ${routes}
    
    app.use((err, req, res, next) => {
      ${errorHandler || "next()"}
    });

    app.listen("${port || 8999}", () => {
      console.log("listen on ${port || 8999}")
    });
  `;
  return code;
};

Blockly.Blocks["session_middleware"] = {
  init: function () {
    this.appendDummyInput().appendField("Session midleware");
    this.appendValueInput("secret").setCheck("String").appendField("secret");
    this.appendDummyInput()
      .appendField("Options:")
      .appendField(new Blockly.FieldTextInput(), "options");
    this.setTooltip(
      "By adding this compression middleware will compress responses return from the server and will provide user a faster download speed"
    );
    this.setHelpUrl("");
    this.setStyle("Session_Handling_blocks");
    this.setPreviousStatement(true, "middleware");
    this.setNextStatement(true, "middleware");
  },
};

javascriptGenerator.forBlock["session_middleware"] = function (
  block: any,
  generator: any
) {
  const secret = generator.valueToCode(block, "secret", 0);
  const options = block.getFieldValue("options");
  // check whether the options are in expected type

  const code = `
    import session from 'express-session';
    app.use(session(${
      options
        ? options
        : `{secret: ${secret || '"ASKDJASINAAKSJD"'}, resave: false,
           saveUninitialized: false, }`
    }));
  `;

  return code;
};

Blockly.Blocks["create_session"] = {
  init: function () {
    this.appendDummyInput().appendField("Create Session");
    this.appendValueInput("userDetails")
      .setCheck(null)
      .appendField("user details");
    this.setTooltip("this will create a session for the user");
    this.setHelpUrl("");
    this.setStyle("Session_Handling_blocks");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator.forBlock["create_session"] = function (
  block: any,
  generator: any
) {
  const userDetails = generator.valueToCode(block, "userDetails", 0);
  // check whether the options are in expected type

  const code = `req.session.user = ${userDetails};
  req.session.save();
  `;

  return code;
};

Blockly.Blocks["set_session_to_variable"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Set session to")
      .appendField(new Blockly.FieldVariable("item"), "var");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("Session_Handling_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["set_session_to_variable"] = function (
  block: any,
  generator: any
) {
  const variable_name = generator.nameDB_.getName(
    block.getFieldValue("var"),
    "VARIABLE"
  );

  const code = `${variable_name} = req.session;\n`;
  return code;
};

Blockly.Blocks["has_session"] = {
  init: function () {
    this.appendDummyInput().appendField("IS A SESSION AVAILABLE?");
    this.appendStatementInput("available")
      .setCheck(null)
      .appendField("if available");
    this.appendStatementInput("unavailable")
      .setCheck(null)
      .appendField("if unavailable");
    this.setHelpUrl("");
    this.setStyle("Session_Handling_blocks");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator.forBlock["has_session"] = function (
  block: any,
  generator: any
) {
  const ifAvailable = generator.statementToCode(block, "available");
  const ifUnavailable = generator.statementToCode(block, "unavailable");
  // check whether the options are in expected type

  const code = `if(req.session.user) {
    ${ifAvailable}
    res.end();
    return;
  } 
  ${ifUnavailable}
  `;

  return code;
};

Blockly.Blocks["save_session"] = {
  init: function () {
    this.appendDummyInput().appendField("SAVE SESSION");
    this.setHelpUrl("");
    this.setStyle("Session_Handling_blocks");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator.forBlock["save_session"] = function () {
  return `req.session.save();`;
};

Blockly.Blocks["end_session"] = {
  init: function () {
    this.appendDummyInput().appendField("END SESSION");
    this.setHelpUrl("");
    this.setStyle("Session_Handling_blocks");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator.forBlock["end_session"] = function () {
  return `req.session.destroy();`;
};
