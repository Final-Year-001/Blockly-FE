import Blockly from "blockly";
import * as JavaScript from "blockly/javascript";

// HTML Block
Blockly.Blocks['html_tag'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('HTML');
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('Create an HTML document.');

        // Create the "Head" connection
        this.appendStatementInput('head_content')
            .setCheck('head_tag')
            .appendField('Header');
        
        // Create the "Body" connection
        this.appendStatementInput('body_content')
            .setCheck('body_tag')
            .appendField('Body');
    }
};

JavaScript.javascriptGenerator.forBlock['html_tag'] = function (block : any, generator : any) {
    var headContent = generator.statementToCode(block, 'head_content');
    var bodyContent = generator.statementToCode(block, 'body_content');
    return '<html>\n' + headContent + bodyContent + '</html>';
};

// Head Block
Blockly.Blocks['head_tag'] = {
    init: function () {
        this.appendStatementInput('content')
            .setCheck(null) // Allow any type of block to be nested
            .appendField('Header');
        this.setPreviousStatement(true, 'head_tag');
        this.setColour(160);
        this.setTooltip('Define the head section of the HTML document.');
    }
};

JavaScript.javascriptGenerator.forBlock['head_tag'] = function (block : any, generator : any) {
    var content = generator.statementToCode(block, 'content');
    return '<head>\n' + content + '</head>';
};

// Body Block
Blockly.Blocks['body_tag'] = {
    init: function () {
        this.appendStatementInput('content')
            .setCheck(null) // Allow any type of block to be nested
            .appendField('Body');
        this.setPreviousStatement(true, 'body_tag');
        this.setColour(120);
        this.setTooltip('Define the body section of the HTML document.');
    }
};

JavaScript.javascriptGenerator.forBlock['body_tag'] = function (block : any, generator : any) {
    var content = generator.statementToCode(block, 'content');
    return '<body>\n' + content + '</body>';
};


  
  