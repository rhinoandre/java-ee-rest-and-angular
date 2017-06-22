angular
    .module('app')
    .factory('product', ['$resource', 'config', function productApi($resource, config) {
        return $resource(config.SERVER_PATH + 'product/:productId', {'productId' : '@productId'});
    }]);