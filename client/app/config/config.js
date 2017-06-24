export default function config($urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/dashboard');
    $locationProvider.hashPrefix('');
    $httpProvider.defaults.withCredentials = true;
}