angular.module('app')
.service('ContentSvc', function ($http) {
	var svc = this

	svc.getAllElements = function () {
		return $http.get('/api/content/getAllElements')
	}

	svc.addElement = function (name, location, desc, value) {
		return $http.post('/api/content/addElement', {
			name: name,
			location: location,
			description: desc,
			value: value
		})
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

})