angular.module('app')
.controller('ApplicationCtrl', function ($scope, UserSvc, $location, $http) {
	$scope.init = function () {
		if(window.sessionStorage.token) {
			UserSvc.checkToken()
			.then(function(res) {
				$scope.currentUser = res.data
			})
		}
	}

	$scope.$on('login', function(_, user) {
		$scope.currentUser = user
	})

	$scope.logout = function() {
		UserSvc.logout()
		delete $scope.currentUser
		$location.path('/login')
	}

})