import '../blocks/R';
import Blockly from 'blockly';
import 'blockly/javascript';


export const RGenerator = new Blockly.Generator('R');

RGenerator.ORDER_ATOMIC = 0;
RGenerator.ORDER_UNARY_POSTFIX = 1; // expr++ expr-- () [] .
RGenerator.ORDER_MEMBER = 1.2;         // . []
RGenerator.ORDER_UNARY_PREFIX = 2; // -expr !expr ~expr ++expr --expr
RGenerator.ORDER_MULTIPLICATIVE = 3; // * / % ~/
RGenerator.ORDER_ADDITIVE = 4; // + -
RGenerator.ORDER_LOGICAL_NOT = 4.4; // !
RGenerator.ORDER_SHIFT = 5; // << >>
RGenerator.ORDER_MODULUS = 5.3; // %
RGenerator.ORDER_RELATIONAL = 6; // is is! >= > <= <
RGenerator.ORDER_EQUALITY = 7; // === !== === !==
RGenerator.ORDER_BITWISE_AND = 8; // &
RGenerator.ORDER_BITWISE_XOR = 9; // ^
RGenerator.ORDER_BITWISE_OR = 10; // |
RGenerator.ORDER_LOGICAL_AND = 11; // &&
RGenerator.ORDER_LOGICAL_OR = 12; // ||
RGenerator.ORDER_CONDITIONAL = 13; // expr ? expr : expr
RGenerator.ORDER_ASSIGNMENT = 14; // = *= /= ~/= %= += -= <<= >>= &= ^= |=
RGenerator.ORDER_COMMA = 18; // ,
RGenerator.ORDER_FUNCTION_CALL = 90;
RGenerator.ORDER_NONE = 99;

RGenerator.scrub_ = function(block, code, thisOnly) {
  const nextBlock =
      block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + '\n' + RGenerator.blockToCode(nextBlock);
  }
  return code;
};

// Kategorie Senseboxen

RGenerator['choose_box'] = function(block) {
  var number = block.getFieldValue('Number');
  var uniqueID = generateUniqueID(number);
  return [uniqueID, RGenerator.ORDER_ATOMIC];
};

function generateUniqueID(number) {
  // Jeder SenseBox Nummer der aktiven Futurium-Boxen wird die ID zugewiesen
  if (number === '2') {
    return '615f2945c031ff001b117bae';
  } else if (number === '3') {
    return '615f295ac031ff001b118211';
  } else if (number === '5') {
    return '615f2964c031ff001b118911';
  } else if (number === '6') {
    return '615f2969c031ff001b118a3e';
  } else if (number === '10') {
    return '615f298fc031ff001b119a83';
  } else if (number === '11') {
    return '615f2994c031ff001b119d04';
  } else if (number === '12') {
    return '615f2999c031ff001b119efb';
  } else if (number === '13') {
    return '615f299fc031ff001b11a172';
  } else if (number === '14') {
    return '615f29a4c031ff001b11a396';
  } else if (number === '17') {
    return '615f29b4c031ff001b11a8cb';
  } else if (number === '18') {
    return '616015adc031ff001b713f7f';
  } else if (number === '19') {
    return '615f29bfc031ff001b11adcb';
  } else if (number === '20') {
    return '616015c4c031ff001b714683';
  } else if (number === '22') {
    return '616015cfc031ff001b7148d3';
  } else if (number === '23') {
    return '615f29d4c031ff001b11b5f1';
  } else if (number === '24') {
    return '616015d5c031ff001b714e93';
  } else if (number === '25') {
    return '615f29dec031ff001b11b9e4';
  } else if (number === '26') {
    return '616015dcc031ff001b715497';
  } else if (number === '28') {
    return '616015e4c031ff001b7156b4';
  } else if (number === '29') {
    return '615f29f3c031ff001b11c1a6';
  } else if (number === '30') {
    return '615f292bc031ff001b117192';
  } 
  
  return 'default_unique_id';
}

