angular
    .module('app')
    .controller('productDetailsController', ['$scope', 'product', function productDetailsController($scope, product) {
        $scope.product = product;
    }]);