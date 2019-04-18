angular.module('app')
.controller('UpdateCtrl', function($scope, UserSvc, $location) {
	$scope.update = function (id, email, firstName, lastName, streetAddress, city, state, zip, phone) {
		
		var modifiedEmail = email.toLowerCase()

		UserSvc.update(id, modifiedEmail, firstName, lastName, streetAddress, city, state, zip, phone)
		.then(function (response) {
			$scope.currentUser.email = modifiedEmail
			$location.path('/user-account')
		})
	}

	$scope.updatePassword = function (id, newPassword, checkPassword) {
		if (newPassword != checkPassword) {
			$scope.passwordsMatch = true
			return false
		}

		$scope.passwordsMatch = false
	
		UserSvc.updatePassword(id, newPassword)
		.then(function (res) {
			$location.path('/user-account')
		})
	}

})