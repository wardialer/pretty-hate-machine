angular.module('ListCtrl', [])
.controller('ListController', ['$scope', 'ElementsService', function($scope, ElementsService) {

    var init = function() {
        getElements();
    };

    var getElements = function() {
        ElementsService.get()
        .success(function(elements) { 
            $scope.elements = elements;
        })
        .error(function(error, status) {
            $scope.errorHandler(error, 'danger');
        });
    };

    $scope.create = function(name) {
        if (name) {
            var element = {name: name};

            ElementsService.save(element)
            .success(function(elements) {
                if ($scope.itemName) $scope.itemName='';
                getElements();
            })
            .error(function(error, status) {
                $scope.errorHandler(error, 'danger');
            });
        } else {
            $scope.errorHandler('Element name is required!','info');
        }
    };

    $scope.delete = function(id) {
        ElementsService.delete(id)
        .success(function() {
          getElements();
        })
        .error(function(error, status) {
            $scope.errorHandler(error, 'danger');
        });
    };

    init();
    
}]);