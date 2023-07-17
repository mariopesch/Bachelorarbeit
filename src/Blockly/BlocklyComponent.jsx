import React, { useState } from 'react';
import './BlocklyComponent.css';
import '../App.css';
import { useEffect, useRef } from 'react';
import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';
import 'blockly/blocks';
import { RGenerator } from '../generator/R';
import RCodeSnippet from '../RCodeSnippet';

Blockly.setLocale(locale);

function BlocklyComponent(props) {
  const [rcode, setRCode] = useState('');
  const blocklyDiv = useRef();
  const toolbox = useRef();
  let primaryWorkspace = useRef();
  const textareaRef = useRef(null);

  const generateRCode = () => {
    const data = {
      // Load your data here or from any external source
      key1: 'value1',
      key2: 'value2',
      // ...
    };

    const rcode = RGenerator.workspaceToCode(primaryWorkspace.current, { data });
    console.log(rcode);
    setRCode(rcode);
    return rcode;
  };

  const copyCodeToClipboard = () => {
    const textArea = textareaRef.current;
    textArea.value = rcode;
    textArea.select();
    document.execCommand('copy');
  };


  // Function to load example blocks
  const loadExample1Blocks = () => {
    fetch('/exampleBlocks1.xml')
      .then(response => response.text())
      .then(xml => {
        const domParser = new DOMParser();
        const xmlDoc = domParser.parseFromString(xml, 'text/xml');
        Blockly.Xml.domToWorkspace(xmlDoc.documentElement, primaryWorkspace.current);
      })
      .catch(error => {
        console.error('Failed to load example blocks:', error);
      });
  };
   // Function to load example blocks
   const loadExample2Blocks = () => {
    fetch('/exampleBlocks2.xml')
      .then(response => response.text())
      .then(xml => {
        const domParser = new DOMParser();
        const xmlDoc = domParser.parseFromString(xml, 'text/xml');
        Blockly.Xml.domToWorkspace(xmlDoc.documentElement, primaryWorkspace.current);
      })
      .catch(error => {
        console.error('Failed to load example blocks:', error);
      });
  };
   // Function to load example blocks
   const loadExample3Blocks = () => {
    fetch('/exampleBlocks3.xml')
      .then(response => response.text())
      .then(xml => {
        const domParser = new DOMParser();
        const xmlDoc = domParser.parseFromString(xml, 'text/xml');
        Blockly.Xml.domToWorkspace(xmlDoc.documentElement, primaryWorkspace.current);
      })
      .catch(error => {
        console.error('Failed to load example blocks:', error);
      });
  };
// Define the example options
const exampleOptions = [
  { label: 'Beispiel 1', value: 'example1' },
  { label: 'Beispiel 2', value: 'example2' },
  { label: 'Beispiel 3', value: 'example3' },
];

  const [selectedExample, setSelectedExample] = useState(null);

  const loadExampleBlocks = () => {
    if (selectedExample === 'example1') {
      loadExample1Blocks();
    } else if (selectedExample === 'example2') {
      loadExample2Blocks();
    } else if (selectedExample === 'example3') {
      loadExample3Blocks();
    }
  };

  useEffect(() => {
    const { initialXml, children, ...rest } = props;
    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      ...rest,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.utils.xml.textToDom(initialXml),
        primaryWorkspace.current
      );
    }
  }, [primaryWorkspace, toolbox, blocklyDiv, props]);

  
  return (
    <React.Fragment>
      <div className="button-container">
        <button className="convert-button" onClick={generateRCode}>
          R Code anzeigen
        </button>
        <button className="copy-button" onClick={copyCodeToClipboard}>
          R Code in Zwischenablage
        </button>
        <select value={selectedExample} onChange={(event) => setSelectedExample(event.target.value)} className="select-example">
          <option value="">Wähle ein Beispiel</option>
          {exampleOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button className="load-button" onClick={loadExampleBlocks} disabled={!selectedExample}>
          Lade Beispiel
        </button>
        <div className="button-container">
       
      </div>

      </div>

      <RCodeSnippet rcode={rcode} />

      <textarea
        ref={textareaRef}
        style={{ position: 'absolute', left: '-9999px' }}
        readOnly
      />

      <div ref={blocklyDiv} id="blocklyDiv" />
      <div style={{ display: 'none' }} ref={toolbox}>
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default BlocklyComponent;
