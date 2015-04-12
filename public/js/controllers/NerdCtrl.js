angular.module('NerdCtrl', []).controller('NerdController', function($scope, Nerd) {

    $scope.tagline = 'Nothing beats a pocket protector!';

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
    }

    //init();

});