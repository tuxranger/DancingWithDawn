angular.module('app')
.controller('AdminContentCtrl', function($scope, AdminContentSvc, $location) {


	AdminContentSvc.getAllHomepageElements().then(function(elems) {
		$scope.homepage_content = elems.data
	})

	AdminContentSvc.getAllClassesElements().then(function(elems) {
		$scope.classes_content = elems.data
	})

	AdminContentSvc.getAllClasses().then(function(res) {
		$scope.classes = res.data
	})

	AdminContentSvc.getAllAboutElements().then(function(elems) {
		$scope.about_content = elems.data
	})

	AdminContentSvc.getAllFaqElements().then(function(elems) {
		$scope.faq_content = elems.data
	})

	AdminContentSvc.getAllFaqs().then(function(res) {
		$scope.faq = res.data
	})

	$scope.setFaqToUpdate = function(faq) {
		$scope.currentAdmin.faqToUpdate = faq
	}

	$scope.updateFaq = function(faq) {

		AdminContentSvc.updateFaq(faq)
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

		AdminContentSvc.addFaq(question, answer)
		.then(function (response) {
			$location.path('/cm-faq')
		})
	}

	$scope.deleteFaq = function(faq) {
		AdminContentSvc.deleteFaq(faq)
		.then(function (response) {
			$location.path('/cm-faq')
		})
	}

	$scope.addElement = function (name, location, desc, value) {
		$scope.inputError = false
		$scope.errorMessage = ''

		AdminContentSvc.addElement(name, location, desc, value)
		.then(function (response) {
			$location.path('/cm')
		})
	}

	$scope.setElementToUpdate = function(element) {
		$scope.currentAdmin.elementToUpdate = element
	}

	$scope.updateElement = function(element) {
		AdminContentSvc.updateElement(element)
		.then(function (response) {
			$location.path('/cm')
		})
	}

	$scope.addClass = function (title, subtitle, color, icon, desc) {
		console.log('addClass Called!')
		$scope.inputError = false
		$scope.errorMessage = ''

		if(!title || !desc) {
			$scope.inputError = true
			$scope.errorMessage = 'All text fields must contain content'
			return
		}

		AdminContentSvc.addClass(title, subtitle, color, icon, desc)
		.then(function (response) {
			$location.path('/cm-classes')
		})
	}
})