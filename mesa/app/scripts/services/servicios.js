'use strict';

/**
 * @ngdoc service
 * @name mesaApp.Servicios
 * @description
 * # Servicios
 * Factory in the mesaApp.
 */
angular.module('mesaApp')

    .factory('Servicios',['$http', function ($http) {
        
        return {
            getUsuarios : function (){
                var url = 'http://localhost:8080/prueba/datos.json?&callback=JSON_CALLBACK';
                $http.defaults.headers.jsonp = { 'Accept' : 'application/json'};
                return $http.jsonp(url);
            }
        };
    }
  
]);
