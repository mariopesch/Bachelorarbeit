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
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

//import * as Blockly from 'blockly';
import React, { useEffect, useState } from 'react';
//import React from 'react';
import './App.css';
import logo from './logo.svg';

import BlocklyComponent, { Block, Value, Field, Shadow } from './Blockly';


import './blocks/R';
import './blocks/customblocks';
import './generator/R';
import MapComponent from './MapComponent';
import Navbar from './navbar';
import APIComponent from './APIComponent';


function App(props) {
  const [rcode, setRCode] = useState('');
  const handleRCodeUpdate = (code) => {
    setRCode(code);
    console.log(code)
  };
  const [fetchedData, setFetchedData] = useState(null);

  // Callback function to receive the fetched data from DataFetcherComponent
  const handleDataFetch = (data) => {
    setFetchedData(data);
  };


    return (
      <div className="App">
        <header className="App-header">
        <h1>Blockly4R Tool</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <APIComponent onDataFetch={handleDataFetch} />
          <BlocklyComponent onUpdate={handleRCodeUpdate}
          data={fetchedData}
          readOnly={false}
          rcode={rcode}
          trashcan={true} media={'media/'} stackSize={Infinity}
          move={{
            scrollbars: true,
            drag: true,
            wheel: false
          }}
          
          initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="controls_ifelse" x="0" y="0"></block>
</xml>
      `}>
            <Block type="string_length" />
            <Block type="string_input" />
            <Block type="temp"/>
            <Block type="box_id"/>
            <Block type="scatter_plot" />
            <Block type="test_react_field" />
            <Block type="test_react_date_field" />
            <Block type="controls_ifelse" />
            <Block type="logic_compare" />
            <Block type="logic_operation" />
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="logic_operation" />
            <Block type="logic_negate" />
            <Block type="logic_boolean" />
            <Block type="logic_null" disabled="true" />
            <Block type="logic_ternary" />
            <Block type="text_charAt">
              <Value name="VALUE">
                <Block type="variables_get">
                  <Field name="VAR">text</Field>
                </Block>
              </Value>
            </Block>
          </BlocklyComponent>
          <Navbar/>

          </header>
      </div>
    );
    
}

export default App;