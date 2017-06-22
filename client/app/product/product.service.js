angular
    .module('app')
    .factory('productService', ['product', function productService(product) {

        function listProducts() {
            return product.query().$promise.then(
                function onSuccessProductQuery(response) {
                    return response;
                });
        }

        function getProduct(productId) {
            return product.get({'productId':productId}).$promise.then(
                function onSuccessProductGet(response) {
                    return response;
                });
        }

        return {
            listProducts: listProducts,
            getProduct: getProduct
        };
    }]);