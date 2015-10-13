'use strict';

/**
 * @ngdoc function
 * @name mesaApp.controller:UsuarioCtrl
 * @description
 * # UsuarioCtrls
 * Controller of the mesaApp
 */
angular.module('mesaApp')
  .controller('UsuarioCtrl', function ($scope,Usuario) {
      
        $scope.buscar = function () {
            $scope.$emit('LOAD');
            $scope.usuarios = Usuario.buscarLikeNombre({nombre:$scope.nombre},
                function(data){
                    $scope.usuarios = data;
                },function(error){
                    bootbox.alert("<strong>Error: </strong>" + error.data);
                });    
            
        };
  });
