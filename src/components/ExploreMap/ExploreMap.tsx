import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

declare global {
    interface Window {
        google: any;
    }
}

interface GeoCode {
    OK: 'OK',
    ZERO_RESULTS: 'ZERO_RESULTS',
    status: 'OK' | 'ZERO_RESULTS' | string,
    [results: string]: any,
}

const ExploreMap = () => {
    const token = process.env.REACT_APP_API_KEY || 'error';
    const [address, setAddress] = React.useState('');

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
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 49.2827, lng: -123.1207 },
            zoom: 12,
            styles: [
                {
                    featureType: "poi",
                    stylers: [{ visibility: "off" }],
                },
            ],
        });

    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (address) {
            const geocoder = new window.google.maps.Geocoder();

            geocoder.geocode({ address: address }, (results: GeoCode, status: GeoCode['status']) => {
                if (status === 'OK') {
                    const location = results[0].geometry.location;
                    const map = new window.google.maps.Map(document.getElementById('map'), {
                        center: location,
                        zoom: 12,
                        styles: [
                            {
                                featureType: "poi",
                                stylers: [{ visibility: "off" }],
                            },
                        ],

                    });

                    const marker = new window.google.maps.Marker({
                        position: location,
                        map: map,
                        title: 'Search Result'
                    });

                    console.log('Latitude:', location.lat());
                    console.log('Longitude:', location.lng());
                } else {
                    console.error('Geocode was not successful for the following reason: ' + status);
                }
            });
        }
    };
    // new changes // End of changes

    return (
        <div>
            <form onSubmit={handleSearch}>
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
