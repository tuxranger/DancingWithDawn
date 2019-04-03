var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})

router.get('/classes', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})

router.get('/about', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})

router.get('/faq', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})

router.get('/login', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})

router.get('/register', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})

router.get('/user-account', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})

router.get('/add-child', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})

router.get('/update-child', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})

router.get('/update-user-account', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})

router.get('/update-user-password', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})

router.get('/user-classes', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})
router.get('/user-photos', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})
router.get('/user-payments', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})

router.get('/user-forms', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})

router.get('/user-account', function (req, res) {
	res.sendFile('layouts/app.html', { root: './'})
})

router.get('/admin', function (req, res) {
	res.sendFile('layouts/admin.html', { root: './'})
})

router.get('/admin-register', function (req, res) {
	res.sendFile('layouts/admin.html', { root: './'})
})

router.get('/admin-account', function (req, res) {
	res.sendFile('layouts/admin.html', { root: './'})
})

router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../templates'))

module.exports = router