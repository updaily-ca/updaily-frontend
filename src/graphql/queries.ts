import {gql} from "@apollo/client";


export const getFeaturedBusiness = gql `
    query GetFeaturedBusiness{
        businesses{
            id
            name
            lat
            lng
        }
    }
`
export const getBusinessDetail = gql `
    query GetBusinessDetail($id: ID!) {
        business(id: $id) {
            name
            address
            photos
            description
        }
    }
`
export const getBusinessDetail2 = gql`
    query GetBusinessDetail($id: ID!) {
        business(id: $id) {
            name
            email
            phone
            launch
            website
            photos
            type
            subtype
            cuisine
            openinghours
            pricerange
            description
            menu
            user_id
            address
        }
    }
`

export const getBusinesses = gql `
    query getBusinesses{
        businesses{
            id
            photos
            address
            name
            lat
            lng
            type
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
export const addBusiness = gql`
    mutation AddBusiness(
        $name: String!
        $email: String!
        $phone: String!
        $lat: Float!
        $lng: Float!
        $address: String!
        $launch: Int!
        $website: String!
        $photos: [String]!
        $type: String!
        $subtype: String!
        $cuisine: String!
        $openinghours: [String]!
        $pricerange: String!
        $description: String!
        $menu: [String]!
        $user_id: ID!
    ){
        addBusiness(
            name: $name
            email: $email
            phone: $phone
            lat: $lat
            lng: $lng
            address: $address
            launch: $launch
            website: $website
            photos: $photos
            type: $type
            subtype: $subtype
            cuisine: $cuisine
            openinghours: $openinghours
            pricerange: $pricerange
            description: $description
            menu: $menu
            user_id: $user_id
        ) {
            id
        }
    }
`