import * as Blockly from 'blockly';
import 'blockly/javascript';

// Kategorie: Senseboxen 
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
    this.setColour("#4F6272");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['box_id'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SenseBox ID")
        .appendField(new Blockly.FieldTextInput(""), "String");
    this.setOutput(true, "String");
    this.setColour("#4F6272");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_temperature_latest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Temperatur (zuletzt)");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#4F6272");
    this.setTooltip("Gibt die zuletzt gemessene Temperatur in °C an");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['get_humidity_latest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rel.Luftfeuchte (zuletzt)");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#4F6272");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_distanceLeft_latest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Abstand links (zuletzt)");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#4F6272");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_distanceRight_latest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Abstand rechts (zuletzt)");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#4F6272");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_PM10_latest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Feinstaub PM10 (zuletzt)");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#4F6272");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_PM25_latest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Feinstaub PM25 (zuletzt)");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#4F6272");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_accelerationX_latest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Beschleunigung X-Achse (zuletzt)");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#4F6272");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_accelerationY_latest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Beschleunigung Y-Achse (zuletzt)");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#4F6272");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_accelerationZ_latest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Beschleunigung Z-Achse (zuletzt)");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#4F6272");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_speed_latest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Geschwindigkeit (zuletzt)");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#4F6272");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_coordinates'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Aktuelle Koordinaten");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#4F6272");
    this.setTooltip("Letzter Standort der Box");
    this.setHelpUrl("");
  }
};

// Kategorie Sensor-Anfragen

