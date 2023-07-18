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

// Kategorie Sensor-Anfragen

Blockly.Blocks['get_temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Temperatur");
    this.appendValueInput("BOX_ID")
        .setCheck("String")
        .appendField("Box");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);   
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, "Number");
    this.setColour("#697B93");
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, "Number");
    this.setColour("#4F6272");
    this.setTooltip("Letzter Standort der Box");
    this.setHelpUrl("");
  }
};

// Kategorie Listen und Text 

Blockly.Blocks['lists_create_with'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Liste");
    this.setStyle('list_blocks');
    this.setColour("#8393B3");
    this.itemCount_ = 2;
    this.updateShape_();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
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
    this.setColour("#8393B3");
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
    this.setColour("#8393B3");
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
        .appendField("Länge");
    this.setOutput(true, "Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8393B3");
    this.setTooltip("Berechnet die Länge eines Texts");
    this.setHelpUrl("");
    this.setInputsInline(true);
  }
};

Blockly.Blocks['string_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text")
        .appendField(new Blockly.FieldTextInput(""), "String");
    this.setOutput(true, "String");
    this.setColour("#8393B3");
 this.setTooltip("Text Input");
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
    this.setTooltip('Printed den Input');
    this.setHelpUrl('');
  }
};

// Kategorie Operationen 

Blockly.Blocks['load_libraries'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("R Libraries");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#B7C3F3");
    this.setTooltip("Lädt alle notwenigen R Libraries");
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
        .appendField("Variablenname");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#B7C3F3");
    this.setTooltip("Speichert eine Variable");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['save_sensor_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Variable");
    this.appendValueInput("VARIABLE_NAME")
        .setCheck("String")
        .appendField("Variablenname");
    this.appendDummyInput()
        .appendField("Wert")
        .appendField(new Blockly.FieldDropdown([
          ["Temperatur", "temp"],
          ["Feuchtigkeit", "humidity"],
          ["Abstand links", "disL"],
          ["Abstand rechts", "disR"],
          ["PM10", "pm10"],
          ["PM25", "pm25"],
          ["Beschleunigung X-Achse", "accX"],
          ["Beschleunigung Y-Achse", "accY"],
          ["Beschleunigung Z-Achse", "accZ"],
          ["Geschwindigkeit", "speed"]
        ]), "Wähle Sensor");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#B7C3F3");
    this.setTooltip("Speichert eine Variable");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['save_as_array'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Array");
    this.setStyle('list_blocks');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#B7C3F3");
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true, 'Array');
    this.setMutator(new Blockly.Mutator(['save_as_array_item']));
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
    var containerBlock = workspace.newBlock('save_as_array_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('save_as_array_item');
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

Blockly.Blocks['save_as_array_container'] = {
  init: function() {
    this.setStyle('list_blocks');
    this.setColour("#B7C3F3");
    this.appendDummyInput()
      .appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['save_as_array_item'] = {
  init: function() {
    this.setStyle('list_blocks');
    this.setColour("#B7C3F3");
    this.appendDummyInput()
      .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['lists_sort'] = {
  init: function() {
    this.appendValueInput('LIST')
        .setCheck('Array')
        .appendField('Sortiere Liste');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['aufsteigend', 'ASCENDING'],
          ['absteigend', 'DESCENDING']
        ]), 'ORDER');
    this.setOutput(true, 'Array');
    this.setColour("#B7C3F3");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortiert eine Liste aufsteigend oder absteigend');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['convert_data_type'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck(null)
        .appendField('Kovertiere Datentyp');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['string', 'as.character'],
          ['integer', 'as.integer'],
          ['numeric', 'as.numeric'],
          ['logical', 'as.logical']
        ]), 'TYPE');
    this.setOutput(true, null);
    this.setColour("#B7C3F3");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Konvertiert den Datentyp einer Eingabe in String, Int, Num oder Logical');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['data_frame'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Data Frame");
    this.setColour("#B7C3F3");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Erstellt einen Data Frame");
    this.setHelpUrl("");
    this.dataCount_ = 1;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(['data_frame_data']));
  },
  
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('dataCount', this.dataCount_);
    return container;
  },
  
  domToMutation: function(xmlElement) {
    this.dataCount_ = parseInt(xmlElement.getAttribute('dataCount'), 10);
    this.updateShape_();
  },
  
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('data_frame_data_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.dataCount_; i++) {
      var dataBlock = workspace.newBlock('data_frame_data');
      dataBlock.initSvg();
      connection.connect(dataBlock.previousConnection);
      connection = dataBlock.nextConnection;
    }
    return containerBlock;
  },
  
  compose: function(containerBlock) {
    var dataBlocks = [];
    var dataConnections = [];
    var currentBlock = containerBlock.getInputTargetBlock('STACK');
    while (currentBlock) {
      dataBlocks.push(currentBlock);
      dataConnections.push(currentBlock.valueConnection_);
      currentBlock = currentBlock.nextConnection && currentBlock.nextConnection.targetBlock();
    }
    // Disconnect any deleted blocks
    for (var i = 0; i < this.dataCount_; i++) {
      if (dataConnections[i] && dataBlocks.indexOf(dataConnections[i].sourceBlock_) === -1) {
        dataConnections[i].dispose();
      }
    }
    this.dataCount_ = dataBlocks.length;
    this.updateShape_();
    // Reconnect any reattached blocks
    for (var i = 0; i < this.dataCount_; i++) {
      if (dataConnections[i]) {
        Blockly.Mutator.reconnect(dataConnections[i], this, 'DATA' + i);
      }
    }
  },
  
  saveConnections: function(containerBlock) {
    var dataBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (dataBlock) {
      var input = this.getInput('DATA' + i);
      dataBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      dataBlock = dataBlock.nextConnection && dataBlock.nextConnection.targetBlock();
    }
  },
  
  updateShape_: function() {
    for (var i = 0; i < this.dataCount_; i++) {
      var inputExists = this.getInput('DATA' + i);
      if (!inputExists) {
        var input = this.appendValueInput('DATA' + i)
            .setCheck("Array")
            .appendField(new Blockly.FieldTextInput("Name"), "NAME" + i)
            .appendField("Daten")
            .setAlign(Blockly.ALIGN_RIGHT);
      }
    }
    while (this.getInput('DATA' + i)) {
      this.removeInput('DATA' + i);
      i++;
    }
  }
};

