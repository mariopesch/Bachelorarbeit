import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function LeafletMap() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data © OpenStreetMap contributors"
      />
    </MapContainer>
  );
}

export default LeafletMap;
