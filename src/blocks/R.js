import * as Blockly from 'blockly';
import 'blockly/javascript';

Blockly.Blocks['choose_box'] = {
  init: function() {
    var numberOptions = [];
    for (var i = 1; i <= 31; i++) {
      if (![1, 4, 7, 8, 9, 15, 16, 21, 27, 31].includes(i)) {
        numberOptions.push([String(i), String(i)]);
      }
    }
    
    this.appendDummyInput()
        .appendField("Sensebox #")
        .appendField(new Blockly.FieldDropdown(numberOptions), "Number");
    this.setOutput(true, "String");
    this.setColour("#789ac0");
    this.setTooltip("");
    this.setHelpUrl("");
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
    this.setColour("#D5C7BC");
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
    this.setColour("#D5C7BC");
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
    this.setColour("#D5C7BC");
    this.setTooltip("Provide an array input");
    this.setHelpUrl("");
    this.setInputsInline(true);
  }
};
Blockly.Blocks['number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "VALUE");
    this.setOutput(true, "Number");
    this.setColour("#D5C7BC");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['matrix'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("m x n Matrix");
    this.appendValueInput("ROWS")
        .setCheck("Number")
        .appendField("Rows m");
    this.appendValueInput("COLS")
        .setCheck("Number")
        .appendField("Columns n");
    this.appendValueInput("VALUES")
        .setCheck("Array")
        .appendField("Values");
    this.setOutput(true, "Array");
    this.setColour("#D5C7BC");
    this.setInputsInline(false);
    this.setTooltip("Zuerst werden die Spalten von oben nach unten gefüllt");
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
    this.setColour("#D5C7BC");
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
    this.setColour("#789ac0");
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
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#b7bdc9");
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
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#b7bdc9");
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
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#b7bdc9");
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
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#b7bdc9");
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
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#b7bdc9");
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
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#b7bdc9");
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
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#b7bdc9");
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
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#b7bdc9");
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
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#b7bdc9");
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
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#b7bdc9");
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
    this.setColour("#af9cb1");
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
    this.setColour("#af9cb1");
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
    this.setColour("#af9cb1");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['correlation_analysis'] = {
  init: function() {
    this.appendValueInput("VAR1")
        .setCheck(null)
        .appendField("Perform Correlation Analysis");
    this.appendValueInput("VAR2")
        .setCheck(null)
        .appendField("with");
    this.appendDummyInput()
        .appendField("Method")
        .appendField(new Blockly.FieldDropdown([["Pearson", "pearson"], ["Spearman", "spearman"], ["Kendall", "kendall"]]), "METHOD");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour("#af9cb1");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};




Blockly.Blocks['boxplot'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null)
        .appendField("Box Plot");
    this.appendDummyInput()
        .appendField("Title")
        .appendField(new Blockly.FieldTextInput(""), "TITLE");
    this.appendDummyInput()
        .appendField("X-Axis Label")
        .appendField(new Blockly.FieldTextInput("Value"), "X_LABEL");
    this.appendDummyInput()
        .appendField("Y-Axis Label")
        .appendField(new Blockly.FieldTextInput("Frequency"), "Y_LABEL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#866475");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['scatter_plot'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null)
        .appendField("Scatter Plot");
    this.appendDummyInput()
        .appendField("Title")
        .appendField(new Blockly.FieldTextInput(""), "TITLE");
    this.appendDummyInput()
        .appendField("X-Axis Label")
        .appendField(new Blockly.FieldTextInput("Value"), "X_LABEL");
    this.appendDummyInput()
        .appendField("Y-Axis Label")
        .appendField(new Blockly.FieldTextInput("Frequency"), "Y_LABEL");
    this.appendDummyInput()
        .appendField("Regressionslinie")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "SHOW_TRENDLINE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#866475");
    this.setTooltip("");
    this.setHelpUrl("");
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
    this.setColour("#866475");
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
    this.setColour("#866475");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['histogram'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null)
        .appendField("Histogramm");
    this.appendDummyInput()
        .appendField("Title")
        .appendField(new Blockly.FieldTextInput(""), "TITLE");
    this.appendDummyInput()
        .appendField("X-Axis Label")
        .appendField(new Blockly.FieldTextInput("Value"), "X_LABEL");
    this.appendDummyInput()
        .appendField("Y-Axis Label")
        .appendField(new Blockly.FieldTextInput("Frequency"), "Y_LABEL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#866475");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['heatmap'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null)
        .appendField("Create Heatmap with data");
    this.appendDummyInput()
        .appendField("Color Scheme")
        .appendField(new Blockly.FieldDropdown([["Red", "red"], ["Blue", "blue"], ["Green", "green"]]), "COLOR_SCHEME");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#866475");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};




















