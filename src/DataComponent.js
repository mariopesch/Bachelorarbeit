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
        <table>
          <thead>
            <tr>
              <th>Sensor Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {senseboxData.map((item, index) => (
              <tr key={index}>
                <td>{item.sensorName}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default DataComponent;
