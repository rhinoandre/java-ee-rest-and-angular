angular
    .module('app')
    .controller('productListController', ['$scope', 'productList', function productListController($scope, productList) {
        $scope.products = productList;
    }]);