export default function productRouteConfig($stateProvider) {
    $stateProvider
        .state('productList', {
            url: '/product',
            templateUrl: 'app/product/list/product-list.html',
            controller: 'productListController',
            resolve: {
                productList: ['productService', function resolveProductList(productService) {
                    return productService.listProducts();
                }]
            }
        })
        .state('product',{
            url: '/product/:productId', 
            templateUrl: 'app/product/details/product-details.html',
            controller: 'productDetailsController',
            resolve: {
                product: ['productService', '$route', function resolveProduct(productService, $route) {
                    return productService.getProduct($route.current.params.productId);
                }]
            }
        });
};