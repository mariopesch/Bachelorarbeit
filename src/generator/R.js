// import * as Blockly from 'blockly';
import '../blocks/R';
import Blockly from 'blockly';
import 'blockly/javascript';

export const RGenerator = new Blockly.Generator('R');

RGenerator.PRECEDENCE = 0;

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
  var text_text = block.getFieldValue('STRING');
  var code = '"' + text_text + '"';
  return [code, RGenerator.ORDER_ATOMIC];
};

// Generate the code for the string length block
RGenerator['string_length'] = function(block) {
  var value_string = RGenerator.valueToCode(block, 'STRING', RGenerator.ORDER_ATOMIC);
  var code = 'nchar(' + value_string + ')';
  return [code, RGenerator.ORDER_ATOMIC];
};


RGenerator['vector_input_block'] = function(block) {
  var vector = RGenerator.quote_(block.getFieldValue('VECTOR'));
  var code = vector;
  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['vector_sum_block'] = function(block) {
  var value_vector = RGenerator.valueToCode(block, 'VECTOR', RGenerator.ORDER_ATOMIC);
  var code = ('sum(', value_vector, ')');
  return [code, RGenerator.ORDER_ATOMIC];
}; 




