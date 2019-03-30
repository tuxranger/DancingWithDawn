angular.module('app')
.controller('UserCtrl', function($scope, UserSvc, $location) {

	UserSvc.getAllChildren().then(function(res) {
		$scope.children = res.data
	})

	$scope.setChildToUpdate = function(child) {
		$scope.currentUser.childToUpdate = child
	}

	$scope.updateChild = function(child) {
		UserSvc.updateChild(child)
		.then(function (response) {
			$location.path('/user-account')
		})
	}

})