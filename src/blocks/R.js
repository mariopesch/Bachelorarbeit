import * as Blockly from 'blockly';
import 'blockly/javascript';
import { getSenseBoxData } from '../senseBoxData';

// Define the string input block
Blockly.Blocks['string_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("text input")
        .appendField(new Blockly.FieldTextInput(""), "String");
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Define the block to get the length of a string
Blockly.Blocks['string_length'] = {
  init: function() {
    this.appendValueInput("String")
        .setCheck("String")
        .appendField("length of");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true);
  }
};

// Define the block to create a scatter plot from measurements
Blockly.Blocks['scatter_plot'] = {
  init: function() {
    this.appendValueInput("Data")
        .setCheck("Array")
        .appendField("scatter plot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true);
  }
};

// Get the temperature data from the OpenSenseMap API from a box with various box ids
Blockly.Blocks['temp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Temperature from SenseBox");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box ID");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Insert a certain Box ID
Blockly.Blocks['box_id'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Box ID")
        .appendField(new Blockly.FieldTextInput(""), "String");
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};












