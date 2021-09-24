const { graphql, buildSchema } = require('graphql');
const address = buildSchema(`
    type Query {
        organizations: String
    }
`)
//        ^^^^^^^^
//        persons: [Person]
const resolver = {
    organizations: () => {
        return 39
    }
}
graphql(address, `{ 
    organizations
    }`, resolver).then((responce) => {
    console.log(responce)
})