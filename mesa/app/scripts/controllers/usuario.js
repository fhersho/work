'use strict';

/**
 * @ngdoc function
 * @name mesaApp.controller:UsuarioCtrl
 * @description
 * # UsuarioCtrls
 * Controller of the mesaApp
 */
angular.module('mesaApp')
  .controller('UsuarioCtrl', function ($scope, $http, $templateCache) {
      
        $scope.nombre = 'fernande';
      
        $scope.buscar = function () {
            
            var url = 'http://192.168.1.102:8080/MABackend/api/usuarios/buscarLikeNombre?nombre='+$scope.nombre+'&callback=JSON_CALLBACK';
            var url = 'http://localhost:9000/datos.json?&callback=JSON_CALLBACK';
            console.log(url);
            
            //$http.get('http://localhost:9000/datos.json')
            
            $http({method: 'JSONP', url: url, cache: $templateCache})
                .then(function (response) {
                    $scope.usuarios = response.data;
                }, function (response) {
                    console.log(response.status);
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
