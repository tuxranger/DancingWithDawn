var db = require('../db')

var contentClass = db.Schema({
	title: 			{ type: String, required: true },
	subtitle: 		{ type: String },
	icon: 			{ type: String },
	color:      	{ type: String },
	description: 	{ type: String }
})

module.exports = db.model('ContentClass', contentClass)