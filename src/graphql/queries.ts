import {gql} from "@apollo/client";


export const getFeaturedBusiness = gql `
    query GetFeaturedBusiness{
        businesses{
            name
            lat
            lng
        }
    }
`
export const getFeaturedEvent = gql `
    query GetFeaturedEvent{
        events{
            name
        }
    }
`