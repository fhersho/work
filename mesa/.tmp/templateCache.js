angular.module('mesaApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/usuario.html',
    "<div class=\"form-group\"> <input type=\"text\" ng-model=\"nombre\" placeholder=\"Nombre usuario\"> </div> <button ng-click=\"buscar()\" type=\"button\" class=\"btn btn-primary\">Buscar</button> <div class=\"table-responsive\" ui-grid=\"gridUsuarios\" ui-grid-grouping> </div>"
  );

}]);
