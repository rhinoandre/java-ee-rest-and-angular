config.$inject = ['$httpProvider'];
export default function config($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}