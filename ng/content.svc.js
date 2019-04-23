angular.module('app')
.service('ContentSvc', function ($http) {
	var svc = this

	svc.getAllElements = function () {
		return $http.get('/api/content/getAllElements')
	}

	svc.getAllClasses = function () {
		return $http.get('/api/content/getAllClasses')
	}

	svc.getAllFaqs = function () {
		return $http.get('/api/content/getAllFaqs')
	}

})