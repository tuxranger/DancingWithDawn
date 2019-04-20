angular.module('app')
.controller('ResetCtrl', function($scope, UserSvc, $location) {
    $scope.resetPassword = function (email) {
        $scope.invalidEmail = false
        $scope.passwordReset = false
        $scope.InvalidEmailMessage = ''
        var modifiedEmail = email.toLowerCase()
        var newPassword = Math.random().toString(36).slice(-10);

        UserSvc.resetPassword(modifiedEmail, newPassword)
            .then(function (res) {
                if(res.status == 401) {
                    console.log("applying invalid email")
                    $scope.invalidEmail = res.data;
                    $scope.invalidEmail = true;
                    return false;

                } else {
                    $scope.passwordReset = true;
                    UserSvc.email(email, newPassword)
                }
            })
    }
})