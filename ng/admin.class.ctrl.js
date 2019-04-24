angular.module('app')
    .controller('ClassCtrl', function($scope, ClassSVC, $location) {

        $scope.enrollment = []

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

        ClassSVC.getAllChildren().then(function(res) {
            $scope.children = res.data
        })

        // ClassSVC.getAllStudents().then(function(res) {
        //     $scope.students = res.data
        // })

        // $scope.setClassToModifyRoster = function(classRoster) {
        //     $scope.currentAdmin.classToModifyRoster = classRoster
        // }
        //
        $scope.addToClass = function(class_) {
            console.log(class_)
            $scope.enrollment.push($scope.input)
            class_.children = $scope.enrollment
            ClassSVC.addToClass(class_)
        }

        $scope.removeFromClass = function(index) {
            $scope.items.splice(index, 1)
        };
    })