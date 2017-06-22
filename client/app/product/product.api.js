angular
    .module('app')
    .factory('productApi', ['$http', 'config', function productApi($http, config) {

        function listProducts() {
            return $http.get(config.SERVER_PATH + 'product');
        }

        function getProduct(productId) {
            return $http.get(config.SERVER_PATH + 'product/' + productId);
        }

        return {
            listProducts: listProducts,
            getProduct: getProduct
        };
    }]);