import Blockly from "blockly";
import { Order, javascriptGenerator } from "blockly/javascript";

//script tag
Blockly.Blocks['javascript'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Javascript");
    this.appendStatementInput("script")
        .setCheck(null);
        this.setStyle('JS_Beg');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setTooltip('Place the script tag in the body after HTMl content. JavaScript code should be wrapped in this tag'); 
  }
};

javascriptGenerator.forBlock['javascript'] = function(
  block: any,
  generator: any
) {
  var statements_script = generator.statementToCode(block, 'script');
  var code = `<script>\n${statements_script}\n</script>`;
  return code;
};

//create a custom variable
Blockly.Blocks['create_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pick a label:")
        .appendField(new Blockly.FieldTextInput("myVariable"), "VAR_NAME");
        this.setPreviousStatement(true, null); 
        this.setNextStatement(true, null);
        this.setStyle('JS_Step1');
    this.setTooltip("create a custom variable");
  }
};

javascriptGenerator.forBlock['create_variable'] = function(block:any, generator:any) {
  var variableName = block.getFieldValue('VAR_NAME');
  var code = '';
  code += '' + variableName + '\n';
  return code;
};

//generate id for input fields
Blockly.Blocks["generate_id"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Give a unique name")
      .appendField(new Blockly.FieldTextInput("elId"), "elId");
    this.setOutput(true, "el_id_input");
    this.setStyle('JS_Step1');
    this.setTooltip("Create an element ID.");
  },
};

javascriptGenerator.forBlock["generate_id"] = function (
  block: any,
  generator: any
) {
  var elId = block.getFieldValue("elId"); 
  var code = `\"${elId}\"`; 
  return [code, generator.ORDER_ATOMIC]; 
};

//getElementById() and changes the element content (innerHTML) 
Blockly.Blocks['chnage_innerHTML'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Replace a section");
        this.appendValueInput("elementId")
            .setCheck("el_id_input")
            .appendField("Name of what you want to change:");
        this.appendValueInput("newContent")
            .setCheck("String")
            .appendField("What you want to put there now:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('JS_Step2');
        this.setTooltip('Change the content of an HTML element by ID');
    }
};

javascriptGenerator.forBlock['chnage_innerHTML'] = function(
    block: any,
    generator: any
  ) {
    var value_elementId = generator.valueToCode(block, 'elementId', Order.ATOMIC);
    var value_newContent = generator.valueToCode(block, 'newContent', Order.ATOMIC);

    if (!value_elementId || !value_newContent) {
        return '';
    }

    var code = `document.addEventListener("DOMContentLoaded", function() {
      document.getElementById(${value_elementId}).innerHTML = ${value_newContent};
    });
    `;
    return code;
  };

//print screen 
Blockly.Blocks['print_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print when button is clicked");
    this.appendValueInput("button")
        .setCheck("el_id_input")
        .appendField("Name of the button");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('JS_Step1');
    this.setTooltip('Print the document when a button is clicked');
  }
};

javascriptGenerator.forBlock['print_block'] = function(block:any, generator:any) {
  var buttonId = generator.valueToCode(block, 'button', Order.ATOMIC);

  var code = `
    document.addEventListener("DOMContentLoaded", function() {
      var button = document.getElementById(${buttonId});
      if (button) {
        button.addEventListener("click", function() {
          window.print();
        });
      }
    });
  `;

  return code;
};

  // Console Log Block
Blockly.Blocks['console_log'] = {
  init: function () {
    this.appendValueInput('text')
      .setCheck("String") // Allow any value to be logged
      .appendField('Show a message in the console:');
    this.setPreviousStatement(true, null); // Previous block can be of any type
    this.setNextStatement(true, null); // Next block can be of any type
    this.setStyle('JS_Step1');
    this.setTooltip('Log a message to the console.');
  }
};

javascriptGenerator.forBlock['console_log'] = function (block:any, generator: any) {
  var text = generator.valueToCode(block, 'text', generator.ORDER_ATOMIC);
  var code = `console.log(${text})\n`;
return code;
};

