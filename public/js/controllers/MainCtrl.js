angular.module('MainCtrl', [])
.controller('MainController', ['$scope', '$location', function($scope, $location) {

    $scope.tagline = 'This is where it starts!';   

    $scope.go = function(url) {
        $location.path(url);
    }

}]);