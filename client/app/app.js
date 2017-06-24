import angular from 'angular';
import uiRoute from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import ngResource from 'angular-resource';

import config from './config/config'
import { CONFIG } from './config/constants' //We need to improve this part

angular
    .module('app', [
        uiRoute,
        ngMaterial,
        ngResource
    ])
    .config(config)
    .constant('CONFIG', CONFIG);