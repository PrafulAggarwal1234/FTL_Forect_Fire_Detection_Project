import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; 
import 'leaflet/dist/leaflet.css'; 

const Map = ({ coordinates }) => {
    if (!coordinates || coordinates.length === 0) {
        return null; // Return early if coordinates are not valid
    }

    const customIcon = L.icon({
        iconUrl: 'https://static-00.iconduck.com/assets.00/fire-icon-1513x2048-1ztytpky.png',
        iconSize: [30, 30], // Size of the icon
        iconAnchor: [15, 30], // Point of the icon which will correspond to marker's location
        popupAnchor: [0, -30] // Point from which the popup should open relative to the iconAnchor
    });

    return (
        <div style={{ width: '100%', float: 'right', height: 'calc(100vh - 50px)', position: 'relative', marginBottom: '150px' }}>
            <MapContainer style={{ height: '100%', width: '100%' }} center={[coordinates[0].latitude, coordinates[0].longitude]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                {coordinates.map((cord, index) => (
                    <Marker key={index} position={[cord.latitude, cord.longitude]} icon={customIcon}>
                        <Popup>Your Location</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
