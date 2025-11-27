import React, { useState } from 'react';
import { Bell, Volume2, Moon, MapPin, Save, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AlertSettings = () => {
    const navigate = useNavigate();
    const [settings, setSettings] = useState({
        enabled: true,
        magnitude: 4.0,
        radius: 100,
        silentMode: false,
        soundEnabled: true,
        vibration: true,
    });

    const handleSave = () => {
        localStorage.setItem('alertSettings', JSON.stringify(settings));
        alert('Ayarlar kaydedildi!');
    };

    return (
        <div className="flex flex-col h-full bg-surface">
            {/* Header */}
            <div className="bg-white p-4 flex items-center gap-4 shadow-sm">
                <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full">
                    <ChevronLeft size={24} />
                </button>
                <h1 className="font-bold text-lg flex-1">Alarm Ayarları</h1>
            </div>

            <div className="flex-1 overflow-y-auto p-4 pb-24 space-y-6">

                {/* Enable/Disable */}
                <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-100 p-3 rounded-xl">
                                <Bell className="text-primary" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-text">Deprem Uyarıları</h3>
                                <p className="text-xs text-text-secondary">Bildirim almayı aktifleştir</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setSettings({ ...settings, enabled: !settings.enabled })}
                            className={`w-12 h-7 rounded-full transition-colors ${settings.enabled ? 'bg-primary' : 'bg-gray-300'}`}
                        >
                            <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${settings.enabled ? 'translate-x-6' : 'translate-x-1'}`}></div>
                        </button>
                    </div>
                </div>

                {/* Magnitude Threshold */}
                <div className="bg-white rounded-xl p-5 shadow-sm">
                    <h3 className="font-bold text-text mb-3">Minimum Büyüklük</h3>
                    <p className="text-sm text-text-secondary mb-4">
                        Bu büyüklüğün üzerindeki depremler için bildirim alın.
                    </p>
                    <input
                        type="range"
                        min="2"
                        max="7"
                        step="0.1"
                        value={settings.magnitude}
                        onChange={(e) => setSettings({ ...settings, magnitude: parseFloat(e.target.value) })}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between mt-2 text-sm">
                        <span className="text-text-secondary">2.0</span>
                        <span className="font-bold text-primary text-lg">{settings.magnitude.toFixed(1)}</span>
                        <span className="text-text-secondary">7.0</span>
                    </div>
                </div>

                {/* Radius */}
                <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <MapPin size={20} className="text-primary" />
                        <h3 className="font-bold text-text">Yarıçap (km)</h3>
                    </div>
                    <p className="text-sm text-text-secondary mb-4">
                        Konumunuza bu mesafe içindeki depremler bildirilir.
                    </p>
                    <input
                        type="range"
                        min="10"
                        max="500"
                        step="10"
                        value={settings.radius}
                        onChange={(e) => setSettings({ ...settings, radius: parseInt(e.target.value) })}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between mt-2 text-sm">
                        <span className="text-text-secondary">10 km</span>
                        <span className="font-bold text-primary text-lg">{settings.radius} km</span>
                        <span className="text-text-secondary">500 km</span>
                    </div>
                </div>

                {/* Sound & Vibration */}
                <div className="bg-white rounded-xl p-5 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Volume2 size={20} className="text-secondary" />
                            <span className="font-medium">Ses</span>
                        </div>
                        <button
                            onClick={() => setSettings({ ...settings, soundEnabled: !settings.soundEnabled })}
                            className={`w-12 h-7 rounded-full transition-colors ${settings.soundEnabled ? 'bg-primary' : 'bg-gray-300'}`}
                        >
                            <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'}`}></div>
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Moon size={20} className="text-warning" />
                            <span className="font-medium">Gece Modu (23:00-07:00)</span>
                        </div>
                        <button
                            onClick={() => setSettings({ ...settings, silentMode: !settings.silentMode })}
                            className={`w-12 h-7 rounded-full transition-colors ${settings.silentMode ? 'bg-primary' : 'bg-gray-300'}`}
                        >
                            <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${settings.silentMode ? 'translate-x-6' : 'translate-x-1'}`}></div>
                        </button>
                    </div>
                </div>

                {/* Save Button */}
                <button
                    onClick={handleSave}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-red-600 transition-colors"
                >
                    <Save size={20} />
                    Ayarları Kaydet
                </button>

            </div>
        </div>
    );
};

export default AlertSettings;
