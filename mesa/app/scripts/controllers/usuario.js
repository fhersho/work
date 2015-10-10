'use strict';

/**
 * @ngdoc function
 * @name mesaApp.controller:UsuarioCtrl
 * @description
 * # UsuarioCtrls
 * Controller of the mesaApp
 */
angular.module('mesaApp')
  .controller('UsuarioCtrl', function ($rootScope,$scope,Usuario) {
      
        $scope.buscar = function () {
            
        $scope.usuarios = Usuario.buscarLikeNombre({nombre:$scope.nombre},
        function(data){
            $scope.usuarios = data;
        },function(error){
            alert("Error: " + error.data);
            $rootScope.mensajeError = error.data;
        });    
            
        };
  });
