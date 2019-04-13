var router = require('express').Router()
//var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')
var Admin = require('../../models/admin')
var User = require('../../models/user')
//var Child = require('../../models/child')
var Class = require('../../models/class')

//Returns admin account
// router.get('/', function (req, res, next) {
//     if (!req.headers['x-auth']) {
//         return res.sendStatus(401)
//     }
//
//     var auth = jwt.decode(req.headers['x-auth'], config.secret)
//     Admin.findOne({username: auth.username}, function (err, admin) {
//         if (err) { return next(err) }
//         res.json(admin)
//     })
// })

// Creates new admin account and saves to database
// IMPORTANT: Remove Before Depolyment
router.post('/addClass', function (req, res, next) {
    var class_ = new Class({
        title: req.body.title,
        description: req.body.description,
        time: req.body.time, //possible problem casting time to string
        days: req.body.days,
        //album: req.body.album
    })

    class_.save(function (err) {
        if (err) { return next(err) }
        //console.log('fullName is: ' + fullName_)
        console.log('Success saving: ' + class_)
        res.sendStatus(201)
    })
})

router.put('/updateClass', function (req, res, next) {
    Class.findByIdAndUpdate(req.body.id, req.body, function (err, obj) {
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        } else {
            return res.json(obj);
        }
    })
})

router.put('/deleteClass', function (req, res, next) {
    var classId = req.body._id

    Class.deleteOne({_id :classId}, function (err) {
        if (err) {return res.status(400).send(err);}
        res.sendStatus(201)

    })
})

router.get('/getAllClasses', function (req, res, next) {
	if (!req.headers['x-auth']) {
		return res.sendStatus(401)
	}

	var auth = jwt.decode(req.headers['x-auth'], config.secret)
	Admin.findOne({username: auth.username}, function (err) {
		if (err) { return next(err) }
	})

	Class.find().then(function (class_) {
		res.json(class_)
	})
})

module.exports = router