import * as Blockly from 'blockly';
import 'blockly/javascript';

Blockly.Blocks['load_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Load data")
        .appendField(new Blockly.FieldDropdown([
          ["Iris", "iris"],
          // Add more dataset options here if desired
        ]), "DATASET");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Load a specific dataset");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['load_boxData'] = {
  init: function() {
    this.appendDummyInput().appendField('SenseBox Daten laden');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['save_variable'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null)
        .appendField("Variable");
    this.appendValueInput("VARIABLE_NAME")
        .setCheck("String")
        .appendField("Variable name");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


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

// Define the array input block
Blockly.Blocks['array_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Array")
        .appendField(new Blockly.FieldTextInput("1, 2, 3"), "ARRAY");
    this.setOutput(true, "Array");
    this.setColour(260);
    this.setTooltip("Provide an array input");
    this.setHelpUrl("");
    this.setInputsInline(true);
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

// Insert a certain Box ID
Blockly.Blocks['box_id'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SenseBox ID")
        .appendField(new Blockly.FieldTextInput(""), "String");
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Get the temperature data from the OpenSenseMap API from a box with various box ids
Blockly.Blocks['get_temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Temperatur");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box ID");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_humidity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rel.Luftfeuchte");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box ID");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_distanceLeft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Abstand links");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box ID");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_distanceRight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Abstand rechts");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box ID");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_PM10'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Feinstaub PM10");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box ID");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_PM25'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Feinstaub PM25");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box ID");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_accelerationX'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Beschleunigung X-Achse");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box ID");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_accelerationY'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Beschleunigung Y-Achse");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box ID");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_accelerationZ'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Beschleunigung Z-Achse");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box ID");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Geschwindigkeit");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box ID");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['mean'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck("Array")
        .appendField("Mittelwert");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['median'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck("Array")
        .appendField("Median");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['sd'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck("Array")
        .appendField("Standardabweichung");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};



Blockly.Blocks['scatter_plot'] = {
  init: function() {
    this.appendValueInput('X')
        .setCheck('Array')
        .appendField('x-Achse');
    this.appendValueInput('Y')
        .setCheck('Array')
        .appendField('y-Achse');
    this.appendValueInput('X_AXIS_TITLE')
        .setCheck('String')
        .appendField('Titel X-Achse');    
    this.appendValueInput('Y_AXIS_TITLE')
        .setCheck('String')
        .appendField('Titel Y-Achse');   
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('Create a scatter plot using ggplot2 library');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['bar_chart'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck("Array")
        .appendField("Balkendiagramm");
    this.appendValueInput("X_AXIS")
        .setCheck("String")
        .appendField("X-axis label");
    this.appendValueInput("Y_AXIS")
        .setCheck("String")
        .appendField("Y-axis label");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['line_chart'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck("Array")
        .appendField("Säulendiagramm");
    this.appendValueInput("X_AXIS")
        .setCheck("String")
        .appendField("X-axis label");
    this.appendValueInput("Y_AXIS")
        .setCheck("String")
        .appendField("Y-axis label");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['histogram'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck("Array")
        .appendField("Histogramm");
    this.appendValueInput("X_AXIS")
        .setCheck("String")
        .appendField("X-axis label");
    this.appendValueInput("Y_AXIS")
        .setCheck("String")
        .appendField("Y-axis label");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


















