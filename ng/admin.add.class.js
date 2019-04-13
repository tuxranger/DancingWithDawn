angular.module('app')
    .controller('AddClassCtrl', function($scope, ClassSVC, $location) {

        $scope.addClass = function (title, description, time, days, album) {
            ClassSVC.addClass(title, description, time, days, album)
                .then(function (response) {
                    $location.path('/admin-classes')
                })
        }
    })