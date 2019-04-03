var db = require('../db')

var user = db.Schema({
	email: 			{ type: String, required: true, unique: true },
	password: 		{ type: String, required: true, select: false },
	firstName: 		{ type: String, required: true },
	lastName: 		{ type: String, required: true },
	streetAddress: 	{ type: String },
	city: 			{ type: String },
	state: 			{ type: String },
	zip: 			{ type: Number },
	phone: 			{ type: String, required: true },
	children: 	   [{ type: db.Schema.ObjectId, ref: 'Child' }],
	created: 		{ type: Date, default: Date.now}
})

module.exports = db.model('User', user)