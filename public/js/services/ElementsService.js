angular.module('ElementsServiceModule', []).factory('ElementsService', ['$http', function($http) {

    return {
        get : function() {
            return $http.get('/api/elements');
        },
        create : function(elem) {
            return $http.post('/api/elements', elem);
        },
        delete : function(id) {
            return $http.delete('/api/elements/' + id);
        }
    };       
    
}]);