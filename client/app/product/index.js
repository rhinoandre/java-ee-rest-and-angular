import angular from 'angular'

import './details'
import './list'

import Product from './product'
import ProductRoute from './product.route'
import ProductService from './product.service'

angular
    .module('app')
    .config(ProductRoute)
    .service('productService', ProductService)