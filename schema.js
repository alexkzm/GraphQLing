const fetch = require('node-fetch')
const util = require('util')
util.promisify(require('xml2js').parseString)
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList
}

fetch('')
.then(response => response.text())
.then(parseXML)

const BookType = new GraphQLObjectType({
	name: 'Book',
	description: '...',
	fields: () => ({
		title: {
			type: GraphQLString,
		},
		isbn: {
			type: GraphQLString
		}
	})
})

const AuthorType = new GraphQLObjectType({
	name: 'Author'
	description: '...',

	fields: () => ({
		name: {
			type: GraphQLString
			resolve: xml => 
				xml.GoodreadsResponse.author[0].name[0]
		},
		books: {
			type: GraphQLList(BookType)
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
				},
				resolve: (root, args) => fetch()
			}
		})
	})
})