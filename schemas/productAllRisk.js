const { graphql, buildSchema } = require('graphql');
const ProductAllRisk = buildSchema(`
    type Query {
        id: Int
        packageId: Int
        productTypeId: Int
        vehicleId: Int
        referenceDemandProductTypeId: Int
        partnerOrganizationId: Int
        validFromDate: String
        isPastInsured: Boolean
        productCode: String
        cheapestProductCode: String
        windscreenCoverPrice: String
        actOfGodPrice: String
        injuryPrice: String
        animalCollisionPrice: String
        luggagePrice: String
        aboveStandardPrice: String
        collisionPrice: String
        theftPrice: String
        vandalismPrice: String
        guaranteedValuePrice: String
        courtesyCarPrice: String
        windscreenCoverLimit: String
        actOfGodLimit: String
        injuryLimit: String
        animalCollisionLimit: String
        luggageLimit: String
        aboveStandardLimit: String
        collisionLimit: String
        theftLimit: String
        vandalismLimit: String
        guaranteedValueLimit: String
        courtesyCarLimit: String
        amountInsured: String
        contract: String
        complicity: String
    }
`)
const resolver = {
    id: () => {
        return 15
    },
    packageId: () => {
        return 35
    },
    productTypeId: () => {
        return 1
    },
    vehicleId: () => {
        return 36
    },
    referenceDemandProductTypeId: () => {
        return 39
    },
    partnerOrganizationId: () => {
        return 30
    },
    validFromDate: () => {
        return '2021-07-30T00:00:00'
    },
    isPastInsured: () => {
        return true
    },
    productCode: () => {
        return "10046"
    }
}
graphql(ProductAllRisk, `{ 
    id, 
    vehicleId, 
    productCode, 
    validFromDate 
    }`, resolver).then((responce) => {
    console.log(responce)
})