//showing an alert
Blockly.Blocks['alert_block'] = {
  init: function() {
    this.appendValueInput("message")
        .setCheck("String")
        .appendField("Show this message when the button is clicked");
    this.appendValueInput("element")
        .setCheck("el_id_input")
        .appendField("Name of the button:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('JS_Step2');
 this.setTooltip("");
 this.setHelpUrl("");
 this.setTooltip('Generate custom alerts using this block');
  }
};

javascriptGenerator.forBlock['alert_block'] = function(block: any, generator: any) {
  var message = generator.valueToCode(block, 'message', Order.ATOMIC);
  var elementId = generator.valueToCode(block, 'element', Order.ATOMIC);

  var code = `
    document.addEventListener("DOMContentLoaded", function() {
      var element = document.getElementById(${elementId});
      if (element) {
        element.addEventListener("click", function() {
          alert(${message});
        });
      }
    });
  `;
  return code;
};

//event listener to an HTML element
Blockly.Blocks['event_listener'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Do this")
      .appendField(new Blockly.FieldDropdown([
        ["click", "click"],
        ["mouseover", "mouseover"],
        ["keydown", "keydown"]
      ]), "event");
    this.appendValueInput("element")
      .setCheck("el_id_input")
      .appendField("To this button(add the name)");
    this.appendStatementInput("handler")
      .setCheck(null)
      .appendField("What happens after");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('JS_Step2');
    this.setTooltip('Attach an event listener to an HTML element.');
  }
};

javascriptGenerator.forBlock['event_listener'] = function (block:any, generator: any) {
  const event = block.getFieldValue('event');
  const element = generator.valueToCode(block, 'element', generator.ORDER_ATOMIC);
  const handler = generator.statementToCode(block, 'handler');

  return `document.addEventListener("DOMContentLoaded", function() {
    document.getElementById(${element}).addEventListener('${event}', function(event) {\n${handler}});
    });
    `;
};

//show or hide an HTML element
Blockly.Blocks["show_hidden_element"] = {
init: function () {
  this.appendDummyInput()
      .appendField("Show or hide something")
  this.appendValueInput("element_id")
  .setCheck("el_id_input")
    .appendField(
      new Blockly.FieldDropdown([
        ["Show", "show"],
        ["Hide", "hide"],
      ]),
      "action"
    )
    .appendField("Name of the what you want to show/hide");
    this.setStyle('JS_Step2');
  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  this.setTooltip('Show or hide an HTML element with a specified ID.');
},
};

javascriptGenerator.forBlock["show_hidden_element"] = function (
block: any,
generator: any
) {
var dropdown_action = block.getFieldValue('action');
var elementId = generator.valueToCode(block, 'element_id', generator.ORDER_ATOMIC);

var code = `document.addEventListener("DOMContentLoaded", function() {
  var element = document.getElementById(${elementId});
  if (element) {
    if ('${dropdown_action}' === 'show') {
      element.style.display = 'block';
    } else if ('${dropdown_action}' === 'hide') {
      element.style.display = 'none';
    }
  }
  });
`;

return code;
};

//single comment
Blockly.Blocks['single_line_comment'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("//")
        .appendField(new Blockly.FieldTextInput("Your comment here"), "COMMENT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('JS_Step1');
    this.setTooltip('Add a single-line comment');
  }
};

javascriptGenerator.forBlock['single_line_comment'] = function(block:any, generator:any) {
  var commentText = block.getFieldValue('COMMENT');
  var code = `// ${commentText}\n`;
  return code;
};

//multiple line comment 
Blockly.Blocks['multi_line_comment'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("/*")
        .appendField(new Blockly.FieldTextInput("Your comment here"), "COMMENT")
        .appendField("*/");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('JS_Step1');
    this.setTooltip('Add a multi-line comment');
  }
};

javascriptGenerator.forBlock['multi_line_comment'] = function(block:any, generator:any) {
  var commentText = block.getFieldValue('COMMENT');
  var code = `/* ${commentText} */\n`;
  return code;
};

//create a function
Blockly.Blocks['custom_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Do Something")
        .appendField(new Blockly.FieldTextInput("myFunction"), "NAME")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput("label1"), "Parameter1")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("label2"), "Parameter2")
        .appendField(")");
    this.appendStatementInput("STATEMENTS")
        .setCheck(null)
        .appendField("What to do inside this?");
        this.setStyle('JS_Step2');
    this.setTooltip('Create a custom function');
  }
};

