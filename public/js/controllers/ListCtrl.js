angular.module('ListCtrl', [])
.controller('ListController', ['$scope', 'ElementsService', function($scope, ElementsService) {

    $scope.tagline = 'Simple list/detail implementation';

    var init = function() {
        ElementsService.create({name: 'Pippo'});
    };

    ElementsService.get().success(function(elements) { 
        $scope.elements = elements;
    });

    $scope.delete = function(id) {
        ElementsService.delete(id).success(function() {
            ElementsService.get().success(function(elements) {
                $scope.elements = elements;
            });
        });
    };

    //init();

}]);