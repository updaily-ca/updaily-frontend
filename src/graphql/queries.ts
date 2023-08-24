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

export const addBusiness = gql`
    mutation AddBusiness(
        $name: String,
        $email: String,
        $phone: String,
        $lat: Float,
        $lng: Float,
        $address: String,
        $launch: Int,
        $website: String,
        $photos: [String],
        $type: String,
        $subtype: String,
        $cuisine: String,
        $openinghours: [String],
        $pricerange: String,
        $description: String,
        $menu: [String],
        $user_id: Int
    ){
        addBusiness(
            name: $name,
            email: $email,
            phone: $phone,
            lat: $lat,
            lng: lng,
            address: $address,
            launch: $launch,
            website: $website,
            photos: $photo,
            type: $type,
            subtype: $subtype,
            cuisine: cuisine,
            openinghours: $openinghours,
            pricerange: $pricerange,
            description: $description,
            menu: $menu,
            user_id: $user_id
        ) {
            id
        }
    }
`