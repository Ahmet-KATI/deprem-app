import React, { useState } from 'react';
import { MapPin, ChevronRight, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const handlePermission = () => {
        // Mock permission request
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("Location access granted", position);
                    localStorage.setItem('onboardingDone', 'true');
                    navigate('/home');
                },
                (error) => {
                    console.error("Location access denied", error);
                    alert("Konum izni, size yakın depremleri bildirmek için gereklidir.");
                }
            );
        } else {
            alert("Tarayıcınız konum özelliğini desteklemiyor.");
        }
    };

    return (
        <div className="flex flex-col h-screen p-6 bg-surface text-center justify-between py-12">
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="bg-white p-6 rounded-full shadow-lg mb-8">
                    <MapPin size={48} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-text">Konum İzni</h2>
                <p className="text-text-secondary leading-relaxed">
                    Size en yakın deprem uyarılarını gönderebilmemiz ve acil durumlarda konumunuzu paylaşabilmeniz için konum iznine ihtiyacımız var.
                </p>
            </div>

            <div className="w-full">
                <button
                    onClick={handlePermission}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 hover:bg-red-600 transition-colors"
                >
                    İzin Ver ve Başla <ChevronRight size={20} />
                </button>
                <button
                    onClick={() => {
                        localStorage.setItem('onboardingDone', 'true');
                        navigate('/home');
                    }}
                    className="w-full mt-4 text-text-secondary text-sm py-2"
                >
                    Şimdilik Geç
                </button>
            </div>
        </div>
    );
};

export default Onboarding;
