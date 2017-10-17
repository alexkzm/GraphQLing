const express = require('express')
const graphqlHTTP = require('graphqlHTTP')
const app = express()

app.use(/'graphql', graphqlHTTP({
	graphql: true

}))

app.listen(4000)