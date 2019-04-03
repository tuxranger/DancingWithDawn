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

	$scope.register = function (username, password) {
		AdminSvc.register(username, password)
		.then(function (response) {
			$scope.$emit('login', response.data)
			$location.path('/admin-account')
		})
	}
})