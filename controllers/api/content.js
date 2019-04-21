var router = require('express').Router()
var Content = require('../../models/content')
var ContentFaq = require('../../models/contentFaq')


// Returns all text elements for content management
router.get('/getAllElements', function (req, res, next) {
	Content.find().then(function (elements) {
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

module.exports = router