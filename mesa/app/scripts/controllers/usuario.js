'use strict';

/**
 * @ngdoc function
 * @name mesaApp.controller:UsuarioCtrl
 * @description
 * # UsuarioCtrls
 * Controller of the mesaApp
 */
angular.module('mesaApp')
  .controller('UsuarioCtrl', function ($scope,Servicios) {
      
        $scope.nombre = 'fernande';
      
        $scope.buscar = function () {
            
                
            Servicios.getUsuarios($scope.nombre).then(
                        function (response){
                           $scope.usuarios = response.data; 
                        },
                        function(error){
                            console.log(error);
                        });
            
        };
        
        $scope.gridUsuarios = {
            data: 'usuarios',
            columnDefs: [
                {field: 'id', displayName: 'Id'},
                {field: 'nombre', displayName: 'Nombre'},
                {field: 'primerApellido', displayName: 'Primer apellido'},
                {field: 'segundoApellido', displayName: 'Segundo apellido'},
                {field: 'activo', displayName: 'Activo'},
            ]
        };
        
  });
