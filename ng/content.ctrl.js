angular.module('app')
.controller('ContentCtrl', function($scope, ContentSvc) {

	ContentSvc.getAllElements().then(function(elems) {
		angular.forEach(elems.data, function(value, index) {
			$scope[value.name] = value.value
		})
	})

	ContentSvc.getAllFaqs().then(function(res) {
		$scope.faq = res.data
	})

})