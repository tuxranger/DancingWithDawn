var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.use(require('./auth'))
app.use('/api/posts', require('./controllers/api/posts'))
app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))
app.use(require('./controllers/static'))


app.get('/', function (req, res) {
	res.sendfile('layouts/posts.html')
})

app.listen(process.env.PORT || 3000, function() {
	console.log('Server listening on %d', server.address()port)
})