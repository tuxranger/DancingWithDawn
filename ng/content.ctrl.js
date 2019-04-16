angular.module('app')
.controller('ContentCtrl', function($scope, ContentSvc, $location) {

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

		if(!question) {
			$scope.inputError = true
			$scope.errorMessage = 'Submission must include a question'
		}

		if(!answer) {
			$scope.inputError = true
			$scope.errorMessage = 'Submission must include an answer'
		}

		ContentSvc.addFaq(question, answer)
		.then(function (response) {
			$location.path('/cm-faq')
		})
	}



})