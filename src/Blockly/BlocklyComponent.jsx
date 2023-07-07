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

  useEffect(() => {
    const { initialXml, children, ...rest } = props;
    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      ...rest,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(initialXml),
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
