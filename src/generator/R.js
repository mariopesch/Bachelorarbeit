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
    return code + ',\n' + RGenerator.blockToCode(nextBlock);
  }
  return code;
};

RGenerator['choose_box'] = function(block) {
  var number = block.getFieldValue('Number');
  var uniqueID = generateUniqueID(number);
  return [uniqueID, RGenerator.ORDER_ATOMIC];
};

function generateUniqueID(number) {
  // Logic to generate a unique ID based on the provided number
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
  } else if (number === '615f292bc031ff001b117192') {
    return 'boxID';
  } 
  // Add more conditions for other numbers if needed
  // ...
  
  // Return a default unique ID if no specific condition matches
  return 'default_unique_id';
}

// Generate the code for the string input block
RGenerator['string_input'] = function(block) {
  var string = block.getFieldValue('String');
  return [string, RGenerator.ORDER_ATOMIC];
};

RGenerator['array_input'] = function(block) {
  const array = block.getFieldValue('ARRAY').split(',').map(element => element.trim()).join(', ');
  
  const code = `c(${array})`;
  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['string_length'] = function(block) {
  // String or array length.
  var text = RGenerator.valueToCode(block, 'String',
  RGenerator.ORDER_MEMBER) || '\'\'';
  var result = 'nchar(' + "'" + text + "'" + ')';
  //return ['nchar(' + text + ')', RGenerator.ORDER_MEMBER];
  return result;
};

RGenerator['save_variable'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var variableName = RGenerator.valueToCode(block, 'VARIABLE_NAME', RGenerator.ORDER_ATOMIC);
  var code = variableName + ' <- ' + data + '\n';
  return code;
};

RGenerator['box_id'] = function(block) {
  const boxId = block.getFieldValue('String');
  return [boxId, RGenerator.ORDER_ATOMIC];
};

RGenerator['get_temperature'] = function (block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchTemp <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[1]]\n` +
  `}\n\n` +
  `fetchTemp()\n`;

  return [code, RGenerator.ORDER_NONE];
  };

RGenerator['get_humidity'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchHumidity <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[2]]\n` +
  `}\n\n` +
  `fetchHumidity()\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_distanceLeft'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchDistanceLeft <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[3]]\n` +
  `}\n\n` +
  `fetchDistanceLeft()\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_distanceRight'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchDistanceRight <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[4]]\n` +
  `}\n\n` +
  `fetchDistanceRight()\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_PM10'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchPM10 <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[5]]\n` +
  `}\n\n` +
  `fetchPM10()\n`;

return [code, RGenerator.ORDER_NONE];
};
RGenerator['get_PM25'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchPM25 <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[6]]\n` +
  `}\n\n` +
  `fetchPM25()\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_accelerationX'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchAccelerationX <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[7]]\n` +
  `}\n\n` +
  `fetchAccelerationX()\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_accelerationY'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchAccelerationY <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[8]]\n` +
  `}\n\n` +
  `fetchAccelerationY()\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_accelerationZ'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchAccelerationZ <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[9]]\n` +
  `}\n\n` +
  `fetchAccelerationZ()\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_speed'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchSpeed <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[10]]\n` +
  `}\n\n` +
  `fetchSpeed()\n`;

return [code, RGenerator.ORDER_NONE];
};

// Generate R code for the scatter plot block
RGenerator['scatter_plot'] = function(block) {
  const x = RGenerator.valueToCode(block, 'X', RGenerator.ORDER_NONE);
  const y = RGenerator.valueToCode(block, 'Y', RGenerator.ORDER_NONE);
  const xTitle = RGenerator.valueToCode(block, 'X_AXIS_TITLE', RGenerator.ORDER_NONE) || '""';
  const yTitle = RGenerator.valueToCode(block, 'Y_AXIS_TITLE', RGenerator.ORDER_NONE) || '""';

  const code = `
  plot(${x}, ${y},
       xlab = "${xTitle}", ylab = "${yTitle}",
       pch = 19, frame = FALSE)
  abline(lm(${y} ~ ${x}), col = "blue")
  `;
    return code;
};
RGenerator['bar_chart'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var xLabel = RGenerator.valueToCode(block, 'X_AXIS', RGenerator.ORDER_ATOMIC);
  var yLabel = RGenerator.valueToCode(block, 'Y_AXIS', RGenerator.ORDER_ATOMIC);
  var code = 'barplot(' + data + ', xlab=' + xLabel + ', ylab=' + yLabel + ')';
  return code;
};
RGenerator['line_chart'] = function(block) {
  var data = Blockly.R.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var xLabel = RGenerator.valueToCode(block, 'X_AXIS', RGenerator.ORDER_ATOMIC);
  var yLabel = RGenerator.valueToCode(block, 'Y_AXIS', RGenerator.ORDER_ATOMIC);
  var code = 'plot(' + data + ', type="l", xlab=' + xLabel + ', ylab=' + yLabel + ')';
  return code;
};
RGenerator['histogram'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var xLabel = RGenerator.valueToCode(block, 'X_AXIS', RGenerator.ORDER_ATOMIC);
  var yLabel = RGenerator.valueToCode(block, 'Y_AXIS', RGenerator.ORDER_ATOMIC);
  var code = 'hist(' + data + ', xlab=' + xLabel + ', ylab=' + yLabel + ')';
  return code;
};






RGenerator['mean'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var code = 'mean(' + data + ')';
  return [code, RGenerator.ORDER_ATOMIC];
};
RGenerator['median'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var code = 'median(' + data + ')';
  return [code, RGenerator.ORDER_ATOMIC];
};
RGenerator['sd'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var code = 'sd(' + data + ')';
  return [code, RGenerator.ORDER_ATOMIC];
};






 






