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
    },
    cheapestProductCode: () => {
        return "10046"
    },
    windscreenCoverPrice: () => {
        return "9900"
    },
    actOfGodPrice: () => {
        return "10000"
    },
    animalCollisionPrice: () => {
        return "12000"
    },
    luggagePrice: () => {
        return "13000"
    },
    aboveStandardPrice: () => {
        return "9000"
    },
    injuryPrice: () => {
        return "9000"
    },
    windscreenCoverLimit: () => {
        return "9000"
    },
    actOfGodLimit: () => {
        return "20000"
    },
    injuryLimit: () => {
        return "9000"
    },
    animalCollisionLimit: () => {
        return "9000"
    },
    luggageLimit: () => {
        return "9000"
    },
    aboveStandardLimit: () => {
        return "9000"
    },
    collisionLimit: () => {
        return "20000"
    },
    theftLimit: () => {
        return "9000"
    },
    vandalismLimit: () => {
        return "9000"
    },
    guaranteedValueLimit: () => {
        return "9000"
    },
    courtesyCarLimit: () => {
        return "9000"
    },
    amountInsured: () => {
        return "20000"
    },
    contract: () => {
        return "9000"
    },
    courtesyCarPrice: () => {
        return "9000"
    },
    collisionPrice: () => {
        return "9000"
    },
    theftPrice: () => {
        return "9000"
    },
    vandalismPrice: () => {
        return "20000"
    },
    guaranteedValuePrice: () => {
        return "9000"
    },
    complicity: () => {
        return "9000"
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