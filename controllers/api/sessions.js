var router = require('express').Router()
var User = require('../../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')

router.post('/', function (req, res, next) {
	User.findOne({email: req.body.email})
	.select('password').select('email')
	.exec(function (err, user) {
		if (err) { return next(err) }

		if (!user) { return res.status(401).send('Email address not found in database') }

		bcrypt.compare(req.body.password, user.password, function (err, valid) {
			if (err) { return next(err) }

			if (!valid) { return res.status(401).send('Incorrect password entered') }

			var token = jwt.encode({email: user.email}, config.secret)
			res.send(token)
		})
	})
})

module.exports = router