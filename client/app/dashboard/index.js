import angular from 'angular'
import dashboardService from './dashboard.service'
import dashboardController from './dashboard.controller'
import dashboardApi from './dashboard.api' // What is this file for?
import dashboardRoute from './dashboard.route'

angular
    .module('app')
    .config(dashboardRoute)
    .controller(dashboardController)
    .service(dashboardService)