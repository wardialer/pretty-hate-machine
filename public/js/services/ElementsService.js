(function() {
    'use strict';

    angular
        .module('sampleApp')
        .factory('ElementsService', factory);

    factory.$inject = ['$http'];

    /* @ngInject */
    function factory($http) {
        var service = {
            get: get,
            save: save,
            delete: remove
        };

        return service;

        function get(id) {
            return $http.get('/api/elements/'+id);
        }
        function save(elem) {
            return $http.post('/api/elements', elem);
        }
        function remove(id) {
            return $http.delete('/api/elements/' + id);
        }
    }
})();
