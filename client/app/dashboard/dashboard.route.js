export default function productRouteConfig($stateProvider) {
    $stateProvider
    .state('home', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'dashboardController',
        controllerAs: 'dashboardCtrl'
    });
}