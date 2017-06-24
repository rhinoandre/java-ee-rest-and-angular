export default class ProductApi {
    constructor($resource, config) {
        return $resource(config.SERVER_PATH + 'product/:productId', {'productId' : '@productId'});
    }
}