angular.module('app')
.controller('AdminCtrl', function ($scope, AdminSvc, $location) {
	
	$scope.$on('login', function(_, admin) {
		$scope.currentAdmin = admin
	})

	$scope.logout = function() {
		AdminSvc.logout()
		delete $scope.currentAdmin
		$location.path('/admin')
	}

})