import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapComponent = () => {
  const position = [52.51, 13.38];
  return (
    <div className="map-component">
      <h2>Leaflet Map</h2>
      <div className="map-container">
        <MapContainer center={position} zoom={11} scrollWheelZoom={true} style={{ height: "50vh", width: "100%"}}>
          <TileLayer
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
