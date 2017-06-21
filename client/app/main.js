import angular from 'angular';
import ngRoute from 'angular-route';

import './config/base.api.js';

import config from './config/config.js';

import productApi from './product/product.api.js';
import productService from './product/product.service.js';
import productController from './product/product.controller.js';

angular
  .module('app', [
    ngRoute
  ])
  .service()

  .service(productApi)
  .service(productService)
  .controller(productController)
  
  .run(config);