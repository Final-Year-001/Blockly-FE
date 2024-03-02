/* eslint-disable @typescript-eslint/no-explicit-any */
import Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";

Blockly.Blocks["authenticationTocken_middleware"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Authenticate Tocken Middleware");
    this.appendValueInput("accessTokensecret")
      .setCheck("String")
      .appendField("Access Token Secret");
    this.setColour(295);
    this.setTooltip("Creates a new Express server instance.");
    this.setHelpUrl("");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
};

javascriptGenerator.forBlock["authenticationTocken_middleware"] = function (
  block: any,
  generator: any
) {
  const accessTokensecret = generator.valueToCode(
    block,
    "accessTokensecret",
    0
  );

  // TODO: Assemble javascript into code variable.
  const code = `
    (req, res, nex) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      res.sendStatus(401);
    }
  
    jwt.verify(token, ${accessTokensecret}, (err, user) => {
      if (err) {
        res.sendStatus(403);
      }
      req.user = user;
      nex();
    });
  }
  `;
  return code;
};

Blockly.Blocks["get_hashed_password"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Hash password");
    this.appendDummyInput()
      .appendField("Path to password:")
      .appendField(new Blockly.FieldTextInput(), "password");
    this.setOutput(true, null);
    this.setColour(295);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["get_hashed_password"] = function (block: any) {
  const password = block.getFieldValue("password");

  const code = `await bcrypt.hash(${password}, await bcrypt.genSalt(10));`;

  return [code, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks["sign_jwt"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Create and get JWT token");
    this.appendDummyInput()
      .appendField("Path to user details:")
      .appendField(new Blockly.FieldTextInput(), "userDetailsPath");
    this.appendValueInput("accessTokensecret")
      .setCheck("String")
      .appendField("Access Token Secret");
    this.appendValueInput("expresIn")
      .setCheck("String")
      .appendField("Expires In");
    this.setOutput(true, null);
    this.setColour(295);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["sign_jwt"] = function (
  block: any,
  generator: any
) {
  const accessTokensecret = generator.valueToCode(
    block,
    "accessTokensecret",
    0
  );
  const userDetailsPath = block.getFieldValue("userDetailsPath");
  const expresIn = generator.valueToCode(block, "expresIn", 0);

  // TODO: Assemble javascript into code variable.
  const code = `
    jwt.sign({user: JSON.stringify(${userDetailsPath})}, ${accessTokensecret} ${
    expresIn && `, {expiresIn: ${expresIn} }`
  } );
    `;

  return [code, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks["match_passwords"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Compayer hashed password");
    this.appendDummyInput()
      .appendField("Path to incomming password:")
      .appendField(new Blockly.FieldTextInput(), "inPassPath");
    this.appendDummyInput()
      .appendField("Path to hashed stored password:")
      .appendField(new Blockly.FieldTextInput(), "storedPassPath");
    this.setOutput(true, null);
    this.setColour(295);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["match_passwords"] = function (block: any) {
  const inPassPath = block.getFieldValue("inPassPath");
  const storedPassPath = block.getFieldValue("storedPassPath");

  const code = `await bcrypt.compare(${inPassPath}, ${storedPassPath});`;

  return [code, javascriptGenerator.ORDER_NONE];
};