javascriptGenerator.forBlock['custom_function'] = function(block:any, generator:any) {
  var functionName = block.getFieldValue('FUNCTION_NAME');
  var param1 = block.getFieldValue('PARAM1');
  var param2 = block.getFieldValue('PARAM2');
  var statements = generator.statementToCode(block, 'STATEMENTS');

  var code = `document.addEventListener("DOMContentLoaded", function() {
    function ${functionName}(${param1}, ${param2}) {
      ${statements}
    }
  });
`;

  return code;
};

// Play Sound on Button Click Block
Blockly.Blocks['play_sound_on_click'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play sound on button click");
    this.appendValueInput("button_id")
        .setCheck("el_id_input")
        .appendField("Name of the button");
    this.appendValueInput("sound")
        .setCheck("String")
        .appendField("Link to the sound file:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('JS_Step3');
    this.setTooltip('Play a sound when a button is clicked.');
  }
};

javascriptGenerator.forBlock['play_sound_on_click'] = function(block:any, generator:any) {
  var buttonId = generator.valueToCode(block, 'button_id', generator.ORDER_ATOMIC);
  var soundUrl = generator.valueToCode(block, 'sound', generator.ORDER_ATOMIC);

  return `
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById(${buttonId}).addEventListener('click', function() {
      var audio = new Audio(${soundUrl});
      audio.play();
    });
  });
  `;
};


// Upload and Display Image Block
Blockly.Blocks['upload_display_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add and show an image");
    this.appendValueInput("button_id")
        .setCheck("el_id_input")
        .appendField("Name of the button");
    this.appendDummyInput()
        .appendField("Name of the image")
        .appendField(new Blockly.FieldTextInput("img_id"), "image_id");
    this.appendDummyInput()
        this.appendValueInput("image_width")
        .setCheck("Number")
        .appendField("Width of the image");
    this.appendValueInput("image_height")
        .setCheck("Number")
        .appendField("Height of the image");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('JS_Step3');
    this.setTooltip('Upload and display an image when a button is clicked.');
  }
};

// JavaScript code generator for the block
javascriptGenerator.forBlock['upload_display_image'] = function(block:any, generator:any) {
  var buttonId = generator.valueToCode(block, 'button_id', generator.ORDER_ATOMIC);
  var imageId = block.getFieldValue('image_id');
  var imageWidth = generator.valueToCode(block, 'image_width', generator.ORDER_ATOMIC);
  var imageHeight = generator.valueToCode(block, 'image_height', generator.ORDER_ATOMIC);

  return `
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById(${buttonId}).addEventListener('click', function() {
      var input = document.createElement('input');
      input.type = 'file';

      input.addEventListener('change', function() {
        var file = this.files[0];
        if (file) {
          var reader = new FileReader();
          reader.onload = function(e) {
            var image = document.createElement('img');
            image.src = e.target.result;
            image.id = '${imageId}';
            image.style.width = ${imageWidth} + 'px'; ;
            image.style.height = ${imageHeight} + 'px'; ;
            document.body.appendChild(image);
          };
          reader.readAsDataURL(file);
        }
      });

      input.click();
    });
  });
  `;
};

// Remove Image on Button Click Block
Blockly.Blocks['remove_image_on_button_click'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Delete image on a button click");
    this.appendValueInput("button_id")
        .setCheck("el_id_input")
        .appendField("Name of the button");
    this.appendValueInput("image_id")
        .setCheck("String")
        .appendField("Name of the image");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('JS_Step3');
    this.setTooltip('Remove the image with the specified ID when a button is clicked.');
  }
};

// JavaScript code generator for the Remove Image on Button Click block
javascriptGenerator.forBlock['remove_image_on_button_click'] = function(block:any, generator:any) {
  var buttonId = generator.valueToCode(block, 'button_id', generator.ORDER_ATOMIC);
  var imageId = generator.valueToCode(block, 'image_id', generator.ORDER_ATOMIC);

  return `
  document.addEventListener('DOMContentLoaded', function() {
  document.getElementById(${buttonId}).addEventListener('click', function() {
    var imageToRemove = document.getElementById(${imageId});
    if (imageToRemove) {
      imageToRemove.parentNode.removeChild(imageToRemove);
    }
  });
});
  `;
};
