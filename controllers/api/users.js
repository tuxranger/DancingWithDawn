var router = require('express').Router()
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var User = require('../../models/user')
var config = require('../../config')

router.get('/', function (req, res, next) {
	if (!req.headers['x-auth']) {
		return res.sendStatus(401)
	}

	var auth = jwt.decode(req.headers['x-auth'], config.secret)
	User.findOne({email: auth.email}, function (err, user) {
		if (err) { return next(err) }
		res.json(user)
	})
})

router.post('/', function (req, res, next) {
	var user = new User({
		email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		streetAddress: req.body.streetAddress,
		city: req.body.city,
		state: req.body.state,
		zip: req.body.zip,
		phone: req.body.phone,
	})

	var currentTime = new Date;
	user.created = currentTime;

	bcrypt.hash(req.body.password, 10, function (err, hash) {
		if (err) { return next(err) }
		
		user.password = hash
		
		user.save(function (err) {
			if (err) { return next(err) }
			res.sendStatus(201)
		})
	})
})

router.put('/update', function (req, res, next) {
	
	User.findByIdAndUpdate(req.body.id, req.body, function (err, obj) {
    	if (err) {
      		console.log(err);
      		return res.status(400).send(err);
    	} else {
    		console.log("Updated?")
      		return res.json(obj);
    	}
    })
})

module.exports = router