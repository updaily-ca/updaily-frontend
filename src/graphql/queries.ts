import {gql} from "@apollo/client";


export const getFeaturedBusiness = gql `
    query GetFeaturedBusiness{
        businesses{
            name
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