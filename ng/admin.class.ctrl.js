angular.module('app')
    .controller('ClassCtrl', function($scope, ClassSVC, $location) {

        $scope.addClass = function (title, description, time, days, album) {
            ClassSVC.addClass(title, description, time, days, album)
                .then(function (response) {
                    $location.path('/admin-classes')
                })
        }

        ClassSVC.getAllClasses().then(function(res) {
            $scope.classes = res.data
        })

        $scope.setClassToUpdate = function(class_) {
            $scope.currentAdmin.classToUpdate = class_
        }

        $scope.updateClass = function(class_) {
            ClassSVC.updateClass(class_)
                .then(function (response) {
                    $location.path('/admin-classes')
                })
        }

        $scope.deleteClass = function(class_) {
            ClassSVC.deleteClass(class_)
                .then(function (response) {
                    $location.path('/admin-classes')
                })
        }

    })