RGenerator['box_id'] = function(block) {
  const boxId = block.getFieldValue('String');
  return [boxId, RGenerator.ORDER_ATOMIC];
};


// Kategorie Sensor-Anfragen

RGenerator['get_temperature'] = function (block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code =
  `fetchTemp <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}/sensors?count=30"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  temp <- req$sensors$lastMeasurements$measurements\n` +
  `  temp[[1]]$value\n` +
  
  `}\n\n` +
  `fetchTemp()\n`;

  return code;
};

RGenerator['get_humidity'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchHumidity <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}/sensors?count=30"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  hum <- req$sensors$lastMeasurements$measurements\n` +
  `  hum[[2]]$value\n` +
  `}\n\n` +
  `fetchHumidity()\n`;

return code;
};

RGenerator['get_distanceLeft'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchDistanceLeft <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}/sensors?count=30"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  disL <- req$sensors$lastMeasurements$measurements\n` +
  `  disL[[3]]$value\n` +  `}\n\n` +
  `fetchDistanceLeft()\n`;

return code;
};

RGenerator['get_distanceRight'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchDistanceRight <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}/sensors?count=30"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  disR <- req$sensors$lastMeasurements$measurements\n` +
  `  disR[[4]]$value\n` +  `}\n\n` +
  `fetchDistanceRight()\n`;

return code;
};

RGenerator['get_PM10'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchPM10 <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}/sensors?count=30"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  PM10 <- req$sensors$lastMeasurements$measurements\n` +
  `  PM10[[5]]$value\n` +  `}\n\n` +
  `fetchPM10()\n`;

return code;
};
RGenerator['get_PM25'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchPM25 <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}/sensors?count=30"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  PM25 <- req$sensors$lastMeasurements$measurements\n` +
  `  PM25[[6]]$value\n` +  `}\n\n` +
  `fetchPM25()\n`;

return code;
};

RGenerator['get_accelerationX'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchAccelerationX <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}/sensors?count=30"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  accX <- req$sensors$lastMeasurements$measurements\n` +
  `  accX[[7]]$value\n` +  `}\n\n` +
  `fetchAccelerationX()\n`;

return code;
};

RGenerator['get_accelerationY'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchAccelerationY <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}/sensors?count=30"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  accY <- req$sensors$lastMeasurements$measurements\n` +
  `  accY[[8]]$value\n` +  `}\n\n` +
  `c(fetchAccelerationY())\n`;

return code;
};

RGenerator['get_accelerationZ'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchAccelerationZ <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}/sensors?count=30"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  accZ <- req$sensors$lastMeasurements$measurements\n` +
  `  accZ[[9]]$value\n` +  `}\n\n` +
  `c(fetchAccelerationZ())\n`;

return code;
};

RGenerator['get_speed'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchSpeed <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}/sensors?count=30"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  speed <- req$sensors$lastMeasurements$measurements\n` +
  `  speed[[10]]$value\n` +  `}\n\n` +
  `c(fetchSpeed())\n`;

return code;
};

RGenerator['get_coordinates'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchCoordinates <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `   coordinates <- req$currentLocation$coordinates\n` +
  `  lat <- coordinates[2] \n` +
  `  lon <- coordinates[1] \n` +
  `  list(lat = lat, lon = lon)  \n` +
  `}\n\n` +
  `c(fetchCoordinates())\n`;

return code;
};

// Kategorie Listen und Text 

RGenerator['lists_create_with'] = function(block) {
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = RGenerator.valueToCode(block, 'ADD' + i, RGenerator.ORDER_NONE) || 'NULL';
  }

  var code = 'c(' + elements.join(', ') + ')';
  
  for(var i = 0; i < elements.length; i++){
    if(/^c\(/.test(elements[i])){
      code = 'cbind(' + elements.join(', ') + ')';
    }
  }

  return code;
};

