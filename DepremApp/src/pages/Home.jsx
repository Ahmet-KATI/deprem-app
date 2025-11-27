import React from 'react';
import { ShieldCheck, AlertTriangle, Activity } from 'lucide-react';
import { useEarthquakes } from '../context/EarthquakeContext';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { tr } from 'date-fns/locale';

const Home = () => {
    const { earthquakes, loading } = useEarthquakes();
    const navigate = useNavigate();

    // Get latest 3 earthquakes
    const recentEarthquakes = earthquakes.slice(0, 3);

    return (
        <div className="p-4 space-y-6">
            {/* Header */}
            <header className="flex justify-between items-center pt-4">
                <div>
                    <h1 className="text-2xl font-bold text-text">Merhaba, Ahmet</h1>
                    <p className="text-sm text-text-secondary">Konum: İstanbul, Kadıköy</p>
                </div>
                <div className="bg-surface p-2 rounded-full">
                    <Activity className="text-primary" size={24} />
                </div>
            </header>

            {/* Status Card */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg shadow-emerald-200">
                <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck size={32} />
                    <h2 className="text-xl font-bold">Durum: Güvenli</h2>
                </div>
                <p className="opacity-90 text-sm">Bölgenizde son 24 saatte riskli bir sarsıntı tespit edilmedi.</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
                <button className="bg-surface p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-gray-200 transition-colors">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                        <AlertTriangle className="text-warning" size={24} />
                    </div>
                    <span className="font-medium text-sm">Acil Durum</span>
                </button>
                <button className="bg-surface p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-gray-200 transition-colors">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                        <ShieldCheck className="text-success" size={24} />
                    </div>
                    <span className="font-medium text-sm">Güvendeyim</span>
                </button>
            </div>

            {/* Recent Earthquakes Preview */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Son Depremler</h3>
                    <button onClick={() => navigate('/list')} className="text-primary text-sm font-medium">Tümünü Gör</button>
                </div>

                <div className="space-y-3">
                    {loading ? (
                        <div className="text-center text-sm text-text-secondary">Yükleniyor...</div>
                    ) : (
                        recentEarthquakes.map((eq) => (
                            <div key={eq.id} className="bg-white border border-border rounded-xl p-4 flex items-center justify-between shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg text-white
                    ${eq.mag >= 5 ? 'bg-red-600 animate-pulse' : eq.mag >= 4 ? 'bg-orange-500' : 'bg-emerald-500'}
                  `}>
                                        {eq.mag.toFixed(1)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-text">{eq.location}</h4>
                                        <p className="text-xs text-text-secondary">
                                            {formatDistanceToNow(new Date(eq.date), { addSuffix: true, locale: tr })} • {eq.depth} km
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
