import React, { useEffect } from 'react';
import { Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if onboarding is done (mock)
      const onboardingDone = localStorage.getItem('onboardingDone');
      if (onboardingDone) {
        navigate('/home');
      } else {
        navigate('/onboarding');
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
      <div className="animate-pulse">
        <Activity size={64} strokeWidth={3} />
      </div>
      <h1 className="text-3xl font-bold mt-4 tracking-wider">DEPREM APP</h1>
      <p className="text-sm opacity-80 mt-2">Güvende Kalın</p>
    </div>
  );
};

export default Splash;
