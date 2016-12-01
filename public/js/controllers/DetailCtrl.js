(function() {
    'use strict';

    angular
        .module('sampleApp')
        .controller('DetailController', Controller);

    Controller.$inject = ['$stateParams', '$location', 'ElementsService'];

    /* @ngInject */
    function Controller($stateParams, $location, ElementsService) {
        var vm = this;

        activate();

        function activate() {
            resolveElement($stateParams.id);
            vm.update = update;
            vm.go = go;
        }

        function go(url) {
            $location.path(url);
        }

        function resolveElement(id) {
            ElementsService.get(id)
            .success(function(elements) {
                vm.element = elements.pop();
            })
            .error(function(error) {
                vm.errorHandler(error, 'danger');
            });
        }

        function update(element) {
            ElementsService.save(element)
            .success(function(element) {
                vm.element = element;
            })
            .error(function(error, status) {
                vm.errorHandler(error, 'danger');
            });
        }

    }
})();
