angular.module('app')
    .controller('ClassCtrl', function($scope, ClassSVC, $location) {

        var enrolledStudents
        $scope.enrollment = [];

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

        ClassSVC.getAllStudents().then(function(res) {
            enrolledStudents = res.data
            $scope.enrollment = res.data

            // ClassSVC.getStudentsNames(enrolledStudents).then(function(res) {
            //     $scope.studentsList = res.data
            // })
        }).then(
            $
            ClassSVC.getStudentsNames(enrolledStudents).then(function(res) {
                ("input").val(JSON.stringify(enrolledStudents));
                var savedArray = JSON.parse($("input").val());
                console.log("list of students" + savedArray)
                $scope.studentsList = res.data
            })
        )




        // $scope.setClassToModifyRoster = function(classRoster) {
        //     $scope.currentAdmin.classToModifyRoster = classRoster
        // }
        //
        $scope.addToClass = function(class_, child) {
            console.log("class " + class_)

            // console.log("enrollment " + $scope.enrollment)

            console.log("students before put request " + class_.children)
            var dupeChild = class_.children.includes(child);
            if (!dupeChild){
                $scope.enrollment.push(child)
                class_.children = $scope.enrollment
                // $scope.enrollment.splice(0, 1);
                // class_.children.push(child)
                ClassSVC.addToClass(class_)
            } else {
                console.log("child already added")
            }
            console.log("students after put request " + class_.children)

            ClassSVC.getAllStudents().then(function(res) {
                $scope.enrolledStudents = res.data
            })
        }

        $scope.removeFromClass = function(class_, student) {
            var index = class_.children.indexOf(student)
            class_.children.splice(index, 1);

            var class_modified = class_;
            class_modified.children.splice(0);
            class_modified.children.push(student);
            class_modified.children = student;
            ClassSVC.removeFromClass(class_modified);

            ClassSVC.getAllStudents().then(function(res) {
                $scope.enrolledStudents = res.data
            })
        };

        $scope.removeAll = function(class_) {
            console.log("I'm about to call svc remove all")
            ClassSVC.removeAll(class_);
        }
    })