import React, { useEffect, useState } from 'react';
import senseboxData from './senseboxData.json';

const DataComponent = () => {
  const [setSenseboxData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./senseboxData.json');
        const data = await response.json();
        setSenseboxData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(senseboxData);

  return (
    <div>
      {senseboxData ? (
        <div>
          <h2>{senseboxData.properties.name}</h2>
          <p>Created At: {senseboxData.properties.createdAt}</p>
          <p>Updated At: {senseboxData.properties.updatedAt}</p>
          <p>Coordinates: {senseboxData.geometry.coordinates.join(', ')}</p>
          <table>
            <thead>
              <tr>
                <th>Sensor Name</th>
                <th>Value</th>
                <th>Unit</th>
                <th>Sensor Type</th>
              </tr>
            </thead>
            <tbody>
              {senseboxData.properties.sensors.map((sensor, index) => (
                <tr key={index}>
                  <td>{sensor.title}</td>
                  <td>{sensor.lastMeasurement.value}</td>
                  <td>{sensor.unit}</td>
                  <td>{sensor.sensorType}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Futurium Fahrrad SenseBox #6: 615f2969c031ff001b118a3e</h4>
          <h4>Futurium Fahrrad Sensebox #30: 615f292bc031ff001b117192</h4>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default DataComponent;
