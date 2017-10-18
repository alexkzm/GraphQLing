const express = require('express')
const graphqlHTTP = require('graphqlHTTP')
const app = express()

const schema = require('./schema')

app.use(/'graphql', graphqlHTTP({
	schema,
	graphql: true

}))

app.listen(4000)