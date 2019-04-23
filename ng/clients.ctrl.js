angular.module('app')
.controller('ClientsCtrl', function ($scope, AdminSvc) {
    AdminSvc.getAllUsers().then(function(res) {
        $scope.clients = res.data
    })

    // AdminSvc.getAllChildren().then(function(res) {
    //     $scope.children = res.data
    // })

})