/* eslint-disable @typescript-eslint/no-explicit-any */
import Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";

Blockly.Blocks["authenticationTocken_middleware"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Authenticate JWT Middleware");
    this.appendValueInput("token").setCheck(null).appendField("Token");
    this.appendValueInput("accessTokensecret")
      .setCheck("String")
      .appendField("Access Token Secret");
    this.setStyle("JWT_Authentication_blocks");
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

  const token = generator.valueToCode(block, "token", 0);

  const codeWithToken = `const token = ${token}`;

  // TODO: Assemble javascript into code variable.
  const code = `
    import jwt from 'jsonwebtoken';

    app.use(
      (req, res, next) => {
        ${
          token
            ? codeWithToken
            : "\nconst authHeader = req.headers['authorization'];" +
              "\nconst token = authHeader && authHeader.split(' ')[1];"
        }
        \nif (!token) {
          req.auth = {
            token,
            valid: false,
          };
          next();
        } else {
                
        jwt.verify(token, ${
          accessTokensecret || '"ASSDHSYEKSI"'
        }, (err, user) => {
          if (err) {
            req.auth = {
              err,
              token,
              valid: false,
            };
            next();
          } else {
            req.auth = {
              token,
              valid: true,
              user: user,
            };
            next();
          }
        });

        }
      }
    )
    
  `;
  return code;
};

Blockly.Blocks["get_auth_object"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("JWT auth object");
    this.setOutput(true, null);
    this.setStyle("JWT_Authentication_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["get_auth_object"] = function () {
  const code = `req.auth`;

  return [code, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks["get_salt"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Generated salt value");
    this.setOutput(true, null);
    this.setStyle("JWT_Authentication_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["get_salt"] = function () {
  const code = `await bcrypt.genSalt(10)`;

  return [code, javascriptGenerator.ORDER_NONE];
};

Blockly.Blocks["get_hashed_password"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Hash password");
    this.appendValueInput("password").setCheck(null).appendField("Password:");
    this.appendValueInput("salt")
      .setCheck(null)
      .appendField("Slat (Optional):");
    this.setOutput(true, null);
    this.setStyle("JWT_Authentication_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["get_hashed_password"] = function (
  block: any,
  generator: any
) {
  const password = generator.valueToCode(block, "password", Order.ATOMIC);
  const salt = generator.valueToCode(block, "salt", Order.ATOMIC);

  const code = `
  import bcrypt from 'bcrypt';

  await bcrypt.hash(${password}, ${salt || '"AKUHUSHWUNJSIIA"'})`;

  return [code, Order.ATOMIC];
};

Blockly.Blocks["sign_jwt"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Create and get JWT token");
    this.appendValueInput("user").setCheck(null).appendField("User:");
    this.appendValueInput("accessTokensecret")
      .setCheck("String")
      .appendField("Access Token Secret");
    this.appendValueInput("expresIn")
      .setCheck("String")
      .appendField("Expires In");
    this.setOutput(true, null);
    this.setStyle("JWT_Authentication_blocks");
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
  const user = generator.valueToCode(block, "user", Order.ATOMIC);
  const expresIn = generator.valueToCode(block, "expresIn", 0);

  // TODO: Assemble javascript into code variable.
  const code = `
    jwt.sign({user: JSON.stringify(${user})}, ${accessTokensecret} ${
    expresIn && `, {expiresIn: ${expresIn} }`
  } )
    `;

  return [code, Order.ATOMIC];
};

Blockly.Blocks["match_passwords"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.LEFT)
      .appendField("Compayer hashed password");
    this.appendValueInput("inPassword")
      .setCheck(null)
      .appendField("Incomming Password:");
    this.appendValueInput("storedPassword")
      .setCheck(null)
      .appendField("Stored Hashed Password:");
    this.setOutput(true, null);
    this.setStyle("JWT_Authentication_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascriptGenerator.forBlock["match_passwords"] = function (
  block: any,
  generator: any
) {
  const inPassPath = generator.valueToCode(block, "inPassword", Order.ATOMIC);
  const storedPassPath = generator.valueToCode(
    block,
    "storedPassword",
    Order.ATOMIC
  );

  const code = `await bcrypt.compare(${inPassPath}, ${storedPassPath})`;

  return [code, javascriptGenerator.ORDER_NONE];
};
