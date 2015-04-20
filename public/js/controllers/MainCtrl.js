angular.module('MainCtrl', [])
.controller('MainController', ['$scope', '$location', '$timeout', function($scope, $location, $timeout) {

    var duration = 3000;

    $scope.go = function(url) {
        $location.path(url);
    };

    $scope.errorHandler = function(err, type) {
        $scope.alert = {type: type, message: err};
        $timeout(function() {
            $scope.clearAlerts();
        }, duration);
    };

    $scope.clearAlerts = function() {
        $scope.alert = null;
    };

}]);