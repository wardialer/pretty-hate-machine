angular.module('appRoutes', [])
.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .state('list', {
            url: '/list',
            templateUrl: 'views/list.html',
            controller: 'ListController'
        })
        .state('list.detail', {
            url: '/:id',
            templateUrl: 'views/detail.html',
            controller: 'DetailController'
        });
}]);