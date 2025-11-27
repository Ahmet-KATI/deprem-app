import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchEarthquakes } from '../services/earthquakeService';

const EarthquakeContext = createContext();

export const useEarthquakes = () => useContext(EarthquakeContext);

export const EarthquakeProvider = ({ children }) => {
    const [earthquakes, setEarthquakes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lastUpdated, setLastUpdated] = useState(null);

    const refreshEarthquakes = async () => {
        setLoading(true);
        try {
            const data = await fetchEarthquakes();
            setEarthquakes(data);
            setLastUpdated(new Date());
        } catch (error) {
            console.error("Failed to refresh earthquakes", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refreshEarthquakes();
        // Auto refresh every 60 seconds
        const interval = setInterval(refreshEarthquakes, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <EarthquakeContext.Provider value={{ earthquakes, loading, lastUpdated, refreshEarthquakes }}>
            {children}
        </EarthquakeContext.Provider>
    );
};
