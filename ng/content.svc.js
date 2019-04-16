angular.module('app')
.service('ContentSvc', function ($http) {
	var svc = this

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

})