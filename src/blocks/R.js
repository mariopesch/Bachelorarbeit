import * as Blockly from 'blockly';
import 'blockly/javascript';

// Blockdefinitionen für das Blockly4R Tool

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
        .appendField("SenseBox #")
        .appendField(new Blockly.FieldDropdown(numberOptions), "Number");
    this.setOutput(true, "String");
    this.setColour("#4F6272");
    this.setTooltip("Wähle eine SenseBox aus, dessen Daten verarbeitet werden sollen.");
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
 this.setTooltip("Falls die SenseBox ID bekannt ist oder eine andere Box betrachtet werden soll, die sich nicht in der Liste befindet, kann die ID hier manuell eingetragen werden.");
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
    this.setTooltip("Gibt die letzten 30 Temperaturmessungen in °C der ausgewählten Box wieder.");
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
    this.setTooltip("Gibt die letzten 30 Luftfeuchtigkeitsmessungen in % der ausgewählten Box wieder.");
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
    this.setTooltip("Gibt die letzten 30 Abstandsmessungen zur linken Seite der Box in cm Box wieder.");
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
    this.setTooltip("Gibt die letzten 30 Abstandsmessungen zur rechten Seite der Box in cm Box wieder.");
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
    this.setTooltip("Gibt die letzten 30 Feinstaubmessungen PM10 in µg/m³ der ausgewählten Box wieder.");
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
    this.setTooltip("Gibt die letzten 30 Feinstaubmessungen PM25 in µg/m³ der ausgewählten Box wieder.");
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
    this.setTooltip("Gibt die letzten 30 Beschleunigungsmessungen auf der x-Achse der ausgewählten Box wieder.");
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
    this.setTooltip("Gibt die letzten 30 Beschleunigungsmessungen auf der y-Achse der ausgewählten Box wieder.");
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
    this.setTooltip("Gibt die letzten 30 Beschleunigungsmessungen auf der z-Achse der ausgewählten Box wieder.");
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
    this.setTooltip("Gibt die letzten 30 Geschwindigkeitsmessungen in km/h der ausgewählten Box wieder.");
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
    this.setTooltip("Aktueller Standort der Box als Längen- und Breitengrad im Dezimalgrad.");
    this.setHelpUrl("");
  }
};

// Kategorie Listen und Text 

