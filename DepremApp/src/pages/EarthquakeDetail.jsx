import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEarthquakes } from '../context/EarthquakeContext';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { ArrowLeft, Clock, Activity, Navigation, Share2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { tr } from 'date-fns/locale';
import L from 'leaflet';

// Fix Leaflet icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const EarthquakeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { earthquakes } = useEarthquakes();
    const [earthquake, setEarthquake] = useState(null);

    useEffect(() => {
        if (earthquakes.length > 0) {
            const found = earthquakes.find(eq => eq.id === id);
            setEarthquake(found);
        }
    }, [id, earthquakes]);

    if (!earthquake) {
        return <div className="p-8 text-center">Yükleniyor veya bulunamadı...</div>;
    }

    return (
        <div className="flex flex-col h-full bg-surface">
            {/* Header */}
            <div className="bg-white p-4 flex items-center gap-4 shadow-sm z-10">
                <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full">
                    <ArrowLeft size={24} />
                </button>
                <h1 className="font-bold text-lg flex-1">Deprem Detayı</h1>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Share2 size={20} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto pb-20">
                {/* Map Section */}
                <div className="h-64 w-full">
                    <MapContainer
                        center={[earthquake.lat, earthquake.lng]}
                        zoom={10}
                        scrollWheelZoom={false}
                        className="h-full w-full"
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[earthquake.lat, earthquake.lng]}>
                            <Popup>{earthquake.location}</Popup>
                        </Marker>
                    </MapContainer>
                </div>

                {/* Info Section */}
                <div className="p-4 -mt-6 relative z-20">
                    <div className="bg-white rounded-2xl p-6 shadow-lg space-y-6">

                        {/* Magnitude & Location */}
                        <div className="flex items-start justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-text mb-1">{earthquake.location}</h2>
                                <p className="text-text-secondary text-sm">
                                    {formatDistanceToNow(new Date(earthquake.date), { addSuffix: true, locale: tr })}
                                </p>
                            </div>
                            <div className={`
                w-16 h-16 rounded-2xl flex flex-col items-center justify-center font-bold text-white shadow-md
                ${earthquake.mag >= 5 ? 'bg-red-600' : earthquake.mag >= 4 ? 'bg-orange-500' : 'bg-emerald-500'}
              `}>
                                <span className="text-2xl">{earthquake.mag.toFixed(1)}</span>
                                <span className="text-[10px] opacity-80">Büyüklük</span>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-surface p-4 rounded-xl flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-text-secondary text-xs font-bold uppercase tracking-wider">
                                    <Activity size={14} /> Derinlik
                                </div>
                                <span className="text-lg font-bold text-text">{earthquake.depth} km</span>
                            </div>
                            <div className="bg-surface p-4 rounded-xl flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-text-secondary text-xs font-bold uppercase tracking-wider">
                                    <Clock size={14} /> Tarih
                                </div>
                                <span className="text-lg font-bold text-text">
                                    {new Date(earthquake.date).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                                </span>
                                <span className="text-xs text-text-secondary">
                                    {new Date(earthquake.date).toLocaleDateString('tr-TR')}
                                </span>
                            </div>
                        </div>

                        {/* Distance Info (Mock) */}
                        <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-4 text-blue-800">
                            <Navigation size={24} />
                            <div>
                                <div className="font-bold">Uzaklık: ~450 km</div>
                                <div className="text-xs opacity-80">Şu anki konumunuza olan tahmini mesafe</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EarthquakeDetail;
