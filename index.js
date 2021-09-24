var { graphql, buildSchema } = require('graphql');
const Me = buildSchema(`
    type Query {
        name: String
        age: Int
    }
`)
const resolver = {
    name: () => {
        return 'Nazar'
    },
    age: () => {
        return 22
    }
}
graphql(Me, '{ name, age }', resolver).then((responce) => {
    console.log(responce)
})