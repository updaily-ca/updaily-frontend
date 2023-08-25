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