Blockly.Blocks['data_frame_data'] = {
  init: function() {
    this.appendValueInput('NAME')
        .setCheck('String')
        .appendField("Name");
    this.appendValueInput('VECTOR')
        .setCheck('Array')
        .appendField("Vector");
    this.setPreviousStatement(true, 'data_frame_data');
    this.setNextStatement(true, 'data_frame_data');
    this.setColour("#B7C3F3");
    this.setTooltip("Data input");
    this.contextMenu = false;
  },
};

Blockly.Blocks['data_frame_data_container'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Data");
    this.appendStatementInput('STACK')
        .setCheck('data_frame_data');
    this.setColour("#B7C3F3");
    this.setTooltip("Container for data inputs");
    this.contextMenu = false;
  },
};

Blockly.Blocks['filter'] = {
  init: function() {
    this.appendValueInput('COLUMN')
        .setCheck('String')
        .appendField('Filter Spalte');
    this.appendValueInput('OPERATOR')
        .setCheck('String')
        .appendField('Operator');
    this.appendValueInput('VALUE')
        .setCheck('Number')
        .appendField('Wert');
    this.setOutput(true, 'String');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#B7C3F3');
    this.setTooltip('Filtert den Data Frame nach einer Spalte');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['select'] = {
  init: function() {
    this.appendValueInput('COLUMNS')
        .setCheck('Array')
        .appendField('Wähle Spalte');
    this.setOutput(true, 'Array');
    this.setColour('#B7C3F3');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Wählt eine bestimmte Spalte aus dem Data Frame aus');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['mutate'] = {
  init: function() {
    this.appendValueInput('NEW_COLUMN')
        .setCheck('String')
        .appendField('Name neue Spalte');
    this.appendValueInput('EXPRESSION')
        .setCheck('String')
        .appendField('Ausdruck');
    this.setOutput(true, 'String');
    this.setColour('#B7C3F3');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Fügt eine neue Spalte zum Data Frame hinzu oder modifiziert bestehende');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['summarize'] = {
  init: function() {
    this.appendValueInput('COLUMN')
        .setCheck('String')
        .appendField('Fasse Spalte zusammen');
    this.appendValueInput('AGGREGATE')
        .setCheck('String')
        .appendField('Aggregatfunktion');
    this.appendValueInput('NEW_COLUMN')
        .setCheck('String')
        .appendField('Name neue Spalte');
    this.setOutput(true, 'String');
    this.setColour('#B7C3F3');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Fasst Daten mithilfe einer Aggregatsfunktion zusammen');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['group_by'] = {
  init: function() {
    this.appendValueInput('COLUMNS')
        .setCheck('Array')
        .appendField('Gruppieren nach Spalten');
    this.setOutput(true, 'Array');
    this.setColour('#B7C3F3');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Gruppiert einen Data Frame nach Spalten');
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
    this.setTooltip("Nimmt eine Zahl als Input");
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Nimmt ein Array als Input");
    this.setHelpUrl("");
    this.setInputsInline(true);
  }
};
Blockly.Blocks['split'] = {
  init: function() {
    this.appendValueInput('ARRAY')
        .setCheck('Array')
        .appendField('Split Array');
    this.appendValueInput('SUBSET_SIZE')
        .setCheck('Number')
        .appendField('Größe des Subsets');
    this.setOutput(true, 'Array');
    this.setColour('#C1B0DC');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Splittet ein Array/ einen Vektor in Untermenge');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['matrix'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("m x n Matrix");
    this.appendValueInput("ROWS")
        .setCheck("Number")
        .appendField("Zeilen m");
    this.appendValueInput("COLS")
        .setCheck("Number")
        .appendField("Spalten n");
    this.appendValueInput("VALUES")
        .setCheck("Array")
        .appendField("Werte");
    this.setOutput(true, "Array");
    this.setColour("#C1B0DC");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Erstellt eine m x n Matrix. Zuerst werden die Spalten von oben nach unten gefüllt");
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Führt eine arithmetische Operation +, -, *, :, oder % aus");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['round_number'] = {
  init: function() {
    this.appendValueInput('NUMBER')
        .setCheck('Number')
        .appendField('Runden');
    this.appendDummyInput()
        .appendField('auf 2 Nachkommastellen');
    this.setOutput(true, 'Number');
    this.setColour("#C1B0DC");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Rundet eine Dezimalzahl auf zwei Nachkommastellen');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['square_root'] = {
  init: function() {
    this.appendValueInput('NUMBER')
        .setCheck('Number')
        .appendField('Wurzel aus');
    this.setOutput(true, 'Number');
    this.setColour("#C1B0DC");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Berechnet die Wurzel aus einer Eingabe');
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
        .appendField("von");
    this.appendValueInput("VALUES")
        .setCheck("Array");
    this.setOutput(true, "Number");
    this.setColour("#C1B0DC");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Berechnet den größten und den kleinsten Wert eines Arrays");
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
    this.setTooltip("Nimmt die booleschen Werte 'true' und 'false' als Eingabe");
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Führt logische Operatione  auf booleschen Werten aus');
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Vergleich zwei Werte miteinander');
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
    this.setTooltip('Fragt eine Condition ab und führt darauf basierend eine Handlung aus');
    this.setHelpUrl('');
  }
};

// Kategorie Datenanalyse

Blockly.Blocks['mean'] = {
  init: function() {
    this.appendValueInput("DATA")
        .appendField("Mittelwert");
    this.setOutput(true, "Number");
    this.setColour("#DD7596");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Berechnet den Mittelwert");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['median'] = {
  init: function() {
    this.appendValueInput("DATA")
        .appendField("Median");
    this.setOutput(true, "Number");
    this.setColour("#DD7596");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Berechnet den Median");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['sd'] = {
  init: function() {
    this.appendValueInput("DATA")
        .appendField("Standardabweichung");
    this.setOutput(true, "Number");
    this.setColour("#DD7596");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Berechnet die Standardabweichung");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['summary'] = {
  init: function() {
    this.setStyle('list_blocks');
    this.appendDummyInput()
      .appendField("Summe");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.itemCount_ = 1;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(['summary_input']));
    this.setColour("#DD7596");
    this.setTooltip("Berechnet die Summe der gegebenen Werte");
    this.setHelpUrl("");
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
    var containerBlock = workspace.newBlock('summary_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('summary_input');
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
      Blockly.Mutator.reconnect(connections[i], this, 'INPUT' + i);
    }
  },
  
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('INPUT' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
    }
  },
  
  updateShape_: function() {
    for (var i = 0; i < this.itemCount_; i++) {
      var inputExists = this.getInput('INPUT' + i);
      if (!inputExists) {
        this.appendValueInput('INPUT' + i)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField('Daten');
      }
    }
    while (this.getInput('INPUT' + i)) {
      this.removeInput('INPUT' + i);
      i++;
    }
  }
};


Blockly.Blocks['summary_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Data');
    this.setPreviousStatement(true, 'summary_input');
    this.setNextStatement(true, 'summary_input');
    this.setColour('#DD7596');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['summary_container'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Data');
    this.appendStatementInput('STACK');
    this.setColour('#DD7596');
    this.setTooltip('');
    this.setHelpUrl('');
    this.contextMenu = false;
  }
};


Blockly.Blocks['moving_average'] = {
  init: function() {
    this.appendValueInput('ARRAY')
        .setCheck('Array')
        .appendField('Moving Average');
    this.appendValueInput('WINDOW_SIZE')
        .setCheck('Number')
        .appendField('Fenstergröße');
    this.setOutput(true, 'Array');
    this.setColour('#DD7596');
    this.setTooltip('Berechnet den simplen moving average eines Arrays');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['lm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lineares Regressions Modell");
    this.appendValueInput("Y")
        .setCheck("Array")
        .appendField("Abhängige Variable Y");
    this.appendValueInput("X")
        .setCheck("Array")
        .appendField("Unabhängige Variable X");
    this.setInputsInline(false);
    this.setOutput(true, "String");
    this.setColour("#DD7596");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Passt ein lineares Regressionsmodell an");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['anova'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("ANOVA");
    this.setStyle('list_blocks');
    this.setColour("#DD7596");
    this.itemCount_ = 2;
    this.updateShape_();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setMutator(new Blockly.Mutator(['anova_item']));
    this.setTooltip('Führt ANOVA auf eine variable Anzahl an Daten aus');
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
    var containerBlock = workspace.newBlock('anova_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('anova_item');
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
      Blockly.Mutator.reconnect(connections[i], this, 'ITEM' + i);
    }
  },
  
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ITEM' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
    }
  },
  
  updateShape_: function() {
    for (var i = 0; i < this.itemCount_; i++) {
      var inputExists = this.getInput('ITEM' + i);
      if (!inputExists) {
        this.appendValueInput('ITEM' + i)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField('Gruppe');
      }
    }
    while (this.getInput('ITEM' + i)) {
      this.removeInput('ITEM' + i);
      i++;
    }
  }
};

Blockly.Blocks['anova_container'] = {
  init: function() {
    this.setColour("#DD7596");
    this.appendDummyInput()
        .appendField('Gruppen');
    this.appendStatementInput('STACK');
    this.setTooltip('');
    this.contextMenu = false;
  }
};

Blockly.Blocks['anova_item'] = {
  init: function() {
    this.setColour("#DD7596");
    this.appendDummyInput()
        .appendField('Gruppe');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.contextMenu = false;
  }
};


Blockly.Blocks['correlation_analysis'] = {
  init: function() {
    this.appendValueInput("VAR1")
        .setCheck(null)
        .appendField("Korrelationsanalyse");
    this.appendValueInput("VAR2")
        .setCheck(null)
        .appendField("mit");
    this.appendDummyInput()
        .appendField("Methode")
        .appendField(new Blockly.FieldDropdown([["Pearson", "pearson"], ["Spearman", "spearman"], ["Kendall", "kendall"]]), "METHOD");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour("#DD7596");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Berechnet die Korrelation zwischen Stichproben");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['one_sample_t_test'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Einstichproben-t-Test")
    this.appendValueInput("SAMPLE")
        .appendField("Sample");
    this.appendValueInput("POPULATION_MEAN")
        .setCheck("Number")
        .appendField("Mittelwert");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#DD7596");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Führt den Einstichproben-t-Test mit einem Sample und einem gegebenen Mittelwert aus");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['two_sample_t_test'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zweistichproben-t-Test")
    this.appendValueInput("SAMPLE_1")
        .appendField("Sample 1");
    this.appendValueInput("SAMPLE_2")
        .appendField("Sample 2");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#DD7596");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Führt den Zweistichprobe-t-Test mit zwei gegebenen Samples aus");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['predict'] = {
  init: function() {
    this.appendValueInput('MODEL')
        .setCheck('String')
        .appendField('Vorhersage mit Modell');
    this.appendValueInput('DATA')
        .setCheck('String')
        .appendField('Data');
    this.setOutput(true, 'String');
    this.setColour('#DD7596');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Tätigt eine Vorhersage mithilfe eines trainierten Modells');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['kriging'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Kriging")
    this.appendValueInput('X')
        .setCheck('Array')
        .appendField('X');
    this.appendValueInput('Y')
        .setCheck('Array')
        .appendField('Y');
    this.appendValueInput('COORDINATES')
        .setCheck('Array')
        .appendField('Koordinaten');
    this.appendValueInput('MODEL')
        .setCheck('String')
        .appendField('Modell');
    this.setOutput(true, 'Array');
    this.setColour('#DD7596');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Führt kriging Interpolation durch');
    this.setHelpUrl('');
  }
};

// Kategorie Datenvisualisierung

Blockly.Blocks['boxplot'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null)
        .appendField("Box Plot");
    this.appendDummyInput()
        .appendField("Titel")
        .appendField(new Blockly.FieldTextInput(""), "TITLE");
    this.appendDummyInput()
        .appendField("X-Achse")
        .appendField(new Blockly.FieldTextInput("Variable"), "X_LABEL");
    this.appendDummyInput()
        .appendField("Y-Achse")
        .appendField(new Blockly.FieldTextInput("Wert"), "Y_LABEL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DA5D87");
    this.setTooltip("Erstellt einen Box Plot");
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
        .appendField("Regressionslinie")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "SHOW_LINE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DA5D87");
    this.setTooltip("Erstellt einen Scatter Pot");
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
        .appendField("X-Achse");
    this.appendValueInput("Y_AXIS")
        .setCheck("String")
        .appendField("Y-Achse");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DA5D87");
    this.setTooltip("Erstellt ein Balkendiagramm");
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
        .appendField("X-Achse");
    this.appendValueInput("Y_AXIS")
        .setCheck("String")
        .appendField("Y-Achse");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DA5D87");
    this.setTooltip("Erstellt ein Säulendiagramm");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['histogram'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null)
        .appendField("Histogramm");
    this.appendDummyInput()
        .appendField("Titel")
        .appendField(new Blockly.FieldTextInput(""), "TITLE");
    this.appendDummyInput()
        .appendField("X-Achse")
        .appendField(new Blockly.FieldTextInput("Value"), "X_LABEL");
    this.appendDummyInput()
        .appendField("Y-Achse")
        .appendField(new Blockly.FieldTextInput("Frequency"), "Y_LABEL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DA5D87");
    this.setTooltip("Erstellt ein Histogramm");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['heatmap'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null)
        .appendField("Heatmap");
    this.appendDummyInput()
        .appendField("Farbschema")
        .appendField(new Blockly.FieldDropdown([["Red", "red"], ["Blue", "blue"], ["Green", "green"]]), "COLOR_SCHEME");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DA5D87");
    this.setTooltip("Erstellt eine Heatmap");
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
    this.setTooltip("Erstellt eine Tabelle");
    this.setHelpUrl("");
  }
};

// Kombinierte Blöcke:

