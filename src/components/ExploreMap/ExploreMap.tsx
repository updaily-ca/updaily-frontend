import { useEffect, useRef, useState } from "react"
import useGoogleMaps from "../../App"
import { useQuery } from "@apollo/client"
import { debounce } from "../../utils/google"
import { getFeaturedBusiness } from "../../graphql/queries"
import "./ExploreMap.scss"

declare global {
    interface Window {
        google: any
    }
}

interface Location {
    id: number
    name: string
    lat: number
    lng: number
}

const ExploreMap = ({ userLat, userLng, setUserLat, setUserLng, businesses, handleMarkerClick, setVpNorthEast, setVpSouthWest }: any) => {
    const googleMaps = useGoogleMaps()
    const mapRef = useRef<HTMLDivElement | null>(null)
    const map = useRef<google.maps.Map | null>(null)

    const { loading, error, data } = useQuery(getFeaturedBusiness)

    const [userLocationAvailable, setUserLocationAvailable] = useState<boolean>(false)

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude
                    const longitude = position.coords.longitude
                    setUserLat(latitude)
                    setUserLng(longitude)
                    setUserLocationAvailable(true)
                },
                (error) => {
                    console.error("Error getting GPS coordinates:", error.message)
                }
            )
        } else {
            console.error("Geolocation is not available in this browser.")
        }
    }, [])

    useEffect(() => {
        businesses?.forEach((location: Location, index: number) => {
            const marker = new window.google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map: map.current,
                title: `Location ${index + 1}`,
            })

            marker.data = location

            marker.addListener("click", () => {
                handleMarkerClick(marker.data.id)
                // console.log(marker.data.id);
            })
        })

        if (userLocationAvailable && googleMaps && userLat !== null && userLng !== null) {
            if (!map.current) {
                const mapOptions = {
                    center: { lat: userLat, lng: userLng },
                    zoom: 8,
                    styles: [
                        {
                            featureType: "poi",
                            stylers: [{ visibility: "off" }],
                        },
                    ],
                }
                map.current = new window.google.maps.Map(mapRef.current, mapOptions)
            }

            let shouldPerformRequest = false

            const boundsChangedHandler = debounce(() => {
                if (shouldPerformRequest && map.current) {
                    const bounds = map.current.getBounds()
                    if (bounds) {
                        const northeast = bounds.getNorthEast()
                        const southwest = bounds.getSouthWest()

                        setVpNorthEast({ lat: northeast.lat(), lng: northeast.lng() })
                        setVpSouthWest({ lat: southwest.lat(), lng: southwest.lng() })

                        // console.log("Bounds Changed - Northeast Corner - Latitude:", northeast.lat(), "Longitude:", northeast.lng())
                        // console.log("Bounds Changed - Southwest Corner - Latitude:", southwest.lat(), "Longitude:", southwest.lng())
                    }
                    shouldPerformRequest = false
                }
            }, 500)

            if (map.current) {
                map.current.addListener("bounds_changed", () => {
                    shouldPerformRequest = true
                    boundsChangedHandler()
                })

                map.current.addListener("idle", () => {
                    boundsChangedHandler()
                })
            }
        }
    }, [userLocationAvailable, googleMaps, userLat, userLng, businesses, handleMarkerClick])

    return <div className="c-exploremap">{userLocationAvailable && <div ref={mapRef} className="c-exploremap__map" />}</div>
}

export default ExploreMap
