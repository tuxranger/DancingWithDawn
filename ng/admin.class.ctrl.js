angular.module('app')
    .controller('ClassCtrl', function($scope, ClassSVC, $location) {

        $scope.students = [];

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
        $scope.addToClass = function(class_, child) {
            console.log("class " + class_)
            // $scope.enrollment.push(child)
            // console.log("enrollment " + $scope.enrollment)
            // class_.children = $scope.enrollment
            console.log("students before put request " + class_.children)
            var dupeChild = class_.children.includes(child);
            if (!dupeChild){
                class_.children.push(child)
            } else {
                console.log("child already added")
            }
            ClassSVC.addToClass(class_)
            console.log("students after put request " + class_.children)
        }

        $scope.removeFromClass = function(class_, student) {
            var index = class_.children.indexOf(student)
            class_.children.splice(index, 1);

            var class_modified = class_;
            class_modified.children.splice(0);
            class_modified.children.push(student);
            class_modified.children = student;
            ClassSVC.removeFromClass(class_modified);
        };

        $scope.removeAll = function(class_) {
            console.log("I'm about to call svc remove all")
            ClassSVC.removeAll(class_);
        }
    })