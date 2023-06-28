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
      var boxTemp = boxData.properties.sensors[0].lastMeasurement.value
      var boxHumidity = boxData.properties.sensors[1].lastMeasurement.value
      var boxDisL = boxData.properties.sensors[2].lastMeasurement.value
      var boxDisR = boxData.properties.sensors[3].lastMeasurement.value
      var boxPM10 = boxData.properties.sensors[4].lastMeasurement.value
      var boxPM25 = boxData.properties.sensors[5].lastMeasurement.value
      var boxAccX = boxData.properties.sensors[6].lastMeasurement.value
      var boxAccY = boxData.properties.sensors[7].lastMeasurement.value
      var boxAccZ = boxData.properties.sensors[8].lastMeasurement.value
      var boxSpeed = boxData.properties.sensors[9].lastMeasurement.value

      console.log("Temperatur: " + boxTemp + " °C");
      console.log("Luftfeuchte: " + boxHumidity + " %");
      console.log("Abstand links: " + boxDisL + " cm");
      console.log("Abstand rechts: " + boxDisR + " cm");
      console.log("Feinstaub PM10: " + boxPM10 + " µg/m³");
      console.log("Feinstaub PM25: " + boxPM25 + " µg/m³");
      console.log("Beschleunigung X-Achse: " + boxAccX + " g");
      console.log("Beschleunigung Y-Achse: " + boxAccY + " g");
      console.log("Beschleunigung Z-Achse: " + boxAccZ + " g");
      console.log("Geschwindigkeit: " + boxSpeed + " km/h");

    
  })

}

  return (
    
    <div>
     <p>Beispiel Box ID: 615f2969c031ff001b118a3e</p>
    </div>
  );
}

export default APIComponent;