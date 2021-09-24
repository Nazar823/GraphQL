const express = require('express')
const router = express.Router()
const statusErr = {code: 400, description: 'Bad Request'}
const statusOK = {code: 200, description: 'OK'}
const {postRequests} = require("./controller");
const {GraphQLInputObjectType, GraphQLString, GraphQLInt} = require("graphql");

router.post()
module.exports = router