var router = require('express').Router()
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')
var Admin = require('../../models/admin')

// Returns admin account
router.get('/', function (req, res, next) {
	if (!req.headers['x-auth']) {
		return res.sendStatus(401)
	}

	var auth = jwt.decode(req.headers['x-auth'], config.secret)
	Admin.findOne({username: auth.username}, function (err, admin) {
		if (err) { return next(err) }
		res.json(admin)
	})
})

// Creates new admin account and saves to database
// IMPORTANT: Remove Before Depolyment
router.post('/', function (req, res, next) {
	var admin = new Admin({
		username: req.body.username
	})

	bcrypt.hash(req.body.password, 10, function (err, hash) {
		if (err) { return next(err) }
		
		admin.password = hash
		
		admin.save(function (err) {
			if (err) { return next(err) }
			res.sendStatus(201)
		})
	})
})

module.exports = router