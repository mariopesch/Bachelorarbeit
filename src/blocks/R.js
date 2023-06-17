import * as Blockly from 'blockly';
import 'blockly/javascript';

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

Blockly.Blocks['get_temperature'] = {
  init: function() {
    this.appendDummyInput().appendField('Temperatur');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Get the temperature data');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['get_humidity'] = {
  init: function() {
    this.appendDummyInput().appendField('Rel. Luftfeuchte');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setHelpUrl('');
  },
};

Blockly.Blocks['get_distanceLeft'] = {
  init: function() {
    this.appendDummyInput().appendField('Abstand nach links');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setHelpUrl('');
  },
};
Blockly.Blocks['get_distanceRight'] = {
  init: function() {
    this.appendDummyInput().appendField('Abstand nach rechts');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setHelpUrl('');
  },
};
Blockly.Blocks['get_PM10'] = {
  init: function() {
    this.appendDummyInput().appendField('Feinstaub PM10');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setHelpUrl('');
  },
};
Blockly.Blocks['get_PM25'] = {
  init: function() {
    this.appendDummyInput().appendField('Feinstaub PM25');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setHelpUrl('');
  },
};
Blockly.Blocks['get_accelerationX'] = {
  init: function() {
    this.appendDummyInput().appendField('Beschleunigung X-Achse');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setHelpUrl('');
  },
};
Blockly.Blocks['get_accelerationY'] = {
  init: function() {
    this.appendDummyInput().appendField('Beschleunigung Y-Achse');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setHelpUrl('');
  },
};
Blockly.Blocks['get_accelerationZ'] = {
  init: function() {
    this.appendDummyInput().appendField('Beschleunigung Z-Achse');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setHelpUrl('');
  },
};
Blockly.Blocks['get_speed'] = {
  init: function() {
    this.appendDummyInput().appendField('Geschwindigkeit');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setHelpUrl('');
  },
};













