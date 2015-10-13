'use strict';

/**
 * @ngdoc function
 * @name mesaApp.controller:Mapa2Ctrl
 * @description
 * # MapaCtrl
 * Controller of the mesaApp
 */
angular.module('mesaApp')
  .controller('Mapa2Ctrl', function ($scope) {
            angular.extend($scope, {
                center: {
                    autoDiscover: true,
                    zoom : 17   
                },
                markers:{
                    yo:{
                        lat:4.6565232,
                        lng:-74.1166681,
                        focus: true,
                        message: "Acá estoy"
                    }
                }
               
               
            });
            
  });
