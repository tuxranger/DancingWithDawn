var router = require('express').Router()
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')
var Admin = require('../../models/admin')
var User = require('../../models/user')
var Child = require('../../models/child')

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
		username: req.body.username,
		email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		phone: req.body.phone
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

router.put('/update', function (req, res, next) {
	Admin.findByIdAndUpdate(req.body.id, req.body, function (err, obj) {
		if (err) {
			console.log(err);
			return res.status(400).send(err);
		} else {
			return res.json(obj);
		}
	})
})

router.put('/updatePassword', function (req, res, next) {

	Admin.findOne( {_id: req.body.id}, function (err, admin) {
		if (err) { return next(err) }

		bcrypt.hash(req.body.password, 10, function (err, hash) {
			if (err) { return next(err) }

			admin.password = hash

			admin.save(function (err) {
				if (err) { return next(err) }
				res.sendStatus(201)
			})
		})
	})

})

router.put('/updateBio', function (req, res, next) {
	Admin.findByIdAndUpdate(req.body.id, req.body, function (err, obj) {
		if(err) {
			console.log(err);
			return res.status(400).send(err);
		} else {
			return res.json(obj)
		}
	})
})

router.get('/getAllUsers', function (req, res, next) {
	if (!req.headers['x-auth']) {
		return res.sendStatus(401)
	}

	var auth = jwt.decode(req.headers['x-auth'], config.secret)
	Admin.findOne({username: auth.username}, function (err) {
		if (err) { return next(err) }
	})

	User.find().then(function (users) {
		res.json(users)
	})
})

router.get('/getAllChildren', function (req, res, next) {
	if (!req.headers['x-auth']) {
		return res.sendStatus(401)
	}

	var auth = jwt.decode(req.headers['x-auth'], config.secret)
	Admin.findOne({username: auth.username}, function (err) {
		if (err) { return next(err) }
	})

	Child.find().then(function (users) {
		res.json(users)
	})
})

module.exports = router