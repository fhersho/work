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
        var url = 'http://localhost:8080/MABackend/api/usuarios/buscarLikeNombre?nombre=:nombre';
        return $resource(url,{},{
            buscarLikeNombre:{method:'GET', isArray:true}
        })

    })
    
    .factory('Circulo', function ($resource) {
        var url = 'http://localhost:8080/MABackend/api/circulos/todos';
        return $resource(url,{},{
            buscarCirculos:{method:'GET', isArray:true}
        })

    });
    
    
    
