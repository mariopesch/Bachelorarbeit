import React, { useEffect, useState } from 'react';

function APIComponent() {
  const [boxData, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch(`https://api.opensensemap.org/boxes/615f292bc031ff001b117192`)
    .then(function(response) {
      return response.json();
  }).then(function(boxData) {
      console.log(boxData);

    
  })

}


}

export default APIComponent;