angular.module('app')
.controller('LoginCtrl', function($scope, UserSvc, $location) {

	$scope.login = function (email, password) {
		$scope.loginError = false
		$scope.errorMessage = ''

		var modifiedEmail = email.toLowerCase()

		UserSvc.login(modifiedEmail, password)
		.then(function (res) {
			if(res.status == 401) {
				$scope.errorMessage = res.data
				$scope.loginError = true
				return false
			} else {
				$scope.$emit('login', res.data)
				$location.path('/user-account')
			}
		})
	}
})