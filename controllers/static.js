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

router.get('/reset-password', function (req, res) {
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

router.get('/admin-classes', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/admin-add-class', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/admin-update-class', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/admin-clients', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/admin-forms', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/admin-login', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/admin-payments', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/admin-photos', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/update-admin-account', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/update-admin-bio', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/update-admin-password', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/cm', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/cm-element-add', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/cm-element-edit', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/cm-homepage', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/cm-classes', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/cm-class-add', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/cm-class-edit', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/cm-bucket-add', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/cm-bucket-edit', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/cm-about', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/cm-faq', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/cm-faq-add', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.get('/cm-faq-edit', function (req, res) {
	res.sendFile('layouts/admin.html', {root: './'})
})

router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../templates'))
router.use(express.static(__dirname + '/../img'))
router.use(express.static(__dirname + '/../pdf'))

module.exports = router