RGenerator['lists_create_with_container'] = function(block) {
  var code = '';
  return code;
};

RGenerator['lists_create_with_item'] = function(block) {
  var code = '';
  return code;
};

RGenerator['string_length'] = function(block) {
  var text = RGenerator.valueToCode(block, 'String',
  RGenerator.ORDER_MEMBER) || '\'\'';
  var result = 'nchar(' + "'" + text + "'" + ')';
  return result;
};

RGenerator['string_input'] = function(block) {
  var string = block.getFieldValue('String');
  return [string, RGenerator.ORDER_ATOMIC];
};

RGenerator['print'] = function(block) {
  var value = RGenerator.valueToCode(block, 'String', RGenerator.ORDER_NONE) || ''; 
  var code = 'print("' + value + '")\n'; 
  return code; 
};


// Kategorie Operationen 

RGenerator['load_libraries'] = function(block) {
  var code = 'library(jsonlite)\nlibrary(httr)\nlibrary(ggplot2)\nlibrary(ggpubr)\nlibrary(tidyverse)\nlibrary(broom)\nlibrary(AICcmodavg)';
  return code;
};

RGenerator['save_sensor_variable'] = function(block) {
  var variableName = RGenerator.valueToCode(block, 'VARIABLE_NAME', RGenerator.ORDER_ATOMIC);
  var selectedVariable = block.getFieldValue('Wähle Sensor');

  var valueCode = '';
  if (selectedVariable === 'temp') {
    valueCode = 'fetchTemp()';
  } else if (selectedVariable === 'humidity') {
    valueCode = 'fetchHumidity()';
  } else if (selectedVariable === 'disL') {
    valueCode = 'fetchDistanceleft()';
  } else if (selectedVariable === 'disR') {
    valueCode = 'fetchDistanceRight()';
  } else if (selectedVariable === 'pm10') {
    valueCode = 'fetchPM10()';
  } else if (selectedVariable === 'pm25') {
    valueCode = 'fetchPM25()';
  } else if (selectedVariable === 'accX') {
    valueCode = 'fetchAccelerationX()';
  } else if (selectedVariable === 'accY') {
    valueCode = 'fetchAccelerationY()';
  } else if (selectedVariable === 'accZ') {
    valueCode = 'fetchAccelerationZ()';
  } else if (selectedVariable === 'speed') {
    valueCode = 'fetchSpeed()';
  }

  var code = variableName + ' <- ' + valueCode + '\n';

  return code ;
};

RGenerator['save_variable'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var variableName = RGenerator.valueToCode(block, 'VARIABLE_NAME', RGenerator.ORDER_ATOMIC);
  var code = variableName + ' <- ' + data + '\n';
  return code;
};


