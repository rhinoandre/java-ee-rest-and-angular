angular
    .module('app')
    .config(['$routeProvider', '$locationProvider', '$httpProvider', function config($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.otherwise('/dashboard');
        $locationProvider.hashPrefix('');
        $httpProvider.defaults.withCredentials = true;
    }])
    .constant('config', {
        'SERVER_PATH': 'http://localhost:8080/server/api/'
    });