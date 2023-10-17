import Blockly from "blockly";

Blockly.Blocks["regexInput"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("func me dude")
      .appendField("/")
      .appendField(new Blockly.FieldTextInput("stub"), "regex")
      .appendField("/i");
    this.setColour(105);
    this.setOutput(true, "String");
  }
};
