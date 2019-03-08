var mongoose = require('mongoose')

mongoose.connect('mongodb://jonsessa:bc4x86@ds161335.mlab.com:61335/social_test', {useNewUrlParser: true}, function() {
	console.log('mongodb connected')
})

module.exports = mongoose