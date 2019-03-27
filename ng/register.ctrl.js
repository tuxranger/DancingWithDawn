angular.module('app')
.controller('RegisterCtrl', function($scope, UserSvc, $location) {
	$scope.register = function (email, password, firstName, lastName, streetAddress, city, state, zip, phone) {
		UserSvc.register(email, password, firstName, lastName, streetAddress, city, state, zip, phone)
		.then(function (response) {
			$scope.$emit('login', response.data)
			$location.path('/user-account')
		})
	}
})