Blockly.Blocks['lists_create_with'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Liste (Text)");
    this.setStyle('list_blocks');
    this.setColour("#8393B3");
    this.itemCount_ = 2;
    this.updateShape_();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, 'Array');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.setTooltip("Erstellt eine Liste (z.B. aus Wörtern) mit einer variablen Anzahl an Einträgen. Füge items hinzu, um den Inhalt zu vergrößern.");
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
    this.setTooltip("Berechnet die Länge eines Texts. Das Ergebnis die Anzahl aller Zeichen des Textes, inklusive Leer- und Sonderzeichen.");
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
    this.setTooltip("Nimmt einen Text als Input an.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['print'] = {
  init: function() {
    this.appendValueInput('String')
        .setCheck('String')  
        .appendField('Print');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8393B3");
    this.setTooltip('Printed den übergebenen Text und gibt ihn aus.');
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
    this.setTooltip("Lädt alle notwenigen R Libraries, die das Programm für die Ausführung des Codes benötigt.");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['save_sensor_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Variable (für SenseBoxwerte)");
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
    this.setTooltip("Speichert einen SenseBox Sensorwert unter einem Variablennamen, um die Werte später wiederverwenden zu können. Wähle dazu den zu speichernden Wert aus der Liste und verknüpfe ihn mit einem frei wählbaren Namen mithilfe des Text-Blocks. Berücksichtige aber, dass Sonderzeichen und Umlaute nicht verwendet werden sollten. Eine gängige Vorgangsweise ist es, kurze und prägnante Bezeichnungen zu wählen, die entweder durch einen Unterstrich oder durch die camel case Notation strukturiert werden, beispielsweise: price_item4 oder priceItem4.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['save_variable'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null)
        .appendField("Variable (beliebig)");
    this.appendValueInput("VARIABLE_NAME")
        .setCheck("String")
        .appendField("Variablenname");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#B7C3F3");
    this.setTooltip("Speichert eine beliebige Variable (keine Sensorwerte!) unter einem frei wählbaren Namen. en sollten.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['convert_data_type'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck(null)
        .appendField('Kovertiere Datentyp');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['numerisch', 'as.numeric'],
          ['string', 'as.character'],
          ['logisch', 'as.logical']
        ]), 'TYPE');
    this.setOutput(true, null);
    this.setColour("#B7C3F3");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Konvertiert den Datentyp einer Eingabe in String, Int, Num oder Logical. Manche Funktionen in R können nur mit einem bestimmten Datentyp arbeiten. So kann z.B. max() zur Bestimmung des größten Werts in einem Array nur numerische Werte miteinander vergleichen, aber keine Wörter. Auch Plots arbeiten mit numerischen Werten. Hast du also deine Sensorwerte in einer Textvariable gespeichert, musst du sie umwandeln, bevor sie visualisiert werden können.');
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
    this.setColour("#B7C3F3");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Berechnet den größten oder den kleinsten Wert einer Liste (Array).");
    this.setHelpUrl("");
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
    this.setTooltip('Sortiert eine Liste (Array) aufsteigend oder absteigend.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['split'] = {
  init: function() {
    this.appendValueInput('ARRAY')
        .setCheck('Array')
        .appendField('Split Liste');
    this.appendValueInput('SUBSET_SIZE')
        .setCheck('Number')
        .appendField('Größe der Untermenge');
    this.setOutput(true, 'Array');
    this.setColour('#B7C3F3');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Splittet eine Liste (Array) in eine beliebig große Untermenge.');
    this.setHelpUrl('');
  }
};


// Kategorie Mathematik

Blockly.Blocks['number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zahl")
        .appendField(new Blockly.FieldNumber(0), "VALUE");
    this.setOutput(true, "Number");
    this.setColour("#C1B0DC");
    this.setTooltip("Nimmt eine Zahl als Input.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['array_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Liste")
        .appendField(new Blockly.FieldTextInput("1, 2, 3"), "ARRAY");
    this.setOutput("Data");
    this.setColour("#C1B0DC");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Nimmt eine Liste (Array) als Input. Ein Array ist eine Datenstruktur, die Daten desselben Typs als eine Liste speichert. Der Inhalt der Liste kann hier direkt eingetragen werden.");
    this.setHelpUrl("");
    this.setInputsInline(true);
  }
};

Blockly.Blocks['save_as_array'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Liste (Zahlen)");
    this.setStyle('list_blocks');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#C1B0DC");
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true, 'Array');
    this.setMutator(new Blockly.Mutator(['save_as_array_item']));
    this.setTooltip("Speichert beliebig viele Werte (z.B. Sensorwerte der Boxen) als eine Liste (Array). Füge items hinzu, um den Inhalt deiner Liste zu vergrößern und füge dann die Blöcke an, die den Inhalt der Liste repräsentieren.");
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
    this.setTooltip("Erstellt eine m x n Matrix, also eine rechteckige Anordnung von Werten als Tabelle mit m Zeilen und n Spalten. Zuerst werden die Spalten von oben nach unten gefüllt. Gib die Menge an Spalten und Zeilen mithilfe einer Zahl an und fülle die Matrix mit einer Liste. Der Block verteilt den Inhalt der Liste dann auf die angegebenen Spalten und Zeilen.");
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
    this.setTooltip("Führt eine arithmetische Operation +, -, *, :, oder % aus.");
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
    this.setTooltip('Rundet eine Dezimalzahl auf zwei Nachkommastellen.');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['square_root'] = {
  init: function() {
    this.appendValueInput('NUMBER')
        .setCheck('Number')
        .appendField('Quadratwurzel aus');
    this.setOutput(true, 'Number');
    this.setColour("#C1B0DC");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Berechnet die Quadratwurzel aus einer Eingabe.');
    this.setHelpUrl('');
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
    this.setTooltip("Nimmt die booleschen Werte 'true' (wahr) und 'false' (falsch) als Eingabe.");
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
    this.setTooltip('Führt logische Operationen auf booleschen Werten aus. Die Werte true und false können mit den Operationen "und" "oder" und "nicht" kombiniert werden.');
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
    this.setTooltip('Vergleicht zwei Werte miteinander, ob sie größer, größer gleich, kleiner, kleiner gleich, gleich oder ungleich sind. Das Ergebnis besteht aus einem booleschen Wert: "TRUE" (wahr) oder "FALSE" (falsch)');
    this.setHelpUrl('');
  }
};

// Kategorie Datenanalyse

Blockly.Blocks['mean'] = {
  init: function() {
    this.appendValueInput("DATA")
        .appendField("Mittelwert");
    this.setOutput("Number");
    this.setColour("#DD7596");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Berechnet den Mittelwert einer Eingabe.");
    this.setHelpUrl("https://datatab.de/statistik-rechner/deskriptive-statistik/mittelwert-modalwert-median-rechner");
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
    this.setTooltip("Berechnet den Median einer Eingabe.");
    this.setHelpUrl("https://datatab.de/statistik-rechner/deskriptive-statistik/mittelwert-modalwert-median-rechner");
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
    this.setTooltip("Berechnet die Standardabweichung einer Eingabe.");
    this.setHelpUrl("https://datatab.de/statistik-rechner/deskriptive-statistik/standardabweichung-varianz-rechner");
  }
};

Blockly.Blocks['summary'] = {
  init: function() {
    this.setStyle('list_blocks');
    this.appendDummyInput()
      .appendField("Zusammenfassung");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.itemCount_ = 1;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(['summary_input']));
    this.setColour("#DD7596");
    this.setTooltip("Berechnet die Zusammenfassung der Stichprobe. Das Ergebnis beinhaltet den kleinsten und größten Wert, den Mittelwert, den Median sowie das 1. und 3. Quartil.");
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

Blockly.Blocks['lm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lineares Regressions Modell");
    this.appendValueInput("Y")
        .setCheck(null)
        .appendField("Abhängige Variable Y");
    this.appendValueInput("X")
        .setCheck(null)
        .appendField("Unabhängige Variable X");
    this.setInputsInline(false);
    this.setOutput(true, "String");
    this.setColour("#DD7596");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Passt ein lineares Regressionsmodell an.");
    this.setHelpUrl("https://datatab.de/statistik-rechner/regression");
  }
};

Blockly.Blocks['one_sample_t_test'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Einstichproben-t-Test");
    this.appendValueInput("SAMPLE")
        .appendField("Sample");
    this.appendValueInput("POPULATION_MEAN")
        .setCheck("Number")
        .appendField("Mittelwert");
    this.appendDummyInput()
        .appendField("Richtung")
        .appendField(new Blockly.FieldDropdown([["größer als", "greater"],["kleiner als", "less"]]), "DIRECTION");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour("#DD7596");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Führt den Einstichproben-t-Test mit einem Sample und einem Mittelwert aus.");
    this.setHelpUrl("https://datatab.de/statistik-rechner/hypothesentest/t-test");
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
    this.setTooltip("Führt den Zweistichprobe-t-Test mit zwei Samples aus.");
    this.setHelpUrl("https://datatab.de/tutorial/unabh%C3%A4ngiger-t-test");
  }
};

