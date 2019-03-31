angular.module('app')
.controller('ApplicationCtrl', function ($scope, UserSvc, $location) {
	$scope.$on('login', function(_, user) {
		$scope.currentUser = user
	})

	$scope.logout = function() {
		UserSvc.logout()
		delete $scope.currentUser
		$location.path('/login')
	}

})