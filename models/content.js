var db = require('../db')

var content = db.Schema({
	name: 		 { type: String, required: true, unique: true },
	location: 	 { type: String, required: true },
	description: { type: String },
	value:       { type: String, required: true }
})

module.exports = db.model('Content', content)