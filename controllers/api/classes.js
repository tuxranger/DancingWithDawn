var router = require('express').Router()
//var bcrypt = require('bcrypt')
var jwt = require('jwt-simple')
var config = require('../../config')
var Admin = require('../../models/admin')
var User = require('../../models/user')
var Child = require('../../models/child')
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
        album: req.body.album
    })

    class_.save(function (err) {
        if (err) { return next(err) }
        //console.log('fullName is: ' + fullName_)
        console.log('Success saving: ' + class_)
        res.sendStatus(201)
    })
})

router.put('/updateClass', function (req, res, next) {
    console.log(req.body)
    Class.findByIdAndUpdate(req.body._id, req.body, function (err, class_) {
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        } else {
            console.log(class_);
            return res.json(class_);
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
	    //console.log(class_)
		res.json(class_)
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

	Child.find().then(function (children) {
		//console.log(children)
	    res.json(children)
	})
})



// router.get('/getAllStudents', function (req, res, next) {
//     if (!req.headers['x-auth']) {
//         return res.sendStatus(401)
//     }
//
//     var auth = jwt.decode(req.headers['x-auth'], config.secret)
//     Admin.findOne({username: auth.username}, function (err) {
//         if (err) { return next(err) }
//     })
//
//     Class.findOne({_id: req.body._id}).then(function (class_) {
//         console.log(class_.children)
//         res.json(class_.children)
//     })
// })

router.put('/addToClass', function (req, res, next) {

    console.log("this is the child for req.body.children    " + req.body.children)
    var howdy = req.body.children;
    console.log(howdy);


    if (!req.headers['x-auth']) {
        return res.sendStatus(401)
    }

    var auth = jwt.decode(req.headers['x-auth'], config.secret)
    Admin.findOne({username: auth.username}, function (err) {
        if (err) { return next(err) }
    })


    // Class.findByIdAndUpdate(req.body._id,{$addToSet: {children: req.body.children}}, function (err, class_) {
    Class.findByIdAndUpdate(req.body._id,{$set: {children: req.body.children}}, function (err, class_) {
        if (err) {
            console.log("this is the class.findbyidandupdate error       " + err)
            return res.status(400).send(err);
        } else {
            console.log(class_)
            return res.json(class_)
        }
    })
})

router.put('/removeAll', function (req, res, next) {
    console.log("before removal   " + req.body)

    Class.findByIdAndUpdate(req.body._id,{$set: {children: []}}, function (err, class_) {
        if (err) {
            console.log(err)
            return res.status(400).send(err);
        } else {
            console.log("after removal   " + class_)
            return res.json(class_)
        }
    })
})

module.exports = router
