var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dwd_db:bc4x86@cluster0-yone8.mongodb.net/test?retryWrites=true', {useNewUrlParser: true}, function() {
	console.log('mongodb connected')
})

// Fixes warning: 'DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.'
mongoose.set('useCreateIndex', true);

// Fixes warning: '(node:43935) DeprecationWarning: collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.'
mongoose.set('useFindAndModify', false);

module.exports = mongoose


// mongodb+srv://dwd_db:bc4x86@cluster0-yone8.mongodb.net/test?retryWrites=true
// User: dwd_db
// Pass: bc4x86