angular.module('NerdCtrl', []).controller('NerdController', function($scope, Nerd) {

    $scope.tagline = 'Nothing beats a pocket protector!';

    var init = function() {
        Nerd.create({name: 'Pippo'}).success(function(nerd) {

            
            
        });
    };

    Nerd.get().success(function(nerds) { 
        $scope.nerds = nerds;
    });

    //init();

});