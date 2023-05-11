import '../blocks/R';
import Blockly from 'blockly';
import 'blockly/javascript';
//import '../RScripts/script'


export const RGenerator = new Blockly.Generator('R');

RGenerator.ORDER_ATOMIC = 0;
RGenerator.ORDER_UNARY_POSTFIX = 1; // expr++ expr-- () [] .
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
  var code = block.getFieldValue('String');
  return [code, RGenerator.ORDER_ATOMIC];
};

// Generate the code for the string length block
RGenerator['string_length'] = function(block) {
  var value_string = RGenerator.valueToCode(block, 'String', RGenerator.ORDER_ATOMIC);
  var code = 'nchar(' + value_string + ')';
  return [code, RGenerator.ORDER_ATOMIC];
};



RGenerator['vector_input_block'] = function(block) {
  var text_vector = block.getFieldValue('vector');
  var numeric_vector = text_vector.split(",").map(Number);
  var code = numeric_vector;
  return [code, RGenerator.ORDER_NONE];
};

RGenerator['vector_sum_block'] = function(block) {
  var value_list = RGenerator.valueToCode(block, 'list', RGenerator.ORDER_ATOMIC);
  var code = 'sum(' + value_list + ')';
  return [code, RGenerator.ORDER_NONE];
};

 




 






