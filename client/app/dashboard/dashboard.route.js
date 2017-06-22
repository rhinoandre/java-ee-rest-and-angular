angular
    .module('app')
    .config(['$routeProvider', function productRouteConfig($routeProvider) {
        $routeProvider.when('/dashboard', {
            'templateUrl': 'app/dashboard/dashboard.html',
            'controller': 'dashboardController',
            'controllerAs': 'dashboard'
        });
    }]);