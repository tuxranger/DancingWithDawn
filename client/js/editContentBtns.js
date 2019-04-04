var app = angular.module('directoryApp', []).controller('userAccountCtrl', function($scope){
    $scope.childInfo = true;
    $scope.childInfoEdit = false;
    $scope.addChildBtn = true;
    $scope.addChildForm = false;
    $scope.userInfo = true;
    $scope.userInfoEdit = false;
    $scope.editChildBtn = function() {
        $scope.childInfo = false;
        $scope.childInfoEdit = true;
    };
    $scope.saveEditChildBtn = function () {
        $scope.childInfo = true;
        $scope.childInfoEdit = false;
    };
    $scope.addChildFormBtn = function () {
        $scope.addChildBtn = false;
        $scope.addChildForm = true;
    };
    $scope.saveChildFormBtn = function () {
        $scope.addChildBtn = true;
        $scope.addChildForm = false;
    };
    $scope.editUserInfo = function () {
      $scope.userInfo = false;
      $scope.userInfoEdit = true;
    };
    $scope.saveUserInfo = function () {
        $scope.userInfo = true;
        $scope.userInfoEdit = false;
    }
});