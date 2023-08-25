declare global {
  interface Window {
    google: any
  }
  interface GeoCode {
    OK: "OK"
    ZERO_RESULTS: "ZERO_RESULTS"
    status: "OK" | "ZERO_RESULTS" | string
    [results: string]: any
  }
}



// Create a debounce function
export const debounce = <T extends (...args: any[]) => any>(func: T, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>): void => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

export const gHandleSearch = (address: string, onSuccess: (location: google.maps.LatLng) => void, onError: (error: string) => void) => {
  const geocoder = new window.google.maps.Geocoder()

  geocoder.geocode({ address }, (results: GeoCode, status: GeoCode["status"]) => {
    if (status === "OK") {
      const location = results[0].geometry.location
      onSuccess(location)
    } else {
      onError("Geocode was not successful for the following reason: " + status)
    }
  })
}

export const gOnSearchSuccess = (location: google.maps.LatLng) => {
  const map = new window.google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 12,
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
    ],
  })

  console.log("google utils, line 106. Lat:", location.lat())
  console.log("google utils, line 107. Lng:", location.lng())
}

export const gOnSearchError: any = (error: any) => {
  console.error(error)
}

