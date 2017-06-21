productApi.$inject = ['$http', 'baseApi'];
export default function productApi($http, baseApi) {

    this.listProducts = function() {
        return $http.get(baseApi.BASE_PATH + 'product');
    };

    this.getProduct = function(productId) {
        return $http.get(baseApi.BASE_PATH + 'product/' + productId);
    };
}