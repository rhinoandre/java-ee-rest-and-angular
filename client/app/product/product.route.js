angular
    .module('app')
    .config(['$routeProvider', function productRouteConfig($routeProvider) {
        $routeProvider.when('/product', {
            'templateUrl': 'app/product/list/product-list.html',
            'controller': 'productListController',
            'resolve': {
                productList: ['productService', function resolveProductList (productService) {
                    return productService.listProducts();
                }]
            }
        });
        $routeProvider.when('/product/:productId', {
            'templateUrl': 'app/product/details/product-details.html',
            'controller': 'productDetailsController',
            'resolve': {
                product: ['productService', '$routeParams', function resolveProduct (productService, $routeParams) {
                    return productService.getProduct($routeParams.productId);
                }]
            }
        });
    }]);