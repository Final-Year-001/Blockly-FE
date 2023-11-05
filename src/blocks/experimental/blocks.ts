import Blockly from "blockly";
import * as JavaScript from "blockly/javascript";


function removeParentheses(str : any) {
  // Check if the string starts and ends with parentheses
  if (str.startsWith("(") && str.endsWith(")")) {
    str = str.substring(1, str.length - 1);
  }
  return str;
}

//////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['html_table_comp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Table Component");
    this.appendDummyInput()
        .appendField("Rows")
        .appendField(new Blockly.FieldNumber(0, 0), "rows")
        .appendField("Cols")
        .appendField(new Blockly.FieldNumber(0, 0), "cols");
    this.appendStatementInput("styles")
        .setCheck(null)
        .appendField("Styles");
    this.appendValueInput("Table Data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Table Data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// JavaScript.javascriptGenerator.forBlock['html_table_comp'] = function(block: any, generator: any) {
//   var number_rows = block.getFieldValue('rows');
//   var number_cols = block.getFieldValue('cols');
//   var statements_styles = generator.statementToCode(block, 'styles');
//   var value_table_data = generator.valueToCode(block, 'Table Data', generator.ORDER_ATOMIC);
  
//   var tr = '';
//   var td = '';
//   for (let i = 0; i < number_rows; i++) {
//     for (let i = 0; i < number_cols; i++) {
//       td = td + '<td>' + 
//     }
//     tr = '<tr>' + 
      
//     + '</tr>'
//   }
 
//   var code = `<table style="` + statements_styles + `>`  
//   + 
//   + `</table>`;
//   return code;
// };