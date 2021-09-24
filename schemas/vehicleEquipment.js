const { graphql, buildSchema } = require('graphql');
const vehicleEquipment = buildSchema(`
    type Query {
        id: Int
        vehicleId: Int
        vehicleEquipmentId: Int
        Quantity: Int
    }
`)
const resolver = {
    id: () => {
        return 39
    },
    vehicleEquipmentId: () => {
        return 1
    },
    vehicleId: () => {
        return 36
    },
    Quantity: () => {
        return 10460.0000
    }
}
graphql(vehicleEquipment, `{ 
    id,
    price,
    created,
    vehiclePriceTypeId
    }`, resolver).then((responce) => {
    console.log(responce)
})