Blockly.Blocks['get_temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Temperatur");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box");
    this.setOutput(true, "Number");
    this.setColour("#697B93");
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
    this.setColour("#697B93");
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
    this.setColour("#697B93");
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
    this.setColour("#697B93");
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
    this.setColour("#697B93");
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
    this.setColour("#697B93");
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
    this.setColour("#697B93");
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
    this.setColour("#697B93");
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
    this.setColour("#697B93");
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
    this.setColour("#697B93");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Kategorie Listen und Text 

Blockly.Blocks['lists_create_with'] = {
  init: function() {
    this.setStyle('list_blocks');
    this.setColour("#8393B3");
    this.itemCount_ = 2;
    this.updateShape_();
    this.setOutput(true, 'Array');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
  },
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function() {
    for (var i = 0; i < this.itemCount_; i++) {
      var inputExists = this.getInput('ADD' + i);
      if (!inputExists) {
        this.appendValueInput('ADD' + i)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField('item');
      }
    }
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

Blockly.Blocks['lists_create_with_container'] = {
  init: function() {
    this.setStyle('list_blocks');
    this.appendDummyInput()
      .appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['lists_create_with_item'] = {
  init: function() {
    this.setStyle('list_blocks');
    this.appendDummyInput()
      .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['string_length'] = {
  init: function() {
    this.appendValueInput("String")
        .setCheck("String")
        .appendField("length of");
    this.setOutput(true, "Number");
    this.setColour("#8393B3");
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true);
  }
};

Blockly.Blocks['string_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("text input")
        .appendField(new Blockly.FieldTextInput(""), "String");
    this.setOutput(true, "String");
    this.setColour("#8393B3");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['print'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck(null)
        .appendField('Print');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8393B3");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

// Kategorie Operationen 

Blockly.Blocks['load_libraries'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Load R Libraries");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#B7C3F3");
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
    this.setColour("#B7C3F3");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['save_as_array'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("Save Value to Array");
    this.appendValueInput("ARRAY")
        .setCheck("Array")
        .appendField("Array");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#B7C3F3");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['lists_sort'] = {
  init: function() {
    this.appendValueInput('LIST')
        .setCheck('Array')
        .appendField('sort list');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['ascending', 'ASCENDING'],
          ['descending', 'DESCENDING']
        ]), 'ORDER');
    this.setOutput(true, 'Array');
    this.setColour("#B7C3F3");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['convert_data_type'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck(null)
        .appendField('convert');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['string', 'as.character'],
          ['integer', 'as.integer'],
          ['numeric', 'as.numeric'],
          ['logical', 'as.logical']
        ]), 'TYPE');
    this.setOutput(true, null);
    this.setColour("#B7C3F3");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


// Kategorie Mathematik

Blockly.Blocks['number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "VALUE");
    this.setOutput(true, "Number");
    this.setColour("#C1B0DC");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['array_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Array")
        .appendField(new Blockly.FieldTextInput("1, 2, 3"), "ARRAY");
    this.setOutput(true, "Array");
    this.setColour("#C1B0DC");
    this.setTooltip("Provide an array input");
    this.setHelpUrl("");
    this.setInputsInline(true);
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
    this.setColour("#C1B0DC");
    this.setInputsInline(false);
    this.setTooltip("Zuerst werden die Spalten von oben nach unten gefüllt");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['arithmetic'] = {
  init: function() {
    this.appendValueInput("LEFT")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["+", "+"],
          ["-", "-"],
          ["*", "*"],
          [":", "/"],
          ["%", "%%"]
        ]), "OPERATOR");
    this.appendValueInput("RIGHT")
        .setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour("#C1B0DC");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['round_number'] = {
  init: function() {
    this.appendValueInput('NUMBER')
        .setCheck('Number')
        .appendField('round');
    this.appendDummyInput()
        .appendField('to 1 decimal place');
    this.setOutput(true, 'Number');
    this.setColour("#C1B0DC");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['square_root'] = {
  init: function() {
    this.appendValueInput('NUMBER')
        .setCheck('Number')
        .appendField('square root of');
    this.setOutput(true, 'Number');
    this.setColour("#C1B0DC");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['max_min'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["maximum", "max"],
          ["minimum", "min"]
        ]), "FUNCTION")
        .appendField("of");
    this.appendValueInput("VALUES")
        .setCheck("Array");
    this.setOutput(true, "Number");
    this.setColour("#C1B0DC");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Kategorie Logik 

Blockly.Blocks['boolean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["true", "TRUE"],
          ["false", "FALSE"]
        ]), "VALUE");
    this.setOutput(true, "Boolean");
    this.setColour("#CA9CC5");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['logic_operations'] = {
  init: function() {
    this.appendValueInput('A')
        .setCheck('Boolean')
        .appendField(new Blockly.FieldDropdown([
          ['and', '&&'],
          ['or', '||'],
          ['not', '!']
        ]), 'OPERATOR');
    this.appendValueInput('B')
        .setCheck('Boolean');
    this.setOutput(true, 'Boolean');
    this.setColour("#CA9CC5");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['comparison'] = {
  init: function() {
    this.appendValueInput('LEFT')
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['>', '>'],
          ['>=', '>='],
          ['<', '<'],
          ['<=', '<='],
          ['=', '=='],
          ['!=', '!=']
        ]), 'OPERATOR');
    this.appendValueInput('RIGHT')
        .setCheck(null);
    this.setOutput(true, 'Boolean');
    this.setColour("#CA9CC5");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['if_else'] = {
  init: function() {
    this.appendValueInput('CONDITION')
        .setCheck('Boolean')
        .appendField(new Blockly.FieldDropdown([
          ['if', 'IF'],
          ['else if', 'ELSEIF'],
          ['else', 'ELSE']
        ]), 'CONDITION_TYPE');
    this.appendStatementInput('IF_BODY')
        .appendField('do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CA9CC5");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

// Kategorie Datenanalyse

Blockly.Blocks['mean'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck("Array")
        .appendField("Mittelwert");
    this.setOutput(true, "Number");
    this.setColour("#DD7596");
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
    this.setColour("#DD7596");
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
    this.setColour("#DD7596");
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
    this.setColour("#DD7596");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['one_sample_t_test'] = {
  init: function() {
    this.appendValueInput("SAMPLE")
        .setCheck("Array")
        .appendField("One-Sample t-Test");
    this.appendValueInput("POPULATION_MEAN")
        .setCheck("Number")
        .appendField("Population Mean");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#DD7596");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['two_sample_t_test'] = {
  init: function() {
    this.appendValueInput("SAMPLE_1")
        .setCheck("Array")
        .appendField("Two-Sample t-Test");
    this.appendValueInput("SAMPLE_2")
        .setCheck("Array")
        .appendField("Sample 2");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#DD7596");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Kategorie Datenvisualisierung

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
    this.setColour("#DA5D87");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['scatter_plot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scatter Plot")
    this.appendValueInput("X_VALUES")
        .setCheck(["Array", "String", "Number"])
        .appendField("x-Werte");
    this.appendValueInput("Y_VALUES")
        .setCheck(["Array", "String", "Number"])
        .appendField("y-Werte");
    this.appendDummyInput()
        .appendField("Show Regression Line")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "SHOW_LINE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DA5D87");
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(false);
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
    this.setColour("#DA5D87");
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
    this.setColour("#DA5D87");
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
    this.setColour("#DA5D87");
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
    this.setColour("#DA5D87");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['display_table'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null)
        .appendField("Tabelle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DA5D87");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
