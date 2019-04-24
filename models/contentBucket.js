var db = require('../db')

var contentBucket = db.Schema({
	title: 			{ type: String, required: true },
	icon: 			{ type: String },
	color:      	{ type: String },
	description: 	{ type: String }
})

module.exports = db.model('ContentBucket', contentBucket)