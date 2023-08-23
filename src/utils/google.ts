declare global {
  interface Window {
    google: any;
  }
  interface GeoCode {
    OK: 'OK';
    ZERO_RESULTS: 'ZERO_RESULTS';
    status: 'OK' | 'ZERO_RESULTS' | string;
    [results: string]: any;
  }
}

interface LatLng {
  lat: number;
  lng: number;
}

// Create a debounce function
const debounce = <T extends (...args: any[]) => any>(func: T, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>): void => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const gInitMap = (userLat: number, userLng: number) => {
  const map = new window.google.maps.Map(document.getElementById('map'), {
    center: { lat: userLat, lng: userLng },
    zoom: 12,
    styles: [
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }],
      },
    ],
  });


    // Create a marker at the user's location
    const userMarker = new window.google.maps.Marker({
      position: { lat: userLat, lng: userLng },
      map: map,
      title: 'Your location',
    });
  

  let shouldPerformRequest = false;

  const boundsChangedHandler = debounce(() => {
    if (shouldPerformRequest) {
      const bounds = map.getBounds();
      if (bounds) {
        const northeast = bounds.getNorthEast() as LatLng;
        const southwest = bounds.getSouthWest() as LatLng;

        // console.log('Bounds Changed - Northeast Corner - Latitude:', northeast.lat(), 'Longitude:', northeast.lng());
        // console.log('Bounds Changed - Southwest Corner - Latitude:', southwest.lat(), 'Longitude:', southwest.lng());

        // We can use these corner coordinates for the database search
        // For example, send these coordinates to the database query function
        
      }
      shouldPerformRequest = false;
    }
  }, 500);

  map.addListener('bounds_changed', () => {
    shouldPerformRequest = true;
    boundsChangedHandler();
  });

  map.addListener('idle', () => {
    boundsChangedHandler();
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

  console.log('google utils, line 106. Lat:', location.lat());
  console.log('google utils, line 107. Lng:', location.lng());
};

export const gOnSearchError: any = (error: any) => {
  console.error(error);
};
