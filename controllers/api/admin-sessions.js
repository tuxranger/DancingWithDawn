var router = require('express').Router()
var Admin = require('../../models/admin')
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')

router.post('/', function (req, res, next) {
	Admin.findOne({username: req.body.username})
	.select('password').select('username')
	.exec(function (err, admin) {
		if (err) { return next(err) }

		if (!admin) { return res.status(401).send('Username not found in database') }

		bcrypt.compare(req.body.password, admin.password, function (err, valid) {
			if (err) { return next(err) }

			if (!valid) { return res.status(401).send('Incorrect password entered') }

			var token = jwt.encode({username: admin.username}, config.secret)
			res.send(token)
		})
	})
})

module.exports = router