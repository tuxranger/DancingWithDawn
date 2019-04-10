angular.module('app')
.controller('UpdateAdminCtrl', function($scope, AdminSvc, $location) {
    $scope.update = function (id, username, firstName, lastName, email, phone) {
        AdminSvc.update(id, username, firstName, lastName, email, phone)
            .then(function (response){
                $location.path('/admin-account')
            })
    }

    $scope.updatePassword = function (id, newPassword, checkPassword) {
        if (newPassword != checkPassword) {
            $scope.passwordsMatch = true
            return false
        }

        $scope.passwordsMatch = false

        AdminSvc.updatePassword(id, newPassword)
            .then(function (res) {
                $location.path('/admin-account')
            })
    }

    $scope.updateBio = function (id, bio) {
        AdminSvc.updateBio(id, bio)
            .then(function (res) {
                $location.path('/admin-account')
            })

    }
})