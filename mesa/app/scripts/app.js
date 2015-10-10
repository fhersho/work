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
        templateUrl: 'views/usuario.html',
        controller: 'UsuarioCtrl',
      })
      .when('/about', {
        templateUrl: 'views/circulo.html',
        controller: 'CirculoCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
