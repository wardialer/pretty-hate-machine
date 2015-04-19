angular.module('DetailCtrl', [])
.controller('DetailController', ['$scope', '$stateParams', function($scope, $stateParams) {
    
    var resolveElement = function(id) {
        for (var i = 0; i < $scope.elements.length; i++) {
            var element = $scope.elements[i];
            if (element._id == id)
                return element;
        }
        return {};
    };

    $scope.element = resolveElement($stateParams.id);

}]);