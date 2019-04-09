angular.module('app')
.controller('AdminLoginCtrl', function($scope, AdminSvc, $location) {

	$scope.login = function (username, password) {
		$scope.loginError = false
		$scope.errorMessage = ''

		AdminSvc.login(username, password)
		.then(function (res) {
			if(res.status == 401) {
				$scope.errorMessage = res.data
				$scope.loginError = true
				return false
			} else {
				$scope.$emit('login', res.data)
				$location.path('/admin-account')
			}
		})
	}

	$scope.register = function (email, username, password, checkpass, firstName, lastName, phone) {
		if (password != checkpass) {
			$scope.registerError = true
			$scope.errorMessage = 'Error: Passwords must match'
			return false
		}

		$scope.registerError = false

		AdminSvc.register(email, username, password, firstName, lastName, phone)
		.then(function (response) {
			$scope.$emit('login', response.data)
			$location.path('/admin-account')
		})
	}
})