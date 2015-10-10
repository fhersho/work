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
    'ngRoute',
    'ui.grid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/usuario.html',
        controller: 'UsuarioCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
