import React, { useEffect, useRef, useState } from "react";
import useGoogleMaps from "../../App";
import { useQuery } from "@apollo/client";
import { debounce } from "../../utils/google";
import { getFeaturedBusiness } from "../../graphql/queries";
import "./ExploreMap.scss";

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
    type: string;
}

interface LatLng {
    lat: number;
    lng: number;
}

interface Business {
    type: any;
    id: number;
    lat: number;
    lng: number;
    name: string;
}

const ExploreMap = ({ searchTerm, setSearchTerm, filterTerm, userLat, userLng, setUserLat, setUserLng, filteredBusinesses, businesses, handleMarkerClick, vpNorthEast, setVpNorthEast, vpSouthWest, setVpSouthWest }: any) => {
    const googleMaps = useGoogleMaps();
    const mapRef = useRef<HTMLDivElement | null>(null);
    const map = useRef<google.maps.Map | null>(null);

    // Mutable ref to store previous markers
    const prevMarkersRef = useRef<google.maps.Marker[]>([]);

    const [userLocationAvailable, setUserLocationAvailable] = useState<boolean>(false);

    const { loading, error, data } = useQuery(getFeaturedBusiness);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    setUserLat(latitude);
                    setUserLng(longitude);
                    setUserLocationAvailable(true);
                },
                (error) => {
                    console.error("Error getting GPS coordinates:", error.message);
                }
            );
        } else {
            console.error("Geolocation is not available in this browser.");
        }
    }, []);

    // const filteredBusinesses = businesses?.filter((business: Business) => {
    //     const businessLatLng: LatLng = {
    //         lat: business.lat,
    //         lng: business.lng,
    //     };

    //     return (
    //         business.name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
    //         business.type?.toLowerCase().includes(filterTerm.toLowerCase()) &&
    //         businessLatLng.lat >= vpSouthWest.lat &&
    //         businessLatLng.lat <= vpNorthEast.lat &&
    //         businessLatLng.lng >= vpSouthWest.lng &&
    //         businessLatLng.lng <= vpNorthEast.lng
    //     );
    // });

    useEffect(() => {
        // Clear previous markers from the map and markers array
        prevMarkersRef.current.forEach(marker => {
            marker.setMap(null);
        });
        prevMarkersRef.current = [];

        // Create new markers based on filtered businesses


        // businesses?.forEach((location: Location, index: number) => {
        //     console.log(location.type);
        // });


        filteredBusinesses?.forEach((location: Location, index: number) => {
            if (map.current) {


                const marker = new window.google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map: map.current,
                    title: `Location ${index + 1}`,
                });

                marker.addListener("click", () => {
                    handleMarkerClick(location.id);
                });

                // Store the marker in the prevMarkersRef
                prevMarkersRef.current.push(marker);
            }
        });


        if (userLocationAvailable && googleMaps && userLat !== null && userLng !== null) {
            if (!map.current) {
                const mapOptions = {
                    center: { lat: userLat, lng: userLng },
                    zoom: 12,
                    styles: [
                        {
                            featureType: "poi",
                            stylers: [{ visibility: "off" }],
                        },
                    ],
                };
                map.current = new window.google.maps.Map(mapRef.current, mapOptions);
            }

            let shouldPerformRequest = false;

            const boundsChangedHandler = debounce(() => {
                if (shouldPerformRequest && map.current) {
                    const bounds = map.current.getBounds();
                    if (bounds) {
                        const northeast = bounds.getNorthEast();
                        const southwest = bounds.getSouthWest();

                        setVpNorthEast({ lat: northeast.lat(), lng: northeast.lng() });
                        setVpSouthWest({ lat: southwest.lat(), lng: southwest.lng() });
                    }
                    shouldPerformRequest = false;
                }
            }, 500);

            if (map.current) {
                map.current.addListener("bounds_changed", () => {
                    shouldPerformRequest = true;
                    boundsChangedHandler();
                });

                map.current.addListener("idle", () => {
                    boundsChangedHandler();
                });
            }
        }
    }, [handleMarkerClick, googleMaps, userLat, userLng, userLocationAvailable, vpNorthEast, vpSouthWest]);

    return <div className="c-exploremap">


        {userLocationAvailable && <div ref={mapRef} className="c-exploremap__map" />}</div>;
};

export default ExploreMap;
