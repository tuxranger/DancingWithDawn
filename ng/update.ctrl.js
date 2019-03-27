angular.module('app')
.controller('UpdateCtrl', function($scope, UserSvc, $location) {
	$scope.update = function (id, email, firstName, lastName, streetAddress, city, state, zip, phone) {
		UserSvc.update(id, email, firstName, lastName, streetAddress, city, state, zip, phone)
		.then(function (response) {
			$location.path('/user-account')
		})
	}
})