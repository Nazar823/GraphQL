const { graphql, buildSchema } = require('graphql');
const demand = buildSchema(`
     type Query {
        id: Int
        accidentStatisticTypeId: Int
        partnerOrganizationId: Int
        clientId: Int
        created: String
        statisticName: String
        value: String
        statisticDetail: String
    }
`)
const resolver = {
    id: () => {
        return 39
    },
    accidentStatisticTypeId: () => {
        return 1
    },
    partnerOrganizationId: () => {
        return 124
    },
    clientId: () => {
        return 342
    },
    created: () => {
        return null
    },
    statisticName: () => {
        return 'this my name'
    },
    value: () => {
        return 'my value'
    },
    statisticDetail: () => {
        return null
    }
}
graphql(demand, `{ 
    id,
    clientId,
    accidentStatisticTypeId,
    created,
    statisticName,
    value,
    statisticDetail
    }`, resolver).then((responce) => {
    console.log(responce)
})