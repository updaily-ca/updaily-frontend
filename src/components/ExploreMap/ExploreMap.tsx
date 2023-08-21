import { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { gInitMap, gHandleSearch, gOnSearchError, gOnSearchSuccess } from '../../utils/google';

declare global {
    interface Window {
        google: any;
    }
}

const ExploreMap = () => {
    const token = process.env.REACT_APP_API_KEY || 'error';
    const [address, setAddress] = useState('');

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

    const gHandleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (address) {
            gHandleSearch(address, gOnSearchSuccess, gOnSearchError);
        }
    };

    return (
        <div>
            <form onSubmit={gHandleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Enter address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <div id="map" style={{ height: '400px', width: '100%' }} />
        </div>
    );
};

export default ExploreMap;
