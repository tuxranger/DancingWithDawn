var db = require('../db')

var child = db.Schema({
	adult:      { type: db.Schema.ObjectId }, 
	class:     [{ type: db.Schema.ObjectId }], 
	firstName:  { type: String, required: true },
	lastName:   { type: String, required: true },
	dob:        { type: Date },
	notes:      { type: String },
	created:    { type: Date, default: Date.now }
})

module.exports = db.model('Child', child)