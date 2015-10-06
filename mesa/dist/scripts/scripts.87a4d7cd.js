"use strict";angular.module("mesaApp",["ngResource","ngRoute","ui.grid"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/usuario.html",controller:"UsuarioCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("mesaApp").controller("UsuarioCtrl",["$scope","Servicios",function(a,b){a.nombre="fernande",a.buscar=function(){b.getUsuarios(a.nombre).then(function(b){a.usuarios=b.data},function(a){console.log(a)})},a.gridUsuarios={data:"usuarios",columnDefs:[{field:"id",displayName:"Id"},{field:"nombre",displayName:"Nombre"},{field:"primerApellido",displayName:"Primer apellido"},{field:"segundoApellido",displayName:"Segundo apellido"},{field:"activo",displayName:"Activo"}]}}]),angular.module("mesaApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("mesaApp").factory("Servicios",["$http",function(a){return{getUsuarios:function(b){var c="http://localhost:8080/MABackend/api/usuarios/buscarLikeNombre?callback=JSON_CALLBACK&nombre="+b;return a.jsonp(c)}}}]),angular.module("mesaApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/usuario.html",'<div class="form-group"> <input type="text" ng-model="nombre" placeholder="Nombre usuario"> </div> <button ng-click="buscar()" type="button" class="btn btn-primary">Buscar</button> <div class="table-responsive" ui-grid="gridUsuarios" ui-grid-grouping> </div>')}]);