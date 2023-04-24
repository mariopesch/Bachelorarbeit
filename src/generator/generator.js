/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define generation methods for custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on generating code:
// https://developers.google.com/blockly/guides/create-custom-blocks/generating-code

//import {javascriptGenerator} from 'blockly/javascript';

// javascriptGenerator['test_react_field'] = function (block) {
//     return 'console.log(\'custom block\');\n';
// };

// javascriptGenerator['test_react_date_field'] = function (block) {
//     return 'console.log(' + block.getField('DATE').getText() + ');\n';
// };
// import Blockly from 'blockly';
import {RGenerator} from './R';

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
