angular.module('ListCtrl', [])
.controller('ListController', ['$scope', 'ElementsService', function($scope, ElementsService) {

    $scope.tagline = 'Simple list/detail implementation';

    var init = function() {
        getElements();
    };

    var getElements = function() {
        ElementsService.get()
        .success(function(elements) { 
            $scope.elements = elements;
        });
    };

    var saveElement = function(element) {
        ElementsService.save(element)
        .success(function(elements) {
            if ($scope.itemName) $scope.itemName='';
            getElements();
        });
    };

    $scope.create = function(name) {
        if (name) {
            var element = {name: name};
            saveElement(element);
        }
    };

    $scope.delete = function(id) {
        ElementsService.delete(id)
        .success(function() {
          getElements();
        });
    };

    init();
    
}]);