var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.use(require('./auth'))
app.use('/api/posts', require('./controllers/api/posts'))
app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))
app.use('/api/admin', require('./controllers/api/admin'))
app.use('/api/admin-sessions', require('./controllers/api/admin-sessions'))
app.use(require('./controllers/static'))

var server = app.listen(process.env.PORT || 3000, function() {
	console.log('Server listening on %d', server.address().port)
})