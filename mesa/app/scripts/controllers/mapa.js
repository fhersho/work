'use strict';

/**
 * @ngdoc function
 * @name mesaApp.controller:MapaCtrl
 * @description
 * # MapaCtrl
 * Controller of the mesaApp
 */
angular.module('mesaApp')
  .controller('MapaCtrl', function ($scope) {
            angular.extend($scope, {
                london: {
                    lat: 51.505,
                    lng: -0.09,
                    zoom: 8
                },
                defaults: {
                    zoomAnimation: true,
                    markerZoomAnimation: true,
                    fadeAnimation: true
                },
                markers: {
                    london: {
                        lat: 51.505,
                        lng: -0.09,
                    }
                }
            });
  });
