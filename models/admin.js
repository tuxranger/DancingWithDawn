var db = require('../db')

var admin = db.Schema({
	username: 	{ type: String, required: true, unique: true },
	password: 	{ type: String, required: true, select: false },
	email: 		{ type: String, required: true, unique: true },
	firstName: 	{ type: String, required: true },
	lastName: 	{ type: String, required: true },
	phone: 		{ type: String, required: true },
	bio:		{ type: String },
	created: 	{ type: Date, default: Date.now}
})

module.exports = db.model('Admin', admin)