const { graphql, buildSchema } = require('graphql');
const contractResources = buildSchema(`
    type Query {
        id: Int
        contractId: Int
        resourceTypeId: Int
        resourceUrl: String
    }
`)
const resolver = {
    id: () => {
        return 40
    },
    contractId: () => {
        return 16
    },
    resourceTypeId: () => {
        return 3
    },
    resourceUrl: () => {
        return '/havarijne-poistenie-porovnanie/predajca/zmluva_createPDF.php?id=2648&chid=8W7tdOBMHQFI1yQW9LOwmRcYXxJvDPx'
    }
}
graphql(contractResources, `{ 
    id,
    contractId,
    resourceTypeId,
    resourceUrl
    }`, resolver).then((responce) => {
    console.log(responce)
})