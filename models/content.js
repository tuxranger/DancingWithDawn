var db = require('../db')

var content = db.Schema({
	faq: 	[{ type: db.Schema.ObjectId, ref: 'ContentFaq' }]
})

module.exports = db.model('Content', content)