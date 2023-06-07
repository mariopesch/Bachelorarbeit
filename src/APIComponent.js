import React, { useEffect, useState } from 'react';

function APIComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e');
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      // Handle any errors here
    }
  };

  return (
    <div>
     <p>Beispiel Box ID: 615f2969c031ff001b118a3e</p>
    </div>
  );
}

export default APIComponent;