const { graphql, buildSchema } = require('graphql');
const address = buildSchema(`
    type Query {
        id: Int
        addressTypeId: Int
        personId: Int
        addressLine1: String
        addressLine2: String
        addressLine3: String
        city: String
        state: String
        postalCode: String
        countryId: String
        phoneCell: String
        phoneOffice: String
        phoneOther: String
    }
`)
const resolver = {
    id: () => {
        return 39
    },
    addressTypeId: () => {
        return 1
    },
    personId: () => {
        return 1
    },
    addressLine1: () => {
        return 'пер. Сушкова'
    },
    addressLine2: () => {
        return 'дом 25'
    },
    addressLine3: () => {
        return ""
    },
    city: () => {
        return 'Шахты'
    },
    _state: () => {
        return 'Шахты'
    },
    postalCode: () => {
        return '524800'
    },
    countryId: () => {
        return 'RU'
    },
    phoneCell: () => {
        return '8(548)514-54-92'
    },
    phoneOffice: () => {
        return '8(548)514-54-92'
    },
    phoneOther: () => {
        return '8(548)514-54-92'
    },
}
graphql(address, `{ 
    id,
    addressTypeId,
    addressLine1,
    addressLine2,
    addressLine3,
    city,
    phoneCell
    }`, resolver).then((responce) => {
    console.log(responce)
})