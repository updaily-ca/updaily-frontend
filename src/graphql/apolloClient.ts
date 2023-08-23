import { ApolloClient, InMemoryCache } from '@apollo/client';

const apiKey = process.env.REACT_APP_API_KEY_2 || "";

const client = new ApolloClient({
    uri: `${process.env.REACT_APP_API_URL_2}:${process.env.REACT_APP_API_PORT_2}`,
    cache: new InMemoryCache(),
    headers: {
        'apikey': apiKey
    }
});

export default client;
