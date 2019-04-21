var router = require('express').Router()
var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var User = require('../../models/user')
var Child = require('../../models/child')
var config = require('../../config')
var nodemailer = require('nodemailer');

// Returns user object
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

// Creates new user account and saves to database
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
		childrenName: []
	})

	bcrypt.hash(req.body.password, 10, function (err, hash) {
		if (err) { return next(err) }
		
		user.password = hash
		
		user.save(function (err) {
			if (err) { return next(err) }
			res.sendStatus(201)
		})
	})
})

// Used to update user account information
router.put('/update', function (req, res, next) {
	
	User.findByIdAndUpdate(req.body.id, req.body, function (err, obj) {
    	if (err) {
      		console.log(err);
      		return res.status(400).send(err);
    	} else {
      		return res.json(obj);
    	}
    })
})

// Updates password by hashing new password and storing it in database
router.put('/updatePassword', function (req, res, next) {

	User.findOne( {_id: req.body.id}, function (err, user) {
		if (err) { return next(err) }
		
		bcrypt.hash(req.body.password, 10, function (err, hash) {
			if (err) { return next(err) }
		
			user.password = hash
		
			user.save(function (err) {
				if (err) { return next(err) }
				res.sendStatus(201)
			})
		})
	})

})

router.put('/resetPassword', function (req, res, next) {
	User.findOne( {email: req.body.email}, function (err, user) {
		console.log(err)
		if (err) {
			console.log(err);
			return next(err);
		}
		if (user) {
			bcrypt.hash(req.body.newPassword, 10, function (err, hash) {
				if (err) { return next(err) }
				user.password = hash;
				user.save(function (err) {
					if (err) { return next(err) }
					res.sendStatus(201)
				})
			})
		} if (!user) {
			console.log("Email not in DB")
			return res.status(401).send('Invalid email address')
		}


	})
})


// Creates new chidlren and saves to database
router.post('/addChild', function (req, res, next) {

	var adultId = req.body.adultId

	var child = new Child({
		adult: req.body.adultId,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		fullName: req.body.firstName + ' ' + req.body.lastName,
		dob: req.body.dob,
		notes: req.body.notes,
	})

	child.save(function (err, newChild) {
		if (err) { return next(err) }
		var childId = newChild._id
		var fullName_ = newChild.firstName + ' ' + newChild.lastName
		//console.log('fullName is: ' + fullName_)
		User.findByIdAndUpdate(adultId, {$push: {children: childId, childrenName: fullName_}}, function (err, obj) {
    		if (err) {
    	  		console.log(err);
    	  		return res.status(400).send(err);
    		} else {
    	  		return res.json(obj);
    		}
    	})
	})

})

// Used to update user account information
router.put('/updateChild', function (req, res, next) {

	var oldFullName = req.body.fullName
	var newFullName = req.body.firstName + ' ' + req.body.lastName

	var query  = Child.where({ _id: req.body._id })

	Child.findByIdAndUpdate(req.body._id, req.body, function (err, child) {
    	if (err) {
      		console.log(err);
      		return res.status(400).send(err);
    	} else {
    		//console.log(child)
			query.findOneAndUpdate({$set:{fullName: newFullName}},function (err, info) {
				if(err) res.status(400).send(err)
				info.fullName = newFullName
			})
			User.update({_id: req.body.adult, childrenName: oldFullName},
				{$set: {"childrenName.$" : newFullName},}, function (err, results) {
					if(err) res.status(400).send(err)
					//console.log(results)
				})
			User.findOne({_id: req.body.adult}, function (err, user) {
				//console.log(user)
			})
      		return res.json(child);
    	}
    })
})

// Used to update user account information
router.put('/deleteChild', function (req, res, next) {
	var parentId = req.body.adult
	var childId = req.body._id
	var fullName = req.body.firstName + ' ' + req.body.lastName


	// Child.findOne({_id: childId}, function (err, user) {
	// 	console.log(user)
	// })


	//console.log(fullName)


	//
	// User.findOne({_id: parentId}, function (err, user) {
	// 	console.log(user)
	// })

	Child.deleteOne({_id :childId}, function (err) {
		if (err) {
      		return res.status(400).send(err);
    	} else {
			User.update({_id: parentId},
				{$pull: {childrenName: fullName},}, function (err, results) {
					if(err) res.status(400).send(err)
					//console.log(results)
				})
      		User.findByIdAndUpdate(parentId, {$pull: {children: childId}}, function (err, user) {
    			if (err) {
    	  			console.log(err);
    	  			return res.status(400).send(err);
    			} else {
    	  			return res.json(user);
    			}
    		})
    	}
	})
})

// Returns all children docs attached to a parent
router.get('/getAllChildren', function (req, res, next) {
	if (!req.headers['x-auth']) {
		return res.sendStatus(401)
	}

	var auth = jwt.decode(req.headers['x-auth'], config.secret)
	User.findOne({email: auth.email}, function (err, user) {
		if (err) { return next(err) }

		var childrenIds = user.children

		Child.find({'_id': { $in: childrenIds}}, function(err, children){
			if (err) { return next(err) }
     		res.json(children)
		});
		
	})
})
//send an email to the specified email address with new password
router.post('/sendEmail', function (req, res, next) {
	console.log(req.body.email)
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'DwDresetpass@gmail.com',
			pass: 'testpass!'
		}
	});

	var mailOptions = {
		from: 'DwDresetpass@gmail.com',
		to: req.body.email,
		subject: 'Password has been reset',
		text: 'Your password has been reset. Your new password is ' + req.body.newPassword + '      ' +
			'This is an automated message, please do not respond.'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
})

module.exports = router


