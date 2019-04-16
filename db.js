var mongoose = require('mongoose')

mongoose.connect('mongodb://jonsessa:bc4x86@ds161335.mlab.com:61335/social_test', {useNewUrlParser: true}, function() {
	console.log('mongodb connected')
})

// Fixes warning: 'DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.'
mongoose.set('useCreateIndex', true);

// Fixes warning: '(node:43935) DeprecationWarning: collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.'
mongoose.set('useFindAndModify', false);

module.exports = mongoose