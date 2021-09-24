const { graphql, buildSchema } = require('graphql');
const demand = buildSchema(`
    type Query {
        id: Int
        demandStatusId: Int
        sourcePortalId: Int
        createdDate: String
        hashId: String
        contactAsap: Boolean
        ipAddress: String
        utmTerm: String
        utmCampaign: String
        utmContent: String
        usingPersonalData: Boolean
        externalSystemId: String
    }
`)
    //    ^^^^^^^
    // clients: [Client]
    // vehicles: [Vehicle]
const resolver = {
    id: () => {
        return 39
    },
    demandStatusId: () => {
        return 1
    },
    sourcePortalId: () => {
        return 124
    },
    createdDate: () => {
        return ''
    },
    hashId: () => {
        return '3E3254'
    },
    contactAsap: () => {
        return true
    },
    ipAddress: () => {
        return '192.168.0.1'
    },
    utmTerm: () => {
        return null
    },
    utmCampaign: () => {
        return null
    },
    utmContent: () => {
        return null
    },
    usingPersonalData: () => {
        return true
    },
    externalSystemId: () => {
        return '521F'
    }
}
graphql(demand, `{ 
    id,
    demandStatusId,
    createdDate,
    contactAsap,
    utmTerm,
    utmContent,
    externalSystemId
    }`, resolver).then((responce) => {
    console.log(responce)
})