const fetch = require('node-fetch')
const util = require('util')
const DataLoader = require('dataloader')
const parseXML = util.promisify(require('xml2js').parseString)
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList
}

const BookType = new GraphQLObjectType({
	name: 'Book',
	description: '...',
	fields: () => ({
		title: {
			type: GraphQLString,
			args: {
				lang: {type: GraphQLString}
			},
			resolve: (xml, args) => {
				const title = xml.book[0].title[0]
				return args.lang ? translate(args.lang, title) : title
			}

		},
		isbn: {
			type: GraphQLString,
			resolve: xml => xml.book[0].isbn[0]
		}
		authors: {
			type: GraphQLList(AuthorType),
			resolve: (xml, args, context) => {
				const authorElements = xml.book[0].authors[0].author
				const ids = authorElements.map(elem => elem.id[0])
				return Promise.all(ids.map(id =>
					fetch(${id})
					.then(response => respinse.text())
					.then(parseXML)))
			}
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
			type: GraphQLList(BookType),
			resolve: xml =>
				const ids = xml.GoodreadsResponse.author[0].books[0].book.map(elm => elm.id[0]._)
				return Promise.all(ids.map(id =>
					fetch ('')
					.then(response => response.text()
					.then(parseXML)
				))
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
				.then(response => response.text())
				.then(parseXML)
			}
		})
	})
})