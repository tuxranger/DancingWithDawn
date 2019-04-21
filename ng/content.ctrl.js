angular.module('app')
.controller('ContentCtrl', function($scope, ContentSvc, $location) {

	ContentSvc.getAllElements().then(function(elems) {
		$scope.content = elems.data

		angular.forEach(elems.data, function(value, index) {
			$scope[value.name] = value.value
		})
	})

	ContentSvc.getAllFaqs().then(function(res) {
		$scope.faq = res.data
	})

	$scope.setFaqToUpdate = function(faq) {
		$scope.currentAdmin.faqToUpdate = faq
	}

	$scope.updateFaq = function(faq) {

		ContentSvc.updateFaq(faq)
		.then(function (response) {
			$location.path('/cm-faq')
		})
	}

	$scope.addFaq = function (question, answer) {
		$scope.inputError = false
		$scope.errorMessage = ''

		if(!question || !answer) {
			$scope.inputError = true
			$scope.errorMessage = 'All text fields must contain content'
			return
		}

		ContentSvc.addFaq(question, answer)
		.then(function (response) {
			$location.path('/cm-faq')
		})
	}

	$scope.deleteFaq = function(faq) {
		ContentSvc.deleteFaq(faq)
		.then(function (response) {
			$location.path('/cm-faq')
		})
	}

	$scope.addElement = function (name, location, desc, value) {
		$scope.inputError = false
		$scope.errorMessage = ''

		ContentSvc.addElement(name, location, desc, value)
		.then(function (response) {
			$location.path('/cm')
		})
	}
})