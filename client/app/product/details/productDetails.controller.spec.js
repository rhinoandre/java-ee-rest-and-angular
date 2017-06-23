describe('productDetails.controller', () => {
    var controller
    var scope
    var product

    beforeEach(function () {
        angular.mock.module('app');
    });

    beforeEach(inject(function($controller, $rootScope, _product_){
        scope = $rootScope.$new();
        product = 'test'

        controller = $controller('productDetailsController', {
            'scope': scope,
            'product': product
        })

    }))

    describe('tets', () => {
        it('I am a simple test mate', () => {
            expect(scope.product).toBe('test')
        })
    })
    
})