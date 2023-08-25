import { Loader } from '@googlemaps/js-api-loader';
import { debounce } from './google';

interface LoadGoogleMapsAPIOptions {
    apiKey: string;
}

const loadGoogleMapsAPI = ({ apiKey }: LoadGoogleMapsAPIOptions) => {
    const loader = new Loader({
        apiKey: apiKey,
        version: 'weekly',
        libraries: ['places'],
    });

    return loader.load();
};

export default loadGoogleMapsAPI;










interface LatLng {
    lat: number
    lng: number
  }
  
  interface Location {
    id: number,
    name: string,
    lat: number
    lng: number
    // Other properties of the location object, if any
  }



export const gInitMap = (userLat: number, userLng: number, addMarkers: boolean = true, locations: Location[] = [], handleMarkerClick: (id:number)=> void) => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: userLat, lng: userLng },
      zoom: 12,
      styles: [
        {
          featureType: "poi",
          stylers: [{ visibility: "off" }],
        },
      ],
    })
  
    const infoWindowContent = `
    <div>
        <h3>HAPPY BODY</h3>
        <p>oi</p> 
    </div>
  `
  
    // Create a marker at the user's location
    const userMarker = new window.google.maps.Marker({
      position: { lat: userLat, lng: userLng },
      map: map,
      title: "Your location",
      content: infoWindowContent,
    })
    const infoWindow = new window.google.maps.InfoWindow({
      content: infoWindowContent,
    })
    userMarker.addListener("click", () => {
      infoWindow.open(map, userMarker)
    })
  
  // Inside gInitMap function
    if (addMarkers) {
      locations.forEach((location, index) => {
        const marker = new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: `Location ${index + 1}`,
        });
        // attach data to marker
        marker.data = location;
        // Add Event Listenr to each marker
        marker.addListener("click", () => {
          handleMarkerClick(marker.data.id)
        })
      })
    }
  
    let shouldPerformRequest = false
  
    const boundsChangedHandler = debounce(() => {
      if (shouldPerformRequest) {
        const bounds = map.getBounds()
        if (bounds) {
          const northeast = bounds.getNorthEast() as LatLng
          const southwest = bounds.getSouthWest() as LatLng
  
          // console.log('Bounds Changed - Northeast Corner - Latitude:', northeast.lat(), 'Longitude:', northeast.lng());
          // console.log('Bounds Changed - Southwest Corner - Latitude:', southwest.lat(), 'Longitude:', southwest.lng());
  
          // We can use these corner coordinates for the database search
          // For example, send these coordinates to the database query function
        }
        shouldPerformRequest = false
      }
    }, 500)
  
    map.addListener("bounds_changed", () => {
      shouldPerformRequest = true
      boundsChangedHandler()
    })
  
    map.addListener("idle", () => {
      boundsChangedHandler()
    })
  }
  