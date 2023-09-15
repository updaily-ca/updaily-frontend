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

export const calculateMarkerYear = (launch: any) => {

    const launchDate = new Date(launch * 1000); // Convert the timestamp to a Date object

    return launchDate.getFullYear();
};

