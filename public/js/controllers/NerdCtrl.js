angular.module('NerdCtrl', [])
.controller('NerdController', ['$scope', 'Nerd', function($scope, Nerd) {

    $scope.tagline = 'Simple list/detail implementation';

    var init = function() {
        Nerd.create({name: 'Pippo'});
    };

    Nerd.get().success(function(nerds) { 
        $scope.nerds = nerds;
    });

    $scope.delete = function(id) {
        Nerd.delete(id).success(function() {
            Nerd.get().success(function(nerds) {
                $scope.nerds = nerds;
            });
        });
    };

    //init();

}]);