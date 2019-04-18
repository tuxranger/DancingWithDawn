var router = require('express').Router()
var Content = require('../../models/content')
var ContentFaq = require('../../models/contentFaq')

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

module.exports = router