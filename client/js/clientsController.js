angular.module('directoryApp', []).controller('clientsCtrl', function($scope){

    $scope.list = function(total){
        var list2 =[];
        for(var i=0;i<total;i++){
            list2.push(i);
        }
        return list2;
    }

});