import React, { useState, useEffect, useRef } from 'react';
import './BlocklyComponent.css';
import '../App.css';
import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';
import 'blockly/blocks';
import { RGenerator } from '../generator/R';
import RCodeSnippet from '../Components/RCodeSnippet';
import {getBlockTooltip } from '../blocks/R'; 

Blockly.setLocale(locale);

function BlocklyComponent(props) {
  const [rcode, setRCode] = useState('');
  const blocklyDiv = useRef();
  const toolbox = useRef();
  let primaryWorkspace = useRef();
  const textareaRef = useRef(null);
  const [selectedExample, setSelectedExample] = useState(null);

  // R Code aus Blöcken generieren
  const generateRCode = () => {
    const data = {
      key1: 'value1',
      key2: 'value2',
      // ...
    };

    const rcode = RGenerator.workspaceToCode(primaryWorkspace.current, { data });
    console.log(rcode);
    setRCode(rcode);
    return rcode;
  };

  // R Code in Zwischenablage speichern
  const copyCodeToClipboard = () => {
    const textArea = textareaRef.current;
    textArea.value = rcode;
    textArea.select();
    document.execCommand('copy');
  };

  // Funktion, um Beispielblöcke aus XML zu laden
  const loadExampleBlocks = () => {
    if (selectedExample) {
      fetch(`/${selectedExample}.xml`)
        .then(response => response.text())
        .then(xml => {
          const domParser = new DOMParser();
          const xmlDoc = domParser.parseFromString(xml, 'text/xml');
          Blockly.Xml.domToWorkspace(xmlDoc.documentElement, primaryWorkspace.current);
        })
        .catch(error => {
          console.error('Failed to load example blocks:', error);
        });
    }
  };

  useEffect(() => {
    const { initialXml, children, ...rest } = props;
    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      ...rest,
    });
  
    // Tooltip für Blöcke hinzufügen (wird noch nicht benutzt)
    primaryWorkspace.current.addChangeListener(function (event) {
      if (event.type === Blockly.Events.UI && event.element === 'click') {
        if (event.blockId) {
          const block = primaryWorkspace.current.getBlockById(event.blockId);
          if (block) {
            const tooltip = block.getTooltip();
            if (tooltip) {
              Blockly.Tooltip.show(tooltip, block.getSvgRoot());
            }
          }
        }
      }
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
        <select
          value={selectedExample}
          onChange={(event) => setSelectedExample(event.target.value)}
          className="select-example"
        >
          <option value="">Wähle ein Beispiel</option>
          <option value="exampleBlocks1">Beispiel 1</option>
          <option value="exampleBlocks2">Beispiel 2</option>
          <option value="exampleBlocks3">Beispiel 3</option>
        </select>
        <button
          className="load-button"
          onClick={loadExampleBlocks}
          disabled={!selectedExample}
        >
          Lade Beispiel
        </button>
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
