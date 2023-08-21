import { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { gInitMap } from '../../utils/google';

const ExploreMap = () => {
    const token = process.env.REACT_APP_API_KEY || 'error';

    useEffect(() => {
        const loader = new Loader({
            apiKey: token,
            version: 'weekly',
        });

        loader.load().then(() => {
            gInitMap();
        });

        return () => {
            // Clean up if needed
        };
    }, [token]);

    return (
        <div>
            <div id="map" style={{ height: '400px', width: '100%' }} />
        </div>
    );
};

export default ExploreMap;
