'use strict';

/**
 * @ngdoc service
 * @name mesaApp.Servicios
 * @description
 * # Servicios
 * Factory in the mesaApp.
 */
angular.module('mesaApp')

    .factory('Usuario', function ($resource) {
        //var url = 'http://localhost:8080/MABackend/api/usuarios/buscarLikeNombre?nombre=:nombre';
        var url = 'http://192.168.0.14:9000/datos.json';
        return $resource(url,{},{
            buscarLikeNombre:{method:'GET', isArray:true}
        });

    })
    
    .factory('Circulo', function ($resource) {
        //var url = 'http://localhost:8080/MABackend/api/circulos/todos';
        var url = 'http://192.168.0.14:9000/circulos.json';
        return $resource(url,{},{
            buscarCirculos:{method:'GET', isArray:true}
        });

    });
    
    
    
