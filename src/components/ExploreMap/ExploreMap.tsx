export {};

// import { useEffect } from 'react';
// import { Loader } from '@googlemaps/js-api-loader';
// import { gInitMap } from '../../utils/gMap';


// const ExploreMap = ({ userLat, userLng, locations, handleMarkerClick }: any) => {
    
    

//     useEffect(() => {
//         const loader = new Loader({
//             apiKey: token,
//             version: 'weekly',
//         });

//         loader.load().then(() => {
//             gInitMap(userLat, userLng, true, locations, handleMarkerClick); // Pass the locations array to gInitMap
//         });

//         return () => {
//             // Clean up if needed
//         };
//     }, [token, userLat, userLng, locations]); // Include locations in the dependency array

//     return (
//         <div>
//             <div id="map" style={{ height: '400px', width: '100%' }} />
//         </div>
//     );
// };

// export default ExploreMap;
