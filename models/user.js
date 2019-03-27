var db = require('../db')

var user = db.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true, select: false },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	streetAddress: { type: String, required: true },
	city: { type: String},
	state: { type: String},
	zip: { type: Number},
	phone: { type: String, required: true },
	created: {type: Date}
})

module.exports = db.model('User', user)