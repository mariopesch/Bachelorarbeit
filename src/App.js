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


import React, { useEffect, useState } from 'react';
import './App.css';

import BlocklyComponent, { Block, Category } from './Blockly';

import './blocks/R';
import './blocks/customblocks';
import './generator/R';
import APIComponent from './APIComponent';
import DataContext from './DataContext';
import MapComponent from './MapComponent';
import WikiComponent from './WikiComponent';
import IdeaComponent from './IdeaComponent';
import ResultsComponent from './ResultsComponent';
import DataComponent from './DataComponent';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App(props) {
  const [rcode, setRCode] = useState('');
  const handleRCodeUpdate = (code) => {
    setRCode(code);
    console.log(code)
  };
  const [fetchedData, setFetchedData] = useState(null);

  const handleDataFetch = (data) => {
    setFetchedData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blockly4R Tool</h1>
      </header>
      <DataContext.Provider value={fetchedData}>
        <div className="container">
          <div className="blockly-container">
          <APIComponent onDataFetch={handleDataFetch} />
          <BlocklyComponent
              onUpdate={handleRCodeUpdate}
              data={fetchedData}
              readOnly={false}
              rcode={rcode}
              trashcan={true}
              media={'media/'}
              stackSize={Infinity}
              move={{
                scrollbars: true,
                drag: true,
                wheel: false
              }}
            >
              <div className="custom-toolbox-wrapper"></div>
              <Category name="Senseboxen" colour="#789ac0">
              <Block type="choose_box" />
              <Block type="box_id" />
              </Category>
              <Category name="Box-Anfragen" colour="#b7bdc9">
                <Block type="get_temperature" />
                <Block type="get_humidity" />
                <Block type="get_distanceLeft" />
                <Block type="get_distanceRight" />
                <Block type="get_PM10" />
                <Block type="get_PM25" />
                <Block type="get_accelerationX" />
                <Block type="get_accelerationY" />
                <Block type="get_speed" />
              </Category>
              <Category name="Operationen" colour="#D5C7BC">
                <Block type="string_length" />
                <Block type="string_input" />
                <Block type="array_input" />
                <Block type="save_variable" />
              </Category>
              <Category name="Datenanalyse" colour="#af9cb1">
                <Block type="mean" />
                <Block type="median" />
                <Block type="sd" />
              </Category>
              <Category name="Datenvisualisierung" colour="#866475">
                <Block type="scatter_plot" />
                <Block type="bar_chart" />
                <Block type="line_chart" />
                <Block type="histogram" />
              </Category>
              </BlocklyComponent>
          </div>
          <div className="result-container">
          <Tabs>
    <TabList>
      <Tab>Daten</Tab>
      <Tab>Ergebnisse</Tab>
      <Tab>Map</Tab>
      <Tab>Wiki</Tab>
      <Tab>Analyseideen</Tab>
    </TabList>

    <TabPanel>
      <DataComponent/>
    </TabPanel>
    <TabPanel>
      <ResultsComponent/>
    </TabPanel>
    <TabPanel>
      <MapComponent />
    </TabPanel>
    <TabPanel>
      <WikiComponent />
    </TabPanel>
    <TabPanel>
      <IdeaComponent />
    </TabPanel>
  </Tabs>
          </div>
        </div>
      </DataContext.Provider>
    </div>
  );
  
    
}
export default App;