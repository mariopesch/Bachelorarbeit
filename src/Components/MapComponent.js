import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Erstellung der Karte

const MapComponent = () => {
  const position = [52.51, 13.38];
  const [senseBoxes, setSenseBoxes] = useState([]);

// Laden der Marker mit Pop-Up für Box-Standorte

  const fetchSenseBoxesData = async () => {
    try {
      const boxIds = [
        '615f2945c031ff001b117bae',
        '615f295ac031ff001b118211',
        '615f2964c031ff001b118911',
        '615f2969c031ff001b118a3e',
        '615f298fc031ff001b119a83',
        '615f2994c031ff001b119d04',
        '615f2999c031ff001b119efb',
        '615f299fc031ff001b11a172',
        '615f29a4c031ff001b11a396',
        '615f29b4c031ff001b11a8cb',
        '616015adc031ff001b713f7f',
        '615f29bfc031ff001b11adcb',
        '616015c4c031ff001b714683',
        '616015cfc031ff001b7148d3',
        '615f29d4c031ff001b11b5f1',
        '616015d5c031ff001b714e93',
        '615f29dec031ff001b11b9e4',
        '616015dcc031ff001b715497',
        '616015e4c031ff001b7156b4',
        '615f29f3c031ff001b11c1a6',
        '615f292bc031ff001b117192',
      ];

      const responsePromises = boxIds.map((boxId) => fetch(`https://api.opensensemap.org/boxes/${boxId}`));
      const responses = await Promise.all(responsePromises);
      const dataPromises = responses.map((response) => response.json());
      const senseBoxData = await Promise.all(dataPromises);
      setSenseBoxes(senseBoxData);
    } catch (error) {
      console.error('Error fetching senseBox data:', error);
    }
  };

  useEffect(() => {
    fetchSenseBoxesData();
  }, []);

  const customMarkerIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [27, 41],
    iconAnchor: [13, 41],
    popupAnchor: [1, -34],
    shadowUrl: markerShadow,
    shadowSize: [41, 41],
    shadowAnchor: [13, 41],
  });

  return (
    <div className="map-component">
      <h2>Karte von Berlin</h2>
      <div className="map-container">
        <MapContainer center={position} zoom={11} scrollWheelZoom={true} style={{ height: '50vh', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {senseBoxes.map((senseBox) => (
            <Marker
              key={senseBox._id}
              position={[senseBox.currentLocation.coordinates[1], senseBox.currentLocation.coordinates[0]]}
              icon={customMarkerIcon}
            >
              <Popup>{senseBox.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <p>Hier findest du die letzten gemessenen Standorte der mobilen SenseBoxen auf den Fahrrädern in Berlin. Klicke auf die Marker, um die Namen der SenseBoxen anzuzeigen.</p>
      </div>
  );
};

export default MapComponent;
