import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home'; // Will create next
import MapPage from './pages/MapPage'; // Will create next
import Settings from './pages/Settings'; // Will create next
import BottomNav from './components/BottomNav'; // Will create next

// Layout wrapper to include BottomNav on main pages
const MainLayout = ({ children }) => {
  return (
    <div className="container flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto pb-20">
        {children}
      </div>
      <BottomNav />
    </div>
  );
};

import { EarthquakeProvider } from './context/EarthquakeContext';

import EarthquakeList from './pages/EarthquakeList';
import EarthquakeDetail from './pages/EarthquakeDetail';
import AlertSettings from './pages/AlertSettings';

function App() {
  return (
    <EarthquakeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<div className="container"><Onboarding /></div>} />

          <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/list" element={<MainLayout><EarthquakeList /></MainLayout>} />
          <Route path="/earthquake/:id" element={<div className="container"><EarthquakeDetail /></div>} />
          <Route path="/map" element={<MainLayout><MapPage /></MainLayout>} />
          <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />
          <Route path="/alert-settings" element={<div className="container"><AlertSettings /></div>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </EarthquakeProvider>
  );
}

export default App;
