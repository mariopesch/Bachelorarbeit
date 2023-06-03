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
 * @fileoverview Blockly React Component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React, { useState } from 'react';
 import './BlocklyComponent.css';
 import {useEffect, useRef} from 'react';
 

 import Blockly from 'blockly/core';
 import locale from 'blockly/msg/en';
 import 'blockly/blocks';
 import {javascriptGenerator} from 'blockly/javascript';
 import {RGenerator} from '../generator/R';
 import RCodeSnippet from '../RCodeSnippet';
 

 Blockly.setLocale(locale);

 function BlocklyComponent(props) {
    const [rcode, setRCode] = useState('');
    const blocklyDiv = useRef();
    const toolbox = useRef();
    let primaryWorkspace = useRef();

    const generateCode = () => {
        var code = javascriptGenerator.workspaceToCode(
          primaryWorkspace.current
        );
        console.log(code);
    }

    const generateRCode = () => {
        var rcode = RGenerator.workspaceToCode(
          primaryWorkspace.current
        );
        console.log(rcode);
        setRCode(rcode);
        return rcode;
        
    }

    useEffect(() => {
        const { initialXml, children, ...rest } = props;
            primaryWorkspace.current = Blockly.inject(
                blocklyDiv.current,
                {
                    toolbox: toolbox.current,
                    ...rest
                },
            );

            if (initialXml) {
                Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), primaryWorkspace.current);
            }
    }, [primaryWorkspace, toolbox, blocklyDiv, props]);

    return (
    <React.Fragment>
        <button onClick={generateCode}>Convert</button>
        <button onClick={generateRCode}>Convert R</button>
        <RCodeSnippet  rcode={rcode}/>
        <div ref={blocklyDiv} id="blocklyDiv" />
        <div style={{ display: 'none' }} ref={toolbox}>
            {props.children}
        </div>
    </React.Fragment>);
}

export default BlocklyComponent;