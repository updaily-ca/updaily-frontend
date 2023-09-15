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
    launch: number;
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

const ExploreMap = ({ searchTerm, setSearchTerm, filterTerm, userLat, userLng, setUserLat, setUserLng, newLat, newLng, filteredBusinesses, businesses, handleMarkerClick, vpNorthEast, setVpNorthEast, vpSouthWest, setVpSouthWest }: any) => {
    const googleMaps = useGoogleMaps();
    const mapRef = useRef<HTMLDivElement | null>(null);
    const map = useRef<google.maps.Map | null>(null);

    // Mutable ref to store previous markers
    const prevMarkersRef = useRef<google.maps.Marker[]>([]);

    const [userLocationAvailable, setUserLocationAvailable] = useState<boolean>(false);

    const { loading, error, data } = useQuery(getFeaturedBusiness);

    // useEffect(() => {
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
    // }, []);


    useEffect(() => {

        // prevMarkersRef.current.forEach(marker => {
        //     marker.setMap(null);
        // });
        // prevMarkersRef.current = [];



        filteredBusinesses?.forEach((location: Location, index: number) => {
            if (map.current) {

                const calculateMarkerColor = (launch: any) => {
                    const currentYear = new Date().getFullYear(); // Get the current year
                    const launchDate = new Date(launch * 1000); // Convert the timestamp to a Date object

                    if (launchDate.getFullYear() < currentYear - 1) {
                        return '#ff372d7f'; // Older than last year
                    } else if (launchDate.getFullYear() === currentYear - 1) {
                        return '#ff372dc3'; // Last year
                    } else if (launchDate.getFullYear() === currentYear) {
                        return '#FF382D'; // Current year
                    } else {
                        return '#ff372d70'; // Unknown or future year
                    }
                };

                const calculateMarkerYear = (launch: any) => {

                    const launchDate = new Date(launch * 1000); // Convert the timestamp to a Date object

                    return launchDate.getFullYear();
                };

                const markerColor = calculateMarkerColor(location.launch);
                const markerYear = calculateMarkerYear(location.launch);
                const truncatedYear = markerYear.toString().slice(-2);

                const marker = new window.google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map: map.current,
                    title: `Location ${index + 1}`,
                    label: {
                        text: truncatedYear.toString(),
                        color: "black",
                    },

                    icon: {
                        // path: window.google.maps.SymbolPath.FORWARD_OPEN_ARROW,
                        path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                        fillColor: markerColor,
                        fillOpacity: 1,
                        strokeWeight: 0,
                        scale: 4,
                    },
                });

                // Add the new marker to the map
                marker.setMap(map.current);

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

                        // Convert 2 miles to degrees (approximately)
                        const milesToDegrees = 2 / 69;

                        // Expand the bounds by 2 miles in every direction
                        const expandedNortheast = {
                            lat: northeast.lat() + milesToDegrees,
                            lng: northeast.lng() + milesToDegrees,
                        };

                        const expandedSouthwest = {
                            lat: southwest.lat() - milesToDegrees,
                            lng: southwest.lng() - milesToDegrees,
                        };

                        setVpNorthEast(expandedNortheast);
                        setVpSouthWest(expandedSouthwest);
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

        console.log('logging');
    }, [handleMarkerClick, userLat, userLng, newLat, newLng, userLocationAvailable, vpNorthEast, vpSouthWest]);

    const mapChange = () => {

        if (map.current) {

            // Update the map center if userLat or userLng changes
            const newCenter = new window.google.maps.LatLng(newLat, newLng);
            map.current?.setCenter(newCenter);
            map.current?.setZoom(14);

        }
    }

    useEffect(() => {
        mapChange();
    }, [newLat, newLng]);


    return <div className="c-exploremap">


        {userLocationAvailable && <div ref={mapRef} className="c-exploremap__map" />}</div>;
};

export default ExploreMap;
