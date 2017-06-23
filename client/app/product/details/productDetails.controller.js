function productDetailsController($scope, product) {
        $scope.product = product;
    }

angular
    .module('app')
    .controller('productDetailsController', ['$scope', 'product', productDetailsController]);