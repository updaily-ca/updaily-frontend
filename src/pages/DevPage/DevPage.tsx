import { useEffect, useRef, useState } from "react";
import useGoogleMaps from '../../App';
import { useQuery } from "@apollo/client";

import { getFeaturedBusiness } from '../../graphql/queries';

declare global {
    interface Window {
        google: any;
    }
}

interface Location {
    id: number;
    name: string;
    lat: number;
    lng: number;
}

const DevPage = () => {
    const googleMaps = useGoogleMaps();
    const mapRef = useRef<HTMLDivElement | null>(null);

    const { loading, error, data } = useQuery(getFeaturedBusiness);

    const locations = data?.businesses?.slice(0, 4);

    const handleMarkerClick = (id: number) => {
        console.log(id);
    }

    const [userLocationAvailable, setUserLocationAvailable] = useState<boolean>(false);
    const [userLat, setUserLat] = useState<number | null>(null);
    const [userLng, setUserLng] = useState<number | null>(null);

    useEffect(() => {
        if ('geolocation' in navigator) {
            // Request the user's current position
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    setUserLat(latitude);
                    setUserLng(longitude);

                    setUserLocationAvailable(true);

                    console.log('coordinates set.');
                },
                (error) => {
                    console.error('Error getting GPS coordinates:', error.message);
                }
            );
        } else {
            console.error('Geolocation is not available in this browser.');
        }
    }, []);

    useEffect(() => {
        if (userLocationAvailable && window.google && userLat !== null && userLng !== null) {
            const mapOptions = {
                center: { lat: userLat, lng: userLng },
                zoom: 8,
                styles: [
                    {
                        featureType: "poi",
                        stylers: [{ visibility: "off" }],
                    },
                ],
            };

            const map = new window.google.maps.Map(mapRef.current, mapOptions);

            locations?.forEach((location: Location, index: number) => {
                const marker = new window.google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map: map,
                    title: `Location ${index + 1}`,
                });

                // Attach data to marker
                marker.data = location;

                // Add Event Listener to each marker
                marker.addListener("click", () => {
                    handleMarkerClick(location.id); // Pass the location id directly
                });
            });
        }
    }, [userLocationAvailable, userLat, userLng, locations]);

    return (
        <div className="p-devpage">
            {userLocationAvailable ? <div ref={mapRef} style={{ width: "100%", height: "400px" }} /> : ''}
            <p>
                This is a map embedded in the DevPage. You can customize its size and initial location by modifying the <code>mapOptions</code>.
            </p>
        </div>
    );
};

export default DevPage;
