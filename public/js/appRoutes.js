angular.module('sampleApp')
    .config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: function() {}
            })
            .state('list', {
                url: '/list',
                templateUrl: 'views/list.html',
                controller: 'ListController',
                controllerAs: 'vm'
            })
            .state('list.detail', {
                url: '/:id',
                templateUrl: 'views/detail.html',
                controller: 'DetailController',
                controllerAs: 'vm'
            });
    }]);
