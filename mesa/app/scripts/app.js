'use strict';

/**
 * @ngdoc overview
 * @name mesaApp
 * @description
 * # mesaApp
 *
 * Main module of the application.
 */
angular
  .module('mesaApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
