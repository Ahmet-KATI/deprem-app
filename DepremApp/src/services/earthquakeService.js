import axios from 'axios';

// Kandilli API (Unofficial or similar public API)
// Using a proxy or a known public endpoint. 
// For stability, I will use a mock generator if the API fails or for development.

const MOCK_DATA = [
    {
        id: '1',
        title: 'EGE DENIZI',
        date: new Date().toISOString(),
        mag: 4.2,
        depth: 5.4,
        lat: 38.12,
        lng: 26.55,
        location: 'Seferihisar açıkları, İzmir'
    },
    {
        id: '2',
        title: 'AKDENIZ',
        date: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
        mag: 3.5,
        depth: 12.1,
        lat: 36.5,
        lng: 28.1,
        location: 'Marmaris açıkları, Muğla'
    },
    {
        id: '3',
        title: 'DUZCE',
        date: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2 hours ago
        mag: 2.1,
        depth: 7.0,
        lat: 40.8,
        lng: 31.1,
        location: 'Gölyaka, Düzce'
    },
    {
        id: '4',
        title: 'VAN',
        date: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
        mag: 3.8,
        depth: 5.0,
        lat: 38.5,
        lng: 43.4,
        location: 'Tuşba, Van'
    }
];

export const fetchEarthquakes = async () => {
    try {
        // Attempt to fetch from a public API (e.g., Kandilli scraper or USGS)
        // For this demo, we'll use a timeout to simulate network and return mock data
        // In a real app, we would use: 
        // const response = await axios.get('https://api.orhanaydogdu.com.tr/deprem/kandilli/live');
        // return response.data.result;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(MOCK_DATA);
            }, 800);
        });
    } catch (error) {
        console.error("Error fetching earthquakes:", error);
        return MOCK_DATA;
    }
};
