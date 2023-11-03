import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

Blockly.Blocks["express_server_creation"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.RIGHT)
      .appendField("Create Server");
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
    this.setColour(65);
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
      ${errorHandler || "next()"}
    });

    ${startServer ? `app.listen(${port});` : ""}
  `;
  return code;
};

// helmet middleware

Blockly.Blocks["server_helmet_guard"] = {
  init: function () {
    this.appendDummyInput().appendField("Server Helmet Guard");
    this.appendDummyInput()
      .appendField("Options:")
      .appendField(new Blockly.FieldTextInput(""), "options");
    this.setTooltip(
      "This block will secure your server from various possible vulnarabilities by securing request headers "
    );
    this.setHelpUrl("");
    this.setColour(130);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator.forBlock["server_helmet_guard"] = function (block: any) {
  var options = block.getFieldValue("options");
  // check whether the options are in expected type

  var code = `
    import helmet from 'helmet';
    app.use(helmet(${options}));
  `;

  return code;
};

Blockly.Blocks["compression_middleware"] = {
  init: function () {
    this.appendDummyInput().appendField("Compress Responses");
    this.appendDummyInput()
      .appendField("Options:")
      .appendField(new Blockly.FieldTextInput(""), "options");
    this.setTooltip(
      "By adding this compression middleware will compress responses return from the server and will provide user a faster download speed"
    );
    this.setHelpUrl("");
    this.setColour(130);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator.forBlock["compression_middleware"] = function (block: any) {
  var options = block.getFieldValue("options");
  // check whether the options are in expected type

  var code = `
    import compression from 'compression';
    app.use(helmet(${options}));
  `;

  return code;
};

Blockly.Blocks["session_middleware"] = {
  init: function () {
    this.appendDummyInput().appendField("Session midleware");
    this.appendDummyInput()
      .appendField("Secret:")
      .appendField(new Blockly.FieldTextInput(), "secret");
    this.appendDummyInput()
      .appendField("Options:")
      .appendField(new Blockly.FieldTextInput(), "options");
    this.setTooltip(
      "By adding this compression middleware will compress responses return from the server and will provide user a faster download speed"
    );
    this.setHelpUrl("");
    this.setColour(130);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator.forBlock["session_middleware"] = function (block: any) {
  var secret = block.getFieldValue("secret");
  var options = block.getFieldValue("options");
  // check whether the options are in expected type

  var code = `
    import session from 'express-session';
    app.use(session(${
      options
        ? options
        : `{secret: ${
            secret || "ASKDJASINAAKSJD"
          }, resave: false, saveUninitialized:false, }`
    }));
  `;

  return code;
};

// // not correctly. only correct thing is block name
// Blockly.Blocks["encrypt"] = {
//   init: function () {
//     this.appendDummyInput().appendField("Compress Responses");
//     this.appendDummyInput()
//       .appendField("Options:")
//       .appendField(new Blockly.FieldTextInput(""), "options");
//     this.setTooltip(
//       "By adding this compression middleware will compress responses return from the server and will provide user a faster download speed"
//     );
//     this.setHelpUrl("");
//     this.setColour(130);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//   },
// };

// javascriptGenerator.forBlock["encrypt"] = function (block: any) {
//   var options = block.getFieldValue("options");
//   // check whether the options are in expected type

//   var code = `
//     import compression from 'compression';
//     app.use(helmet(${options}));
//   `;

//   return code;
// };

// // not correctly. only correct thing is block name will have to get path to incomming value and database value
// Blockly.Blocks["compareEncripted"] = {
//   init: function () {
//     this.appendDummyInput().appendField("Compress Responses");
//     this.appendDummyInput()
//       .appendField("Options:")
//       .appendField(new Blockly.FieldTextInput(""), "options");
//     this.setTooltip(
//       "By adding this compression middleware will compress responses return from the server and will provide user a faster download speed"
//     );
//     this.setHelpUrl("");
//     this.setColour(130);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//   },
// };

// javascriptGenerator.forBlock["encrypt"] = function (block: any) {
//   var options = block.getFieldValue("options");
//   // check whether the options are in expected type

//   var code = `
//     import compression from 'compression';
//     app.use(helmet(${options}));
//   `;

//   return code;
// };

Blockly.Blocks["create_session"] = {
  init: function () {
    this.appendDummyInput().appendField("Create Session");
    this.appendDummyInput()
      .appendField("Path to user ID:")
      .appendField(new Blockly.FieldTextInput(), "userIdPath");
    this.setTooltip("this will create a session for the user");
    this.setHelpUrl("");
    this.setColour(130);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator.forBlock["create_session"] = function (block: any) {
  var userIdPath = block.getFieldValue("userIdPath");
  // check whether the options are in expected type

  var code = `req.session.user = ${userIdPath}`;

  return code;
};

Blockly.Blocks["has_session"] = {
  init: function () {
    this.appendDummyInput().appendField("IS A SESSION AVAILABLE?");
    this.appendStatementInput("response if available")
      .setCheck(null)
      .appendField("available");
    this.appendStatementInput("response if unavailable")
      .setCheck(null)
      .appendField("unavailable");
    this.setHelpUrl("");
    this.setColour(130);
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

  var code = `if(req.session.user) {
    return res.json(${ifAvailable})
  } 
  res.json(${ifUnavailable})
  `;

  return code;
};

Blockly.Blocks["end_session"] = {
  init: function () {
    this.appendDummyInput().appendField("END SESSION");
    this.setHelpUrl("");
    this.setColour(130);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator.forBlock["end_session"] = function () {
  return `req.session.destroy()`;
};
