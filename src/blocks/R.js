import * as Blockly from 'blockly';
import 'blockly/javascript';

// Define the string input block
Blockly.Blocks['string_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("enter text"), "String");
    this.setOutput(true, "String");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true);
  }
};

// Define the block to get the length of a string
Blockly.Blocks['string_length'] = {
  init: function() {
    this.appendValueInput("STRING")
        .setCheck("String")
        .appendField("length of");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true);
  }
};

Blockly.Blocks['vector_input_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vector")
        .appendField(new Blockly.FieldTextInput("1, 2, 3"), "VECTOR");
    this.setOutput(true, "Array");
    this.setInputsInline(true);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['vector_sum_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sum of");
    this.appendValueInput("vector")
        .setCheck("Array")
        .appendField("vector");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
//test
