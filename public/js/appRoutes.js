angular.module('appRoutes', []).config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .state('nerds', {
            url: '/nerds',
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })

    $locationProvider.html5Mode(true);

}]);