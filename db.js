var mongoose = require('mongoose')

mongoose.connect('mongodb://dwd_db:bc4x86@ds037907.mlab.com:37907/dancewithdawn', {useNewUrlParser: true}, function() {
	console.log('mongodb connected')
})

// Fixes warning: 'DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.'
mongoose.set('useCreateIndex', true);

// Fixes warning: '(node:43935) DeprecationWarning: collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.'
mongoose.set('useFindAndModify', false);

module.exports = mongoose