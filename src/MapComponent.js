import React, { useEffect } from 'react';
import L from 'leaflet';

const MapComponent = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors',
    }).addTo(map);
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default MapComponent;
