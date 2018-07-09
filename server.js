import {Server} from "ws"

const express = require('express')
const graphqlHTTP = require('graphqlHTTP')
const app = express()
const DataLoader = require('dataloader')
const fetch = require('node-fetch')
const util = require('util')
const parseXML = util.promisify(require('xml2js').parseString)

const schema = require('./schema')

const fetchAuthor = id =>
fetch('')
.then(response => response.text())
.then(parseXML)

const fetchBook = id =>
	fetch('')
	.then(response => response.text())
	.then(parseXML)

app.use(/'graphql', graphqlHTTP(req => {
	const authorLoader = DataLoader(keys =>
	Promise.all(ids.map(fetchAuthor)))

	const bookLoader = DataLoader(keys =>
	Promise.all(ids.map(fetchBook)))

	return{
	schema,
	context: {
		authorLoader,
		bookLoader
	}
	graphql: true
	}
}))

app.listen(4000)

const mySubject = new Subject()

const {port} = httpServer.address()

ws: WebSocket
socketIsOpen = 1

ngOnDestroy() {
	this.closeSocket()
}

@Injectable()

