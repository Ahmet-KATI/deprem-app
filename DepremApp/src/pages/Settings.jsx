import React from 'react';
import { Bell, Moon, Volume2, Shield, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const navigate = useNavigate();
    return (
        <div className="p-4 space-y-6">
            <h1 className="text-2xl font-bold text-text pt-4">Ayarlar</h1>

            {/* Section: Notifications */}
            <section>
                <h2 className="text-sm font-bold text-text-secondary uppercase mb-3 tracking-wider">Bildirimler</h2>
                <div className="bg-white rounded-xl overflow-hidden border border-border">
                    <div
                        onClick={() => navigate('/alert-settings')}
                        className="p-4 flex items-center justify-between border-b border-border cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-red-100 p-2 rounded-lg text-primary">
                                <Bell size={20} />
                            </div>
                            <span className="font-medium">Deprem Uyarıları</span>
                        </div>
                        <div className="w-11 h-6 bg-primary rounded-full relative cursor-pointer">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                        </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg text-secondary">
                                <Volume2 size={20} />
                            </div>
                            <span className="font-medium">Siren Sesi</span>
                        </div>
                        <ChevronRight size={20} className="text-text-secondary" />
                    </div>
                </div>
            </section>

            {/* Section: App Settings */}
            <section>
                <h2 className="text-sm font-bold text-text-secondary uppercase mb-3 tracking-wider">Uygulama</h2>
                <div className="bg-white rounded-xl overflow-hidden border border-border">
                    <div className="p-4 flex items-center justify-between border-b border-border">
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-100 p-2 rounded-lg text-text">
                                <Moon size={20} />
                            </div>
                            <span className="font-medium">Karanlık Mod</span>
                        </div>
                        <div className="w-11 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                        </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-lg text-success">
                                <Shield size={20} />
                            </div>
                            <span className="font-medium">Gizlilik Politikası</span>
                        </div>
                        <ChevronRight size={20} className="text-text-secondary" />
                    </div>
                </div>
            </section>

            <div className="text-center text-xs text-text-secondary pt-8">
                v1.0.0 • DepremApp
            </div>
        </div>
    );
};

export default Settings;
