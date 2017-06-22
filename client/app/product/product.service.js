angular
    .module('app')
    .factory('productService', ['productApi', function productService(productApi) {

        function listProducts() {
            return productApi.listProducts().then(function onListProducts(response) {
                return response.data;
            });
        }

        function getProduct(productId) {
            return productApi.getProduct(productId).then(function onGetProduct(response) {
                return response.data;
            });
        }

        return {
            listProducts: listProducts,
            getProduct: getProduct
        };
    }]);