angular.module('app')
.controller('ChildCtrl', function($scope, UserSvc, $location) {

	$scope.addChild = function (adultId, firstName, lastName, dob, notes) {
		UserSvc.addChild(adultId, firstName, lastName, dob, notes)
		.then(function (response) {
			$location.path('/user-account')
		})
	}	
})