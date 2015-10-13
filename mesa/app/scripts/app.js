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
    'angular-loading-bar',
    'leaflet-directive'
  ])
.config(function ($routeProvider) {
  $routeProvider
    .when('/usuarios', {
      templateUrl: 'views/usuario.html',
      controller: 'UsuarioCtrl'
    })
    .when('/circulos', {
      templateUrl: 'views/circulo.html',
      controller: 'CirculoCtrl'
    })
    .when('/mapa', {
      templateUrl: 'views/mapa.html',
      controller: 'MapaCtrl'
    })
    .when('/mapa2', {
        templateUrl: 'views/mapa2.html',
        controller: 'Mapa2Ctrl'
    })
    .otherwise({
      redirectTo: '/usuarios'
    });
})
.controller('appController',function($scope, $location){
    
    $scope.isActiveMenu = function (option){
        return option === $location.path();
    };
    
});
