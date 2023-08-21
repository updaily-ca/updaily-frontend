// mapFunctions.ts
import { Loader } from '@googlemaps/js-api-loader';
// import { LatLng, Geocoder } from 'googlemaps';
 
interface GeoCode {
    OK: 'OK';
    ZERO_RESULTS: 'ZERO_RESULTS';
    status: 'OK' | 'ZERO_RESULTS' | string;
    [results: string]: any;
  }

  export const gInitMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 49.2827, lng: -123.1207 },
        zoom: 12,
        styles: [
            {
                featureType: 'poi',
                stylers: [{ visibility: 'off' }],
            },
        ],
    });
};
  
  export const gHandleSearch = (
    address: string,
    onSuccess: (location: google.maps.LatLng) => void,
    onError: (error: string) => void
  ) => {
    const geocoder = new window.google.maps.Geocoder();
  
    geocoder.geocode({ address }, (results: GeoCode, status: GeoCode['status']) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        onSuccess(location);
      } else {
        onError('Geocode was not successful for the following reason: ' + status);
      }
    });
  };
  
  export const gOnSearchSuccess = (location: google.maps.LatLng) => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 12,
        styles: [
            {
                featureType: 'poi',
                stylers: [{ visibility: 'off' }],
            },
        ],
    });

    const marker = new window.google.maps.Marker({
        position: location,
        map: map,
        title: 'Search Result',
    });

    console.log('Latitude:', location.lat());
    console.log('Longitude:', location.lng());
};

export const gOnSearchError = (error: string) => {
    console.error(error);
};