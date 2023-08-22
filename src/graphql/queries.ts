import {gql} from "@apollo/client";


export const getFeaturedBusiness = gql `
    query GetFeaturedBuiness{
        businesses{
            name
        }
    }
`