import React, { useEffect, useState } from 'react';
import BlocklyComponent from './Blockly/BlocklyComponent';

function APIComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.opensensemap.org/boxes/:615f2969c031ff001b118a3e?format=:format');
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      // Handle any errors here
    }
  };

  return (
    <div>
     <h4>API</h4>
    </div>
  );
}

export default APIComponent;
