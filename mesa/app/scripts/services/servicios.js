'use strict';

/**
 * @ngdoc service
 * @name mesaApp.Servicios
 * @description
 * # Servicios
 * Factory in the mesaApp.
 */
angular.module('mesaApp')

    .factory('Servicios', function ($http) {
        
        return {
            getUsuarios : function (nombre){
                //var url = 'http://192.168.1.102:8080/MABackend/api/usuarios/buscarLikeNombre?nombre='+nombre+'&callback=JSON_CALLBACK';
                //var url = 'http://localhost:8080/MABackend/api/usuarios/buscarLikeNombre?nombre='+nombre+'&callback=JSON_CALLBACK';
                var url = 'http://localhost:8080/MABackend/api/usuarios/buscarLikeNombre?callback=JSON_CALLBACK&nombre='+nombre;
                //var url = 'http://localhost:9000/datos.json';
                return $http.jsonp(url);
                
                
            }
        };
    }

);
