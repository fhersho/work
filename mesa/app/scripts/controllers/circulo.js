'use strict';

/**
 * @ngdoc function
 * @name mesaApp.controller:CirculoCtrl
 * @description
 * # CirculoCtrl
 * Controller of the mesaApp
 */
angular.module('mesaApp')
  .controller('CirculoCtrl', function ($scope, Circulo) {
      
    $scope.circulos = Circulo.buscarCirculos(
        function(data){
            $scope.usuarios = data;
        },function(error){
            bootbox.alert("<strong>Error: </strong>" + error.data);
        });    
        
  });