Blockly.Blocks['correlation'] = {
  init: function() {
    this.appendValueInput("VAR1")
        .setCheck(null)
        .appendField("Korrelation zwischen Variable");
    this.appendValueInput("VAR2")
        .setCheck(null)
        .appendField("und Variable");
    this.setOutput(true, "String");
    this.setColour("#DD7596");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Berechnet die Korrelation zwischen zwei Variablen. Der Block verwendet die Pearson Methode und sein Ergebnis ist ein Korrelationskoeffizient, der mithilfe der Informationen im Wiki interpretiert werden kann.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['outlier_detection'] = {
  init: function() {
    this.appendValueInput('DATA')
        .setCheck(null)
        .appendField('Bestimmung Ausreißer');
    this.setOutput(true, 'Array');
    this.setColour('#DD7596');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Identifiziert potenzielle Ausreißer einer Stichprobe. Der Block arbeitet mit einem Schwellenwert und dem übergebenen Variablennamen der Daten. Ist ein Messwert der eingegebenen Daten größer als dieser Schwellenwert, wird dieser als Ausreißer behandelt und zum Ergebnis des Blocks gezählt. Die Zahl in Klammern ist die Menge der Ausreißer in der Stichprobe.');
    this.setHelpUrl('');
  }
};


// Kategorie Datenvisualisierung

Blockly.Blocks['boxplot'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck('Array')
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
    this.setTooltip("Erstellt einen Box Plot aus einem Datensatz. Der Titel des Plots ist frei wählbar und auf der x-Achse befindet sich der Variablenname und auf der y-Achse die Werte der Variable.");
    this.setHelpUrl("https://datatab.de/statistik-rechner/diagramme/boxplot-erstellen");
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
    this.setTooltip("Erstellt einen Scatter Plot aus zwei Stichproben. Es müssen Werte für die x-Achse und die y-Achse angegeben werden und es kann zudem ausgewählt werden, ob eine Regressionslinie in die Graphik eingezeichnet werden soll.");
    this.setHelpUrl("https://datatab.de/tutorial/diagramme");
    this.setInputsInline(false);
  }
};

Blockly.Blocks['bar_chart'] = {
  init: function() {
    this.appendValueInput('DATA')
        .setCheck('Array')
        .appendField('Säulendiagramm');
    this.appendValueInput('X_AXIS')
        .setCheck('String')
        .appendField('X-Achse');
    this.appendValueInput('Y_AXIS')
        .setCheck('String')
        .appendField('Y-Achse');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#DA5D87');
    this.setTooltip('Erstellt ein Säulendiagramm aus den gegebenen Daten. Die Beschriftung der x-Achse und y-Achse erfolgt durch einen Text-Block.');
    this.setHelpUrl('https://datatab.de/tutorial/diagramme');
  }
};

  Blockly.Blocks['line_chart'] = {
    init: function() {
      this.appendValueInput('DATA')
          .setCheck('Array')
          .appendField('Liniendiagramm');
      this.appendValueInput('X_AXIS')
          .setCheck('String')
          .appendField('X-Achse');
      this.appendValueInput('Y_AXIS')
          .setCheck('String')
          .appendField('Y-Achse');
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#DA5D87');
      this.setTooltip('Erstellt ein Liniendiagramm aus den gegebenen Daten. Die Beschriftung der x-Achse und y-Achse erfolgt durch einen Text-Block.');
      this.setHelpUrl('https://datatab.de/tutorial/diagramme');
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
    this.setTooltip("Erstellt ein Histogramm aus den gegebenen Daten.");
    this.setHelpUrl("https://datatab.de/tutorial/diagramme");
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
    this.setTooltip("Stellt die eigegebenen Daten in tabellarischer Form dar.");
    this.setHelpUrl("");
  }
};

export function extractTooltipFromBlock(block) {
  // Extrahiere den Tooltip-Text aus dem Block
  const tooltip = block.getInputs().find(input => input.name === 'TOOLTIP');
  if (tooltip && tooltip.connection.targetBlock()) {
    return tooltip.connection.targetBlock().getFieldValue('TEXT');
  }
  return null;
}

export function getBlockTooltip(block) {
  const extractedTooltip = extractTooltipFromBlock(block);
  if (extractedTooltip) {
    return extractedTooltip;
  }
  return block.tooltip;
}

