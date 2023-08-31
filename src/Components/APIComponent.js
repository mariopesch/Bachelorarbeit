import React, { useEffect, useState } from 'react';

// Anbindung an OpenSenseMap API

function APIComponent() {

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch(`https://api.opensensemap.org/boxes/615f2969c031ff001b118a3e/sensors?count=30`)
    .then(function(response) {
      return response.json();
  }).then(function(boxData) {
      console.log(boxData);

    
  })
}


}

export default APIComponent;