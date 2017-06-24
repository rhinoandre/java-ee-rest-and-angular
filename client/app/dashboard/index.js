import angular from 'angular'
import DashboardService from './dashboard.service'
import DashboardController from './dashboard.controller'
import DashboardApi from './dashboard.api' // What is this file for?
import dashboardRoute from './dashboard.route'

angular
    .module('app')
    .config(dashboardRoute)
    .controller('dashboardController', DashboardController)
    .service('dashboardService', DashboardService)