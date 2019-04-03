angular.module('app')
.controller('RegisterCtrl', function($scope, UserSvc, $location) {

	$scope.register = function (email, password, checkpass, firstName, lastName, streetAddress, city, state, zip, phone) {
		if (password != checkpass) {
			$scope.registerError = true
			$scope.errorMessage = 'Error: Passwords must match'
			return false
		}

		$scope.registerError = false

		UserSvc.register(email, password, firstName, lastName, streetAddress, city, state, zip, phone)
		.then(function (response) {
			$scope.$emit('login', response.data)
			$location.path('/user-account')
		})
	}
})