RGenerator['convert_data_type'] = function(block) {
  var value = RGenerator.valueToCode(block, 'VALUE', RGenerator.ORDER_ATOMIC);
  var dataType = block.getFieldValue('TYPE');
  
  var code = dataType + '(' + value + ')';
  
  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['max_min'] = function(block) {
  var func = block.getFieldValue('FUNCTION');
  var values = RGenerator.valueToCode(block, 'VALUES', RGenerator.ORDER_ATOMIC) || 'NULL';

  var code = func + '(' + values + ')';
  return code;
};

RGenerator['lists_sort'] = function(block) {
  var list = RGenerator.valueToCode(block, 'LIST', RGenerator.ORDER_ATOMIC) || '[]';
  var order = block.getFieldValue('ORDER');
  var code = '';

  if (order === 'ASCENDING') {
    code = 'sort(' + list + ')';
  } else if (order === 'DESCENDING') {
    code = 'sort(' + list + ', decreasing = TRUE)';
  }

  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['split'] = function(block) {
  var vector = RGenerator.valueToCode(block, 'ARRAY', RGenerator.ORDER_ATOMIC);
  var subsetSize = RGenerator.valueToCode(block, 'SUBSET_SIZE', RGenerator.ORDER_ATOMIC);
  
  var code = `split(${vector}, rep(1:${subsetSize}, length(${vector}) %/% ${subsetSize}))`;
  
  return [code, RGenerator.ORDER_ATOMIC];
};

// Kategorie Mathematik 

RGenerator['number'] = function(block) {
  var value = block.getFieldValue('VALUE');
  return [value, RGenerator.ORDER_ATOMIC];
};

RGenerator['array_input'] = function(block) {
  const array = block.getFieldValue('ARRAY').split(',').map(element => element.trim()).join(', ');
  
  const code = `c(${array})`;
  return [code, RGenerator.ORDER_ATOMIC];
};


RGenerator['save_as_array'] = function(block) {
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = RGenerator.valueToCode(block, 'ADD' + i, RGenerator.ORDER_NONE) || 'NULL';
  }

  var code = 'c(' + elements.join(', ') + ')';

  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['save_as_array_container'] = function(block) {
  var code = '';
  return code;
};

RGenerator['save_as_array_item'] = function(block) {
  var code = '';
  return code;
};

RGenerator['matrix'] = function(block) {
  var rows = RGenerator.valueToCode(block, 'ROWS', RGenerator.ORDER_ATOMIC) || '0';
  var cols = RGenerator.valueToCode(block, 'COLS', RGenerator.ORDER_ATOMIC) || '0';
  var values = RGenerator.valueToCode(block, 'VALUES', RGenerator.ORDER_ATOMIC) || 'NULL';

  var code = 'matrix(c(' + values + '), nrow = ' + rows + ', ncol = ' + cols + ')';
  return code;
};

RGenerator['arithmetic'] = function(block) {
  var left = RGenerator.valueToCode(block, 'LEFT', RGenerator.ORDER_ATOMIC) || '0';
  var operator = block.getFieldValue('OPERATOR');
  var right = RGenerator.valueToCode(block, 'RIGHT', RGenerator.ORDER_ATOMIC) || '0';

  var code = left + ' ' + operator + ' ' + right;
  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['round_number'] = function(block) {
  var number = RGenerator.valueToCode(block, 'NUMBER', RGenerator.ORDER_NONE) || '';

  var code = 'round(' + number + ', 2)';

  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['square_root'] = function(block) {
  var number = RGenerator.valueToCode(block, 'NUMBER', RGenerator.ORDER_NONE) || '';

  var code = 'sqrt(' + number + ')';

  return [code, RGenerator.ORDER_ATOMIC];
};

// Kategorie Logik

RGenerator['boolean'] = function(block) {
  var value = block.getFieldValue('VALUE');
  return [value, RGenerator.ORDER_ATOMIC];
};

RGenerator['logic_operations'] = function(block) {
  var operator = block.getFieldValue('OPERATOR');
  var a = RGenerator.valueToCode(block, 'A', RGenerator.ORDER_NONE) || '';
  var b = RGenerator.valueToCode(block, 'B', RGenerator.ORDER_NONE) || '';

  var code = '';

  if (operator === '!') {
    code = operator + ' ' + a;
  } else {
    code = a + ' ' + operator + ' ' + b;
  }

  return [code, RGenerator.ORDER_LOGICAL];
};

RGenerator['comparison'] = function(block) {
  var left = RGenerator.valueToCode(block, 'LEFT', RGenerator.ORDER_NONE) || '';
  var operator = block.getFieldValue('OPERATOR');
  var right = RGenerator.valueToCode(block, 'RIGHT', RGenerator.ORDER_NONE) || '';

  var code = left + ' ' + operator + ' ' + right;

  // Add parentheses to improve readability
  if (operator === '>=' || operator === '<=' || operator === '!=' || operator === '==') {
    code = '(' + code + ')';
  }

  return code;
};

// Kategorie Datenanalyse

RGenerator['mean'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);

  // Convert data to numeric before calculating the mean
  var code = 'mean(as.numeric(' + data + '))';
  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['median'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var code = 'median(' + data + ')';
  return code;
};

RGenerator['sd'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var code = 'sd(' + data + ')';
  return code;
};

RGenerator['summary'] = function(block) {
  var code = '';
  for (var i = 0; i < block.itemCount_; i++) {
    var data = RGenerator.valueToCode(block, 'INPUT' + i, RGenerator.ORDER_ATOMIC);
    code += 'summary(as.numeric(' + data + '))\n';
  }
  return code;  
};

RGenerator['lm'] = function(block) {
  var yVariable = RGenerator.valueToCode(block, 'Y', RGenerator.ORDER_ATOMIC);
  var xVariable = RGenerator.valueToCode(block, 'X', RGenerator.ORDER_ATOMIC);

  // Determine the lengths of the data vectors
  var yLength = 'length(' + yVariable + ')';
  var xLength = 'length(' + xVariable + ')';

  // Adjust the size of the bigger variable to match the size of the smaller
  var adjustCode = '';
  adjustCode += 'if (' + yLength + ' != ' + xLength + ') {\n';
  adjustCode += '  if (' + yLength + ' > ' + xLength + ') {\n';
  adjustCode += '    ' + yVariable + ' <- ' + yVariable + '[1:' + xLength + ']\n';
  adjustCode += '  } else {\n';
  adjustCode += '    ' + xVariable + ' <- ' + xVariable + '[1:' + yLength + ']\n';
  adjustCode += '  }\n';
  adjustCode += '}\n';

  // Generate the code for the linear regression model
  var regressionCode = 'model <- lm(' + yVariable + ' ~ ' + xVariable + ')\n';

  // Return the model as output
  var outputCode = 'model';

  return [adjustCode + regressionCode + outputCode, RGenerator.ORDER_ATOMIC];
};

RGenerator['one_sample_t_test'] = function (block) {
  var sample = RGenerator.valueToCode(block, 'SAMPLE', RGenerator.ORDER_ATOMIC) || 'NULL';
  var numericSample = 'as.numeric(' + sample + ')';  

  var populationMean = RGenerator.valueToCode(block, 'POPULATION_MEAN', RGenerator.ORDER_ATOMIC) || 'NULL';

  // Set the direction of the t-test based on the block's dropdown value
  var direction = block.getFieldValue('DIRECTION');
  var code = 'result <- t.test(' + numericSample + ', mu = ' + populationMean + ', alternative = "' + direction + '")\n';
  code += 't_value <- result$statistic\n';
  code += 'distribution_table <- result[[';

  // Set the corresponding component of the result object based on the direction
  if (direction === 'less') {
    code += '"p.value"]]\n';
  } else {
    code += '"conf.int"]]\n';
  }
  code += 'result';
  return code;
};

RGenerator['two_sample_t_test'] = function(block) {
  var sample1 = RGenerator.valueToCode(block, 'SAMPLE_1', RGenerator.ORDER_ATOMIC) || 'NULL';
  var sample2 = RGenerator.valueToCode(block, 'SAMPLE_2', RGenerator.ORDER_ATOMIC) || 'NULL';
  var numericSample1 = 'as.numeric(' + sample1 + ')';
  var numericSample2 = 'as.numeric(' + sample2 + ')';

  var code = 't.test(' + numericSample1 + ', ' + numericSample2 + ')$p.value';
  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['correlation'] = function(block) {
  var var1 = RGenerator.valueToCode(block, 'VAR1', RGenerator.ORDER_ATOMIC);
  var var2 = RGenerator.valueToCode(block, 'VAR2', RGenerator.ORDER_ATOMIC);

  // Convert vectors to numeric and handle missing values
  var code = 'var1 <- as.numeric(' + var1 + ')\n';
  code += 'var2 <- as.numeric(' + var2 + ')\n';
  code += 'min_len <- min(length(var1), length(var2))\n';
  code += 'var1 <- var1[1:min_len]\n';
  code += 'var2 <- var2[1:min_len]\n';
  code += 'complete_cases <- complete.cases(var1, var2)\n';
  code += 'var1 <- var1[complete_cases]\n';
  code += 'var2 <- var2[complete_cases]\n';

  // Calculate correlation matrix
  code += 'correlation <- cor(var1, var2)\n';
  code += 'correlation';
  
  return code;
};




RGenerator['outlier_detection'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);

  var code = 'outliers <- ' + data + '[abs(scale(as.numeric(' + data + '))) > 3]\n';
  code += 'outliers';
  return code;
};



// Kategorie Datenvisualisierung

RGenerator['boxplot'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC) || 'NULL';
  var numericData = 'as.numeric(' + data + ')';
  var title = block.getFieldValue('TITLE');
  var xLabel = block.getFieldValue('X_LABEL');
  var yLabel = block.getFieldValue('Y_LABEL');
  
  var code = 'boxplot(' + numericData + ', main = "' + title + '", xlab = "' + xLabel + '", ylab = "' + yLabel + '")\n';
  return code;
};


RGenerator['scatter_plot'] = function(block) {
  var xValues = RGenerator.valueToCode(block, 'X_VALUES', RGenerator.ORDER_ATOMIC) || '';
  var yValues = RGenerator.valueToCode(block, 'Y_VALUES', RGenerator.ORDER_ATOMIC) || '';
  var showLine = block.getFieldValue('SHOW_LINE') === 'TRUE';

  var code = '';

  // Adjust length of xValues and yValues if they have different lengths
  code += 'if (length(' + xValues + ') != length(' + yValues + ')) {\n';
  code += '  if (length(' + xValues + ') > length(' + yValues + ')) {\n';
  code += '    ' + xValues + ' <- ' + xValues + '[1:length(' + yValues + ')]\n';
  code += '  } else {\n';
  code += '    ' + yValues + ' <- ' + yValues + '[1:length(' + xValues + ')]\n';
  code += '  }\n';
  code += '}\n';

  code += 'plot(' + xValues + ', ' + yValues + ', pch = 19, frame = FALSE)\n';

  if (showLine) {
    code += 'model <- lm(' + yValues + ' ~ ' + xValues + ')\n';
    code += 'abline(coef(model)[1], coef(model)[2], col = "blue")\n';
  }

  return code;
};


RGenerator['bar_chart'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC) || 'NULL';
  var xLabel = '"' + RGenerator.valueToCode(block, 'X_AXIS', RGenerator.ORDER_ATOMIC) + '"';
  var yLabel = '"' + RGenerator.valueToCode(block, 'Y_AXIS', RGenerator.ORDER_ATOMIC) + '"';

  var code = 'barplot(' + data + ', xlab=' + xLabel + ', ylab=' + yLabel + ')\n';
  return code;
};


RGenerator['line_chart'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC) || 'NULL';
  var xLabel = '"' + RGenerator.valueToCode(block, 'X_AXIS', RGenerator.ORDER_ATOMIC) + '"';
  var yLabel = '"' + RGenerator.valueToCode(block, 'Y_AXIS', RGenerator.ORDER_ATOMIC) + '"';

  var code = 'plot(' + data + ', type="b", xlab=' + xLabel + ', ylab=' + yLabel + ')\n';
  return code;
};


RGenerator['histogram'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var title = block.getFieldValue('TITLE');
  var xLabel = block.getFieldValue('X_LABEL');
  var yLabel = block.getFieldValue('Y_LABEL');
  
  var code = 'hist(' + data + ', main = "' + title + '", xlab = "' + xLabel + '", ylab = "' + yLabel + '")\n';
  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['display_table'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC) || '';

  var code = 'print("Table:");\n';
  code += 'print(as.data.frame(' + data + '))\n';
  return code;
};




