import { Loader } from '@googlemaps/js-api-loader';

interface LoadGoogleMapsAPIOptions {
    apiKey: string;
}

export const loadGoogleMapsAPI = ({ apiKey }: LoadGoogleMapsAPIOptions) => {
    const loader = new Loader({
        apiKey: apiKey,
        version: 'weekly',
        libraries: ['places'],
    });

    return loader.load();

};

export default loadGoogleMapsAPI;


export const calculateMarkerColor = (launch: any) => {
    const currentYear = new Date().getFullYear(); // Get the current year
    const launchDate = new Date(launch * 1000); // Convert the timestamp to a Date object

    switch (true) {
        case launchDate.getFullYear() < currentYear - 1:
            return '#ff372d7f'; // Older than last year
        case launchDate.getFullYear() === currentYear - 1:
            return '#ff372dc3'; // Last year
        case launchDate.getFullYear() === currentYear:
            return '#FF382D'; // Current year
        default:
            return '#ff372d70'; // Unknown or future year
    }
};

export const calculateMarkerYear = (launch: any) => {

    const launchDate = new Date(launch * 1000); // Convert the timestamp to a Date object

    return launchDate.getFullYear();
};

export const filterMarkersByDate = (markers: any, dateFilterTerm: any) => {
    markers.current.forEach((marker: any) => {
        const currentYear = new Date().getFullYear();
        const markerYear = calculateMarkerYear(marker.launch);

        if (dateFilterTerm === 'Oldest') {
            // If the marker's year is not the oldest, hide it
            if (markerYear !== currentYear && markerYear !== currentYear - 1) {
                marker.setVisible(true);
            } else {
                marker.setVisible(false);
            }
        } else if (dateFilterTerm === 'Newest') {
            // If the marker's year is not the newest, hide it
            if (markerYear !== currentYear && markerYear !== currentYear - 1) {
                marker.setVisible(false);
            } else {
                marker.setVisible(true);
            }
        } else if (dateFilterTerm === 'This Year') {
            // If the marker's year is this year, show it; otherwise, hide it
            if (markerYear === currentYear) {
                marker.setVisible(true);
            } else {
                marker.setVisible(false);
            }
        } else if (dateFilterTerm === 'Any') {
            // Show all markers for the "Any" filter
            marker.setVisible(true);
        }
        

        // this logic needs changing, otherwise on january, it may show no businesses. it needs to measure by months but the filtering method itself works and is slightly different from the technologies because it's not deleting the markers from the map.

    });
}
