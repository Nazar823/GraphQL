const { graphql, buildSchema } = require('graphql');
const person = buildSchema(`
    type Query {
        id: Int
        firstName: String
        middleName: String
        lastName: String
        personSuffixId: String
        dateOfBirth: String
        email: String
        passportNumber: String
        idCardNumber: Int
        identificationNumber: String
        companyNumber: String
        vATNumber: String
        clientRoleId: Int
    }
`)
    //    ^^^^^^^
    // accidentStatistics: [AccidentStatistic]
    // addresses: [Address]
const resolver = {
    id: () => {
        return 39
    },
    firstName: () => {
        return 'FName'
    },
    middleName: () => {
        return 'MName'
    },
    lastName: () => {
        return 'LName'
    },
    personSuffixId: () => {
        return '3E3254'
    },
    dateOfBirth: () => {
        return '11.11.1999'
    },
    email: () => {
        return 'mymail.adress@mail.ru'
    },
    passportNumber: () => {
        return 'JW76 2411572'
    },
    idCardNumber: () => {
        return 21575613517863
    },
    identificationNumber: () => {
        return 'FDV43421235'
    },
    companyNumber: () => {
        return 'KF885476G'
    },
    vATNumber: () => {
        return '521F234'
    },
    clientRoleId: () => {
        return 1
    }
}
graphql(person, `{ 
    id,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    email,
    vATNumber
    }`, resolver).then((responce) => {
    console.log(responce)
})