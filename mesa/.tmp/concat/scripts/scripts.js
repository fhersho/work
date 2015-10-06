'use strict';

/**
 * @ngdoc overview
 * @name mesaApp
 * @description
 * # mesaApp
 *
 * Main module of the application.
 */
angular
  .module('mesaApp', [
    'ngResource',
    'ngRoute',
    'ui.grid'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/usuario.html',
        controller: 'UsuarioCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name mesaApp.controller:UsuarioCtrl
 * @description
 * # UsuarioCtrls
 * Controller of the mesaApp
 */
angular.module('mesaApp')
  .controller('UsuarioCtrl', ["$scope", "Servicios", function ($scope,Servicios) {
      
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
        
  }]);

'use strict';

/**
 * @ngdoc function
 * @name mesaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mesaApp
 */
angular.module('mesaApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc service
 * @name mesaApp.Servicios
 * @description
 * # Servicios
 * Factory in the mesaApp.
 */
angular.module('mesaApp')

    .factory('Servicios', ["$http", function ($http) {
        
        return {
            getUsuarios : function (nombre){
                //var url = 'http://192.168.1.102:8080/MABackend/api/usuarios/buscarLikeNombre?nombre='+nombre+'&callback=JSON_CALLBACK';
                //var url = 'http://localhost:8080/MABackend/api/usuarios/buscarLikeNombre?nombre='+nombre+'&callback=JSON_CALLBACK';
                var url = 'http://localhost:8080/MABackend/api/usuarios/buscarLikeNombre?callback=JSON_CALLBACK&nombre='+nombre;
                //var url = 'http://localhost:9000/datos.json';
                return $http.jsonp(url);
                
                
            }
        };
    }]

);

angular.module('mesaApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/usuario.html',
    "<div class=\"form-group\"> <input type=\"text\" ng-model=\"nombre\" placeholder=\"Nombre usuario\"> </div> <button ng-click=\"buscar()\" type=\"button\" class=\"btn btn-primary\">Buscar</button> <div class=\"table-responsive\" ui-grid=\"gridUsuarios\" ui-grid-grouping> </div>"
  );

}]);
