const { graphql, buildSchema } = require('graphql');
const contract = buildSchema(`
    type Query {
        id: Int
        referenceDemandProductTypeId: Int
        partnerOrganizationId: Int
        currencyId: Int
        contractNumber: String
        contractClosedDate: String
        paymentDate: String
        refusedDate: String
        paymentFrequency: Int
        contractPrice: Float
        bindingRepresentativeId: Int
        selfSigned: Boolean
        exportDate: String
        maturityDate: String
    }
`)
//          ^^^^^^
//      contractResources: [ContractResources]
const resolver = {
    id: () => {
        return 16
    },
    referenceDemandProductTypeId: () => {
        return 30
    },
    partnerOrganizationId: () => {
        return 30
    },
    currencyId: () => {
        return 978
    },
    contractNumber: () => {
        return "5720016665"
    },
    contractClosedDate: () => {
        return "2021-07-30T05:40:42"
    },
    paymentDate: () => {
        return null
    },
    refusedDate: () => {
        return 16
    },
    paymentFrequency: () => {
        return 16
    },
    contractPrice: () => {
        return 168.4700
    },
    bindingRepresentativeId: () => {
        return 16
    },
    selfSigned: () => {
        return 16
    },
    exportDate: () => {
        return null
    },
    maturityDate: () => {
        return "0001-01-01T00:00:00.000Z"
    }
}
graphql(contract, `{ 
    id,
    contractNumber,
    contractClosedDate,
    partnerOrganizationId
    }`, resolver).then((responce) => {
    console.log(responce)
})