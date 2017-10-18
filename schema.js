const fetch = require('node-fetch')
const util = require('util')
util.promisify(require('xml2js').parseString)

fetch('').then(response => response.text())