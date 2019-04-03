var db = require('../db')

var admin = db.Schema({
	username: 	{ type: String, required: true, unique: true },
	password: 	{ type: String, required: true, select: false }
})

module.exports = db.model('Admin', admin)