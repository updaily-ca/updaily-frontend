// import React, { useEffect, useRef, useState } from "react";
// import useGoogleMaps from '../../App';
// import { useQuery } from "@apollo/client";
// import { debounce } from "../../utils/google";
// import { getFeaturedBusiness } from '../../graphql/queries';

// declare global {
//     interface Window {
//         google: any;
//     }
// }

// interface Location {
//     id: number;
//     name: string;
//     lat: number;
//     lng: number;
// }

const DevPage = () => {
    // const googleMaps = useGoogleMaps();
    // const mapRef = useRef<HTMLDivElement | null>(null);

    // const { loading, error, data } = useQuery(getFeaturedBusiness);
    // const locations = data?.businesses?.slice(0, 4) || [];

    // const handleMarkerClick = (id: number) => {
    //     console.log(id);
    // }

    // const [userLocationAvailable, setUserLocationAvailable] = useState<boolean>(false);
    // const [userLat, setUserLat] = useState<number | null>(null);
    // const [userLng, setUserLng] = useState<number | null>(null);

    // useEffect(() => { d
    //     if ('geolocation' in navigator) {
    //         // Request the user's current position
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 const latitude = position.coords.latitude;
    //                 const longitude = position.coords.longitude;
    //                 setUserLat(latitude);
    //                 setUserLng(longitude);
    //                 setUserLocationAvailable(true);
    //             },
    //             (error) => {
    //                 console.error('Error getting GPS coordinates:', error.message);
    //             }
    //         );
    //     } else {
    //         console.error('Geolocation is not available in this browser.');
    //     }
    // }, []);

    // useEffect(() => {
    //     if (userLocationAvailable && googleMaps && userLat !== null && userLng !== null) {
    //         const mapOptions = {
    //             center: { lat: userLat, lng: userLng },
    //             zoom: 8,
    //             styles: [
    //                 {
    //                     featureType: "poi",
    //                     stylers: [{ visibility: "off" }],
    //                 },
    //             ],
    //         };
    //         const map = new window.google.maps.Map(mapRef.current, mapOptions);

    //         locations.forEach((location: Location, index: number) => {
    //             const marker = new window.google.maps.Marker({
    //                 position: { lat: location.lat, lng: location.lng },
    //                 map: map,
    //                 title: `Location ${index + 1}`,
    //             });

    //             marker.addListener("click", () => {
    //                 handleMarkerClick(location.id);
    //             });
    //         });

    //         let shouldPerformRequest = false;
    //         const boundsChangedHandler = debounce(() => {
    //             if (shouldPerformRequest) {
    //                 const bounds = map.getBounds();
    //                 if (bounds) {
    //                     const northeast = bounds.getNorthEast();
    //                     const southwest = bounds.getSouthWest();
    //                     console.log('Bounds Changed - Northeast Corner - Latitude:', northeast.lat(), 'Longitude:', northeast.lng());
    //                     console.log('Bounds Changed - Southwest Corner - Latitude:', southwest.lat(), 'Longitude:', southwest.lng());
    //                 }
    //                 shouldPerformRequest = false;
    //             }
    //         }, 500);

    //         map.addListener("bounds_changed", () => {
    //             shouldPerformRequest = true;
    //             boundsChangedHandler();
    //         });

    //         map.addListener("idle", () => {
    //             boundsChangedHandler();
    //         });


    //         const infoWindowContent = `
    //         <div>
    //             <h3>HAPPY BODY</h3>
    //             <p>oi</p> 
    //         </div>
    //       `

    //         // Create a marker at the user's location
    //         const userMarker = new window.google.maps.Marker({
    //             position: { lat: userLat, lng: userLng },
    //             map: map,
    //             title: "Your location",
    //             content: infoWindowContent,
    //         })
    //         const infoWindow = new window.google.maps.InfoWindow({
    //             content: infoWindowContent,
    //         })
    //         userMarker.addListener("click", () => {
    //             infoWindow.open(map, userMarker)
    //         })

    //     }
    // }, [userLocationAvailable, googleMaps, userLat, userLng, locations]);

    return (
        <div className="p-devpage">
            {/* {userLocationAvailable && <div ref={mapRef} style={{ width: "100%", height: "400px" }} />}
            <p>
                This is a map embedded in the DevPage. You can customize its size and initial location by modifying the <code>mapOptions</code>.
            </p> */}
        </div>
    );
};

export default DevPage;
