const { graphql, buildSchema } = require('graphql');
const vehiclePrices = buildSchema(`
    type Query {
        id: Int
        vehicleId: Int
        vehiclePriceTypeId: Int
        price: Float
        created: String
    }
`)
const resolver = {
    id: () => {
        return 39
    },
    vehiclePriceTypeId: () => {
        return 1
    },
    vehicleId: () => {
        return 36
    },
    price: () => {
        return 10460.0000
    },
    created: () => {
        return "2021-07-30T05:37:41.000Z"
    }
}
graphql(vehiclePrices, `{ 
    id,
    price,
    created,
    vehiclePriceTypeId
    }`, resolver).then((responce) => {
    console.log(responce)
})