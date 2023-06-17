import React, { useEffect } from 'react';
import L from 'leaflet';

const LeafletMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors',
    }).addTo(map);
  }, []);

  return <div id="map" className="map-wrapper" />;
};

export default LeafletMap;
