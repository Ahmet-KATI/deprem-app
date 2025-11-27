import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEarthquakes } from '../context/EarthquakeContext';
import { formatDistanceToNow } from 'date-fns';
import { tr } from 'date-fns/locale';

// Fix Leaflet icon issue in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom icons based on magnitude could be added here
const getMarkerIcon = (mag) => {
    // For now using default, but could color code
    return DefaultIcon;
};

const MapPage = () => {
    const { earthquakes } = useEarthquakes();
    const defaultPosition = [39.0, 35.0]; // Center of Turkey

    return (
        <div className="h-full w-full relative">
            <MapContainer center={defaultPosition} zoom={6} scrollWheelZoom={true} className="h-full w-full z-0">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {earthquakes.map((eq) => (
                    <Marker key={eq.id} position={[eq.lat, eq.lng]}>
                        <Popup>
                            <div className="text-center">
                                <strong className="text-lg">{eq.mag.toFixed(1)}</strong>
                                <br />
                                {eq.location}
                                <br />
                                <span className="text-xs text-gray-500">
                                    {formatDistanceToNow(new Date(eq.date), { addSuffix: true, locale: tr })}
                                </span>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

            {/* Overlay Legend */}
            <div className="absolute top-4 right-4 z-[400] bg-white p-3 rounded-lg shadow-md text-xs">
                <div className="font-bold mb-1">Büyüklük</div>
                <div className="flex items-center gap-2 mb-1"><span className="w-3 h-3 rounded-full bg-red-600"></span> 5.0+</div>
                <div className="flex items-center gap-2 mb-1"><span className="w-3 h-3 rounded-full bg-orange-500"></span> 4.0 - 4.9</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-500"></span> &lt; 4.0</div>
            </div>
        </div>
    );
};

export default MapPage;
