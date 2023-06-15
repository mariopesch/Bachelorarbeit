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

// Generate the code for the string input block
RGenerator['string_input'] = function(block) {
  var string = block.getFieldValue('String');
  return [string, RGenerator.ORDER_ATOMIC];
};

 
RGenerator['string_length'] = function(block) {
  // String or array length.
  var text = RGenerator.valueToCode(block, 'String',
  RGenerator.ORDER_MEMBER) || '\'\'';
  var result = 'nchar(' + "'" + text + "'" + ')';
  //return ['nchar(' + text + ')', RGenerator.ORDER_MEMBER];
  return result;
};

// Generate R code for the scatter plot block
RGenerator['scatter_plot'] = function(block) {
  var data = RGenerator.valueToCode(block, 'Data', RGenerator.ORDER_ATOMIC);

  var code = 'library(ggplot2)\n';
  code += 'data <- ' + data + '\n';
  code += 'ggplot(data, aes(x = timestamp, y = temperature)) + geom_point()\n';

  return code;
};

RGenerator['temp'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );

  const code = `${boxId}$data$sensors$0$lastMeasurement$temperature`;

  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['box_id'] = function(block) {
  const boxId = block.getFieldValue('String');
  return [boxId, RGenerator.ORDER_ATOMIC];
};

RGenerator['extract_temperature'] = function (block) {
  const code = `
    temperature <- ${JSON.stringify(block.boxData)}$temperature
    temperature`;
  
  return code;
};

RGenerator['get_temperature'] = function(block) {
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchTemp <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[1]]\n` +
  `}\n\n` +
  `fetchTemp()\n`;

return [code, RGenerator.ORDER_NONE];
};
RGenerator['get_humidity'] = function(block) {
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchHumidity <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[2]]\n` +
  `}\n\n` +
  `fetchHumidity()\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_distanceLeft'] = function(block) {
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchDistanceLeft <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[3]]\n` +
  `}\n\n` +
  `fetchDistanceLeft()\n`;

return [code, RGenerator.ORDER_NONE];
};
RGenerator['get_distanceRight'] = function(block) {
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchDistanceRight <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[4]]\n` +
  `}\n\n` +
  `fetchDistanceRight()\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_PM10'] = function(block) {
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchPM10 <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[5]]\n` +
  `}\n\n` +
  `fetchPM10()\n`;

return [code, RGenerator.ORDER_NONE];
};
RGenerator['get_PM25'] = function(block) {
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchPM25 <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[6]]\n` +
  `}\n\n` +
  `fetchPM25()\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_accelerationX'] = function(block) {
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchAccelerationX <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[7]]\n` +
  `}\n\n` +
  `fetchAccelerationX()\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_accelerationY'] = function(block) {
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchAccelerationY <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[8]]\n` +
  `}\n\n` +
  `fetchAccelerationY()\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_accelerationZ'] = function(block) {
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchAccelerationZ <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[9]]\n` +
  `}\n\n` +
  `fetchAccelerationZ()\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_speed'] = function(block) {
  const code = `library(jsonlite)\n` +
  `library(httr)\n` +
  `fetchSpeed <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[10]]\n` +
  `}\n\n` +
  `fetchSpeed()\n`;

return [code, RGenerator.ORDER_NONE];
};
// R code from R Studio:
// library(httr)
// library(jsonlite)
// url <- "https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e"
// req <- fromJSON(paste0(url))
// Richtige Ausgabe: JSON object mit 12 Einträgen
// req$sensors$lastMeasurement$value[[1]] und req$sensors$lastMeasurement$value[1] geben
// beide die letzte Temperaturmessung

//Funktioniert auh in R Studio:
//library(jsonlite)
//library(httr)
//fetchTemp <- function() {
  //con <- url("https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e", "rb")
  //con <- fromJSON(paste0(url))
  //con$sensors$lastMeasurement$value[[1]]
//}

//fetchTemp()







 






