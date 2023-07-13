import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapComponent = () => {
  const position = [52.51, 13.38];
  return (
    <div className="map-component">
      <h2>Karte von Berlin</h2>
      <div className="map-container">
        <MapContainer center={position} zoom={11} scrollWheelZoom={true} style={{ height: "50vh", width: "100%"}}>
          <TileLayer
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
      <p>Hier findest du die letzten gemessenen Standorte der mobilen SenseBoxen auf den Fahrrädern in Berlin</p>

    </div>
  );
};

export default MapComponent;
