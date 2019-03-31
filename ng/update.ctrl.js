angular.module('app')
.controller('UpdateCtrl', function($scope, UserSvc, $location) {
	$scope.update = function (id, email, firstName, lastName, streetAddress, city, state, zip, phone) {
		UserSvc.update(id, email, firstName, lastName, streetAddress, city, state, zip, phone)
		.then(function (response) {
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