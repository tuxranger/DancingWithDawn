var jwt = require('jwt-simple')
var config = require('./config')

module.exports = function (req, res, next) {
	if (req.headers['x-auth']) {
		req.adminAuth = jwt.decode(req.headers['x-auth'], config.secret)
	}
	next()
}