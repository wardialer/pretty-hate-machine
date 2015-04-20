angular.module('DetailCtrl', [])
.controller('DetailController', ['$scope', '$stateParams', 'ElementsService', function($scope, $stateParams, ElementsService) {
    
    var resolveElement = function(id) {
        for (var i = 0; i < $scope.elements.length; i++) {
            var element = $scope.elements[i];
            if (element._id == id)
                return element;
        }
        return {};
    };

    $scope.update = function(element) {
        ElementsService.save(element)
        .success(function(element) {
            $scope.element = element;
        })
        .error(function(error, status) {
            $scope.errorHandler(error, 'danger');
        });
    };

    $scope.element = resolveElement($stateParams.id);

}]);