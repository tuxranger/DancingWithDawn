var db = require('../db')

var contentFaq = db.Schema({
	question: String, 
	answer: String
})

module.exports = db.model('ContentFaq', contentFaq)