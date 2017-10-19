const fetch = require('node-fetch')
const util = require('util')
util.promisify(require('xml2js').parseString)
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString
}

fetch('')
.then(response => response.text())
.then(parseXML)

const AuthorType = new GraphQLObjectType({
	name: 'Author'
	description: '...',

	fields: () => ({
		name: {
			type: GraphQLString
		}
	})
})

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		description: '...',
		fields: () => ({
			author: {
				type: AuthorType,
				args: {
				  id: { type: GraphQLInt }
				}
			}
		})
	})
})