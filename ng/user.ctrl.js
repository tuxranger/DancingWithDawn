angular.module('app')
.controller('UserCtrl', function($scope, UserSvc) {

	UserSvc.getAllChildren().then(function(res) {
		$scope.testChildren = res.data
	})

})