angular.module('app')
.service('AdminContentSvc', function ($http) {
	var svc = this

	svc.getAllElements = function () {
		return $http.get('/api/content/getAllElements')
	}

	svc.getAllHomepageElements = function () {
		return $http.get('/api/content/getAllHomepageElements')
	}

	svc.getAllBuckets = function () {
		return $http.get('/api/content/getAllBuckets')
	}

	svc.getAllClassesElements = function () {
		return $http.get('/api/content/getAllClassesElements')
	}

	svc.getAllClasses = function () {
		return $http.get('/api/content/getAllClasses')
	}

	svc.getAllAboutElements = function () {
		return $http.get('/api/content/getAllAboutElements')
	}

	svc.getAllFaqElements = function () {
		return $http.get('/api/content/getAllFaqElements')
	}

	svc.addElement = function (name, location, desc, value) {
		return $http.post('/api/content/addElement', {
			name: name,
			location: location,
			description: desc,
			value: value
		})
	}

	svc.updateElement = function (element) {
		return $http.put('/api/content/updateElement', element)
	}

	svc.getAllFaqs = function () {
		return $http.get('/api/content/getAllFaqs')
	}

	svc.addFaq = function (question, answer) {
		return $http.post('/api/content/addFaq', {
			question: question,
			answer: answer
		})
	}

	svc.updateFaq = function (faq) {
		return $http.put('/api/content/updateFaq', faq)
	}

	svc.deleteFaq = function (faq) {
		return $http.put('/api/content/deleteFaq', faq)
	}

	svc.addClass = function (title, subtitle, color, icon, desc) {
		return $http.post('/api/content/addClass', {
			title: title,
			subtitle: subtitle,
			icon: icon,
			color: color,
			description: desc
		})
	}

	svc.updateClass = function (element) {
		return $http.put('/api/content/updateClass', element)
	}

	svc.deleteClass = function (element) {
		return $http.put('/api/content/deleteClass', element)
	}

	svc.addBucket = function (title, color, icon, desc) {
		return $http.post('/api/content/addBucket', {
			title: title,
			icon: icon,
			color: color,
			description: desc
		})
	}

	svc.updateBucket = function (element) {
		return $http.put('/api/content/updateBucket', element)
	}
})