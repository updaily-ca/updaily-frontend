import { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

declare global {
    interface Window {
        google: any;
    }
}

const ExploreMap = () => {
    const token = process.env.REACT_APP_API_KEY || 'error';

    const vancouverLatLng = {
        lat: 49.2827, lng: -123.1207
    };

    const brainstationLatLng = {
        lat: 49.285119, lng: -123.114648
    };

    const brainstationAddress = '455 Granville St #400, Vancouver, BC V6C 1T1';


    //     49°17'06.4"N 123°06'52.7"W
    // 49.285119, -123.114648


    useEffect(() => {
        const loader = new Loader({
            apiKey: token,
            version: 'weekly',
        });

        loader.load().then(() => {
            initMap();
        });

        return () => {
            // Clean up if needed
        };
    }, [token]);

    const initMap = () => {
        new window.google.maps.Map(document.getElementById('map'), {
            center: brainstationAddress,
            zoom: 18,
        });

        // Add markers, etc. here
    };

    return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default ExploreMap;
