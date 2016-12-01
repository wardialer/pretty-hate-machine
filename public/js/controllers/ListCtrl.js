(function() {
    'use strict';

    angular
        .module('sampleApp')
        .controller('ListController', Controller);

    Controller.$inject = ['$location', 'ElementsService'];

    /* @ngInject */
    function Controller($location, ElementsService) {
        var vm = this;

        activate();

        function activate() {
            getElements();
            vm.create = create;
            vm.delete = remove;
            vm.go = go;
        }

        function go(url) {
            $location.path(url);
        }

        function getElements() {
            ElementsService.get()
            .success(function(elements) {
                vm.elements = elements;
            })
            .error(function(error, status) {
                vm.errorHandler(error, 'danger');
            });
        }

         function create(name) {
            if (name) {
                var element = {name: name};

                ElementsService.save(element)
                .success(function(elements) {
                    if (vm.itemName) vm.itemName='';
                    getElements();
                })
                .error(function(error, status) {
                    vm.errorHandler(error, 'danger');
                });
            } else {
                vm.errorHandler('Element name is required!','info');
            }
        }

        function remove(id) {
            ElementsService.delete(id)
            .success(function() {
              getElements();
            })
            .error(function(error, status) {
                vm.errorHandler(error, 'danger');
            });
        }
    }
})();
