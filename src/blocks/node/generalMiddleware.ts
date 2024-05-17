/* eslint-disable @typescript-eslint/no-explicit-any */
import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

Blockly.Blocks["server_helmet_guard"] = {
  init: function () {
    this.appendDummyInput().appendField("Server Helmet Guard");
    this.appendDummyInput()
      .appendField("Custom Options (Optional):")
      .appendField(new Blockly.FieldTextInput(""), "options");
    this.setTooltip(
      "This block will secure your server from various possible vulnarabilities by securing request headers "
    );
    this.setHelpUrl("");
    this.setStyle("General_Middlewares_blocks");
    this.setPreviousStatement(true, "middleware");
    this.setNextStatement(true, "middleware");
  },
};

javascriptGenerator.forBlock["server_helmet_guard"] = function (block: any) {
  const options = block.getFieldValue("options");
  // check whether the options are in expected type

  const code = `
      import helmet from 'helmet';
      app.use(helmet(${options}));
    `;

  return code;
};

Blockly.Blocks["compression_middleware"] = {
  init: function () {
    this.appendDummyInput().appendField("Compress Responses");
    this.appendDummyInput()
      .appendField("Custom Options (Optional):")
      .appendField(new Blockly.FieldTextInput(""), "options");
    this.setTooltip(
      "By adding this compression middleware will compress responses return from the server and will provide user a faster download speed"
    );
    this.setHelpUrl("");
    this.setStyle("General_Middlewares_blocks");
    this.setPreviousStatement(true, "middleware");
    this.setNextStatement(true, "middleware");
  },
};

javascriptGenerator.forBlock["compression_middleware"] = function (block: any) {
  const options = block.getFieldValue("options");
  // check whether the options are in expected type

  const code = `
      import compression from 'compression';
      app.use(compression(${options}));
    `;

  return code;
};

Blockly.Blocks["cors_middleware"] = {
  init: function () {
    this.appendDummyInput().appendField("Cors midleware");
    this.appendDummyInput()
      .appendField("Origin:")
      .appendField(new Blockly.FieldTextInput(), "origin");
    this.appendDummyInput()
      .appendField("Methods:")
      .appendField(new Blockly.FieldTextInput(), "methods");
    this.appendDummyInput()
      .appendField("Custom Options (optional):")
      .appendField(new Blockly.FieldTextInput(), "options");
    this.setTooltip(
      "By adding this compression middleware will compress responses return from the server and will provide user a faster download speed"
    );
    this.setHelpUrl("");
    this.setStyle("General_Middlewares_blocks");
    this.setPreviousStatement(true, "middleware");
    this.setNextStatement(true, "middleware");
  },
};

javascriptGenerator.forBlock["cors_middleware"] = function (block: any) {
  const origin = block.getFieldValue("origin");
  let methods = block.getFieldValue("methods");
  const options = block.getFieldValue("options");
  function isStringArray(str: string) {
    // Regular expression to match a string array
    // It looks for square brackets with strings inside, separated by commas
    const regex =
      // eslint-disable-next-line no-useless-escape
      /^\s*\[\s*('.*?'|".*?"|[^\[\]'",]+)\s*(,\s*('.*?'|".*?"|[^\[\]'",]+)\s*)*\]\s*$/;

    return regex.test(str);
  }

  if (!isStringArray(methods)) {
    methods = null;
    block.setFieldValue(undefined, "methods");
  }
  // check whether the options are in expected type

  const code = `
      import cors from 'cors';
      app.use(cors(${
        options
          ? options
          : `
          {origin: ${origin || "'*'"},
            methods: ${methods || "['GET','PUT','POST','DELETE']}"}`
      }));
    `;

  return code;
};

Blockly.Blocks["express_json_middleware"] = {
  init: function () {
    this.appendDummyInput().appendField("Express Json midleware");
    this.appendDummyInput()
      .appendField("Custom Options (optional):")
      .appendField(new Blockly.FieldTextInput(), "options");
    this.setTooltip(
      "By adding this compression middleware will compress responses return from the server and will provide user a faster download speed"
    );
    this.setHelpUrl("");
    this.setStyle("General_Middlewares_blocks");
    this.setPreviousStatement(true, "middleware");
    this.setNextStatement(true, "middleware");
  },
};

javascriptGenerator.forBlock["express_json_middleware"] = function (
  block: any
) {
  const options = block.getFieldValue("options");
  // check whether the options are in expected type

  const code = `
      app.use(express.json(${options}));
    `;

  return code;
};

Blockly.Blocks["express_URLEncoder_middleware"] = {
  init: function () {
    this.appendDummyInput().appendField("Express URLEncoder midleware");
    this.appendDummyInput()
      .appendField("Custom Options (optional):")
      .appendField(new Blockly.FieldTextInput(), "options");
    this.setTooltip(
      "By adding this compression middleware will compress responses return from the server and will provide user a faster download speed"
    );
    this.setHelpUrl("");
    this.setStyle("General_Middlewares_blocks");
    this.setPreviousStatement(true, "middleware");
    this.setNextStatement(true, "middleware");
  },
};

javascriptGenerator.forBlock["express_URLEncoder_middleware"] = function (
  block: any
) {
  const options = block.getFieldValue("options");
  // check whether the options are in expected type

  const code = `
      app.use(express.urlencoded(${options}));
    `;

  return code;
};

Blockly.Blocks["express_text_middleware"] = {
  init: function () {
    this.appendDummyInput().appendField("Express text midleware");
    this.appendDummyInput()
      .appendField("Custom Options (optional):")
      .appendField(new Blockly.FieldTextInput(), "options");
    this.setTooltip(
      "By adding this compression middleware will compress responses return from the server and will provide user a faster download speed"
    );
    this.setHelpUrl("");
    this.setStyle("General_Middlewares_blocks");
    this.setPreviousStatement(true, "middleware");
    this.setNextStatement(true, "middleware");
  },
};

javascriptGenerator.forBlock["express_text_middleware"] = function (
  block: any
) {
  const options = block.getFieldValue("options");
  // check whether the options are in expected type

  const code = `
      app.use(express.text(${options}));
    `;

  return code;
};

Blockly.Blocks["express_raw_middleware"] = {
  init: function () {
    this.appendDummyInput().appendField("Express raw midleware");
    this.appendDummyInput()
      .appendField("Custom Options (optional):")
      .appendField(new Blockly.FieldTextInput(), "options");
    this.setTooltip(
      "By adding this compression middleware will compress responses return from the server and will provide user a faster download speed"
    );
    this.setHelpUrl("");
    this.setStyle("General_Middlewares_blocks");
    this.setPreviousStatement(true, "middleware");
    this.setNextStatement(true, "middleware");
  },
};

javascriptGenerator.forBlock["express_raw_middleware"] = function (block: any) {
  const options = block.getFieldValue("options");
  // check whether the options are in expected type

  const code = `
      app.use(express.raw(${options}));
    `;

  return code;
};
