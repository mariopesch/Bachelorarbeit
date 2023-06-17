import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapComponent = () => {
  return (
    <div className="map-component">
      <h2>Leaflet Map</h2>
      <div className="map-container">
        <MapContainer center={[52.4587059, 13.3808994]} zoom={12} scrollWheelZoom={true}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
