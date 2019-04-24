angular.module('app')
.controller('ContentCtrl', function($scope, ContentSvc) {

	ContentSvc.getAllElements().then(function(elems) {
		angular.forEach(elems.data, function(value, index) {
			$scope[value.name] = value.value
		})
	})

	ContentSvc.getAllBuckets().then(function(res) {
		$scope.buckets = res.data
	})

	ContentSvc.getAllClasses().then(function(res) {
		$scope.classes = res.data
	})

	ContentSvc.getAllFaqs().then(function(res) {
		$scope.faq = res.data
	})

})