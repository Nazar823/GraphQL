const { graphql, buildSchema } = require('graphql');
const vehicle = buildSchema(`
    type Query {
        id: Int
        packageId: Int
        productTypeId: Int
        vehicleId: Int
        referenceDemandProductTypeId: Int
        partnerOrganizationId: Int
        exportDate: String
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
    }
`)
    //    ^^^^^^^
    // contract: [Contract]
const resolver = {
    id: () => {
        return 39
    },
    packageId: () => {
        return 36
    },
    productTypeId: () => {
        return 124
    },
    vehicleId: () => {
        return 345
    },
    referenceDemandProductTypeId: () => {
        return 45
    },
    partnerOrganizationId: () => {
        return 130
    },
    exportDate: () => {
        return null
    },
    validFromDate: () => {
        return null
    },
    isPastInsured: () => {
        return true
    },
    productCode: () => {
        return '65265218969521V'
    },
    cheapestProductCode: () => {
        return '65265218969521V'
    },
    windscreenCoverPrice: () => {
        return 40000
    },
    actOfGodPrice: () => {
        return 52000
    },
    injuryPrice: () => {
        return false
    },
    animalCollisionPrice: () => {
        return true
    },
    luggagePrice: () => {
        return 120
    },
    aboveStandardPrice: () => {
        return 1000
    },
    collisionPrice: () => {
        return 100
    },
    theftPrice: () => {
        return 1240
    },
    vandalismPrice: () => {
        return 2000
    },
    guaranteedValuePrice: () => {
        return 1452
    },
    courtesyCarPrice: () => {
        return 13000
    },
    windscreenCoverLimit: () => {
        return '1200'
    },
    actOfGodLimit: () => {
        return null
    },
    injuryLimit: () => {
        return null
    },
    animalCollisionLimit: () => {
        return null
    },
    luggageLimit: () => {
        return null
    },
    aboveStandardLimit: () => {
        return null
    },
    collisionLimit: () => {
        return null
    },
    theftLimit: () => {
        return null
    },
    vandalismLimit: () => {
        return null
    },
    guaranteedValueLimit: () => {
        return null
    },
    courtesyCarLimit: () => {
        return null
    },
    amountInsured: () => {
        return null
    }
}
graphql(vehicle, `{ 
    id,
    productTypeId,
    aboveStandardPrice,
    productCode,
    cheapestProductCode,
    collisionPrice,
    actOfGodLimit
    }`, resolver).then((responce) => {
    console.log(responce)
})