const { graphql, buildSchema } = require('graphql');
const vehicle = buildSchema(`
    type Query {
        id: Int
        vehicleTypeId: Int
        vehiclePurposeOfUseId: Int
        vehicleProductionTypeId: Int
        color: String
        weight: Int
        yearOfProduction: Int
        vIN: String
        registrationNumber: String
        bigTechnicalOrderNumber: String
        registrationDate: String
        drivenMilesPerYear: Int
        tachometerState: Int
        isBeforeRegistration: Boolean
        isNewCar: Boolean
        rebuildVehicleEnergySourceId: Int
        vehicleNonstandardProduction: String
    }
`)
    //    ^^^^^^^
    // vehicleEquipment: [VehicleEquipment]
    // vehiclePrices: [VehiclePrices]
    // productThirdPartyRisks: ProductThirdPartyRisks
    // productAllRisk: ProductAllRisk
const resolver = {
    id: () => {
        return 39
    },
    vehicleTypeId: () => {
        return 1
    },
    vehiclePurposeOfUseId: () => {
        return 124
    },
    vehicleProductionTypeId: () => {
        return ''
    },
    color: () => {
        return 'red'
    },
    weight: () => {
        return 1300
    },
    yearOfProduction: () => {
        return '2020'
    },
    vIN: () => {
        return '541FGB51DRV'
    },
    registrationNumber: () => {
        return '541FGB51DRV'
    },
    bigTechnicalOrderNumber: () => {
        return '65265218969521V'
    },
    registrationDate: () => {
        return null
    },
    drivenMilesPerYear: () => {
        return 40000
    },
    tachometerState: () => {
        return 52000
    },
    isBeforeRegistration: () => {
        return false
    },
    isNewCar: () => {
        return true
    },
    rebuildVehicleEnergySourceId: () => {
        return 120
    },
    vehicleNonstandardProduction: () => {
        return null
    }
}
graphql(vehicle, `{ 
    id,
    vehicleTypeId,
    color,
    vIN,
    registrationNumber,
    isNewCar,
    registrationDate
    }`, resolver).then((responce) => {
    console.log(responce)
})