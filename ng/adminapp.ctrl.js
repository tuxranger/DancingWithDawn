angular.module('app')
.controller('AdminCtrl', function ($scope, AdminSvc, $location) {
	$scope.init = function () {
		if(window.sessionStorage.token) {
			AdminSvc.checkToken()
			.then(function(res) {
				$scope.currentAdmin = res.data
			})
		}
	}

	$scope.$on('login', function(_, admin) {
		$scope.currentAdmin = admin
	})

	$scope.logout = function() {
		AdminSvc.logout()
		delete $scope.currentAdmin
		$location.path('/admin')
	}

})