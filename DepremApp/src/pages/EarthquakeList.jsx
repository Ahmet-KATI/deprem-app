import React from 'react';
import { useEarthquakes } from '../context/EarthquakeContext';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { tr } from 'date-fns/locale';
import { MapPin, Clock, Activity } from 'lucide-react';

const EarthquakeList = () => {
    const { earthquakes, loading } = useEarthquakes();
    const navigate = useNavigate();

    if (loading) {
        return <div className="p-8 text-center text-text-secondary">Yükleniyor...</div>;
    }

    return (
        <div className="p-4 pb-24">
            <h1 className="text-2xl font-bold mb-4">Son Depremler</h1>

            <div className="space-y-3">
                {earthquakes.map((eq) => (
                    <div
                        key={eq.id}
                        onClick={() => navigate(`/earthquake/${eq.id}`)}
                        className="bg-white border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer active:scale-98"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`
                  w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg text-white
                  ${eq.mag >= 5 ? 'bg-red-600 animate-pulse' : eq.mag >= 4 ? 'bg-orange-500' : 'bg-emerald-500'}
                `}>
                                    {eq.mag.toFixed(1)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-text">{eq.location}</h3>
                                    <div className="flex items-center gap-3 mt-1 text-xs text-text-secondary">
                                        <span className="flex items-center gap-1">
                                            <Clock size={12} />
                                            {formatDistanceToNow(new Date(eq.date), { addSuffix: true, locale: tr })}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Activity size={12} />
                                            {eq.depth} km
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EarthquakeList;
