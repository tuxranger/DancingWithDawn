var db = require('../db')

var class_ = db.Schema({
    title:          { type: String, required: true },
    description:    { type: String, required: true },
    time:           { type: String, required: true },
    days:           { type: String, required: true },
    children:      [{ type: db.Schema.ObjectId, ref: 'Child' }],
    album:          { type: String },
    created:        { type: Date, default: Date.now }
})

module.exports = db.model('Class', class_)