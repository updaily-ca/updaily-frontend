import { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { gInitMap } from '../../utils/google';

const ExploreMap = ({ userLat, userLng }: any) => {
    const token = process.env.REACT_APP_API_KEY_1 || 'error';

    useEffect(() => {
        const loader = new Loader({
            apiKey: token,
            version: 'weekly',
        });

        loader.load().then(() => {
            gInitMap(userLat, userLng);
        });

        return () => {
            // Clean up if needed
        };
    }, [token, userLat, userLng]);

    return (
        <div>
            <div id="map" style={{ height: '400px', width: '100%' }} />
        </div>
    );
};

export default ExploreMap;
