var router = require('express').Router()
var Content = require('../../models/content')
var ContentBucket = require('../../models/contentBucket')
var ContentClass = require('../../models/contentClass')
var ContentFaq = require('../../models/contentFaq')


// Returns all text elements for content management
router.get('/getAllElements', function (req, res, next) {
	Content.find().then(function (elements) {
		res.json(elements)
	})
})

router.get('/getAllHomepageElements', function (req, res, next) {
	Content.find({location: 'homepage'}).then(function (elements) {
		res.json(elements)
	})
})

router.get('/getAllClassesElements', function (req, res, next) {
	Content.find({location: 'classes'}).then(function (elements) {
		res.json(elements)
	})
})

// Returns all children docs attached to a parent
router.get('/getAllClasses', function (req, res, next) {
	ContentClass.find().then(function (classes) {
		res.json(classes)
	})
})

// Returns all children docs attached to a parent
router.get('/getAllBuckets', function (req, res, next) {
	ContentBucket.find().then(function (buckets) {
		res.json(buckets)
	})
})

router.get('/getAllAboutElements', function (req, res, next) {
	Content.find({location: 'about'}).then(function (elements) {
		res.json(elements)
	})
})

// Returns all text elements for content management
router.get('/getAllFaqElements', function (req, res, next) {
	Content.find({location: 'faq'}).then(function (elements) {
		res.json(elements)
	})
})

// Creates new text element for content management
router.post('/addElement', function (req, res, next) {
	var element = new Content({
		name: req.body.name,
		location: req.body.location,
		description: req.body.description,
		value: req.body.value
	})

	element.save(function (err, newElement) {
		if (err) { return next(err) }
		else { return res.json(newElement) }
	})
})

// Used to update user account information
router.put('/updateElement', function (req, res, next) {
	Content.findOneAndUpdate( { "_id" : req.body._id}, req.body, function (err, element) {
    	if (err) {
      		console.log(err);
      		return res.status(400).send(err);
    	} else {
      		return res.json(element);
    	}
    })
})

// Creates new FAQ entry and saves to database
router.post('/addFaq', function (req, res, next) {

	var faq = new ContentFaq({
		question: req.body.question,
		answer: req.body.answer
	})

	faq.save(function (err, newFaq) {
		if (err) { return next(err) }
		else { return res.json(newFaq) }
	})
})

// Returns all children docs attached to a parent
router.get('/getAllFaqs', function (req, res, next) {
	ContentFaq.find().then(function (faqs) {
		res.json(faqs)
	})
})

// Used to update user account information
router.put('/updateFaq', function (req, res, next) {
	ContentFaq.findOneAndUpdate( { "_id" : req.body._id}, req.body, function (err, faq) {
    	if (err) {
      		console.log(err);
      		return res.status(400).send(err);
    	} else {
      		return res.json(faq);
    	}
    })
})

router.put('/deleteFaq', function (req, res, next) {
	ContentFaq.deleteOne({_id : req.body._id}, function (err, faq) {
		if (err) {
      		return res.status(400).send(err);
    	} else {
      		return res.json(faq)
    	}
	})
})

// Creates new text element for content management
router.post('/addClass', function (req, res, next) {
	var element = new ContentClass({
		title: req.body.title,
		subtitle: req.body.subtitle,
		icon: req.body.icon,
		color: req.body.color,
		description: req.body.description
	})

	element.save(function (err, newElement) {
		if (err) { return next(err) }
		else { return res.json(newElement) }
	})
})

router.put('/updateClass', function (req, res, next) {
	ContentClass.findOneAndUpdate( { "_id" : req.body._id}, req.body, function (err, element) {
    	if (err) {
      		console.log(err);
      		return res.status(400).send(err);
    	} else {
      		return res.json(element);
    	}
    })
})

router.put('/deleteClass', function (req, res, next) {
	ContentClass.deleteOne({_id : req.body._id}, function (err, faq) {
		if (err) {
      		return res.status(400).send(err);
    	} else {
      		return res.json(faq)
    	}
	})
})

router.post('/addBucket', function (req, res, next) {
	var element = new ContentBucket({
		title: req.body.title,
		icon: req.body.icon,
		color: req.body.color,
		description: req.body.description
	})

	element.save(function (err, newElement) {
		if (err) { return next(err) }
		else { return res.json(newElement) }
	})
})

router.put('/updateBucket', function (req, res, next) {
	ContentBucket.findOneAndUpdate( { "_id" : req.body._id}, req.body, function (err, element) {
    	if (err) {
      		console.log(err);
      		return res.status(400).send(err);
    	} else {
      		return res.json(element);
    	}
    })
})

module.exports = router