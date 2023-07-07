import React, { useEffect, useState } from 'react';

function APIComponent() {
  const [boxData, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch(`https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e?format=geojson`).then(function(response) {
      return response.json();
  }).then(function(boxData) {
      console.log(boxData);

    
  })

}


}

export default APIComponent;